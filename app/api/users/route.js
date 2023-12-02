import { NextResponse } from "next/server";

export async function POST(req, res) {
  let { email, name, age } = await req.json();

  console.log(
    `The user is: ${name} with the email: ${email} and the password: ${age}`
  );
  // console.log(req);

  return NextResponse.json({ data: "Hello World" });
}
