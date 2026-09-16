import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavan Trivedi | Software Development Engineer",
  description: "Portfolio of Kavan Trivedi — Software Development Engineer specializing in distributed systems, full-stack web applications, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 selection:bg-violet-500/30 font-[family-name:var(--font-inter)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex justify-center w-full relative z-50 pt-6">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
