import Header from "@/components/Header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My First Next JS App",
  description: "Studying Next JS for the first time."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
