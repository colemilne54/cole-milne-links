import type {MetadataRoute} from 'next';
import data from '../data/data';

export default function sitemap(): MetadataRoute.Sitemap {
   const base = data.siteUrl.replace(/\/$/, '');
   const now = new Date();
   return [
      {url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1},
      {url: `${base}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.8},
      {
         url: `${base}/playground`,
         lastModified: now,
         changeFrequency: 'monthly',
         priority: 0.6,
      },
      ...data.posts.map((p) => ({
         url: `${base}/blog/${p.slug}`,
         lastModified: new Date(p.date),
         changeFrequency: 'yearly' as const,
         priority: 0.7,
      })),
   ];
}
