import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/global/Header";
import React from "react";
import Footer from "@/components/global/Footer";
import StickyContactButtons from "@/components/global/StickyContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Soumya Ranjan Malla",
  "image": "https://drsoumyaranjanmalla.com/hero-sec/soumya2.png",
  "description":
    "AIIMS New Delhi and NIMHANS Bengaluru trained Interventional Neuroradiologist in Kochi specialising in stroke thrombectomy, brain aneurysm treatment, AVM embolisation, carotid stenting, MMA embolisation and advanced neurovascular care across Kerala.",
  "medicalSpecialty": "Neuroradiology",
  "telephone": "+91 9629997812",
  "address": {
    "@type": "PostalAddress",
    "streetAddress":
      "Department of Neurology & Behavioural Sciences, Renai Medicity, Palarivattom",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "addressCountry": "IN",
  },
  "url": "https://drsoumyaranjanmalla.com",
};

interface FooterData {
  contact: {
    whatsapp: string;
    place: string;
    address: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    orcid: string;
  };
  conditions: { name: string; slug: string }[];
  procedure: { name: string; slug: string }[];
}

async function getFooterData(): Promise<FooterData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/layout`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch layout data");
    }

    return await res.json();
  } catch (error) {
    console.error("Footer API error:", error);
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getFooterData();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-tealAccent selection:text-white">
      {data && <Header data={data} />}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        <StickyContactButtons />

        {/* Only render Footer when data is available */}
        {data && <Footer data={data} />}

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}