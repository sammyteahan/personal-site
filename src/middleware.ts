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
export const config = Object.freeze({
  matcher: ['/']
})
