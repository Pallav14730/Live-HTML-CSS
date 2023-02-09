'use client'

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function NavBar() {
    const { data: session } = useSession();
    return (
        <div className="bg-black p-3 flex">

            <h1 className="text-4xl text-white cursor-pointer">Code Editor</h1>

            <div className="flex-1">
                {session && (
                    <img onClick={() => signOut()} src={session.user?.image!} alt="profile-picture" className="h-12 w-12 rounded-full cursor-pointer mx-auto hover:opacity-50" />

                )}
            </div>
        </div>
    )

}
export default NavBar;