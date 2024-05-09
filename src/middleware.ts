import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.method === 'GET') {
    console.log({
      url: request.url,
      type: 'tracking',
    })
  }
}

/**
 * https://nextjs.org/docs/pages/building-your-application/routing/middleware#matching-paths
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - public (static images and svgs)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|public|favicon.ico).*)',
  ]
}
