import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";



export default async function middleware (request:NextRequest) {
    const token = await getToken({ req:request, secret: process.env.NEXTAUTH_SECRET });

    const loggedIn = request.cookies.get('token');
    const userNavigateRoute = request.nextUrl.pathname;

    if (loggedIn || token) { 
        if (userNavigateRoute === '/login' || userNavigateRoute === '/signup') {
            return NextResponse.redirect(new URL("/", request.nextUrl.origin));
        }
    } else {
        if (userNavigateRoute !== "/login" && userNavigateRoute !== "/signup" && userNavigateRoute !== "/") {
            return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
        }
        }
    
    return NextResponse.next();
}

export const config = {
  matcher: ['/scan','/cart', '/dashboard', '/login', '/signup'],
}