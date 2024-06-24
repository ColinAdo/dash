import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Daashboard using shadcn-ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full text-black bg-white flex",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        {children}
      </body>
    </html>
  );
}
