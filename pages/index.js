import { useSession, signIn, signOut } from "next-auth/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn()}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      Signed in as {session.user.email} <br />
      <button className="bg-red-400 rounded-md" onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
}
