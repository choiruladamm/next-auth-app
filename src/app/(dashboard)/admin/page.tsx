import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

interface AdminProps {}

const Admin: FC<AdminProps> = async ({}) => {
  const session = await getServerSession(authOptions)
  console.log(session);
  
  return <div className="grid place-items-center min-h-screen">Admin Page</div>;
};

export default Admin;
