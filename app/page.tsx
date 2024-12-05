import Image from 'next/image'
import data from '../data/data'

function InfoTooltip() {
   return (
      <div className="relative group mb-3">
         <div className="cursor-pointer text-gray-500 hover:text-gray-700">
            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/>
               <path d="M12 17V11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
               <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#FFFFFF"/>
            </svg>
         </div>

         <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-96">
            <div className="text-center">The projects showcased here represent a selection of my personal side work and explorations. While many of my professional and client projects are protected under NDAs, I'm happy to provide detailed walkthroughs or demos of relevant work during our discussions as needed.</div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"/>
         </div>
      </div>
   );
};


function LinkCard({title, href, image, classes}: { title: string, href: string, image?: string, classes?: string }) {
   return (
      <a href={href}
         className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all border bg-gray-100 mb-3 max-w-3xl'>
         <div className="flex text-center w-full">
            <div className='w-10 h-10'>
               {image && (
                  <Image
                     unoptimized
                     className='rounded-sm'
                     alt={title}
                     src={image}
                     width={48}
                     height={48}
                  />
               )}
            </div>
            <h2 className={`flex justify-center items-center font-semibold w-full text-gray-700 -ml-10 ${classes}`}>
               {title}
            </h2>
         </div>
      </a>
   )
}

export default function Home() {
   return (
      <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
         <Image
            unoptimized
            alt={data.alt}
            src={data.avatar}
            width={96}
            height={96}
            className='rounded-full'
            priority
         />
         <h1 className='font-bold mt-4 mb-8 text-xl text-white'>{data.name}</h1>
         {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
         ))}
         <h2 className='font-bold mt-4 mb-2 text-xl text-white'>
            Projects
         </h2>
         <InfoTooltip />
         {data.projects.map((link) => (
            <LinkCard key={link.href} {...link} />
         ))}
      </div>
   );
}
