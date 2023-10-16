/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from ".";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Loader2 } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [state, setState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session } = useSession();

  const navigation = [
    { title: "Features", path: "/" },
    { title: "Integrations", path: "/" },
    { title: "Customers", path: "/" },
    { title: "Pricing", path: "/" },
  ];

  return (
    <nav className="bg-white top-0 md:top-0 fixed z-10 border-b w-full md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-7 md:block">
          <Link href={"/"}>
            <img src="vercel.svg" width={120} height={50} alt="Vercel" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? <Icons.kebab /> : <Icons.close />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-slate-900">
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-3 md:flex md:space-y-0">
              {session?.user ? (
                <Button
                  onClick={() => {
                    setIsLoading(true);
                    signOut({
                      redirect: true,
                      callbackUrl: `${window.location.origin}/sign-in`,
                    });
                  }}
                  variant={"destructive"}
                  className="w-full md:w-20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Logout"
                  )}
                </Button>
              ) : (
                <div className="flex flex-col md:flex-row gap-3">
                  <Link
                    href={"/sign-up"}
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Sign up
                  </Link>

                  <Link href={"/sign-in"} className={buttonVariants()}>
                    Sign in
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
