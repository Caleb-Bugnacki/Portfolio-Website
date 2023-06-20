import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Caleb Bugnacki",
  description: "Caleb Bugnacki's Portfolio Webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
