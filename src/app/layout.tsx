import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Providers from "@/components/QueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pxlhunt Multi Step Form",
  description: "Generated by Pxlhunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-foreground text-foreground dark:text-white`}
      >
        <div className="flex flex-col items-center justify-center gap-2 py-8">
          <ThemeProvider />
          <Providers>
            {children}
          </Providers>

        </div>
      </body>
    </html>
  );
}
