# syntax=docker/dockerfile:1.7
# Haze Seas Games — Next.js 16 (App Router, standalone)

# ---------- deps ----------
FROM node:20-slim AS deps
# pnpm 9.x (project lockfileVersion: 9.0)
RUN npm install -g pnpm@9.15.4
ENV CI=true
WORKDIR /app

# Copy lockfiles + workspace config (required for pnpm 9/10/11 to resolve
# onlyBuiltDependencies — pnpm 11 deprecates package.json#pnpm entirely
# and reads pnpm-workspace.yaml instead).
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

# ---------- builder ----------
FROM node:20-slim AS builder
RUN npm install -g pnpm@9.15.4
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# ---------- runner ----------
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user
RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# Copy standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Public folder (self-made mini-games live here)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
