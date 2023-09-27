import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    const existingUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "username already exist",
        },
        { status: 409 }
      );
    }

    const existingEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "email already exist",
        },
        { status: 409 }
      );
    }

    const newUser = await db.user.create({
      data: { username, email, password },
    });
    const { ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "user created succesfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "something went error",
      },
      { status: 500 }
    );
  }
}
