import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Your middleware logic here (can be empty if you just want auth checks)
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites",
  ]
}