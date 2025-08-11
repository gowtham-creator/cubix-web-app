import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const customFont = localFont({
  src: [
    {
      path: "./fonts/GraphikBlack.otf",
      weight: "900",
      style: "normal",
    },

    {
      path: "./fonts/GraphikBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GraphikSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GraphikRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GraphikLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GraphikExtralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cubixso",
  description:
    "We are a team of passionate engineers and design strategists, modernizing businesses with Digital Engineering, AI/ML, UI/UX, and Performance Marketing. From legacy transformation to future-ready experiences, we make innovation effortless.",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.className}  antialiased `}>
        {children}
      </body>
    </html>
  );
}
