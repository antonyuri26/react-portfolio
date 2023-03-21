import XtremeSafety from "./components/assets/xtremesafety/xtreme-safety.png";
import XtremePriceSpy from "./components/assets/xtremepricespy/xtreme-price-spy.png";
import SurfTrip from "./components/assets/surftrip/surftrip.png";
import RealState from "./components/assets/realestate/realstate.png";
import ReactDashboard from "./components/assets/dashboard/react-dashboard.png";
import ReactFoodApp from "./components/assets/food-app/react-food-app.png";
import ReactCryptoTracker from "./components/assets/cryptotracker/crypto-tracker.png";
import foodapp1 from "./components/assets/food-app/image1.png";
import dashboard1 from "./components/assets/dashboard/image1.png";
import realestate1 from "./components/assets/realestate/image1.png";
import surftrip1 from "./components/assets/surftrip/image1.png";
import xtremesafety1 from "./components/assets/xtremesafety/image1.png";
import xtremepricespy1 from "./components/assets/xtremepricespy/image1.png";
import cryptotracker1 from "./components/assets/cryptotracker/image1.png";

const header = {
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "AS",
};

const about = {
  name: "Antonio Souza",
  role: "Front-End Developer",
  description:
    "I am an ethusiastic Front End Developer, eager to contribute my analytical and technical skills in a dynamic, client-focused team. Passionate about learning and applying new technologies. I am base in Sunshine Coast QLD.",
  resume: "https://example.com", //link to my resume
  social: {
    linkedin: "https://www.linkedin.com/in/antonio-souza26/",
    github: "https://github.com/antonyuri26",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Crypto Tracker APP",
    description:
      "CryptoTracker is a sleek and modern website built using React, Material UI, and Context API as state management, designed to help users keep track of their favorite cryptocurrencies in real-time. The website fetches cryptocurrencies details via Coingecko's API ensuring that the prices and market data displayed accurately and up-to-date. The interface can be viewed in both light and dark mode, making it easy to track you favourite coins. Users can also choose between USD and AUD currency options, allowing them to track their investments in their preferred currency.",
    stack: [
      "HTML",
      "CSS",
      "Styled Components",
      "ReactJS",
      "Context API",
      "Material UI",
    ],
    sourceCode: "https://github.com/antonyuri26/food-ordering-app",
    livePreview: "https://food-ordering-app-77b44f.netlify.app/",
    image: ReactCryptoTracker,
    gallery: cryptotracker1,
  },
  {
    name: "React Food Ordering APP",
    description:
      "The Food Ordering App is a user-friendly web app for browsing and ordering meals. Built with React.js, Redux, and Chakra UI, it offers a seamless, intuitive experience. Meals are sourced from TheMealDB API, and orders are stored in a Firebase Realtime Database.",
    stack: [
      "HTML",
      "CSS",
      "CSS Module",
      "ReactJS",
      "Redux",
      "Chakra UI",
      "Rest API",
      "Firebase",
    ],
    sourceCode: "https://github.com/antonyuri26/food-ordering-app",
    livePreview: "https://food-ordering-app-77b44f.netlify.app/",
    image: ReactFoodApp,
    gallery: foodapp1,
  },
  {
    name: "React Dashboard Project",
    description:
      "The Dashboard Project is a web platform using React.JS and Redux for centralised data visualisation. It offers users an accessible overview of metrics and key performance indicators in one place.",
    stack: ["HTML", "CSS", "ReactJS", "Redux", "Chakra UI"],
    sourceCode: "https://github.com/antonyuri26/dashboard-project",
    livePreview: "https://dashboard-project-7e81ba.netlify.app/",
    image: ReactDashboard,
    gallery: dashboard1,
  },
  {
    name: "Realestate Website",
    description:
      "This project highlights a fully responsive website, easily accessible on any device. Leveraging the CSS grid system enabled a fluid design, adapting to various screen sizes for effortless navigation. It was an excellent opportunity to showcase my skills in HTML and advanced CSS techniques, crafting a modern and user-friendly real estate website.",
    stack: ["HTML", "CSS", "CSS Grid System", "SASS"],
    sourceCode: "https://github.com/antonyuri26/realestate-project",
    livePreview: "https://antonyuri26.github.io/realestate-project/",
    image: RealState,
    gallery: realestate1,
  },
  {
    name: "Surftrip Website",
    description:
      "Surftrip is a website dedicated to surfers and beach enthusiasts who want to plan their next trip to catch some waves. The website was designed using HTML and advanced CSS techniques. Leveraging CSS flexbox enabled a fluid design, adapting to various screen sizes for effortless navigationand providing an engaging and visually appealing experience for the user.",
    stack: ["HTML", "CSS", "Flexbox"],
    sourceCode: "https://github.com/antonyuri26/surftrip-project",
    livePreview: "https://antonyuri26.github.io/surftrip-project/",
    image: SurfTrip,
    gallery: surftrip1,
  },
  {
    name: "Price Monitor Website",
    description:
      "Xtreme Price Spy is a website used to check and compare prices with your competition. It has an auto update feature which automaticaly change your prices based on your competitors price and set of rules. It was built using Wordpress.  ",
    stack: ["HTML", "CSS", "SASS", "PHP"],
    sourceCode: "https://github.com",
    livePreview: "https://www.xtremepricespy.com",
    image: XtremePriceSpy,
    gallery: xtremepricespy1,
  },
  {
    name: "E-commerce Website",
    description:
      "Xtreme Safety is a WordPress-based WooCommerce store with main focus on supplying safety equipment to construction workers in Australia. The website has API integration with all major marketplaces here in Australia (Ebay, Catch, Kogan, Mydeal and Amazon).",
    stack: ["HTML", "CSS", "JavaScript", "WordPress Development", "Rest API"],
    sourceCode: "https://github.com",
    livePreview: "https://www.xtremesafety.com.au",
    image: XtremeSafety,
    gallery: xtremesafety1,
  },
];

const myImage = "../assets/mypicture.jpeg";

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Project Management",
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "JavaScript",
  "ReactJS",
  "Redux",
  "WordPress",
  "Chakra UI",
  "Material UI",
  "Styled Components",
  "Tailwind CSS",
  "NodeJS & Express",
  "MongoDB",
  "Restful API's",
  "Git & GitHub",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "antonyuri26@gmail.com",
};

export { header, about, projects, skills, contact, myImage };
