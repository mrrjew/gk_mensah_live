import { Poppins } from "next/font/google";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import "./globals.css";
import LayoutWrapper from "./layoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "G.K Mensah Live - The best place to find spiritual knowledge",
  description: "The best place to find God's word for your life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      {/* pt-[64px] */}
      <body className="bg-[#FFFFFF] text-base text-neutral-900 overflow-x-hidden max-w-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
