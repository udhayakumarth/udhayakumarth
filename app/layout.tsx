import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "whoami - Udhayakumar",
  description: "Software Engineer",
  openGraph: {
    title: "Udhayakumar",
    description: "A calm and curious brain in a loud universe.",
    images: [
      {
        url: "http://localhost:3000/og/whoami.png",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
      >
         {children}
      </body>
    </html>
  );
}
