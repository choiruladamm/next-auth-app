import React from "react";

export const Outline = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center w-full mx-auto my-4 justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
      {children}
    </div>
  );
};
