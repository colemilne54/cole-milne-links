'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Icon} from '@iconify/react';
import data from '../data/data';

type AudioCtor = typeof AudioContext;

function playPageTurnSound() {
   try {
      const Ctor: AudioCtor | undefined =
         window.AudioContext ||
         (window as unknown as {webkitAudioContext: AudioCtor}).webkitAudioContext;
      if (!Ctor) return;
      const ctx = new Ctor();
      const duration = 0.55;
      const bufferSize = Math.floor(ctx.sampleRate * duration);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const ch = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
         const t = i / bufferSize;
         const attack = t < 0.04 ? t / 0.04 : 1;
         const decay = Math.pow(1 - t, 2.2);
         const swish = 0.6 + 0.4 * Math.sin(t * 18);
         ch[i] = (Math.random() * 2 - 1) * attack * decay * swish * 0.55;
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 2800;
      filter.Q.value = 1.2;
      const gain = ctx.createGain();
      gain.gain.value = 0.85;
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start();
      source.onended = () => ctx.close().catch(() => {});

      // A soft thunk an instant later: the cover settling open
      const thunk = ctx.createOscillator();
      const thunkGain = ctx.createGain();
      thunk.type = 'sine';
      thunk.frequency.setValueAtTime(140, ctx.currentTime + 0.02);
      thunk.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.18);
      thunkGain.gain.setValueAtTime(0.0001, ctx.currentTime + 0.02);
      thunkGain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.05);
      thunkGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.32);
      thunk.connect(thunkGain).connect(ctx.destination);
      thunk.start(ctx.currentTime + 0.02);
      thunk.stop(ctx.currentTime + 0.34);
   } catch {
      // sound is a nice-to-have; never break the page over it
   }
}

function ClosedBook({onOpen}: {onOpen: () => void}) {
   const [opening, setOpening] = useState(false);

   const handleOpen = useCallback(() => {
      if (opening) return;
      setOpening(true);
      playPageTurnSound();
      window.setTimeout(onOpen, 980);
   }, [opening, onOpen]);

   const handleKey = useCallback(
      (e: React.KeyboardEvent) => {
         if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
         }
      },
      [handleOpen]
   );

   return (
      <div className="scene flex flex-col items-center justify-center min-h-screen px-4">
         <div className="relative" style={{transformStyle: 'preserve-3d'}}>
            <button
               type="button"
               onClick={handleOpen}
               onKeyDown={handleKey}
               aria-label="Open the book to see the table of contents"
               className={`book ${opening ? 'is-opening' : ''}`}
            >
               <div className="book__face book__back" aria-hidden />
               <div className="book__face book__spine" aria-hidden />
               <div className="book__face book__fore" aria-hidden />
               <div className="book__face book__head" aria-hidden />
               <div className="book__face book__tail" aria-hidden />
               <div className="book__face book__front" aria-hidden>
                  <div className="book__title-frame" />
                  <div className="book__title">
                     <div className="sub">A Personal Volume</div>
                     <div className="rule" />
                     <div className="name">
                        COLE
                        <br />
                        MILNE
                     </div>
                     <div className="rule" />
                     <div className="sub">Works &amp; Notes</div>
                     <div className="crest">❦</div>
                  </div>
               </div>
            </button>
            <div className="book-shadow" aria-hidden />
         </div>
         <p className="book-hint">
            <span className="pulse">Click the book to open</span>
         </p>
      </div>
   );
}

