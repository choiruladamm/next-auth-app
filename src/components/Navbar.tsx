/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Icons } from ".";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [state, setState] = useState<boolean>(false);

  const navigation = [
    { title: "Features", path: "#" },
    { title: "Integrations", path: "#" },
    { title: "Customers", path: "#" },
    { title: "Pricing", path: "#" },
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
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-3 md:flex md:space-y-0">
              <li>
                <Link href={"/sign-up"}>
                  <Button variant={"secondary"} className="w-full md:w-auto">
                    Sign up
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/sign-in"}>
                  <Button className="w-full md:w-auto">Sign in</Button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
