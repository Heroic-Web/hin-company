import nodemailer from "nodemailer";

export async function sendWelcomeEmail(email: string, password: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Affiliate Dashboard" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Selamat! Akun Anda berhasil dibuat",
    text: `Halo! Akun Anda berhasil dibuat.\nEmail: ${email}\nPassword: ${password}`,
  });
}
