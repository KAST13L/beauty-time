import "./globals.css";
import { Inter } from "next/font/google";
import PersistentDrawerLeft from "@/components/Header/PersistentDrawerLeft";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beauty time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PersistentDrawerLeft children={children} />
      </body>
    </html>
  );
}
