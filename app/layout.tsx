import './globals.css';
import type {Metadata} from 'next';
import {GoogleAnalytics} from '@next/third-parties/google';
import data from '../data/data';

const siteUrl = data.siteUrl;
const description =
   "Cole Milne — software engineer, independent builder. Available for contract engineering work and full-time roles. Browse the library, the workshop, and a catalog of side projects.";

export const metadata: Metadata = {
   metadataBase: new URL(siteUrl),
   title: {
      default: `${data.name} — ${data.role}`,
      template: `%s · ${data.name}`,
   },
   description,
   applicationName: `${data.name} — Personal Site`,
   authors: [{name: data.name, url: siteUrl}],
   creator: data.name,
   publisher: data.name,
   keywords: [
      'Cole Milne',
      'software engineer',
      'full-stack developer',
      'contract engineer',
      'freelance developer',
      'TypeScript',
      'Next.js',
      'React',
      'web development',
      'personal portfolio',
      ...data.skills,
   ],
   category: 'technology',
   alternates: {
      canonical: siteUrl,
   },
   openGraph: {
      type: 'profile',
      url: siteUrl,
      siteName: `${data.name}`,
      title: `${data.name} — ${data.role}`,
      description,
      locale: 'en_US',
      images: [
         {
            url: data.avatar,
            width: 460,
            height: 460,
            alt: data.alt,
         },
      ],
      firstName: 'Cole',
      lastName: 'Milne',
      username: 'colemilne54',
   },
   twitter: {
      card: 'summary_large_image',
      title: `${data.name} — ${data.role}`,
      description,
      images: [data.avatar],
      creator: '@colemilne54',
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-image-preview': 'large',
         'max-snippet': -1,
         'max-video-preview': -1,
      },
   },
   icons: {
      icon: '/favicon.ico',
   },
};

const personJsonLd = {
   '@context': 'https://schema.org',
   '@type': 'Person',
   name: data.name,
   url: siteUrl,
   image: data.avatar,
   jobTitle: data.role,
   description,
   email: `mailto:${data.email}`,
   address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
   },
   sameAs: [
      'https://www.linkedin.com/in/colemilne/',
      'https://www.github.com/colemilne54',
   ],
   knowsAbout: data.skills,
};

const websiteJsonLd = {
   '@context': 'https://schema.org',
   '@type': 'WebSite',
   name: `${data.name} — ${data.role}`,
   url: siteUrl,
   inLanguage: 'en-US',
   author: {
      '@type': 'Person',
      name: data.name,
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <head>
            <meta name="theme-color" content="#e9dfc7" />
            <link
               rel="preconnect"
               href="https://avatars.githubusercontent.com"
               crossOrigin=""
            />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
            />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
            />
         </head>
         <GoogleAnalytics gaId="G-Q517XP6HKT" />
         <body>{children}</body>
      </html>
   );
}
