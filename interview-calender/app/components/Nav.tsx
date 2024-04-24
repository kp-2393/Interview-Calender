"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ user }: Session) {
  return (
    <nav className="flex py-12 justify-between">
      <Link href={"/"} className="text-3xl font-bold">Fullstack Interview Calender</Link>
      <ul className="flex items-center gap-12">
          <span className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
          </span>
      {!user && (
          <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
            <Link href={"/api/auth/signin"}>Sign In</Link>
          </li>
        )}
        {user && (
          <li>
            <Image
              src={user?.image as string}
              alt={user.name as string}
              width={36}
              height={36}
              className="rounded-full"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
