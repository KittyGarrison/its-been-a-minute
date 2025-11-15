import type { Metadata } from "next";
import "./globals.css";
import { ContactsProvider } from "./context/ContactsContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "It's Been a Minute",
  description: "I missed your face!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ContactsProvider>{children}</ContactsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
