import type { Metadata } from "next";
import "./globals.css";
import { ContactsProvider } from "./context/ContactsContext";

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
        <ContactsProvider>
          {children}
        </ContactsProvider>
      </body>
    </html>
  );
}
