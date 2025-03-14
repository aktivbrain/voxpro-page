import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Voxpro - AI-Powered Voice Training",
  description: "Transform your voice with Voxpro's AI-powered voice training lessons. Practice with Sky, your personal AI voice coach.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' }
    ],
    apple: '/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0A0B2E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-voxpro-navy text-white selection:bg-voxpro-coral selection:text-voxpro-navy">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
