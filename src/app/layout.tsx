import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ADSENSE_ACCOUNT, GA_TAG } from "@/constants/env";

export const metadata: Metadata = {
  title: "Title",
  description: "description",
  other: {
    "google-adsense-account": ADSENSE_ACCOUNT,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <body>
        <header></header>
        <main className="text-center max-w-96 m-auto">{children}</main>
        <GoogleAnalytics gaId={GA_TAG} />
        <Analytics />
        <footer className="text-center p-4">
          <div>문의, 기능제안, 오류신고 편하게 해주세요 !</div>
          <a href="https://toss.me/seondal">이 사이트 만든 사람</a>
        </footer>
      </body>
    </html>
  );
}
