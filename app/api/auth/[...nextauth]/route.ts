import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "cliente" &&
          credentials?.password === "acceso123"
        ) {
          return { id: "1", name: "Cliente Artesanía" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Luego lo creamos
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

