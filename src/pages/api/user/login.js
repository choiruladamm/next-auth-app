import { SHA256 as sha256 } from "crypto-js";
import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    // login user
    await loginUserHandler(req, res);
  } else {
    return res.status(405);
  }
}

const hashPassword = (string) => {
  return sha256(string).toString();
};

const exclude = (user, keys) => {
  for (let keys of keys) {
    delete user[keys];
  }
  return user;
};

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "invalid input" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        image: true,
      },
    });

    if (user && user.password === hashPassword(password)) {
      return res.status(200).json(exclude(user, ["password"]));
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (e) {
    console.log(e);
    // throw new Error(e);
  }
}
