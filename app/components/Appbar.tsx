"use client";

import { signIn, signOut, useSession } from "next-auth/react";


export function Appbar(){
    const session = useSession();

    
    return (
        <div className="flex justify-between ">
            <div>
                Topify
            </div>
            <div>
                {session?.data?.user && <button className="bg-blue-500 m-2 p-2" onClick={() => signOut()}>Logout</button>}
                {!session?.data?.user && <button className="bg-blue-500 m-2 p-2" onClick={() => signIn()}>Signin</button>}
            </div>
        </div>
    )
}