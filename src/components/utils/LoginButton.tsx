"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="flex w-full items-center justify-center gap-3 rounded-md px-3 py-2 text-base text-gray-900"
    >
      <FcGoogle size={25} />
      <span>Sign in with Google</span>
    </button>
  );
}