function OpenSpread({onClose}: {onClose: () => void}) {
   const closeRef = useRef<HTMLButtonElement>(null);
   useEffect(() => {
      closeRef.current?.focus();
   }, []);

   return (
      <div className="open-stage">
         <button
            ref={closeRef}
            className="close-book"
            onClick={() => {
               playPageTurnSound();
               onClose();
            }}
            aria-label="Close the book"
         >
            ✕ Close the book
         </button>

         <div className="open-book">
            <div
               className="spread"
               role="region"
               aria-label="Table of contents"
            >
               <div className="ribbon" aria-hidden />

               {/* LEFT PAGE — frontispiece / about */}
               <article className="page page-left paper" aria-label="About">
                  <div className="running-head">
                     <span>Cole Milne</span>
                     <span>Frontispiece</span>
                  </div>

                  <div className="chapter-eyebrow">In which we begin</div>
                  <h1 className="chapter-title">{data.name}</h1>
                  <div className="chapter-rule" />

                  <div className="prose-book">
                     {data.bio.map((para, idx) => (
                        <p key={idx}>{para}</p>
                     ))}
                  </div>

                  <div className="author-card">
                     <div className="avatar">
                        <Image
                           unoptimized
                           alt={data.alt}
                           src={data.avatar}
                           width={70}
                           height={70}
                           priority
                        />
                     </div>
                     <div className="meta">
                        <strong>{data.role}</strong>
                        <br />
                        {data.location} · open to contract &amp; full-time
                        <br />
                        <a
                           href={`mailto:${data.email}`}
                           style={{color: 'var(--leather)'}}
                        >
                           {data.email}
                        </a>
                     </div>
                  </div>

                  <div className="section-heading">Areas of practice</div>
                  <div className="skills-list" aria-label="Skills">
                     {data.skills.map((s) => (
                        <span key={s}>{s}</span>
                     ))}
                  </div>

                  <p className="epigraph">
                     “The best way to predict the future is to build it —
                     preferably by hand, preferably twice.”
                  </p>

                  <div className="folio">i</div>
               </article>

               {/* RIGHT PAGE — table of contents */}
               <article
                  className="page page-right paper"
                  aria-label="Table of contents"
               >
                  <div className="running-head">
                     <span>Contents</span>
                     <span>Volume I</span>
                  </div>

                  <div className="chapter-eyebrow">Volume I</div>
                  <h2 className="chapter-title">Table of Contents</h2>
                  <div className="chapter-rule" />

                  <div className="section-heading">Where to find me</div>
                  <TocList items={data.links} startPage={3} />

                  <div className="section-heading">Selected Projects</div>
                  <ProjectList
                     items={data.projects}
                     startPage={3 + data.links.length}
                  />

                  <p className="note-italic">
                     Many of my professional engagements are under NDA. I'm happy
                     to walk through relevant work in detail during a conversation.
                  </p>

                  <div className="folio">ii</div>
               </article>
            </div>
            <div className="open-book__drop" aria-hidden />
         </div>
      </div>
   );
}

function TocList({
   items,
   startPage,
}: {
   items: Array<{
      title: string;
      href: string;
      icon?: string;
      subtitle?: string;
      external?: boolean;
   }>;
   startPage: number;
}) {
   return (
      <ul className="toc">
         {items.map((item, idx) => {
            const pageNo = startPage + idx;
            const isExternal =
               item.external !== false && /^https?:/i.test(item.href);
            const inner = (
               <>
                  <span className="toc-row">
                     <span className="toc-label">
                        {item.icon ? (
                           <Icon icon={item.icon} width={17} height={17} aria-hidden />
                        ) : null}
                        <span>
                           {item.title}
                           {isExternal ? <span className="ext-mark"> ↗</span> : null}
                        </span>
                     </span>
                     <span className="leader" aria-hidden />
                     <span className="page-no">{String(pageNo).padStart(2, '0')}</span>
                  </span>
                  {item.subtitle ? (
                     <span className="toc-sub">{item.subtitle}</span>
                  ) : null}
               </>
            );
            return (
               <li key={item.href}>
                  {isExternal ? (
                     <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {inner}
                     </a>
                  ) : (
                     <Link href={item.href}>{inner}</Link>
                  )}
               </li>
            );
         })}
      </ul>
   );
}

function ProjectList({
   items,
   startPage,
}: {
   items: Array<{title: string; href: string}>;
   startPage: number;
}) {
   return (
      <ul className="toc-grid">
         {items.map((item, idx) => (
            <li key={item.href}>
               <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="pno">{String(startPage + idx).padStart(2, '0')}</span>
                  <span>
                     {item.title}
                     <span className="ext-mark"> ↗</span>
                  </span>
               </a>
            </li>
         ))}
      </ul>
   );
}

export default function Home() {
   const [opened, setOpened] = useState(false);

   useEffect(() => {
      if (typeof window !== 'undefined' && window.location.hash === '#contents') {
         setOpened(true);
      }
   }, []);

   return (
      <>
         <div className="table-surface" aria-hidden />

         {opened ? (
            <OpenSpread onClose={() => setOpened(false)} />
         ) : (
            <ClosedBook onOpen={() => setOpened(true)} />
         )}

         {/* SEO content: always in the DOM, hidden from sighted users while
             the book is closed but read by crawlers and screen readers. */}
         <div className="sr-only">
            <h1>{data.name}</h1>
            <p>
               {data.role}. {data.tagline}
            </p>
            {data.bio.map((p, i) => (
               <p key={i}>{p}</p>
            ))}
            <h2>Links</h2>
            <ul>
               {data.links.map((l) => (
                  <li key={l.href}>
                     <a href={l.href}>{l.title}</a>
                     {l.subtitle ? ` — ${l.subtitle}` : ''}
                  </li>
               ))}
            </ul>
            <h2>Projects</h2>
            <ul>
               {data.projects.map((p) => (
                  <li key={p.href}>
                     <a href={p.href}>{p.title}</a>
                     {p.subtitle ? ` — ${p.subtitle}` : ''}
                  </li>
               ))}
            </ul>
            <h2>Skills</h2>
            <ul>
               {data.skills.map((s) => (
                  <li key={s}>{s}</li>
               ))}
            </ul>
            <p>
               Contact: <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
         </div>
      </>
   );
}
