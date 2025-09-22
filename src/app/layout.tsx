import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/style/style.css";
import { Toaster } from "react-hot-toast";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "aos/dist/aos.css";
import { Poppins } from "next/font/google";
import Header1 from "./components/Header1";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import { FacebookPixelEvents } from "@/app/components/pixelCode";
import Schema from "./Schema";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: "400" as const,
  style: "normal" as const,
});

export const metadata: Metadata = {
  title: "CareerDefiner | Career Counselling & College Admissions in Chandigarh, Mohali & Panchkula",
  description:
    "Get expert career counselling, course guidance & admission support in Chandigarh, Mohali & Panchkula. Explore top colleges and build a successful career path with CareerDefiner.",
  keywords: [
    "career counselling",
    "college admissions",
    "course guidance",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "CareerDefiner"
  ],
  robots: "index, follow",
  alternates: {
    canonical: `https://careerdefiner.com`,
  },
  verification: {
    google: "R4tavNgaYdgKRGeHDt_3kIlJfis1KEpsZBt_XRVXUUY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
        <Schema />
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <Header />
        {children}
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        <Toaster />
        <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-DEBFYWT2P4" />
    </html>
  );
}
