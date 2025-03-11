import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="relative group pl-6 sm:pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-[-16px] top-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

      {/* Experience Card */}
      <div className="relative bg-gray-200 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
              <p className="text-base text-blue-600 dark:text-blue-400">{company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
            </div>
          </div>

          {/* Description (Custom Blue Bullets) */}
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            {description.split("\n").map((line, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span> 
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
