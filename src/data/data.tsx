import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jibran Babar',
  description: "I'm Muhammad Jibran Babar, a passionate Backend Dev specializing in Node.js. With 1 year of hands-on experience in crafting robust and efficient server-side solutions",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Muhammad Jibran Babar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         I'm Muhammad Jibran Babar, a passionate <strong className="text-stone-100">Backend Dev</strong> specializing in <strong className="text-stone-100">Node.js</strong>. With 1 year of hands-on experience in crafting robust and efficient server-side solutions, I'm dedicated to bringing your web applications to life with the power of Node.js.

      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         My journey in the world of web development has been marked by a commitment to excellence, a thirst for knowledge, and a drive to deliver high-quality code that meets and exceeds expectations. Explore my portfolio to discover the projects I've worked on and the skills I bring to the table.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have proven to work in a competitive and challenging work environment to contribute the best of my
  ability towards the growth and Development of an organization fully utilizing my interpersonal and
  professional , programing skills to pursue a challenging and rewarding career.`,
  aboutItems: [
    { label: "Location", text: "Lahore, Pakistan", Icon: MapIcon },
    { label: "Age", text: "25", Icon: CalendarIcon },
    { label: "Nationality", text: "Pakistani / ...", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Motorcycles, Muay Thai, Banjos",
      Icon: SparklesIcon,
    },
    { label: "Study", text: "University of south asia", Icon: AcademicCapIcon },
    {
      label: "Employment",
      text: "Instant Domains, inc.",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 6,
      },
      {
        name: "Urdu",
        level: 10,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 5,
      },
      {
        name: "Typescript",
        level: 5,
      },
      {
        name: "GraphQL",
        level: 5,
      },
      {
        name: "Html",
        level: 8,
      },
      {
        name: "CSS",
        level: 5,
      },
      {
        name: "Javascript",
        level: 8,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Laravel",
        level: 6,
      },
      {
        name: "Python",
        level: 4,
      },
    ],
  },
  {
    name: "Other Skills",
    skills: [
      {
        name: "MongoDb",
        level: 8,
      },
      {
        name: "MySql",
        level: 8,
      },
      {
        name: "NoSQL",
        level: 8,
      },
      {
        name: "Firebase",
        level: 5,
      },
      {
        name: "AWS",
        level: 6,
      },
      {
        name: "Github",
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Aggadoo",
    description: "Aggadoo is your ultimate travel companion, simplifying trip planning. Discover new destinations, create itineraries, and access local insights effortlessly. Embark on unforgettable adventures with Aggadoo, your personalized travel planner.",
    url: "https://aggadoo.com",
    image: porfolioImage4,
  },
  {
    title: "Never Left",
    description: "...",
    url: "#",
    image: porfolioImage1,
  },
  {
    title: "Calling All Kids",
    description: "The goal of our program is to provide children with opportunities that lead to positive self-esteem. During the process, children will learn to be effective communicators and will develop problem solving making and decision making skills.",
    url: "https://callingallkidstoo.com/",
    image: porfolioImage3,
  },
  {
    title: "Plodding Isles",
    description: "....",
    url: "#",
    image: porfolioImage2,
  },
  {
    title: "Reality Walk Of USA",
    description: "...",
    url: "#",
    image: porfolioImage5,
  },
  {
    title: "Voice Insistance",
    description: "...",
    url: "#",
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "January 2023",
    location: "University of south asia.",
    title: "Bachelor of computer science",
    content: (<p>At the University of South Asia, I pursued a Bachelor of Computer Science degree. This educational journey has equipped me with valuable knowledge and skills to excel in the field of computer science and technology, providing a strong foundation for my future career.</p>),
  },
  {
    date: "September 2018",
    location: "Govt M.A.O college lahore.",
    title: "ICS",
    content: (<p>While attending Government M.A.O College in Lahore, I completed my Intermediate in Computer Science (ICS). This educational experience enhanced my understanding of computer science and paved the way for my academic and professional growth.</p>),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "June 2023 - Present",
    location: "Zweidevs pvt limited",
    title: "Software Engineer",
    content: (<p>At Zweidevs Pvt Limited, I am currently employed as a Software Engineer since June 2023. In this role, I actively contribute to the development of innovative solutions, utilizing my skills and expertise to drive technological advancements.</p>),
  },
  {
    date: "June 2022 - July 2023",
    location: "Jinnbyte pvt limited",
    title: "Junior backend developer",
    content: (<p>As a Junior Backend Developer at Jinnbyte Pvt Limited from June 2022 to July 2023, I gained valuable experience in developing and maintaining backend systems. This role allowed me to grow and enhance my skills in the field of software development.</p>),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: "jibranbabar67@gmail.com",
      href: "mailto:jibranbabar67@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Lahore, Pakistan",
      href: "https://www.google.ca/maps/place/Johar Town, Lahore, Pakistan",
    },
    {
      type: ContactType.Instagram,
      text: "@muhammadjibranofficial",
      href: "https://www.instagram.com/muhammadjibranofficial",
    },
    {
      type: ContactType.Github,
      text: "JibranBabar",
      href: "https://github.com/JibranBabar",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/JibranBabar",
  },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/17863707/jibranbabar",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/jibranbabar/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/muhammadjibranofficial",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/MJibranBabar",
  },
];
