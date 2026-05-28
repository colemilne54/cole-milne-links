import type {Metadata} from 'next';
import Link from 'next/link';
import data from '../../data/data';

export const metadata: Metadata = {
   title: 'The Library',
   description:
      'Essays, notes, and short dispatches from Cole Milne — on software craft, side projects, and the trade.',
   alternates: {
      canonical: `${data.siteUrl}/blog`,
   },
   openGraph: {
      title: `The Library · ${data.name}`,
      description:
         'Essays, notes, and short dispatches from Cole Milne on software craft and the trade.',
      url: `${data.siteUrl}/blog`,
      type: 'website',
   },
};

const formatDate = (iso: string) =>
   new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   });

export default function BlogIndex() {
   return (
      <>
         <div className="table-surface" aria-hidden />

         <main className="single-page parchment">
            <div className="parchment-fibers" style={{position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 4}} />
            <Link href="/" className="back-link">
               ← Back to the book
            </Link>

            <header style={{marginBottom: 28}}>
               <div className="chapter-eyebrow">Volume II</div>
               <h1 className="chapter-title">The Library</h1>
               <div className="chapter-rule" />
               <p
                  style={{
                     fontStyle: 'italic',
                     color: 'var(--ink-soft)',
                     lineHeight: 1.7,
                  }}
               >
                  A small shelf of essays — usually written between deploys, occasionally re-read in the morning to make sure I still mean it.
               </p>
            </header>

            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
               {data.posts.map((post, idx) => (
                  <li
                     key={post.slug}
                     style={{
                        padding: '22px 0',
                        borderTop:
                           idx === 0
                              ? '1px solid rgba(120,90,40,0.35)'
                              : 'none',
                        borderBottom: '1px solid rgba(120,90,40,0.35)',
                     }}
                  >
                     <Link
                        href={`/blog/${post.slug}`}
                        style={{
                           textDecoration: 'none',
                           color: 'var(--ink)',
                           display: 'block',
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              gap: 8,
                              fontVariant: 'small-caps',
                              letterSpacing: '0.18em',
                              fontSize: 11,
                              color: 'var(--gilt)',
                              marginBottom: 6,
                           }}
                        >
                           <time dateTime={post.date}>{formatDate(post.date)}</time>
                           <span>·</span>
                           <span>{post.readingTime}</span>
                        </div>
                        <h2
                           style={{
                              fontSize: 24,
                              margin: '0 0 8px',
                              fontWeight: 700,
                           }}
                        >
                           {post.title}
                        </h2>
                        <p
                           style={{
                              margin: 0,
                              color: 'var(--ink-soft)',
                              lineHeight: 1.65,
                           }}
                        >
                           {post.excerpt}
                        </p>
                        <div
                           style={{
                              marginTop: 10,
                              fontSize: 12,
                              fontVariant: 'small-caps',
                              letterSpacing: '0.2em',
                              color: 'var(--leather)',
                           }}
                        >
                           Read on →
                        </div>
                     </Link>
                  </li>
               ))}
            </ul>

            <div
               style={{
                  marginTop: 32,
                  textAlign: 'center',
                  fontVariant: 'small-caps',
                  letterSpacing: '0.2em',
                  fontSize: 12,
                  color: 'var(--ink-soft)',
               }}
            >
               ❦ End of shelf ❦
            </div>
         </main>
      </>
   );
}
