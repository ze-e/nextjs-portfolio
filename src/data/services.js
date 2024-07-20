import cyberBrainImg from "@/assets/brand/cyberbrain_pink.png";
import laptopImg from "@/assets/brand/laptop_pink.png";
import robotImg from "@/assets/brand/Logo_nobf_pink.png";

const projects = [
  {
    title: "Web Presence",
    blurb:
      "Create a landing page, upgrade your social media presence, or even build a state-of-the-art web app from scratch. From a simple business page to beyond!",
    img:{
      src: laptopImg,
      alt:"web presence"
    }
  },
  {
    title: "AI and Automation Development",
    blurb:
      "Create custom AI-powered and traditional automation software tailored exactly to your business to reduce the hassle of repetitive tasks. Let the computer do the boring stuff, so you can focus on growing your business!",
    img:{
      src: robotImg,
      alt:"Automation"
    }
  },
  {
    title: "Consulting",
    blurb:
      "Create a landing page, upgrade your social media presence, or even build a state-of-the-art web app from scratch. From a simple business page to beyond!",
    img:{
      src: cyberBrainImg,
      alt:"Consulting"
    }
  },
];

export default projects;