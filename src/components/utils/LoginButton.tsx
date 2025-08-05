"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="bg-white sm:bg-transparent flex flex-col justify-center w-full items-center gap-1 rounded-md p-1 text-base text-gray-900"
    >
      <FcGoogle size={25} />
      <span className="text-md text-black md:text-black">Sign in with Google</span>
    </button>
  );
}
