
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiGraphql, SiMongodb, SiBlockchaindotcom, SiCplusplus, SiGit, SiGithub, SiPostman, SiVite, SiVercel, SiWeb3Dotjs, SiPandas, SiNumpy, SiMysql } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaEthereum, FaHardHat, } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import { LiaEthereum } from "react-icons/lia";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "Blockchain", icon: SiBlockchaindotcom, color: "#1572b6", url: "" },
  { name: "Smart Contract", icon: LiaEthereum, color: "#1572b6", url: "" },
  { name: "Web3", icon: SiWeb3Dotjs, color: "#1572b6", url: "" },
  { name: "Ethereum", icon: FaEthereum, color: "#1572b6", url: "" },
  { name: "Hardhat", icon: FaHardHat, color: "#1572b6", url: "" },
  { name: "Tailwind Css", icon: FaHardHat, color: "#1572b6", url: "" },
  { name: "Bootstrap", icon: FaHardHat, color: "#FFFF00", url: "" },
  { name: "MySQL", icon: SiMysql, color: "#1572b6", url: "" },
  

  { name: "python", icon: FaPython, color: "#1572b6", url: "" },
  { name: "React Native", icon: TbBrandReactNative, color: "#1572b6", url: "" },
  { name: "Pandas", icon: SiPandas, color: "#1572b6", url: "" },
  { name: "Numpy", icon: SiNumpy, color: "#1572b6", url: "" },

  { name: "HTML", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "Next.js", icon: SiNextdotjs, color: "#", url: "https://nextjs.org/" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
  { name: "Redux", icon: SiRedux, color: "#764abc", url: "https://redux.js.org/" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063", url: "https://nodejs.org/" },
  { name: "Express.js", icon: SiExpress, color: "#68a063", url: "https://expressjs.com/" },
  { name: "GraphQL", icon: SiGraphql, color: "#e535ab", url: "https://graphql.org/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
 
  { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
  { name: "Java", icon: FaJava, color: "#f7b731", url: "https://www.java.com/" },
 
  
  { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "#1572b6", url: "https://github.com/" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37", url: "https://www.postman.com/" },
  { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
  { name: "Vercel", icon: SiVercel, color: "#1572b6", url: "" },
 
 

  
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
          ))}
        </div>
      </div>
    </section>
  );
}