import { SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb, SiMongoose, SiMysql, SiGit, SiGithub, SiPostman, SiDocker } from "react-icons/si";
import { FaDatabase, FaBrain, FaObjectGroup, FaDesktop, FaAws } from "react-icons/fa";

export const skillsData = {
  languages: [
    { name: "C", level: 90, icon: SiC, color: "#A8B9CC" },
    { name: "C++", level: 95, icon: SiCplusplus, color: "#00599C" },
    { name: "JavaScript", level: 90, icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML", level: 95, icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", level: 90, icon: SiCss3, color: "#1572B6" }
  ],
  frontend: [
    { name: "React.js", level: 90, icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#000000" },
    { name: "Redux", level: 80, icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#38BDF8" }
  ],
  backend: [
    { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", level: 85, icon: SiExpress, color: "#000000" },
    { name: "REST APIs", level: 85, icon: SiJsonwebtokens, color: "#000000" },
    { name: "JWT", level: 80, icon: SiJsonwebtokens, color: "#000000" },
    { name: "MVC", level: 80, icon: FaObjectGroup, color: "#4B5563" }
  ],
  databases: [
    { name: "MongoDB", level: 85, icon: SiMongodb, color: "#47A248" },
    { name: "Mongoose", level: 85, icon: SiMongoose, color: "#800000" },
    { name: "MySQL", level: 75, icon: SiMysql, color: "#4479A1" }
  ],
  tools: [
    { name: "Git", level: 90, icon: SiGit, color: "#F05032" },
    { name: "GitHub", level: 90, icon: SiGithub, color: "#181717" },
    { name: "Postman", level: 85, icon: SiPostman, color: "#FF6C37" },
    { name: "Docker", level: 70, icon: SiDocker, color: "#2496ED" },
    { name: "AWS", level: 65, icon: FaAws, color: "#FF9900" }
  ],
  fundamentals: [
    { name: "DBMS", level: 85, icon: FaDatabase, color: "#4B5563" },
    { name: "OS", level: 80, icon: FaDesktop, color: "#2563EB" },
    { name: "OOPs", level: 90, icon: FaObjectGroup, color: "#F59E42" },
    { name: "DSA", level: 95, icon: FaBrain, color: "#8B5CF6" }
  ]
}