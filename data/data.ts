interface Link {
   title: string;
   href: string;
   icon: string;
   classes?: string;
   external?: boolean;
   subtitle?: string;
}

interface Project {
   title: string;
   href: string;
   subtitle?: string;
}

export interface BlogPost {
   slug: string;
   title: string;
   date: string;
   excerpt: string;
   readingTime: string;
   body: string[];
}

interface PortfolioData {
   name: string;
   role: string;
   tagline: string;
   location: string;
   alt: string;
   avatar: string;
   siteUrl: string;
   email: string;
   bio: string[];
   links: Link[];
   projects: Project[];
   skills: string[];
   posts: BlogPost[];
}

const data: PortfolioData = {
   name: "Cole Milne",
   role: "Software Engineer & Independent Builder",
   tagline:
      "Full-stack engineer crafting durable web apps, thoughtful side projects, and a little bit of mischief on the side.",
   location: "United States",
   alt: "Cole Milne headshot image",
   avatar: "https://avatars.githubusercontent.com/u/20178496?v=4",
   siteUrl: "https://colemilne.com",
   email: "hello@colemilne.com",
   bio: [
      "I'm a software engineer who likes building the un-glamorous parts of the web with the same care as the flashy bits. By day I ship product. By night I draft tiny experiments — usually with a cup of coffee and a notebook within reach.",
      "If you're hiring contract help or putting together a team, I'm easy to work with, fast to ramp, and unreasonably picky about the details that users actually feel.",
   ],
   skills: [
      "TypeScript",
      "React / Next.js",
      "Node.js",
      "Python",
      "Postgres",
      "AWS",
      "Design systems",
      "Product strategy",
   ],
   links: [
      {
         title: "LinkedIn",
         href: "https://www.linkedin.com/in/colemilne/",
         icon: "mdi:linkedin",
         external: true,
         subtitle: "the professional dossier",
      },
      {
         title: "GitHub",
         href: "https://www.github.com/colemilne54",
         icon: "mdi:github",
         external: true,
         subtitle: "where the code lives",
      },
      {
         title: "The Library",
         href: "/blog",
         icon: "mdi:notebook-outline",
         external: false,
         subtitle: "essays, notes, and dispatches",
      },
      {
         title: "The Workshop",
         href: "/playground",
         icon: "mdi:hammer-screwdriver",
         external: false,
         subtitle: "a page in progress",
      },
      {
         title: "Big Trees Web",
         href: "https://bigtreesweb.com/",
         icon: "mdi:pine-tree-variant-outline",
         external: true,
         subtitle: "small studio, sturdy sites",
      },
      {
         title: "The Milne Empire",
         href: "https://themilneempire.com/",
         icon: "mdi:pillar",
         external: true,
         subtitle: "the family hub",
      },
      {
         title: "Bento Resume",
         href: "https://bento.colemilne.com/",
         icon: "simple-icons:bento",
         external: true,
         subtitle: "the one-pager portfolio",
      },
      {
         title: "3D Resume",
         href: "https://colemilne54.github.io/fireship-threejs/",
         icon: "devicon:threejs",
         external: true,
         subtitle: "older but charming",
      },
   ],
   projects: [
      {
         title: "FighterLinks",
         href: "https://fighterlinks.com",
         subtitle: "Links for fighters and gym owners",
      },
      {
         title: "Poof! Ephemeral Art Gallery",
         href: "https://poof.colemilne.com",
         subtitle: "Art that disappears",
      },
      {
         title: "Whispr",
         href: "https://whispr.colemilne.com",
         subtitle: "Secrets that burn after reading",
      },
      {
         title: "TrackMyApps.io",
         href: "https://trackmyapps.io/",
         subtitle: "Job application tracker",
      },
      {
         title: "Holistic Haven",
         href: "https://holistic-haven.colemilne.com/",
         subtitle: "Wellness directory",
      },
      {
         title: "Table Talk",
         href: "https://colemilne54.github.io/tabletalk/",
         subtitle: "Dinner conversation cards",
      },
      {
         title: "Wordle Solver",
         href: "https://colemilne54.github.io/nextjs-wordle-solver/",
         subtitle: "For when you give up",
      },
      {
         title: "Housing Cost Calculator",
         href: "https://colemilne54.github.io/housing-cost-calculator/",
         subtitle: "True cost of a place",
      },
      {
         title: "KinoKlicker",
         href: "https://kino-klicker.vercel.app/",
         subtitle: "A clicker game for film fans",
      },
      {
         title: "Laundry Care Symbols",
         href: "https://colemilne54.github.io/laundry-care-symbols/",
         subtitle: "Translate the squiggles",
      },
      {
         title: "Calculator Emporium",
         href: "https://colemilne54.github.io/Calculator-Emporium/",
         subtitle: "Calculators, plural",
      },
      {
         title: "GetSendy Media Form",
         href: "https://app.getsendymedia.com/forms/get-sendy",
         subtitle: "Client intake, simplified",
      },
      {
         title: "DogDiscover",
         href: "https://react-nrhvby.stackblitz.io/",
         subtitle: "Meet a new dog breed",
      },
      {
         title: "Infuriating Notepad",
         href: "https://react-hjyehn.stackblitz.io",
         subtitle: "On purpose, I promise",
      },
      {
         title: "Art Institute of Chicago Random Museum",
         href: "https://react-gmg2ge.stackblitz.io",
         subtitle: "A roll of the curatorial dice",
      },
   ],
   posts: [
      {
         slug: "on-building-this-site",
         title: "On Building This Site",
         date: "2026-05-18",
         excerpt:
            "Why I rebuilt my personal home as a 3D book on a table — and why the rest of the world should feel free to call it twee.",
         readingTime: "4 min read",
         body: [
            "There is a kind of personal website that aims to be a billboard. It is bright, vertical, and shouts a job title. I have built more than one of these, and I do not regret any of them. But every so often I want a personal site that feels like a room I have invited you into, rather than a poster I have stapled to the door.",
            "So this one is a book. You arrive at a table. There is a single object on it. You can choose to open it, or you can choose to walk back out into the hallway. Either choice is fine. The book does not demand to be read.",
            "The whole thing is built with CSS perspective transforms — no WebGL, no heavy 3D engine, no shaders. The browser already knows how to draw a box in space; I just had to ask politely. Three layers of shadow, a strip for the spine, a couple of cover plates, and suddenly there is a book on a table.",
            "The page turn sound is synthesized on the fly with the Web Audio API. A short burst of noise through a band-pass filter, with an envelope that decays just fast enough to feel like paper. I prefer that to a downloaded sample. Sample files have a way of feeling small and tinny; synthesized sounds can be tuned to whatever speaker the visitor happens to be using.",
            "If you are here from a recruiter introduction or a referral, you can skim the table of contents and click back out to a more conventional resume. If you are here on a wander, stay a while. The library upstairs has a few short essays in it. The workshop downstairs has whatever I am tinkering on this week.",
            "Either way: thank you for stopping by. The kettle is on.",
         ],
      },
      {
         slug: "choosing-tools-that-last",
         title: "Choosing Tools That Last",
         date: "2026-04-02",
         excerpt:
            "A short, opinionated note on picking tools that you'll still want to be using three years from now.",
         readingTime: "3 min read",
         body: [
            "The most expensive line of code I have ever written is a dependency I added in a hurry. Not because it broke — because it stayed. It stayed for years, gathering moss, until eventually a security advisory or an upgrade or a junior developer asked: what is this for? And we did not know.",
            "When I pick a tool for a real project, I ask three questions. First: has it been around long enough that someone other than its original author has had to maintain it? Second: is it boring? Third: can I, in good conscience, hand it to a teammate two years from now and not apologize?",
            "Boring is underrated. Boring means well-trodden, predictable, debuggable at 2am. Boring means the documentation is correct because enough people have complained about the parts that were wrong. Boring means I can search the error message and get a real answer instead of a forum thread that ends with the author saying \"never mind, I figured it out\" and never posting the fix.",
            "Everything on this site is boring in the best way. Next.js. Tailwind. TypeScript. A flat file of data. No backend at all. The 3D effect is one component and 200 lines of CSS. If I get hit by a bus, the next person can keep this site running with one weekend and a cup of coffee.",
            "I hope yours can say the same.",
         ],
      },
      {
         slug: "the-joy-of-side-projects",
         title: "In Defense of Side Projects That Go Nowhere",
         date: "2026-02-11",
         excerpt:
            "Most of my side projects do not become businesses. They do not need to. They have already done their job.",
         readingTime: "3 min read",
         body: [
            "Somebody asked me recently how many of my side projects \"made it.\" By which they meant: how many earned revenue, attracted users, became companies. The honest answer is zero. The more honest answer is that they all made it, because the goal was never the thing on the other side. The goal was the building.",
            "When I built FighterLinks, I learned how to wrangle a small, opinionated CMS. When I built Whispr, I learned about authenticated encryption and the strange little corners of cryptography that don't show up in tutorials. When I built the infuriating notepad — that one was a joke for my partner — I learned, no kidding, a great deal about React's reconciliation.",
            "Side projects are training, in the same way an apprentice's first thirty cabinets are training. Nobody sells the first thirty cabinets. They sand them down, look at the joinery, and start the next one.",
            "If you are early in your career and watching yet another \"how I made my side project into a $10K MRR business\" thread on a Tuesday, please do not let it bully you. The threads are real. The math is real. But it is not the only measurement. You are also allowed to build a thing because the thing pleases you. That, I will defend with my chest.",
         ],
      },
   ],
};

export default data;
