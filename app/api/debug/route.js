export async function GET() {
  return new Response(JSON.stringify({
    environmentVars: {
      databaseUrlSet: !!process.env.DATABASE_URL,
      nextAuthSecretSet: !!process.env.NEXTAUTH_SECRET,
      // Only show first few chars for security
      databaseUrlPrefix: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 5) + "..." : null,
      nextAuthSecretPrefix: process.env.NEXTAUTH_SECRET ? process.env.NEXTAUTH_SECRET.substring(0, 5) + "..." : null,
    }
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
} 