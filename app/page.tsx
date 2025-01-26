'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import data from '../data/data'
import {Info} from 'lucide-react';

// Solarized Light color palette
const lightTheme = {
   base03: '#002b36',
   base02: '#073642',
   base01: '#586e75',
   base00: '#657b83',
   base0: '#839496',
   base1: '#93a1a1',
   base2: '#eee8d5',
   base3: '#fdf6e3',
   yellow: '#b58900',
   orange: '#cb4b16',
   red: '#dc322f',
   magenta: '#d33682',
   violet: '#6c71c4',
   blue: '#268bd2',
   cyan: '#2aa198',
   green: '#859900'
};

// Terminal theme colors
const terminalTheme = {
   background: '#000000',
   text: '#00ff00',
   dimText: '#00cc00',
   border: '#004400',
   hover: '#001100',
   shadow: '0 0 10px rgba(0, 255, 0, 0.2)'
};

function InfoTooltip({easterEggFound}: { easterEggFound: boolean }) {
   const theme = easterEggFound ? terminalTheme : lightTheme;

   return (
      <div className="relative group mb-6">
         <div
            className={`cursor-pointer transition-colors ${easterEggFound ? 'text-[#00ff00]' : 'text-[#586e75] hover:text-[#073642]'}`}>
            <Info size={20}/>
         </div>
         <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-96 border ${
               easterEggFound
                  ? 'bg-black text-[#00ff00] border-[#004400]'
                  : 'bg-[#fdf6e3] text-[#657b83] border-[#eee8d5]'
            }`}>
            <div className={`text-center leading-relaxed ${easterEggFound ? 'font-mono' : ''}`}>
               The projects showcased here represent a selection of my personal side work and explorations. While many
               of my professional and client projects are protected under NDAs, I'm happy to provide detailed
               walkthroughs or demos of relevant work during our discussions as needed.
            </div>
            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r rotate-45 ${
               easterEggFound
                  ? 'bg-black border-[#004400]'
                  : 'bg-[#fdf6e3] border-[#eee8d5]'
            }`}/>
         </div>
      </div>
   );
}

function LinkCard({title, href, image, classes, easterEggFound}: {
   title: string,
   href: string,
   image?: string,
   classes?: string,
   easterEggFound: boolean
}) {
   const theme = easterEggFound ? terminalTheme : lightTheme;

   return (
      <a
         href={href}
         className={`block w-full rounded-lg hover:scale-102 transition-all mb-4 max-w-2xl shadow-sm hover:shadow-md p-3 group ${
            easterEggFound
               ? 'bg-black border border-[#004400] hover:bg-[#001100]'
               : 'bg-[#fdf6e3] border border-[#eee8d5] hover:bg-[#eee8d5]'
         }`}
         style={{
            boxShadow: easterEggFound ? '0 0 10px rgba(0, 255, 0, 0.2)' : '0 2px 4px rgba(0, 43, 54, 0.05)'
         }}
      >
         <div className="grid grid-cols-[40px_1fr_40px] items-center w-full">
            <div className="w-10 h-10">
               {image && (
                  <Image
                     unoptimized
                     className={`rounded-md ${easterEggFound ? 'opacity-80 grayscale' : ''}`}
                     alt={title}
                     src={image}
                     width={40}
                     height={40}
                  />
               )}
            </div>
            <h2 className={`text-center font-medium transition-colors ${
               easterEggFound
                  ? 'text-[#00ff00] font-mono'
                  : 'text-[#657b83] group-hover:text-[#586e75]'
            } ${classes}`}>
               {title}
            </h2>
            <div/>
         </div>
      </a>
   );
}

