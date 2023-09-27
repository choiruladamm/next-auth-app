"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

interface UserLoginNavProps {}

const UserLoginNav: FC<UserLoginNavProps> = ({}) => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      variant={"destructive"}
    >
      Sign Out
    </Button>
  );
};

export default UserLoginNav;
