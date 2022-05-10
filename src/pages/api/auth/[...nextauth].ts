import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { UserAdminRepository } from "../../../api/repositories/userAdminRepository";

export default NextAuth({
    secret: process.env.SECRET_KEY,
    providers: [
        GoogleProvider({
            clientId: String(process.env.GOOGLE_CLIENT_ID),
            clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ account, profile, ...params }) {
            console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID)
            console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_SECRET)
            const userRepository = new UserAdminRepository();
            if (account.provider === "google") {
                if (profile?.email_verified && profile?.email) {
                    const user = await userRepository.get_by_email(profile?.email);
                    if (user?.data) {
                        return true;
                    }
                }
            }
            return false;
        },
    }
});