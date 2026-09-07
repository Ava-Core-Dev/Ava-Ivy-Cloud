import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ava Ivy",
  description: "Ava Ivy — avaivy.cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
