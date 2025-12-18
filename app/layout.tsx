import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionLayout from "@/components/MotionLayout";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Yaksh Chudasama | Portfolio",
  description:
    "Full-stack developer portfolio showcasing MERN, Next.js, and modern UI engineering.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Yaksh Chudasama | Portfolio",
    description:
      "Full-stack developer portfolio showcasing MERN, Next.js, and modern UI engineering.",
    type: "website",
    url: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} text-text-main transition-colors`}
      >
        <ThemeProvider>
          <MotionLayout>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
