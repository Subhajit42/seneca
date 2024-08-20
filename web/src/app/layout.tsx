import type { Metadata } from "next";
// Fonts
import { DM_Sans } from "next/font/google";
import { Kanit } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Kanit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Saneca",
  description: "A clone of Playground using Next.js and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "flex flex-col",
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
