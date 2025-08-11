import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header, Footer } from "@/sections";

export const metadata: Metadata = {
  title: "Oluwatomisin Bello",
  description: "My Portfolio made with Love ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
         <div className="pt-[15vh] h-[100vh]">
            {children}
         </div>
        <Footer />    
        </ThemeProvider>
      </body>
    </html>
  );
}

