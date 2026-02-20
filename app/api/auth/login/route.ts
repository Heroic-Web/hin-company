import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const [rows]: any = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (!rows.length) {
    return NextResponse.json({ error: "User tidak ditemukan" }, { status: 401 });
  }

  const user = rows[0];
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
}
