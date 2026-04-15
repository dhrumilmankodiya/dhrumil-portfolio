import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Dhrumil Mankodiya - Product Designer & Entrepreneur",
  description: "Building extraordinary digital experiences. 23-year-old Product Designer and AI Product Manager with 19+ products shipped.",
  keywords: ["Product Designer", "UI/UX Designer", "Entrepreneur", "Portfolio", "AI Product Manager"],
  authors: [{ name: "Dhrumil Mankodiya" }],
  openGraph: {
    title: "Dhrumil Mankodiya - Product Designer & Entrepreneur",
    description: "Building extraordinary digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  } else if (!theme) {
                    theme = 'dark';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body 
        className="min-h-full antialiased" 
        style={{ 
          backgroundColor: "var(--background)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}