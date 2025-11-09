import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const path = url.pathname;

    // Simple blocklist (enhance with JWT cookies or edge session)
    if (path.startsWith('/admin') || path.startsWith('/seller')) {
        // Example: require any session (you can lift role into cookie later)
        const hasSession = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');
        if (!hasSession) { url.pathname = '/errors/401'; return NextResponse.rewrite(url); }
    }
    return NextResponse.next();
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico|manifest.json).*)'] };
