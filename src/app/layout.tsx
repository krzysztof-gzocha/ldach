import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "L Dach - Dachy i Elewacje",
  description: "Firma L Dach zajmuje się budową dachów i elewacji. Zapraszamy do zapoznania się z naszą ofertą."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
