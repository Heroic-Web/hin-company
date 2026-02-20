import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { sendWelcomeEmail } from "@/lib/email";

function isGmail(email: string) {
  return email.endsWith("@gmail.com");
}

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Data tidak lengkap" },
      { status: 400 }
    );
  }

  // VALIDASI GMAIL
  if (!isGmail(email)) {
    return NextResponse.json(
      { error: "Hanya email Gmail yang diperbolehkan" },
      { status: 400 }
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  try {
    await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashed]
    );
  } catch (err: any) {
    if (err.code === "ER_DUP_ENTRY") { // MySQL duplicate email
      return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 });
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
