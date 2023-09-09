import { SHA256 as sha256 } from "crypto-js";
import { Prisma } from "@prisma/client";
import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    // create user
    await createUserHandler(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

const hashPassword = (string) => {
  return sha256(string).toString();
};

async function createUserHandler(req, res) {
  let errors = [];
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    errors.push("invalid inputs");
    return res.status(400).json({ errors });
  }

  if (password.length < 6) {
    errors.push("password should be more than 6 character");
    return res.status(400).json({ errors });
  }

  try {
    const user = await prisma.user.create({
      data: { ...req.body, password: hashPassword(req.body.password) },
    });
    return res.status(201).json({ user });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(400).json({ message: e.message });
      }
      return res.status(400).json({ message: e.message });
    }
  }
}
