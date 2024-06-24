import "./globals.css";
import { Providers } from "@/providers/providers";

export const metadata = {
  title: "ALQURAN",
  description:
    "Explore the profound wisdom of the Quran on our website. Dive into detailed interpretations, accurate translations, and insightful articles. Discover the beauty of the Quran’s famous verses and their relevance in today’s world. Join us in our journey of faith and understanding.",
  applicationName: "ALQURAN",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ALQURAN",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "APP_NAME",
    title: {
      default: "ALQURAN",
      template: "ALQURAN",
    },
    description:
      "Explore the profound wisdom of the Quran on our website. Dive into detailed interpretations, accurate translations, and insightful articles. Discover the beauty of the Quran’s famous verses and their relevance in today’s world. Join us in our journey of faith and understanding.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "ALQURAN",
      template: "ALQURAN",
    },
    description:
      "Explore the profound wisdom of the Quran on our website. Dive into detailed interpretations, accurate translations, and insightful articles. Discover the beauty of the Quran’s famous verses and their relevance in today’s world. Join us in our journey of faith and understanding.",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
