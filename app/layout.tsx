import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "It's  been a minute",
  description: "I missed your face!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
