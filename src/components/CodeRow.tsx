"use client";

import { useState } from "react";
import type { Code } from "@/lib/data";
import { statusColor } from "@/lib/data";

export function CodeRow({ code }: { code: Code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <li className="flex items-center justify-between gap-3 p-4 rounded-lg bg-white/5">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <code className="font-mono font-bold text-haze-gold">{code.code}</code>
          <span className={`badge border ${statusColor[code.status]}`}>{code.status}</span>
        </div>
        <p className="text-sm text-slate-300 mt-1">{code.rewards}</p>
        <p className="text-xs text-slate-500 mt-1">
          Added {code.added} {code.expires && `· Expires ${code.expires}`} · {code.source}
        </p>
      </div>
      <button
        onClick={handleCopy}
        className="btn bg-white/5 hover:bg-white/10 text-sm shrink-0"
        aria-label={`Copy code ${code.code}`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </li>
  );
}
