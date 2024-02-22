import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from "@/components/site-header";
import { Analytics } from '@vercel/analytics/react';
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: 'GasFees.io',
  description: "The most accurate gas cost tracker",
  keywords: [
    "gas",
    "gas fees",
    "crypto",
    "blockchain",
  ],
  authors: [
    {
      name: "0xKofi",
      url: "https://0xkofi.com",
    },
  ],
  creator: "0xKofi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gasfees.io",
    title: "GasFees.io",
    description: "Gas Cost Data",
    siteName: "GasFees.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "GasFees.io",
    description: "The most accurate gas cost tracker",
    creator: "@0xKofi",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col px-4 md:padding-xl">
          <SiteHeader />
          <Separator className="bg-black " />
          <div className="flex-1">{children}</div>
          <Separator className="bg-black mt-6" />
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
