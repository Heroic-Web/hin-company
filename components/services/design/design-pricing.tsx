"use client";

import { useLanguage } from "@/components/language-provider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type DesignService = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

export function DesignPricing() {
  const { t } = useLanguage();

  const services: DesignService[] = [
    {
      name: "Jasa Desain Brosur/Flyer/Banner",
      price: "Rp20.000 – Rp35.000",
      description: "Output: JPG/PNG & PDF",
      features: [],
    },
    {
      name: "Jasa Desain CV & Lamaran Kerja",
      price: "Rp10.000 – Rp55.000",
      description: "Output: PDF",
      features: [],
    },
    {
      name: "Jasa Desain Sertifikat",
      price: "Rp20.000 (≤2 warna) – Rp25.000 (+2 warna)",
      description: "Output: JPG/PNG & PDF",
      features: [],
    },
    {
      name: "Jasa Desain Menu / Pricelist",
      price: "Rp15.000",
      description: "Output: PDF & JPG/PNG",
      features: [],
    },
    {
      name: "Jasa Desain Proposal Bisnis",
      price: "Rp250.000",
      description: "Output: PPT/Word, JPG/PNG, atau PDF",
      features: [],
    },
    {
      name: "Jasa Desain Company Profile",
      price: "Rp150.000 (5–8 hlm) – Rp250.000 (9–20 hlm)",
      description: "Output: PPT/Word, JPG/PNG, atau PDF",
      features: [],
    },
    {
      name: "Jasa Desain E-Book",
      price: "Rp15.000 – Rp150.000",
      description: "Output: Word & PDF",
      features: [],
    },
    {
      name: "Jasa Desain Thumbnail YouTube / Cover Video",
      price: "Rp15.000 (2 desain) / Rp20.000 (1 desain) / Rp30.000 (3 desain)",
      description: "Output: JPG/PNG",
      features: [],
    },
    {
      name: "Jasa Desain Poster Digital / Promosi Acara",
      price: "Rp20.000 – Rp40.000",
      description: "Output: JPG/PNG & PDF",
      features: [],
    },
    {
      name: "Jasa Desain Undangan Digital (Event / Pernikahan)",
      price: "Rp30.000 – Rp75.000",
      description: "Output: JPG/PNG & PDF (Versi website opsional)",
      features: [],
    },
    {
      name: "Jasa Desain Katalog Produk",
      price: "Rp100.000 (≤8 hlm) – Rp200.000 (≥9 hlm)",
      description: "Output: PDF, JPG/PNG",
      features: [],
    },
    {
      name: "Jasa Desain Kalender (Meja/Dinding/Digital)",
      price: "Rp50.000 – Rp100.000",
      description: "Output: PDF & JPG/PNG",
      features: [],
    },
    {
      name: "Jasa Desain Label Produk / Kemasan",
      price: "Rp25.000 – Rp75.000",
      description: "Output: JPG/PNG & PDF",
      features: [],
    },
    {
      name: "Jasa Desain Spanduk / X-Banner",
      price: "Rp30.000 – Rp60.000",
      description: "Output: PDF & JPG/PNG",
      features: [],
    },
    {
      name: "Jasa Desain Logo",
      price: "Rp50.000 – Rp250.000",
      description: "Output: PNG Transparan, JPG, PDF (+ source file opsional)",
      features: [],
    },
    {
      name: "Jasa Desain Twibbon / Frame Foto Digital",
      price: "Rp10.000 – Rp25.000",
      description: "Output: PNG Transparan",
      features: [],
    },
    {
      name: "Jasa Desain Kartu Nama Digital",
      price: "Rp15.000 – Rp40.000",
      description: "Output: PDF & JPG",
      features: [],
    },
    {
      name: "Jasa Desain Feed Instagram / Konten Sosial Media",
      price: "Rp10.000 – Rp25.000 / slide",
      description: "Output: JPG/PNG & PDF (opsional)",
      features: [],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pricelist Jasa Desain Grafis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pilih dari berbagai layanan desain sesuai kebutuhan dan anggaran Anda.
          </p>
        </div>

        {/* Grid Card untuk Semua Jasa */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="text-center pb-6 pt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-emerald-600">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </CardHeader>

              {service.features.length > 0 && (
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}

              <CardContent>
                <Button
                  className="w-full"
                  variant="outline"
                  size="sm"
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}