export default function Home() {
   const [konami, setKonami] = useState([]);
   const [clickCount, setClickCount] = useState(0);
   const [easterEggFound, setEasterEggFound] = useState(false);

   useEffect(() => {
      const konamiCode = [
         'ArrowUp', 'ArrowUp',
         'ArrowDown', 'ArrowDown',
         'ArrowLeft', 'ArrowRight',
         'ArrowLeft', 'ArrowRight',
         'b', 'a'
      ];

      const handleKeyDown = (e: { key: any; }) => {
         const newKonami = [...konami, e.key];
         if (newKonami.length > konamiCode.length) {
            newKonami.shift();
         }
         // @ts-ignore
         setKonami(newKonami);

         if (JSON.stringify(newKonami) === JSON.stringify(konamiCode)) {
            setEasterEggFound(true);
         }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
   }, [konami]);

   return (
      <div className={`min-h-screen transition-all duration-500 ${
         easterEggFound
            ? 'bg-black'
            : 'bg-[rgb(235,230,219)] bg-grain'
      }`}
           style={{
              backgroundImage: easterEggFound ? 'none' : 'url(/noise.png)',
              backgroundSize: '1440px auto'
           }}>
         <div className="flex flex-col items-center mx-auto w-full justify-center pt-16 px-6 pb-16">
            <div className="mb-8 relative">
               <div className={`w-24 h-24 rounded-full overflow-hidden border-4 shadow-lg ${
                  easterEggFound
                     ? 'border-[#004400]'
                     : 'border-[#fdf6e3]'
               }`}
                    style={{
                       boxShadow: easterEggFound ? '0 0 10px rgba(0, 255, 0, 0.2)' : '0 4px 6px rgba(0, 43, 54, 0.1)'
                    }}>
                  <Image
                     unoptimized
                     alt={data.alt}
                     src={data.avatar}
                     width={96}
                     height={96}
                     className={`object-cover ${easterEggFound ? 'grayscale brightness-75' : ''}`}
                     priority
                  />
               </div>
            </div>

            <h1 className={`font-semibold text-2xl cursor-pointer ${
               easterEggFound
                  ? 'text-[#00ff00] font-mono'
                  : 'text-[#002b36]'
            }`}
                onClick={() => setClickCount(prev => prev + 1)}>
               {data.name}
               {!easterEggFound && (
                  <span className="ml-2 text-sm text-gray-400 hover:text-gray-800">(click me!)</span>
               )}
            </h1>

            {clickCount > 0 && clickCount < 5 && (
               <p className={`text-sm mt-4 animate-bounce ${
                  easterEggFound
                     ? 'text-[#00cc00] font-mono'
                     : 'text-[#657b83]'
               }`}>
                  Keep clicking! ({5 - clickCount} more to go)
               </p>
            )}

            {clickCount >= 5 && !easterEggFound && (
               <p className={`text-sm mt-4 font-bold ${
                  easterEggFound
                     ? 'text-[#00ff00] font-mono'
                     : 'text-[#657b83]'
               }`}>
                  Achievement unlocked! Now try the Konami code: ↑↑↓↓←→←→BA
               </p>
            )}

            <div className="w-full max-w-2xl mt-8">
               {data.links.map((link) => (
                  <LinkCard key={link.href} {...link} easterEggFound={easterEggFound}/>
               ))}

               <h2 className={`font-semibold mt-8 mb-4 text-xl text-center ${
                  easterEggFound
                     ? 'text-[#00ff00] font-mono'
                     : 'text-[#002b36]'
               }`}>
                  Projects
               </h2>

               <div className="flex justify-center">
                  <InfoTooltip easterEggFound={easterEggFound}/>
               </div>

               {data.projects.map((link) => (
                  <LinkCard key={link.href} {...link} easterEggFound={easterEggFound}/>
               ))}
            </div>
         </div>

         {easterEggFound && (
            <div
               className="fixed bottom-4 right-4 bg-[#001100] text-[#00ff00] px-4 py-2 rounded-full animate-bounce font-mono border border-[#004400]">
               &gt; TERMINAL MODE ACTIVATED_
            </div>
         )}
      </div>
   );
}