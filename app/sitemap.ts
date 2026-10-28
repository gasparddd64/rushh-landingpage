import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.rushh.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.rushh.fr/offre',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.rushh.fr/demonstrations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.rushh.fr/solutions/transaction-immobiliere',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.rushh.fr/solutions/syndics',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.rushh.fr/solutions/multi-sites',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.rushh.fr/ressources/appels-manques-immobilier',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.rushh.fr/ressources/telesecretariat-humain-ou-ia',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.rushh.fr/ressources/qualification-appels-vendeurs-acquereurs',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.rushh.fr/cgv',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://www.rushh.fr/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.rushh.fr/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.rushh.fr/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://www.rushh.fr/integrations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.rushh.fr/vs/joe-ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}
