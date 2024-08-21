import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.provider = account.provider;
        if (account.provider === 'google' && profile) {
          token.userId = profile.sub; // Google User ID
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.provider = token.provider;
      return session;
    },
  },
};

export default NextAuth(authOptions);
