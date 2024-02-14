import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
    matcher: ["/chat", "/chat/:id", "/register"],
}


// ? this middleware basically provide a secure path channel for these specific route in your application