
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "TENEX Finance",
    company: "Teblox Labs",
    period: "june 2024 - Feb 2025",
    description: `Actively contributed to blockchain development projects, specializing in smart contract programming, blockchain integration, and front-end development with React.
    Using Subgraph, Infura, and other indexing tools to efficiently fetch and process on-chain data.`,
    skills: ["React", "Blockchain", "web3", "DApp", "TypeScript","Solidity","Hardhat"],
  },
  {
    title: "Social Mining",
    company: "Teblox Labs",
    period: "Aug 2024 - dec 2024",
    description: `Led a dedicated team of  developers in designing and creating the  Social Mining Platform,vfocusing on blockchain-based community engagement and incentivization mechanisms.
    Successfully launched a scalable event platform used by 1000+ users, improving event organization. 
    Mentored and guided some junior developers in modern full-stack web technologies and best coding practices.`,
    skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript","Team Leadership"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
