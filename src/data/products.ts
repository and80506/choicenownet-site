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
        id: "fintap",
        name: "云摸鱼 (FinTap)",
        description: "沉浸式 3D 虚拟水族馆，为您提供可互动的鱼缸体验。无需注册，即开即养，在舒缓的视听效果中享受深海宁静。",
        url: "https://fintap.choicenownet.site/",
        sitemapUrl: "https://fintap.choicenownet.site/sitemap.xml",
        icon: "🐠",
        features: ["沉浸式 3D 视听体验", "实时互动养鱼操作", "无需注册，即开即用"]
    },
    {
        id: "contexta",
        name: "AI 情境英语 (Contexta)",
        description: "基于 AI 的语境化英语学习平台。利用大语言模型实时生成个性化语境和故事，并结合艾宾浩斯记忆曲线算法，助您在真实情境中高效掌握地道表达。",
        url: "https://contexta.choicenownet.site/",
        sitemapUrl: "https://contexta.choicenownet.site/sitemap.xml",
        icon: "🧠",
        features: ["AI 动态语境生成", "艾宾浩斯记忆算法", "沉浸式故事学习模式"]
    }
];
