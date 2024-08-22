import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account: any;
      profile?: any;
    }) {
      if (account) {
        token.provider = account.provider;
        if (account.provider === 'google' && profile) {
          token.userId = profile.sub; // Google User ID
        }
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      if (session.user) {
        (session.user as any).id = token.userId;
        (session.user as any).provider = token.provider;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
