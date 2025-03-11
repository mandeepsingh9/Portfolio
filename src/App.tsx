
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

import { Leetcode } from './components/Leetcode';
import { Badges } from './components/Badges';

import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { CustomCursor } from "./components/ui/CustomCursor";
import { Analytics } from '@vercel/analytics/react';
import Gfg from './components/Gfg';

function App() {
  // const isLoading = useLoading();

  return (
    <>
      {/* <LoadingScreen isLoading={isLoading} /> */}
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500  'opacity-100'}`}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        {/* <GitHub /> */}
        <Leetcode />
        <Gfg/>
        <Badges />
        {/* <Blogs /> */}
        
        <Certifications />
        
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;