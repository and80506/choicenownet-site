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
        name: "云养鱼",
        description: "在桌面或浏览器中体验最真实的线上养鱼，放松身心，享受宁静的数字水族馆。",
        url: "https://fintap.choicenownet.site/",
        sitemapUrl: "https://fintap.choicenownet.site/sitemap.xml",
        icon: "🐠",
        features: ["多种鱼类收藏", "实时交互体验", "精美水景设计"]
    },
    {
        id: "contexta",
        name: "AI 情境英语",
        description: "利用 AI 技术在真实生活情境中学习英语，告别死记硬背，掌握地道的表达方式。",
        url: "https://contexta.choicenownet.site/",
        sitemapUrl: "https://contexta.choicenownet.site/sitemap.xml",
        icon: "🗣️",
        features: ["AI 真实对话", "场景化词汇", "智能发音评估"]
    }
];
