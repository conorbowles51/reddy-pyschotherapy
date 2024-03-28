import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Reddy Psychology",
  description: "Reddy Psychology pyschotherapy company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-[#E6C8BB] scroll-smooth">
        <div className="mt-3 mx-3 md:mx-[20px] lg:mx-[20px] xl:mx-[250px]">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
