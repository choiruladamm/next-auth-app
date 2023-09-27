import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex gap-3">
      <Link href="/admin" className={buttonVariants()}>
        Admin Page
      </Link>
    </div>
  );
}
