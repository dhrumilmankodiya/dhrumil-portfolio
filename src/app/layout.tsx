import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dhrumil Mankodiya — Product Designer & AI Product Manager",
  description:
    "23-year-old building things that matter. Part product designer, part product thinker, full-time empire builder. Building FinFly Finance, Golden Circle, Party Clap, Saura, and more.",
  keywords: [
    "Product Designer",
    "AI Product Manager",
    "Portfolio",
    "Fintech",
    "Design Systems",
    "India",
  ],
  authors: [{ name: "Dhrumil Mankodiya" }],
  openGraph: {
    title: "Dhrumil Mankodiya — Product Designer & AI PM",
    description: "Building an empire at 23.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👤</text></svg>" />
      </head>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
