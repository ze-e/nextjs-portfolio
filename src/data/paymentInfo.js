import Clock from "@/assets/svg/clock.svg";
import Box from "@/assets/svg/box.svg";
import Infinity from "@/assets/svg/infinity.svg";

const info = [
  {
    img:Clock,
    title: "Pay By Hour",
    content:[
      "Book me at an hourly rate for as long or as short as you need us.",
      "Great for tech consulting or odds and ends.",
    ],
    oldPrice:"$45 ph",
    newPrice:"$35 ph"
  },
  {
    img:Box,
    title: "Pay By Project",
    content:[
      "Pay to develop a website, custom app, or AI tool, OR deliver a solution to a specific business objective.",
      "(Usual delivery time is 1-2 weeks from date of order)",
    ],
    oldPrice:"$800-1000",
    newPrice:"$500*"
  },
  {
    img:Infinity,
    title: "Unlimited",
    content:[
      "Hire us on retainer as your personal in-house tech department!",
      "Great for upgrading your entire business workflow with new technology such as AI.",
    ],
    oldPrice:"$1200",
    newPrice:"$800"
  },
];

export default info;