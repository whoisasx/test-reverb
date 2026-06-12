import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reverb Smoke Lab",
  description: "A disposable Next.js app for AO SCM observer smoke tests."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

