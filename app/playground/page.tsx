import type {Metadata} from 'next';
import Link from 'next/link';
import data from '../../data/data';

export const metadata: Metadata = {
   title: 'The Workshop',
   description:
      'An in-progress page of sketches and experiments by Cole Milne — notes from the workbench.',
   alternates: {canonical: `${data.siteUrl}/playground`},
   openGraph: {
      title: `The Workshop · ${data.name}`,
      description: 'Sketches and experiments — a page in progress.',
      url: `${data.siteUrl}/playground`,
      type: 'website',
   },
};

const experiments = [
   {
      name: 'Citrus-Press Color System',
      status: 'In progress',
      note: 'A small set of accessible warm-neutral palettes I keep reaching for. Tools that pass WCAG without looking like a hospital.',
   },
   {
      name: 'Margin-Notes Reader',
      status: 'Sketch',
      note: 'A reading layout that surfaces footnotes in the page margin instead of the bottom, so long-form essays read more like a printed book.',
   },
   {
      name: 'Tiny Markov Headlines',
      status: 'Demo',
      note: 'A 60-line Markov chain that generates plausible newsletter subject lines from a small corpus. Mostly a toy. Occasionally uncanny.',
   },
   {
      name: 'Receipt-Style Diff Viewer',
      status: 'Idea',
      note: 'A code-diff viewer that looks like a printed receipt. Header, mono lines, perforated bottom edge. Yes, I know how this sounds.',
   },
];

export default function Workshop() {
   return (
      <>
         <div className="table-surface" aria-hidden />

         <div className="single-stage">
         <main className="single-page paper">
            <Link href="/" className="back-link">
               ← Back to the book
            </Link>

            <div className="running-head">
               <span>Cole Milne</span>
               <span>The Workshop</span>
            </div>

            <header style={{marginBottom: 24}}>
               <div className="chapter-eyebrow">Appendix</div>
               <h1 className="chapter-title">The Workshop</h1>
               <div className="chapter-rule" />
               <p style={{fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.7}}>
                  This is a page in progress — a workbench. Some of these are running, some are still pencil sketches in a notebook. Nothing here is polished, which is the point.
               </p>
            </header>

            <section style={{marginBottom: 36}}>
               <div className="section-heading">On the workbench</div>
               <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  {experiments.map((e, idx) => (
                     <li
                        key={e.name}
                        style={{
                           padding: '18px 0',
                           borderTop:
                              idx === 0
                                 ? '1px solid rgba(120,90,40,0.35)'
                                 : 'none',
                           borderBottom: '1px solid rgba(120,90,40,0.35)',
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              justifyContent: 'space-between',
                              gap: 14,
                              flexWrap: 'wrap',
                           }}
                        >
                           <h2 style={{margin: 0, fontSize: 20, fontWeight: 700}}>
                              {e.name}
                           </h2>
                           <span
                              style={{
                                 fontVariant: 'small-caps',
                                 letterSpacing: '0.2em',
                                 fontSize: 11,
                                 color: 'var(--gilt)',
                              }}
                           >
                              {e.status}
                           </span>
                        </div>
                        <p
                           style={{
                              margin: '8px 0 0',
                              color: 'var(--ink-soft)',
                              lineHeight: 1.7,
                           }}
                        >
                           {e.note}
                        </p>
                     </li>
                  ))}
               </ul>
            </section>

            <section style={{marginBottom: 32}}>
               <div className="section-heading">A note in the margin</div>
               <p style={{color: 'var(--ink-soft)', lineHeight: 1.75}}>
                  If something on this shelf catches your eye and you'd like to talk
                  through how I'd take it from sketch to shipped, the kettle is on.
                  You can reach me at{' '}
                  <a
                     href={`mailto:${data.email}`}
                     style={{color: 'var(--leather)'}}
                  >
                     {data.email}
                  </a>
                  .
               </p>
            </section>

            <div className="endmark" aria-hidden>
               ❦
            </div>
            <div className="folio" style={{left: '50%', transform: 'translateX(-50%)'}}>
               The Workshop
            </div>
         </main>
         </div>
      </>
   );
}
