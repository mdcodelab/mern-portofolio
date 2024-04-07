//icons title
import {GiWinterHat} from "react-icons/gi";
import {BsFillHouseGearFill} from "react-icons/bs";
import {GiReceiveMoney} from "react-icons/gi";
import { FiGithub } from "react-icons/fi";
import {GiWoodCabin} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";
import {GiRose} from "react-icons/gi";
import {GiCutLemon} from "react-icons/gi";

export const data = [
  {
    id: 1,
    title: "Work Wave Hub",
    type: "full-stack",
    video: "/assets/videos_projects/wwh.mp4",
    icon: <IoIosPeople></IoIosPeople>,
    urlDemo: "https://workwavehub-jobs-platform.onrender.com",
    urlGit: "https://github.com/mdcodelab/WorkWaveHub-jobs-platform-MERN",
    description:
      "The app empowers users to create, read, update, delete their job listings or search for new jobs based on various criteria. It has full and secure authentication with JWT and HTTP cookies, that enables users to login or register and manage their profiles. There is an admin functionality to manage jobs and users.",
    tech: ["MONGODB", "EXPRESS", "REACT", "NODE", "JWT"],
  },
  {
    id: 2,
    title: "Love Roses",
    type: "front-end",
    video: "/assets/videos_projects/roses.mp4",
    icon: <GiRose></GiRose>,
    urlDemo: "https://roses-store-webpage-nu9f0ship-mdcodelab.vercel.app/",
    urlGit: "https://github.com/mdcodelab/roses-store-ecommerce-website",
    description:
      "LoveRoses is a dedicated online platform specializing in the sale of luxury roses and related accessories. It provides an interface for searching and purchasing products.",
    tech: ["REACT", "CSS3", "STYLED-COMPONENTS", "AOS", "Tilt.js"],
  },
  {
    id: 3,
    title: "Wooden Wonders",
    type: "front-end",
    video: "/assets/videos_projects/wooden.mp4",
    icon: <GiWoodCabin></GiWoodCabin>,
    urlDemo: "https://glistening-tartufo-8aa482.netlify.app/",
    urlGit: "https://github.com/mdcodelab/e-commerce-react-website--frontend",
    description:
      "This e-commerce platform built with React and Netlify functions as a serverless backend provides a simple and intuitive user interface for searching products based on various criteria and purchasing products online.",
    tech: ["REACT", "CSS3", "AOS", "AUTH0", "STRIPE"],
  },
  {
    id: 4,
    title: "GitHub Finder",
    type: "w",
    video: "/assets/videos_projects/git.mp4",
    icon: <FiGithub></FiGithub>,
    urlDemo: "https://github-finder-react-eqfqo63wv-mdcodelab.vercel.app/",
    urlGit: "https://github.com/mdcodelab/github-finder-react-app",
    description:
      "This app utilizes the GitHub APIs and a search functionality to retrieve and display relevant information about users profiles and repositories.",
    tech: ["REACT", "CSS3"],
  },
  {
    id: 5,
    title: "The Recipes Room",
    type: "front-end",
    video: "/assets/videos_projects/recipes.mp4",
    icon: <GiCutLemon></GiCutLemon>,
    urlDemo: "https://the-recipes-room.netlify.app/recipes/",
    urlGit: "https://github.com/mdcodelab/gatsby-recipes-app",
    description:
      "This website aims to provide visitors a user-friendly platform for discovering, and managing culinary recipes. Key features include: intuitive interface, efficient categorization, responsiveness across all devices, detailed ingredients and cooking instructions.",
    tech: ["GATSBY", "GRAPHQL", "STYLED-COMPONENTS", "CONTENTFUL"],
  },
  {
    id: 6,
    title: "NPV & Risk Assessment",
    type: "w",
    video: "/assets/videos_projects/npv.mp4",
    icon: <GiReceiveMoney></GiReceiveMoney>,
    urlDemo: "https://npv-monte-carlo-risk-simulation-app.vercel.app/",
    urlGit: "https://github.com/mdcodelab/npv-monte-carlo-risk-simulation-app",
    description:
      "This app evaluates the net present value (NPV) of an investment project and assesses its risk based on Monte Carlo simulation. It displays the NPV under the most likely scenario associated with the investment based on the data from the user, but also evaluates the investment risk by estimating the mean NPV and the probability of the NPV > 0.",
    tech: ["JavaScript", "CSS3", "HTML5"],
  },
  {
    id: 7,
    title: "Architect Design",
    type: "l",
    video: "/assets/videos_projects/designer.mp4",
    icon: <BsFillHouseGearFill></BsFillHouseGearFill>,
    urlDemo: "https://interior-design-com.netlify.app/",
    urlGit: "https://github.com/mdcodelab/design-interior-website",
    description:
      "Responsive website with animations, including tilt.js. Customers can consult the services offered by the company regarding the desired architecture of their living space.",
    tech: ["JavaScript", "CSS3", "Tilt.js", "HTML5"],
  },
  {
    id: 8,
    title: "Winter Landing Page",
    type: "l",
    video: "/assets/videos_projects/winter.mp4",
    icon: <GiWinterHat></GiWinterHat>,
    urlDemo: "https://winter-beauties.netlify.app/",
    urlGit: "https://github.com/mdcodelab/winterscape-landingpage",
    description:
      "Winterscape - a virtual snowfall experience with audio and animations. Users are invited to buy products, read recipes and news, all for the winter season!",
    tech: ["JavaScript", "CSS3", "HTML5"],
  },
];
