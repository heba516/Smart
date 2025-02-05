// import { decrypt } from '@/app/lib/session';
// import { cookies } from 'next/headers';

// export async function GET() {
//   const sessionCookie = (await cookies()).get('session')?.value;
//   if (!sessionCookie) {
//     return Response.json({ session: null }, { status: 401 });
//   }

//   const session = await decrypt(sessionCookie);

//   return Response.json({ session });
// }

export default function middleware () {

}