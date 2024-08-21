import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
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
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     if (account && profile) {
  //       token.userId = profile.id; // GitHub-User-ID zum JWT hinzufügen
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user.id = token.userId; // GitHub-User-ID zur Session hinzufügen
  //     return session;
  //   },
  // },
};
export default NextAuth(authOptions);
