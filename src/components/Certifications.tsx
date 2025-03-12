
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Problem Solving (Intermediate) ",
    issuer: "HackerRank",
    date: "Dec 2022",
    link: "https://www.hackerrank.com/certificates/ec89ef06983e",
    image: "https://res.cloudinary.com/dd9ca7pyl/image/upload/v1741719907/sxzvq8fbbnixbmdiuuiz.jpg",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "Dec 2022",
    link: "https://www.hackerrank.com/certificates/b3b1befb0309",
    image: "https://res.cloudinary.com/dd9ca7pyl/image/upload/v1741720377/cmejwirk1bl01vxudgyo.jpg",
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    date: "june 2024",
    link: "https://www.hackerrank.com/certificates/70452246e3e0",
    image: "https://res.cloudinary.com/dd9ca7pyl/image/upload/v1741720693/fqaeuxu16mvsynzvmk7u.jpg",
  },
  {
    title: "JAVA",
    issuer: "HackerRank",
    date: "june 2023",
    link: "https://www.hackerrank.com/certificates/4028d9dd675e",
    image: "https://res.cloudinary.com/dd9ca7pyl/image/upload/v1741720207/olerpeulpctfn1sapbtf.jpg",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Udemy",
    date: "march 2022",
    link: "https://www.udemy.com/certificate/UC-89cc6969-e942-40f8-9c95-44e75e8b4214/",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-89cc6969-e942-40f8-9c95-44e75e8b4214.jpg",
  }
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
