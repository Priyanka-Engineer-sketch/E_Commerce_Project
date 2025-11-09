import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
    session: { strategy: "jwt" },
    providers: [
        Google({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! }),
        Facebook({ clientId: process.env.FACEBOOK_CLIENT_ID!, clientSecret: process.env.FACEBOOK_CLIENT_SECRET! })
        // Instagram: use Facebook Login app with Instagram Basic Display if needed
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            // Map role by email domain or from your backend later
            if (account && profile) token.role = token.email?.includes('admin') ? 'admin' : token.email?.includes('seller') ? 'seller' : 'user';
            return token;
        },
        async session({ session, token }) {
            (session as any).role = (token as any).role ?? 'user';
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
