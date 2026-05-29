import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import data from '../../../data/data';

type Params = {slug: string};

export async function generateStaticParams(): Promise<Params[]> {
   return data.posts.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
   const post = data.posts.find((p) => p.slug === params.slug);
   if (!post) return {title: 'Not Found'};
   const url = `${data.siteUrl}/blog/${post.slug}`;
   return {
      title: post.title,
      description: post.excerpt,
      alternates: {canonical: url},
      openGraph: {
         title: post.title,
         description: post.excerpt,
         url,
         type: 'article',
         publishedTime: post.date,
         authors: [data.name],
      },
      twitter: {
         card: 'summary_large_image',
         title: post.title,
         description: post.excerpt,
      },
   };
}

const formatDate = (iso: string) =>
   new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   });

export default function BlogPost({params}: {params: Params}) {
   const post = data.posts.find((p) => p.slug === params.slug);
   if (!post) notFound();

   const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {'@type': 'Person', name: data.name, url: data.siteUrl},
      mainEntityOfPage: `${data.siteUrl}/blog/${post.slug}`,
   };

   return (
      <>
         <div className="table-surface" aria-hidden />

         <div className="single-stage">
         <article className="single-page paper">
            <Link href="/blog" className="back-link">
               ← Back to the Library
            </Link>

            <div className="running-head">
               <span>The Library</span>
               <span>Cole Milne</span>
            </div>

            <header style={{marginBottom: 24}}>
               <div
                  style={{
                     fontVariant: 'small-caps',
                     letterSpacing: '0.2em',
                     fontSize: 11,
                     color: 'var(--gilt)',
                     marginBottom: 6,
                  }}
               >
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span> · </span>
                  {post.readingTime}
               </div>
               <h1 className="chapter-title">{post.title}</h1>
               <div className="chapter-rule" />
            </header>

            <div className="prose-book">
               {post.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
               ))}
            </div>

            <footer
               style={{
                  marginTop: 36,
                  paddingTop: 18,
                  borderTop: '1px solid rgba(120,90,40,0.35)',
                  fontSize: 13,
                  color: 'var(--ink-soft)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 12,
               }}
            >
               <span>
                  Written by <strong style={{color: 'var(--ink)'}}>{data.name}</strong>
               </span>
               <Link
                  href="/blog"
                  style={{
                     color: 'var(--leather)',
                     fontVariant: 'small-caps',
                     letterSpacing: '0.2em',
                     fontSize: 12,
                     textDecoration: 'none',
                  }}
               >
                  More from the library →
               </Link>
            </footer>

            <div className="endmark" aria-hidden>
               ❦
            </div>
            <div className="folio" style={{left: '50%', transform: 'translateX(-50%)'}}>
               {post.title}
            </div>

            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}}
            />
         </article>
         </div>
      </>
   );
}
