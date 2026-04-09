import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://choicenownet.site"),
  title: "ChoiceNowNet - 探索 AI 驱动的智能与互动创新产品集合",
  description: "ChoiceNowNet 致力于通过 AI 驱动的创新技术，为您打造高效、有趣的智能数字生活体验。我们的产品集合包括 AI 情境英语 (Contexta) 沉浸式学习平台和云摸鱼 (FinTap) 3D 虚拟水族馆，旨在探索未来互动与娱乐的无限可能，提升您的数字化生活品质。",
  keywords: ["ChoiceNowNet", "AI情境英语", "云摸鱼", "FinTap", "Contexta", "智能生活", "AI学习"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ChoiceNowNet - 探索 AI 驱动的智能与互动创新产品集合",
    description: "ChoiceNowNet 致力于通过 AI 驱动的创新技术，为您打造高效、有趣的智能数字生活体验。我们的产品集合包括 AI 情境英语 (Contexta) 沉浸式学习平台和云摸鱼 (FinTap) 3D 虚拟水族馆。",
    url: "https://choicenownet.site",
    siteName: "ChoiceNowNet",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "ChoiceNowNet Logo",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChoiceNowNet - 探索 AI 驱动的智能 with 互动创新产品集合",
    description: "发现未来的数字生活方式。汇集 AI 情境英语 (Contexta) 与云摸鱼 (FinTap) 等前沿产品，为您打造高效、有趣的智能互动体验。",
    images: ["/logo.png"],
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
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://choicenownet.site/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://contexta.choicenownet.site/#software",
                  "name": "AI情境英语 (Contexta)",
                  "alternateName": "Contexta",
                  "description": "AI情境英语利用大语言模型（LLM）为每个单词即时生成真实语境故事与例句，结合艾宾浩斯记忆曲线自动安排复习计划，让您的孩子在沉浸式阅读中高效积累英语词汇。",
                  "applicationCategory": "EducationalApplication",
                  "applicationSubCategory": "Language Learning",
                  "operatingSystem": "Web, Windows, macOS, Linux, iOS, Android",
                  "url": "https://contexta.choicenownet.site",
                  "image": "https://contexta.choicenownet.site/og-image.webp",
                  "screenshot": "https://contexta.choicenownet.site/og-image.webp",
                  "featureList": [
                    "AI 实时语境生成：不再死记硬背孤立的释义",
                    "动态故事模式：由 AI 编写包含目标单词的连贯短篇故事",
                    "艾宾浩斯自适应复习：科学规划复习周期，效率提升 300%",
                    "蓝思 (Lexile) 分级支持：根据学生水平定制内容难度"
                  ],
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "AI情境英语团队",
                    "url": "https://contexta.choicenownet.site",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://contexta.choicenownet.site/logo.webp"
                    }
                  },
                  "publisher": {
                    "@id": "https://contexta.choicenownet.site/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://contexta.choicenownet.site/#organization",
                  "name": "AI情境英语 (Contexta)",
                  "url": "https://contexta.choicenownet.site",
                  "logo": "https://contexta.choicenownet.site/logo.webp",
                  "sameAs": [
                    "https://github.com/and80506/contexta"
                  ]
                },
                {
                  "@type": "FAQSection",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "什么是 AI 情境英语 (Contexta)？",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Contexta 是一款基于大语言模型（LLM）的高级英语单词学习平台。它打破了传统的死记硬背，通过实时生成的真实语境和连贯故事，让学习者在理解中掌握词汇。"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "它是如何利用艾宾浩斯记忆曲线的？",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "系统会自动追踪每个单词的学习状态，并根据艾宾浩斯遗忘曲线，在最佳的时间节点提醒用户复习，从而将短期记忆转化为长期记忆。"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "支持哪些难度的英语学习？",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Contexta 支持蓝思 (Lexile) 分级阅读系统，难度涵盖 200L 到 600L+，可以满足从小学到初中等不同阶段的学习需求。"
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
        <a href="#main-content" className="skip-link">跳到主要内容</a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
