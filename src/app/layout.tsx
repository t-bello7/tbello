"use client"
import { useEffect } from "react";
// import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Lenis from 'lenis';
import { Header, Footer } from "@/sections";


// export const metadata: Metadata = {
//   title: "Oluwatomisin Bello",
//   description: "My Portfolio made with Love ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    useEffect( () => {

      const lenis = new Lenis({
      duration: 1.2,
      // easing: (t) => Math.min(1, 1.5 - Math.pow(t - 1, 2)),
    });


    interface RafFunction {
      (time: number): void;
    }

    const raf: RafFunction = function (time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };


    requestAnimationFrame(raf)

  }, [])
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
         <Header />
         <div className="pt-[12vh]">
            {children}
         </div>
        <Footer />    
        </ThemeProvider>
      </body>
    </html>
  );
}

