import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import your global footer and sticky contact buttons
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

export async function generateMetadata(): Promise<Metadata> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/pages`,
            {
                next: { revalidate: 3600 },
            }
        );

        const data = await res.json();

        return {
            title: data?.seo?.title || 'Patient Education Centre',
            description: data?.seo?.description || '',
            keywords: data?.seo?.keywords || '',
        };
    } catch (error) {
        return {
            title: 'Patient Education Centre',
            description: '',
        };
    }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Soumya Ranjan Malla",
  "image": "https://drsoumyaranjanmalla.com/hero-sec/soumya2.png",
  "description": "AIIMS New Delhi and NIMHANS Bengaluru trained Interventional Neuroradiologist in Kochi specialising in stroke thrombectomy, brain aneurysm treatment, AVM embolisation, carotid stenting, MMA embolisation and advanced neurovascular care across Kerala.",
  "medicalSpecialty": "Neuroradiology",
  "telephone": "+91 9629997812",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Department of Neurology & Behavioural Sciences, Renai Medicity, Palarivattom",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "url": "https://drsoumyaranjanmalla.com"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-tealAccent selection:text-white">

        {/* We wrap children in a flex-grow container so that even on very short pages (like a 404), 
            the footer is always pushed securely to the absolute bottom of the screen. */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* Floating action buttons for WhatsApp and Call */}
        <StickyContactButtons />

        {/* Global Footer Injection */}
        <Footer />

      </body>
    </html>
  );
}