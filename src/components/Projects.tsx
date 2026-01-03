'use client'

import React, { useState } from 'react'

interface ProjectItemProps {
  title: string;
  duration: string;
  description: string;
  skills?: string[];
  link?: string;
  isLast?: boolean;
}

const ProjectItem = ({ title, duration, description, skills, link, isLast }: ProjectItemProps) => {
  return (
    <div className={`py-4 ${!isLast ? 'border-b border-[var(--divider)]' : ''} px-4 -mx-4 transition-colors`}>
      <div className="flex flex-col">
        <h3 className="text-base font-bold text-[var(--text-main)] leading-tight transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--text-dim)] mt-1 transition-colors">
          {duration}
        </p>
        <div className="mt-3 text-sm text-[var(--text-main)] leading-normal transition-colors">
          <p className="line-clamp-3 md:line-clamp-none">
            {description}
          </p>
        </div>

        {skills && skills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--input-bg)] text-[var(--text-dim)] border border-[var(--divider)] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tertiary text-sm flex items-center gap-2 hover:bg-[var(--divider)] transition-all w-fit px-4 py-1.5 border border-[var(--text-dim)] rounded-full text-[var(--text-dim)] hover:text-[var(--text-main)]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Show project
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "MongoDB MCP Server",
      duration: "Apr 2025",
      description: "A Model Context Protocol (MCP) server enabling large language models (LLMs) to communicate directly with MongoDB. It allows natural language to be used for database queries, schema exploration, and data operations.",
      skills: ["MongoDB", "MCP", "LLM", "Node.js", "TypeScript"],
      link: "https://github.com/achrekarom12/mcp-mongo"
    },
    {
      title: "Speech Pattern Analysis for Alzheimer's Detection",
      duration: "Jul 2023 - Apr 2024",
      description: "This project aims to develop a non-invasive and accessible method for early detection of Alzheimer's disease (AD) through speech pattern analysis. The lack of scalable and non-intrusive diagnostic approaches poses a challenge for timely interventions and patient care. By utilizing machine learning algorithms on a diverse dataset of audio recordings, the goal is to identify relevant speech features indicative of AD, leading to the creation of a robust classification model. The project emphasizes ethical considerations in data collection and analysis to ensure privacy and confidentiality. Successful implementation will contribute to improved AD diagnosis and personalized care strategies, enhancing patient outcomes.",
      skills: ["Deep Learning", "Python", "NLP", "TensorFlow"],
    },
    {
      title: "Meeting Task Extraction and Assignment Tracker Using NLP",
      duration: "Oct 2023 - Nov 2023",
      description: "Developed a natural language processing (NLP) solution to automatically extract and categorize assignee names and tasks assigned to them from a given set of unstructured text data. The system should be capable of accurately identifying different assignees and their associated tasks, even in cases where the language used is varied or complex. The final solution should provide a reliable method for extracting assignee-task pairs, enabling efficient task management and assignment tracking within the organization.",
      skills: ["NLP", "Python", "Spacy", "NLTK"],
      link: "https://github.com/achrekarom12/meeting-task-extraction"
    },
    {
      title: "Self Driving Car Simulation using Feedforward Neural Network ",
      duration: "Jan 2023",
      description: "This project demonstrates practical implementation of neural networks in Javascript. Car used feedforward neural network to learn about the obstacles in the road. After every iteration its performance got improved and finally the car was able to clear all the obstacles.",
      skills: ["JavaScript", "Neural Networks", "Simulation"],
      link: "https://github.com/achrekarom12/Self-Driving-Car"
    },
    {
      title: "Open Source Contribution - SSoC '23",
      duration: "May 2023 - Aug 2023",
      description: "Top 3 contributor at Social Summer of Code 2023. Contributed 21+ PRs to DL-Simplified, focusing on implementing deep learning models and improving documentation.",
      skills: ["Deep Learning", "Open Source", "Python", "GitHub"],
      link: "https://github.com/abhisheks008/DL-Simplified"
    },
    {
      title: "Normal: Jobs for all",
      duration: "Mar 2023",
      description: "This project was done during the TSEC Hacks 2023. It aims to provide platform to specially abeled people to be 'Normal' like us. It comprised of Job Portal for such people and the main thing was this whole website was abeled to navigate through voice commands. I oversaw the backedn for the project.",
      skills: ["NextJS", "TypeScript", "Speech Recognition"],
      link: "https://github.com/achrekarom12/tsechacks"
    },
    {
      title: "Car Resale Value Prediction",
      duration: "Apr 2023",
      description: "Deep learning based system to predict the resale value of cars based on various parameters. Achieved high accuracy using neural networks.",
      skills: ["Deep Learning", "Neural Networks", "Python", "Data Science"],
      link: "https://github.com/achrekarom12/Coderunners_Datahack"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="linkedin-card p-5 sm:p-6 mb-2 pb-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Projects</h2>
      </div>

      <div className="mt-2">
        {displayedProjects.map((project) => (
          <ProjectItem
            key={project.title}
            {...project}
            isLast={project.title === displayedProjects[displayedProjects.length - 1].title}
          />
        ))}
      </div>

      <div className="border-t border-[var(--divider)] mt-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full py-3 text-base font-semibold text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors flex items-center justify-center gap-1"
        >
          {showAll ? "Show less" : `Show all ${projects.length} projects`}
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
  );
}
