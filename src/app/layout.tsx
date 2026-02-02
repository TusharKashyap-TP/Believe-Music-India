import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Believe Music",
  description: "Believe Music – Sound that inspires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark">
      <body className="inter.className">
        
        <div className="relative w-full flex justify-center items-center">
          
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
