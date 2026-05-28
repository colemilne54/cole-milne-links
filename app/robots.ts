import type {MetadataRoute} from 'next';
import data from '../data/data';

export default function robots(): MetadataRoute.Robots {
   return {
      rules: [
         {
            userAgent: '*',
            allow: '/',
         },
      ],
      sitemap: `${data.siteUrl.replace(/\/$/, '')}/sitemap.xml`,
   };
}
