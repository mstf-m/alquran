import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALQURAN",
  description:
    "Explore the profound wisdom of the Quran on our website. Dive into detailed interpretations, accurate translations, and insightful articles. Discover the beauty of the Quran’s famous verses and their relevance in today’s world. Join us in our journey of faith and understanding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
