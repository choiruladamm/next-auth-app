import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

interface AdminProps {}

const Admin: FC<AdminProps> = async ({}) => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <h2 className="text-2xl font-bold">
        Admin Page - Welcome Back{" "}
        <span className="text-sky-600">{session?.user.username}</span>
      </h2>
    );
  }

  return (
    <div className="text-2xl font-bold">
      <span className="text-red-500">Please login</span> to see admin page!!!
    </div>
  );
};

export default Admin;
