//icons title
import {GiWinterHat} from "react-icons/gi";
import {BsFillHouseGearFill} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {GiReceiveMoney} from "react-icons/gi";
import {GiWoodCabin} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";
import {GiRose} from "react-icons/gi";
import {GiCutLemon} from "react-icons/gi";
//icons technologies
import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

export const data1 = [
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
    icon_1: <FaGithub></FaGithub>,
    icon_2: <AiFillEye></AiFillEye>,
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
    icon_1: <FaGithub></FaGithub>,
    icon_2: <AiFillEye></AiFillEye>,
  },
];