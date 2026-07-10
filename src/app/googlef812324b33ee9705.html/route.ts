const verification = 'google-site-verification: googlef812324b33ee9705.html';

export function GET() {
  return new Response(verification, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
