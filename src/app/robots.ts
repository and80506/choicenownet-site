import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'Bytespider', 'Amazonbot'],
        allow: '/',
      }
    ],
    sitemap: [
      'https://choicenownet.site/sitemap.xml',
      'https://fintap.choicenownet.site/sitemap.xml',
      'https://contexta.choicenownet.site/sitemap.xml',
    ],
  };
}
