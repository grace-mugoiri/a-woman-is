import type { Metadata } from "next";
import "./globals.css";

import { playfair, inter } from "./fonts";

export const metadata: Metadata = {
  title: "A Woman Is",
  description:
    "A storytelling experience exploring the many dimensions of womanhood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}