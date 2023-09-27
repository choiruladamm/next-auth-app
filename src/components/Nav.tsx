/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserLoginNav from "./UserLoginNav";

interface NavProps {}

const Nav: FC<NavProps> = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" bg-white py-4 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <img src="vercel.svg" width={120} height={50} alt="Vercel" />
        </Link>
        {session?.user ? (
          <UserLoginNav />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
