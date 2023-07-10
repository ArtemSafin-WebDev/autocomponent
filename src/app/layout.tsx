import Header from "@/components/Header/Header";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { fetchLayoutData } from "@/clientApi/fetchLayoutData";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Автокомпонент",
  description: "",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 1600,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchLayoutData();

  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header headerCatalogCategories={data.headerCatalogCategories} />
        <main>{children}</main>
        <Footer
          offices={data.offices}
          advantages={data.advantages}
          footerMenuCategories={data.footerMenuCategories}
        />
      </body>
    </html>
  );
}
