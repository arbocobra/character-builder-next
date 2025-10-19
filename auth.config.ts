import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string;
      }
      return session
    },
  },
  providers: [],
} satisfies NextAuthConfig;

// providers: [
  //   Credentials({
  //     async authorize(credentials) {
  //       const parsedCredentials = z.object({ 
  //           email: z.email(), password: z.string().min(6) 
  //        }).safeParse(credentials);
 
  //       if (parsedCredentials.success) {
  //         const { email, password } = parsedCredentials.data;
  //         const user = await getUser(email);
  //         if (!user) return null;
  //         const passwordsMatch = await bcrypt.compare(password, user.password);
 
  //         if (passwordsMatch) return user;
  //       }
  //       console.log('Invalid credentials');
  //       return null;
  //     },
  //   }),
  // ],