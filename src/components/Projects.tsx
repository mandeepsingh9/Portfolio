
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Tenex Finance',
    description: 'Tenex Finance is a decentralized finance (DeFi) platform offering secure, efficient, and innovative financial solutions like staking, liquidity pools, and yield farming.',
    image: '/assets/tenex.png',
    link: 'https://testnet.tenex.finance/',
    tags: ["React", "Blockchain", "web3", "DApp", "TypeScript","Solidity","Hardhat"],
    github:'https://github.com/Tenex-Finance/'
  },
  {
    title: 'Social Mining',
    description: 'Social Mining is a decentralized engagement model that rewards users for contributing to a project ecosystem through activities like content creation, community engagement, and social media interactions.',
    image: '/assets/social.png',
    link: 'https://social.tenex.finance/',
    tags: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    github:'https://github.com/Tenex-Finance/'
  },
  {
    title: 'Expance Tracker App',
    description: 'An Expense Tracker App helps users manage their finances by tracking income, expenses, and budgets in real-time, providing insights for better financial planning.',
    image: '/assets/expence.png',
    link: 'http://expensetrackerapp-kfrj.onrender.com',
    tags: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    github:'https://github.com/mandeepsingh9/ExpenseTrackerApp'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}