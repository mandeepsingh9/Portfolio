
import { SectionTitle } from "./ui/SectionTitle";

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2024",
    image: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
    profile: "https://leetcode.com/u/minturajmdb1999/",
  },



  {
    id: "gfg",
    platform: "GeeksforGeeks",
    title: "Top 10% Coder",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    profile: "https://www.geeksforgeeks.org/user/mandeep139/",
  },

  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "Java Gold Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/profile/minturajmdb1999",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "Problem Solving Gold Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/profile/minturajmdb1999",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "c++ Gold Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/profile/minturajmdb1999",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "Python Silver Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/profile/minturajmdb1999",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "SQL Silver Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/profile/minturajmdb1999",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "C Programming Gold Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/profile/minturajmdb1999",
  },
];


export function Badges() {
  return (
    <section id="badges" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Coding Badges</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center justify-center p-5 bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

              {/* Badge Image */}
              <img
                src={badge.image}
                alt={badge.platform}
                className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
              />

              {/* Badge Text */}
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                {badge.title}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400">{badge.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
