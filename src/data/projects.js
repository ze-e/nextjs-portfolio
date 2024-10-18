import devFinderImg from "@/assets/devfinder.png";
import llamaImg from "@/assets/llama.png";
import leaderBoardImg from "@/assets/leader_board.png";
import cyberlinkImg from "@/assets/cyberlink.png"
import KQImg from "@/assets/kq.png"
import SpiritMedia from "@/assets/spirit_media.png"

const projects = [
  {
    title: "KQ Bookkeeping Website",
    blurb:
      "KQ Bookkeeping helps small business owners by taking the stress of bookkeeping off their hands so they can spend their time and energy doing what they do best – running their business!",
    description:
      "A simple Wix page created for KQ Bookkeeping, a small business based out of Star, Idaho",
    tags: ["Wix", "Web Development", "Online Presence"],
    link: "https://kqbookkeeping.com",
    company:"KQBookkeeping",
    img: KQImg,
  },
  {
    title: "Cyberlink Website",
    blurb:
      "Since 2002 Cyberlink Software Solutions, Inc. has been the leader in developing independent systems for MERS transaction processing. ",
    description:
      "I have provided web development services to Cyberlink for over five years, providing them with everything from DNS and hosting to adding new pages",
    tags: ["Wordpress", "Elementor", "Web Development", "Online Presence"],
    link: "https://oncyberlink.com",
    company:"Cyberlink Software",
    img: cyberlinkImg,
  },
  {
    title: "Star Spirit Website",
    blurb:
      "Founded in Star, Idaho in 2020, Spirit Media brings nearly 30 years of experience in publishing, marketing and journalism. ",
    description:
      "I created this website for Spirit Media, a local newspaper in Star, Idaho. I also provide an online version of their magazine. Additionally, I have helped streamline their workflow using AI assistants, to help them meet their tight monthly deadlines well ahead of schedule.",
    tags: ["Wordpress", "Web Development", "Online Presence"],
    link: "https://spiritmedias.net",
    company:"Spirit Media",
    img: SpiritMedia,
  },
  {
    title: "PledgeLlama",
    blurb:
      "Subscribe for $5.99 a month to place pledges on pledge drives from your favorite charities. Making the world a better place just got easier, and even more fun!",
    description:
      "Created this project for a small startup in Boise. Worked with stakeholders to create designs in XD. Transformed this into a full functioning PWA. Used PostgreSQL to create a backend API that authenticizes users, handles payment processing, and manages subscriptions. Created an easy to use UI using human-centered UX, where users can search for charities and mamnage their pledges.",
    tags: ["Fullstack Web Development", "ReactJS", "Web Design","MERN", "Online Presence"],
    link: "https://pledgellama.com/",
    company:"Iceboxx",
    img: llamaImg,
  },
  {
    title: "devFinder",
    blurb: "Find top-notch developers in your vicinity with DevFinder",
    description:
      "DevFinder is a small project I did using TypeScript over a couple hours. The goal of it was basically to create a small project with TypeScript. I was given a basic wireframe and color pallete for dark and light modes and worked from this to create a fully functioning frontend",
    tags: ["NextJS", "Web App"],
    link: "https://ze-e.github.io/dev_finder/",
    img: devFinderImg,
  },
  {
    title: "The Leaderboard",
    blurb:
      "Are you the greatest there is? Prove it. Add your name to the official The Leaderboard",
    description:
      "A small project I did over a few hours based on a simple idea my friend came up with",
    tags: ["React", "Firestore", "Payment processing"],
    link: "https://the-leaderboard.net",
    img: leaderBoardImg,
  },
  
];

export default projects;