"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ user }: Session) {
  const [isOpen, setIsOpen] = useState(false)
  const showLogoutHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="flex py-12 justify-between mx-6">
      {
        !user && (
          <Link href={"/"}>Fullstack Institute</Link>
        )
      }
      {
        user && (
          <h1 className="text-3xl font-bold">Welcome {user?.name}</h1>
        )
      }
      <ul className="flex items-center gap-12">
      {!user && (
          <li className="bg-blue-500 text-white py-2 px-4 rounded-md">
            <Link href={"/api/auth/signin"}>Sign In</Link>
          </li>
        )}
        {user && (
          <li onClick={showLogoutHandler}>
            <Image
              src={user?.image as string}
              alt={user.name as string}
              width={36}
              height={36}
              className="rounded-full"
            />
           
          </li>
        )}
         {
            isOpen && (
              <li className="bg-blue-500 text-white py-2 px-4 rounded-md">
            <Link href={"/api/auth/signout"}>Logout</Link>
          </li>
            )
          }
      </ul>
    </nav>
  );
}
