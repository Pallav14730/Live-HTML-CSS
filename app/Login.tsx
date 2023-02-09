'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <Image src="https://links.papareact.com/2i6" width={300} height={300} alt='logo' />
        <h1 className="text-white text-3xl font-bold animte-pulse">Sign in to use Live Code Editor</h1>

        <div onClick={()=> signIn('google')} className="flex border rounded-lg cursor-pointer mt-3">
            <FcGoogle className="h-11 w-7 bg-white" />
            <h1 className="bg-blue-600 text-white p-2 font-bold">Sign in with google</h1>
        </div>

    </div>
  )
}

export default Login