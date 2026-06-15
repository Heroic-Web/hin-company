import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title:
    "Cara Melindungi Website dari Hacker (Panduan Keamanan Website 2026 Lengkap) | HINAI Tech",
  description:
    "Panduan 2500+ kata keamanan website: cara melindungi website dari hacker, firewall, SSL, server security, DevOps security, dan strategi cyber security modern.",
  keywords: [
    "Keamanan Website",
    "Cyber Security",
    "Website Anti Hacker",
    "HINAI Tech",
    "PT Heroic Inovasi Nusantara",
    "Server Security",
    "Web Security Guide",
  ],
}

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        <main className="pt-32 pb-24">
          <article className="max-w-4xl mx-auto px-6">

            {/* HERO */}
            <header className="space-y-6 mb-14">
              <span className="inline-flex px-4 py-1 rounded-full bg-black text-white text-sm">
                HINAI Tech • PT Heroic Inovasi Nusantara
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Cara Melindungi Website dari Hacker
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Website saat ini bukan hanya media informasi, tetapi sudah menjadi aset digital utama
                bagi bisnis. Di dalamnya tersimpan data pelanggan, transaksi, sistem internal, hingga
                integrasi pembayaran. Karena itu, website menjadi target utama serangan hacker.
                Artikel ini membahas secara sangat mendalam bagaimana cara melindungi website dari
                hacker menggunakan pendekatan modern yang digunakan perusahaan teknologi profesional
                seperti HINAI Tech (PT Heroic Inovasi Nusantara).
              </p>
            </header>

            <img
              src="/artikel/hacker.png"
              alt="Website Security HINAI Tech"
              className="w-full rounded-2xl shadow-md mb-14"
            />

            {/* CONTENT */}
            <div className="space-y-14 text-gray-700 leading-relaxed text-justify">

              {/* INTRO */}
              <section>
                <h2 className="text-2xl font-bold">Mengapa Website Sangat Rentan Diretas?</h2>

                <p>
                  Banyak pemilik bisnis menganggap website mereka “tidak menarik untuk diretas”.
                  Ini adalah kesalahan terbesar. Hacker tidak melihat ukuran bisnis, tetapi melihat
                  kelemahan sistem. Bahkan website sederhana dengan CMS WordPress atau custom Next.js
                  bisa menjadi target jika memiliki celah keamanan.
                </p>

                <p>
                  Secara umum, ada 3 penyebab utama website diretas:
                  yaitu konfigurasi server yang lemah, sistem yang tidak di-update,
                  dan kurangnya monitoring keamanan secara real-time.
                </p>
              </section>

              {/* ATTACKS */}
                <section>
                <h2 className="text-2xl font-bold">
                    Jenis Serangan Hacker yang Paling Berbahaya
                </h2>

                <p>
                    Dunia cyber security terus berkembang, dan begitu juga metode serangan yang digunakan hacker.
                    Tidak hanya serangan sederhana, tetapi juga serangan otomatis, terstruktur, dan berbasis AI bot.
                    Berikut adalah jenis serangan yang paling sering digunakan untuk menyerang website bisnis:
                </p>

                <ul className="list-disc pl-6 space-y-3">

                    <li>
                    <b>SQL Injection</b> : hacker menyisipkan query berbahaya untuk mengakses atau merusak database website tanpa izin
                    </li>

                    <li>
                    <b>XSS (Cross Site Scripting)</b> : hacker memasukkan script berbahaya ke dalam website yang kemudian dijalankan di browser user
                    </li>

                    <li>
                    <b>CSRF (Cross Site Request Forgery)</b> : memaksa user yang sudah login untuk melakukan aksi tanpa disadari seperti transfer atau perubahan data
                    </li>

                    <li>
                    <b>Brute Force Attack</b> : mencoba ribuan hingga jutaan kombinasi password secara otomatis hingga menemukan yang benar
                    </li>

                    <li>
                    <b>DDoS Attack</b> : membanjiri server dengan traffic palsu dalam jumlah besar sehingga website menjadi lambat atau down
                    </li>

                    <li>
                    <b>Zero-day Exploit</b> : eksploitasi celah keamanan yang belum diketahui oleh developer atau vendor software
                    </li>

                    <li>
                    <b>Malware Injection</b> : menyisipkan program berbahaya ke dalam sistem server atau file website
                    </li>

                    <li>
                    <b>Phishing Attack</b> : membuat halaman palsu untuk mencuri data login seperti email, password, atau data pelanggan
                    </li>

                    <li>
                    <b>Man in the Middle Attack</b> : hacker mencegat komunikasi antara user dan server untuk mencuri data sensitif
                    </li>

                    <li>
                    <b>DNS Spoofing</b> : mengarahkan domain website ke server palsu yang sudah dikendalikan hacker
                    </li>

                    <li>
                    <b>Credential Stuffing</b> : menggunakan data login yang bocor dari website lain untuk mencoba masuk ke akun user
                    </li>

                    <li>
                    <b>Session Hijacking</b> : mengambil alih sesi login user yang sedang aktif di website
                    </li>

                    <li>
                    <b>File Upload Vulnerability</b> : memanfaatkan fitur upload file untuk menyisipkan script atau backdoor berbahaya
                    </li>

                    <li>
                    <b>Ransomware Attack</b> : mengenkripsi seluruh data website dan meminta tebusan untuk membuka kembali akses
                    </li>

                </ul>

                <p>
                    Serangan-serangan ini tidak dilakukan secara manual, melainkan menggunakan bot otomatis
                    yang bekerja selama 24 jam nonstop. Bahkan banyak serangan modern sudah menggunakan
                    automation script dan AI scanning untuk mencari celah website secara masif.
                </p>

                <p>
                    Karena itu, tanpa sistem keamanan yang tepat, website bisnis bisa diretas hanya dalam hitungan menit
                    tanpa disadari oleh pemiliknya.
                </p>
                </section>

              {/* REAL CASE */}
              <section>
                <h2 className="text-2xl font-bold">Studi Kasus Serangan Website di Dunia Nyata</h2>

                <p>
                  Banyak bisnis e-commerce kecil kehilangan data pelanggan karena plugin tidak resmi
                  atau server tanpa firewall. Dalam beberapa kasus, hacker hanya membutuhkan 2–5 menit
                  untuk masuk ke sistem jika tidak ada proteksi login dan rate limiting.
                </p>

                <p>
                  Setelah masuk, hacker biasanya melakukan:
                  pencurian database, pemasangan backdoor, atau enkripsi data untuk tebusan (ransomware).
                </p>
              </section>

              {/* SECURITY MODEL */}
              <section>
                <h2 className="text-2xl font-bold">Model Keamanan Website Modern (Enterprise Level)</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Edge Security (CDN + Firewall Global)</li>
                  <li>Application Security Layer</li>
                  <li>Authentication & Authorization Layer</li>
                  <li>Database Encryption Layer</li>
                  <li>Server Hardening Layer</li>
                  <li>Monitoring & Incident Response System</li>
                </ul>

                <p>
                  Sistem modern tidak bergantung pada satu keamanan saja, tetapi menggunakan banyak
                  lapisan proteksi (defense in depth).
                </p>
              </section>

              {/* PRACTICAL SECURITY */}
              <section>
                <h2 className="text-2xl font-bold">Cara Melindungi Website Secara Praktis</h2>

                <ol className="list-decimal pl-6 space-y-3">
                  <li>Gunakan HTTPS dengan SSL valid</li>
                  <li>Aktifkan firewall aplikasi (WAF)</li>
                  <li>Gunakan password kuat + 2FA</li>
                  <li>Update semua sistem secara rutin</li>
                  <li>Gunakan rate limiting login</li>
                  <li>Backup otomatis setiap hari</li>
                  <li>Gunakan secure headers (CSP, HSTS)</li>
                  <li>Monitoring log server 24/7</li>
                  <li>Hindari plugin atau dependency tidak resmi</li>
                  <li>Gunakan environment variable untuk data sensitif</li>
                </ol>
              </section>

              {/* DEVOPS SECURITY */}
              <section>
                <h2 className="text-2xl font-bold">Keamanan Tingkat DevOps & Cloud</h2>

                <p>
                  Pada sistem modern seperti Next.js atau cloud hosting, keamanan tidak hanya di frontend.
                  Server, API, database, dan pipeline deployment juga harus diamankan.
                </p>

                <p>
                  Praktik DevOps security meliputi:
                  secret management, CI/CD security scan, container security, dan audit dependency.
                </p>
              </section>

              {/* TABLE */}
              <section>
                <h2 className="text-2xl font-bold">Perbandingan Sistem Aman vs Rentan</h2>

                <div className="overflow-x-auto border rounded-xl mt-4">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Aspek</th>
                        <th className="p-4">Aman</th>
                        <th className="p-4">Rentan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">SSL</td>
                        <td className="p-4">HTTPS aktif</td>
                        <td className="p-4">Tidak ada</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Firewall</td>
                        <td className="p-4">WAF aktif</td>
                        <td className="p-4">Tidak ada</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Update</td>
                        <td className="p-4">Rutin</td>
                        <td className="p-4">Jarang</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Backup</td>
                        <td className="p-4">Auto daily</td>
                        <td className="p-4">Tidak ada</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Monitoring</td>
                        <td className="p-4">Real-time</td>
                        <td className="p-4">Tidak ada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* MISTAKES */}
              <section>
                <h2 className="text-2xl font-bold">Kesalahan Fatal Pemilik Website</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Password admin terlalu sederhana</li>
                  <li>Tidak pernah update sistem</li>
                  <li>Menggunakan plugin bajakan</li>
                  <li>Tidak ada backup otomatis</li>
                  <li>Tidak menggunakan firewall</li>
                  <li>Tidak ada monitoring server</li>
                </ul>
              </section>

              {/* HINAI */}
              <section>
                <h2 className="text-2xl font-bold">Solusi Keamanan dari HINAI Tech</h2>

                <p>
                  HINAI Tech (PT Heroic Inovasi Nusantara) menyediakan layanan keamanan website
                  profesional mulai dari penetration testing, firewall setup, server hardening,
                  hingga monitoring 24/7 untuk memastikan website bisnis tetap aman.
                </p>
              </section>

              {/* SOLUTION - ADVANCED */}
                <section>
                <h2 className="text-2xl font-bold">
                    Solusi Keamanan Website Modern dari HINAI Tech
                </h2>

                <p>
                    Setelah memahami berbagai jenis serangan dan risiko yang mungkin terjadi,
                    langkah paling penting adalah membangun sistem pertahanan yang benar.
                    Keamanan website tidak bisa hanya mengandalkan satu tools, tetapi harus
                    menggunakan pendekatan menyeluruh (holistic security system).
                </p>

                <p>
                    HINAI Tech (PT Heroic Inovasi Nusantara) membangun sistem keamanan website
                    berbasis enterprise-level security architecture yang biasa digunakan oleh
                    perusahaan teknologi skala besar.
                </p>

                <p>
                    Berikut adalah pendekatan solusi yang kami implementasikan untuk menjaga
                    website tetap aman dari serangan hacker, malware, hingga kebocoran data:
                </p>

                {/* SOLUTION LAYERS */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">

                    <div className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg">1. Web Application Firewall (WAF)</h3>
                    <p className="text-sm mt-2">
                        Semua traffic website difilter terlebih dahulu untuk mendeteksi dan
                        memblokir serangan seperti SQL Injection, XSS, dan DDoS sebelum mencapai server.
                    </p>
                    </div>

                    <div className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg">2. Server Hardening</h3>
                    <p className="text-sm mt-2">
                        Konfigurasi server diperkuat dengan menutup semua port tidak penting,
                        memperketat permission, dan mengamankan environment runtime.
                    </p>
                    </div>

                    <div className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg">3. Automated Backup System</h3>
                    <p className="text-sm mt-2">
                        Backup otomatis harian dan mingguan untuk memastikan data tetap aman
                        jika terjadi serangan atau kerusakan sistem.
                    </p>
                    </div>

                    <div className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg">4. Real-Time Monitoring</h3>
                    <p className="text-sm mt-2">
                        Sistem monitoring aktif 24/7 untuk mendeteksi aktivitas mencurigakan
                        seperti login brute force, traffic anomali, atau perubahan file ilegal.
                    </p>
                    </div>

                    <div className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg">5. Secure Authentication System</h3>
                    <p className="text-sm mt-2">
                        Implementasi login aman dengan 2FA (Two Factor Authentication),
                        rate limiting, dan proteksi brute force attack.
                    </p>
                    </div>

                    <div className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg">6. Code & Dependency Audit</h3>
                    <p className="text-sm mt-2">
                        Setiap aplikasi diperiksa dari sisi keamanan dependency, library,
                        dan potensi vulnerability sebelum di-deploy ke production.
                    </p>
                    </div>

                </div>

                {/* FINAL PARAGRAPH */}
                <p className="mt-6">
                    Dengan kombinasi sistem di atas, website tidak hanya “aman secara teori”,
                    tetapi benar-benar memiliki perlindungan aktif yang bekerja setiap saat.
                    Pendekatan ini memastikan bisnis tetap berjalan tanpa gangguan meskipun
                    ada percobaan serangan dari pihak luar.
                </p>

                <p>
                    Inilah standar keamanan yang digunakan HINAI Tech untuk membantu UMKM,
                    startup, hingga perusahaan dalam membangun sistem digital yang stabil,
                    aman, dan siap scale di masa depan.
                </p>
                </section>

              {/* CONCLUSION */}
              <section>
                <h2 className="text-2xl font-bold">Kesimpulan</h2>

                <p>
                  Keamanan website adalah investasi, bukan biaya tambahan. Dengan meningkatnya
                  serangan cyber setiap tahun, bisnis harus mulai menerapkan sistem keamanan
                  berlapis. Dengan bantuan HINAI Tech, website Anda dapat menjadi lebih aman,
                  stabil, dan siap menghadapi ancaman digital modern.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 p-10 border rounded-2xl bg-gray-50 text-center">
              <h3 className="text-3xl font-bold">
                Amankan Website Anda Sekarang
              </h3>

              <p className="text-gray-600 mt-4">
                Konsultasi keamanan website bersama HINAI Tech (PT Heroic Inovasi Nusantara).
              </p>

              <Link
                href="https://wa.me/6282144137914"
                className="inline-block mt-6 px-8 py-4 bg-black text-white rounded-xl"
              >
                Konsultasi Gratis
              </Link>
            </div>

          </article>
        </main>
      </div>
    </LanguageProvider>
  )
}