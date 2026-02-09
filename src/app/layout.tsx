import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

import EmbeddedMessaging from "@/components/EmbeddedMessaging";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  // const settings = await client.getSingle("settings");
  // mock settings data
  const settings = {
    data: {
      site_title: "Medcan",
      meta_description: "Medcan is the relaxing app for you.",
      og_image: { url: "https://Medcan.com/og-image.png" },
    },
  };

  return {
    title: settings.data.site_title || "Medcan",
    description:
      settings.data.meta_description || "Medcan is the relaxing app for you.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-b from-[#ECECE0] to-cyan-80 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
        <EmbeddedMessaging />
        <div className="fixed top-10 right-10 text-lg text-red-500 border-sky-100 border-2 rounded-full p-2 bg-sky-200 border-spacing-2 w-fit px-4">
          Ray&apos;s Prismic Medcan Test site ...
        </div>
      </body>
    </html>
  );
}
