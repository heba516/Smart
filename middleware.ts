import { NextRequest, NextResponse } from "next/server";


export default function middleware (request:NextRequest) {
    console.log("middleware");    
    const loggedIn = request.cookies.get('token');
    const userNavigateRoute = request.nextUrl.pathname;

    if (loggedIn) { 
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
  matcher: ['/cart', '/dashboard', '/login', '/signup'],
}