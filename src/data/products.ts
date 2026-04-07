export interface Product {
    id: string;
    name: string;
    description: string;
    url: string;
    sitemapUrl: string;
    icon: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: "contexta",
        name: "AI 情境英语 (Contexta)",
        description: "利用大语言模型 (LLM) 为每个单词即时生成真实语境故事与例句，结合艾宾浩斯记忆曲线自动安排复习计划，让您的孩子在沉浸式阅读中高效积累英语词汇。",
        url: "https://contexta.choicenownet.site/",
        sitemapUrl: "https://contexta.choicenownet.site/sitemap.xml",
        icon: "🧠",
        features: [
            "AI 实时语境生成：不再死记硬背孤立的释义",
            "动态故事模式：由 AI 编写包含目标单词的连贯短篇故事",
            "艾宾浩斯自适应复习：科学规划复习周期",
            "蓝思 (Lexile) 分级支持：根据学生水平定制内容难度"
        ]
    },
    {
        id: "fintap",
        name: "云摸鱼 (FinTap)",
        description: "沉浸式 3D 虚拟水族馆，为您提供可互动的鱼缸体验。无需注册，即开即养，在舒缓的视听效果中享受深海宁静。",
        url: "https://fintap.choicenownet.site/",
        sitemapUrl: "https://fintap.choicenownet.site/sitemap.xml",
        icon: "🐠",
        features: ["沉浸式 3D 视听体验", "实时互动养鱼操作", "无需注册，即开即用"]
    }
];
