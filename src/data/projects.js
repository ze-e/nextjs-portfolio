import devFinderImg from "@/assets/devfinder.png";
import llamaImg from "@/assets/llama.png";

const projects = [
  {
    title: "devFinder",
    blurb: "Find top-notch developers in your vicinity with DevFinder",
    description:
      "DevFinder is a small project I did using TypeScript over a couple hours. The goal of it was basically to create a small project with TypeScript. I was given a basic wireframe and color pallete for dark and light modes and worked from this to create a fully functioning frontend",
    tags: ["React", "TypeScript"],
    link: "https://ze-e.github.io/dev_finder/",
    repo: "https://github.com/ze-e/dev_finder",
    img: devFinderImg,
  },
  {
    title: "PledgeLlama",
    blurb: "Subscribe for $5.99 a month to place pledges on pledge drives from your favorite charities. Making the world a better place just got easier, and even more fun!",
    description: "Created this project for a small startup in Boise. Worked with stakeholders to create designs in XD. Transformed this into a full functioning PWA. Used PostgreSQL to create a backend API that authenticizes users, handles payment processing, and manages subscriptions. Created an easy to use UI using human-centered UX, where users can search for charities and mamnage their pledges.",
    tags: ["React", "PostGreSQL", "NodeJS", "REST API", "Emotion"],
    link: "https://pledgellama.com/",
    repo: "",
    img: llamaImg,
  },
];

export default projects;