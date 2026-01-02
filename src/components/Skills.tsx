"use client";
import { useState } from 'react';


const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    "TypeScript",
    "Python",
    "Backend Development",
    "Git",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Fastify",
    "NestJS",
    "FastAPI",
    "Machine Learning",
    "Data Structures and Algorithms",
    "Natural Language Processing",
    "Deep Learning",
    "Data Science",
    "System Design"
  ]

  const displayedSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <section className="linkedin-card p-5 sm:p-6 pb-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Skills</h2>
      </div>

      <div className="">
        {displayedSkills.map((skill, index) => (
          <div key={index} className="py-4 border-b border-[var(--divider)] last:border-0 px-4 -mx-4 cursor-pointer transition-colors">
            <h3 className="font-semibold text-[var(--text-main)] text-base transition-colors">{skill}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-[var(--text-dim)] transition-colors">2 endorsements</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--divider)] mt-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full py-3 text-base font-semibold text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors flex items-center justify-center gap-1"
        >
          {showAll ? "Show less" : `Show all ${skills.length} skills`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
            className={`transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
          >
            <path d="M8 12L12 8 11.29 7.29 8.5 10.08 8.5 1 7.5 1 7.5 10.08 4.71 7.29 4 8z"></path>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Skills
