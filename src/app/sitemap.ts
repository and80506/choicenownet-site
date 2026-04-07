import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://choicenownet.site',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // 主站可以链接到子域名的主要入口
    {
      url: 'https://fintap.choicenownet.site/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://contexta.choicenownet.site/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
