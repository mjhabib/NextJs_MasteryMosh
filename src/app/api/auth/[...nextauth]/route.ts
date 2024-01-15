import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions = {
  secret: process.env.AUTHJS_SECRET,
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      // '!' is for TS to tell we definitely have these values and they're not undefined
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Since the AuthJs causes too many issues in this project, I'm not gonna develop this project with this library anymore (maybe Clerk in other projects). So, in part08, from video #09 till end, nothing was implemented!
