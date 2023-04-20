import Image from 'next/image'
import data from '../data.json'

function LinkCard({ 
  title, 
  href,
  image 
} : {
  title: string, 
  href: string, 
  image?: string 
}) {
  return (
    <a href={href} className='flex items-center p-1 w-full rounded-md
    hover:scale-105 transition-all border bg-gray-100 mb-3 max-w-3xl'>
      <div className="flex text-center w-full">
        <div className='w-10 h-10'>
          {image && (
            <Image 
              className='rounded-sm'
              alt={title}
              src={image}
              width={48}
              height={48}
            />
          )}
        </div>
        <h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full 
    justify-center mt-16 px-8">
      <Image 
        alt={data.alt}
        src={data.avatar}
        width={96}
        height={96}
        className='rounded-full'
      />
      <h1 className='font-bold mt-4 mb-8 text-xl text-white'>{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}