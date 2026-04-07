import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChoiceNowNet - 探索智能与互动的产品集合",
  description: "ChoiceNowNet 汇集了云养鱼 (FinTap) 和 AI 情境英语 (Contexta) 等前沿数字产品。通过 AI 和互动技术，为您带来高效、有趣的智能生活体验。",
  keywords: ["ChoiceNowNet", "云养鱼", "AI情境英语", "FinTap", "Contexta", "智能生活", "AI学习"],
  openGraph: {
    title: "ChoiceNowNet - 智能产品集合",
    description: "发现未来的数字生活方式。汇集 AI 学习与互动娱乐产品。",
    url: "https://choicenownet.site",
    siteName: "ChoiceNowNet",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChoiceNowNet - 智能产品集合",
    description: "发现未来的数字生活方式。汇集 AI 学习与互动娱乐产品。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ChoiceNowNet",
              "url": "https://choicenownet.site",
              "description": "ChoiceNowNet 汇集了云养鱼 (FinTap) 和 AI 情境英语 (Contexta) 等前沿数字产品。",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://choicenownet.site/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
