import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default async function Home() {

  return (
    <div className="flex flex-col gap-5 items-center">
      <Link href="/admin" className={buttonVariants()}>
        Admin Page
      </Link>
    </div>
  );
}
