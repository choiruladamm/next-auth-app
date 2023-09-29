"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";


interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <NextTopLoader showSpinner={false} />
      {children}
    </SessionProvider>
  );
};

export default Provider
