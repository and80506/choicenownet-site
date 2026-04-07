import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChoiceNowNet - 探索智能与互动的产品集合",
  description: "ChoiceNowNet 汇集了 AI 情境英语 (Contexta) 和 云摸鱼 (FinTap) 等前沿数字产品。通过 AI 和互动技术，为您带来高效、有趣的智能生活体验。",
  keywords: ["ChoiceNowNet", "AI情境英语", "云摸鱼", "FinTap", "Contexta", "智能生活", "AI学习"],
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
  icons: {
    icon: "/favicon.webp",
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
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://choicenownet.site/#website",
                  "url": "https://choicenownet.site",
                  "name": "ChoiceNowNet",
                  "description": "汇集 AI 情境英语、云摸鱼等前沿智能产品。",
                  "publisher": {
                    "@type": "Organization",
                    "name": "ChoiceNowNet"
                  }
                },
                {
                  "@type": "WebApplication",
                  "name": "AI 情境英语 (Contexta)",
                  "url": "https://contexta.choicenownet.site",
                  "description": "利用 AI 技术在真实生活情境中学习英语，告别死记硬背，掌握地道的表达方式。",
                  "operatingSystem": "Web Browser",
                  "applicationCategory": "EducationApplication",
                  "genre": "Language Learning, AI Education",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "ChoiceNowNet"
                  },
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "AI 英语学习的效果如何？",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Contexta 通过模拟真实场景，让学习者在应用中记忆单词，远比单纯背词表效率更高。"
                      }
                    }
                  ]
                },
                {
                  "@type": "WebApplication",
                  "name": "云摸鱼 (FinTap)",
                  "image": [
                    "https://fintap.choicenownet.site/images/fintap-icon-1x1.webp",
                    "https://fintap.choicenownet.site/images/fintap-screenshot-4x3.webp",
                    "https://fintap.choicenownet.site/images/fintap-banner-16x9.webp"
                  ],
                  "url": "https://fintap.choicenownet.site",
                  "description": "沉浸式 3D 虚拟水族馆，为您提供可互动的鱼缸体验。无需注册，即开即养，在舒缓的视听效果中享受深海宁静。",
                  "operatingSystem": "Web Browser",
                  "applicationCategory": "GameApplication",
                  "genre": "Virtual Pet, Simulation, 3D Aquarium",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "ChoiceNowNet"
                  },
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "最低系统要求是什么？",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "FinTap 为现代 Web 浏览器进行了高度优化。建议使用至少具有 4GB RAM 且带有集成或独立显卡的设备。"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "我可以在移动设备上体验吗？",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的！FinTap 拥有完全响应式的移动优先界面。您可以直接从智能手机浏览器中管理您的水族馆。"
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
