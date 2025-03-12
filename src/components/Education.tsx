
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'Maulana Azad National Institute of Technology [Nit-Bhopal] , Bhopal',
    period: '2021 - 2024',
    score: '7.89 CGPA ',
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Maulana Mazharul Haque University, Patna- Bihar',
    period: '2017 - 2020',
    score: '75.5%',
  },
  {
    degree: 'XII',
    institution: 'Ram Krishna College [BSEB], Madhubani- Bihar',
    period: '2014 - 2016',
    score: '60%',
  },
  {
    degree: 'X',
    institution: 'Regional Secondary School [CBSE], Madhubani- Bihar',
    period: '2014',
    score: '8.8 CGPA',
  }
 
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
