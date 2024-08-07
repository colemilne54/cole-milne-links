import Image from 'next/image'
// import data from '/data.json'

const data = 
{
  "name": "Cole Milne",
  "alt": "Cole Milne headshot image",
  "avatar": "https://avatars.githubusercontent.com/u/20178496?v=4",
  "links": [
      {
          "title": "LinkedIn",
          "href": "https://www.linkedin.com/in/colemilne/",
          "image": "/linkedin.svg"
      },
      {
          "title": "GitHub",
          "href": "https://www.github.com/colemilne54",
          "image": "/github.svg"
      },
      {
          "title": "3D Resume (Outdated content, but still worth a look)",
          "href": "https://colemilne54.github.io/fireship-threejs/",
          "image": "/threejs.svg",
          "classes": "px-12"
      },
      {
          "title": "The Milne Empire",
          "href": "https://themilneempire.com/",
          "image": "/empire.svg"
      },
      {
        "title": "Resume/ Portfolio (Bento UI Style)",
        "href": "https://bento.colemilne.com/",
        "image": "/bento.webp"
      }
  ],
  "projects": [
      {
          "title": "TrackMyApps.io 📝💸",
          "href": "https://trackmyapps.io/"    
      },
      {
          "title": "GetSendy Media Form App 🎬🤳",
          "href": "https://app.getsendymedia.com/forms/get-sendy"
      },
      {
          "title": "Holistic Haven 🥊🧘‍🌎🐓",
          "href": "https://holistic-haven.colemilne.com/"
      },
      {
          "title": "KinoKlicker 🎬👆",
          "href": "https://kino-klicker.vercel.app/"
      },
      {
          "title": "Laundry Care Symbols 🧺🫧",
          "href": "https://colemilne54.github.io/laundry-care-symbols/"
      },
      {
          "title": "Calculator Emporium 🧮",
          "href": "https://colemilne54.github.io/Calculator-Emporium/"
      },
      {
          "title": "DogDiscover 🐶🔍",
          "href": "https://react-nrhvby.stackblitz.io/"
      },
      {
          "title": "Infuriating Notepad 😡📝",
          "href": "https://react-hjyehn.stackblitz.io"
      },
      {
          "title": "Art Institute of Chicago Random Digital Museum 🖼",
          "href": "https://react-gmg2ge.stackblitz.io"
      }
  ]
}

function LinkCard({ 
   title,
   href,
   image,
   classes
} : {
   title: string,
   href: string,
   image?: string
   classes?: string
}) {
  return (
    <a href={href} className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all border bg-gray-100 mb-3 max-w-3xl'>
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
        <h2 className={`flex justify-center items-center font-semibold w-full text-gray-700 -ml-10 ${classes}`}>{title}</h2>
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
        priority
      />
      <h1 className='font-bold mt-4 mb-8 text-xl text-white'>{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <h2 className='font-bold mt-4 mb-8 text-xl text-white'>Projects</h2>
      {data.projects.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
