import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";



export default async function middleware(request: NextRequest) {

    const authToken = await getToken({ req:request, secret: process.env.NEXTAUTH_SECRET });
    const userToken = request.cookies.get('token');
    
    const userNavigateRoute = request.nextUrl.pathname;
    const cond = ['/login', '/signup', '/verify', '/reset_password', '/forget_password', '/verification_code']

    if (userToken || authToken) { 
        if (cond.includes(userNavigateRoute)) {
            return NextResponse.redirect(new URL("/", request.nextUrl.origin));
        }
    } else {
        if (userNavigateRoute !== "/login" && userNavigateRoute !== "/signup" && userNavigateRoute !== "/forget_password") {
            return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
        }
        }
    
    return NextResponse.next();
}

export const config = {
  matcher: ['/scan','/cart', '/dashboard', '/login', '/signup', '/verify', '/reset_password', '/forget_password', '/verification_code'],
}