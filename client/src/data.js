//icons title
import {GiWinterHat} from "react-icons/gi";
import {BsFillHouseGearFill} from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {GiWoodCabin} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";
import {GiRose} from "react-icons/gi";
import {GiCutLemon} from "react-icons/gi";
//icons technologies
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const data = [
  {
    id: 1,
    title: "Winter Landing Page",
    type: "l",
    video: "/assets/videos_projects/winter.mp4",
    icon: <GiWinterHat></GiWinterHat>,
    urlDemo: "https://winter-beauties.netlify.app/",
    urlGit: "https://github.com/mdcodelab/winterscape-landingpage",
    description:
      "Winterscape - a virtual snowfall experience with audio and animations. Users can buy products, read recipes and news, all for the winter season!",
    tech: ["JavaScript", "CSS3", "HTML5"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon__2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
  {
    id: 2,
    title: "Architect Design",
    type: "l",
    video: "/assets/videos_projects/designer.mp4",
    icon: <BsFillHouseGearFill></BsFillHouseGearFill>,
    urlDemo: "https://interior-design-com.netlify.app/",
    urlGit: "https://github.com/mdcodelab/design-interior-website",
    description:
      "Responsive website with animations, including titlt.js. Users can benefit from consultation regarding the desired architecture of their living space.",
    tech: ["JavaScript", "CSS3", "Tilt.js", "HTML5"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
  {
    id: 3,
    title: "GitHub Finder",
    type: "w",
    video: "/assets/videos_projects/git.mp4",
    icon: <FaGithubAlt></FaGithubAlt>,
    urlDemo: "https://github-finder-react-eqfqo63wv-mdcodelab.vercel.app/",
    urlGit: "https://github.com/mdcodelab/github-finder-react-app",
    description:
      "This app utilizes the GitHub APIs to retrieve and display relevant information about a user's profile and repositories.",
    tech: ["REACT", "CSS3"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
  {
    id: 4,
    title: "NPV & Risk Assessment",
    type: "w",
    video: "/assets/videos_projects/npv.mp4",
    icon: <GiReceiveMoney></GiReceiveMoney>,
    urlDemon: "https://npv-monte-carlo-risk-simulation-app.vercel.app/",
    urlGit: "https://github.com/mdcodelab/npv-monte-carlo-risk-simulation-app",
    description:
      "This app evaluates the net present value (NPV) of an investment project and assesses its risk based on Monte Carlo simulation. It displays the NPV under the most likely scenario based on data from the user, associated with the investment, but also evaluates the investment risk by estimating the mean NPV and the probability of the NPV > 0.",
    tech: ["JavaScript", "CSS3", "HTML5"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
  {
    id: 5,
    title: "Wooden Wonders",
    type: "front-end",
    video: "/assets/videos_projects/wooden.mp4",
    icon: <GiWoodCabin></GiWoodCabin>,
    urlDemo: "https://glistening-tartufo-8aa482.netlify.app/",
    urlGit: "https://github.com/mdcodelab/e-commerce-react-website--frontend",
    description:
      "This is e-commerce front-end app built with React, Stripe for payment processing, and Netlify functions as a serverless backend. The app provides a simple and intuitive user interface for searching and purchasing products online.",
    tech: ["REACT", "CSS3", "AOS", "AUTH0", "STRIPE"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
  {
    id: 6,
    title: "Jobster",
    type: "full-stack",
    video: "/assets/videos_projects/roses.mp4",
    icon: <IoIosPeople></IoIosPeople>,
    urlDemo: "",
    urlGit: "",
    description: "",
    tech: [],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
  {
    id: 7,
    title: "Love Roses",
    type: "front-end",
    video: "/assets/videos_projects/roses.mp4",
    icon: <GiRose></GiRose>,
    urlDemo: "https://roses-store-webpage-nu9f0ship-mdcodelab.vercel.app/",
    urlGit: "https://github.com/mdcodelab/roses-store-ecommerce-website",
    description:
      "LoveRoses is a dedicated online platform specializing in the sale of luxury roses and related accessories. he website provides an interface for searching and purchasing products.",
    tech: ["REACT", "CSS3", "STYLED-COMPONENTS", "AOS", "Tilt.js"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },

  {
    id: 8,
    title: "The Recipes Room",
    type: "front-end",
    video: "/assets/videos_projects/recipes.mp4",
    icon: <GiCutLemon></GiCutLemon>,
    urlDemo: "https://the-recipes-room.netlify.app/recipes/",
    urlGit: "https://github.com/mdcodelab/gatsby-recipes-app",
    description:
      "This website aims to provide users with a user-friendly platform for discovering, and managing culinary recipes. Key features include: intuitive interface, efficient categorization, detailed ingredients and cooking instructions, responsiveness and mobile support.",
    tech: ["GATSBY", "GRAPHQL", "STYLED-COMPONENTS", "CONTENTFUL"],
    icon_1: <FaGithubAlt></FaGithubAlt>,
    icon_2: <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>,
  },
];
