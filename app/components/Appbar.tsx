"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Music } from "lucide-react";

export function Appbar() {
  const session = useSession();

  return (
    <>
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between backdrop-blur-sm bg-black/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Topify</span>
        </div>

        <div className="flex items-center">
          {session?.data?.user ? (
            <Button
              variant="outline"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          ) : (
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          )}
        </div>
      </header>
    </>
  );
}
