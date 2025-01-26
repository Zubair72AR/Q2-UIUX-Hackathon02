import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/Theme-Provider";
import ContextProvider from "@/components/Context";
import CustomCursors from "@/components/CustomCursor";
import Providers from "./providers";

// Font 01 Settings
const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Extralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

// Font 02 Settings
const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Regular.woff", weight: "400" },
    { path: "../../public/fonts/Satoshi-Bold.woff", weight: "700" },
    {
      path: "../../public/fonts/Satoshi-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    { path: "../../public/fonts/Satoshi-Light.woff", weight: "300" },
    {
      path: "../../public/fonts/Satoshi-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    { path: "../../public/fonts/Satoshi-Medium.woff", weight: "500" },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    { path: "../../public/fonts/Satoshi-Black.woff", weight: "900" },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.woff",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Avion Figma Pixel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${satoshi.variable} antialiased`}
      >
        {/* Theme Toggle Import */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Cart Provider */}
          <Providers>
            {/* Context Provider Import */}
            <ContextProvider>
              {/* Custom Cursors Import */}
              <CustomCursors />
              {/* Header and Offer Strip */}
              <Header />
              {children}
              {/* Footer */}
              <Footer />
            </ContextProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
