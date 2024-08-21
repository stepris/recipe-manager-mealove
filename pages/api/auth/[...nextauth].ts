import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.userId = profile.id; // GitHub-User-ID zum JWT hinzufügen
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId; // GitHub-User-ID zur Session hinzufügen
      return session;
    },
  },
};

export default NextAuth(authOptions);
