'use client'

import { useState } from 'react'

const Projects = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const projects = [
    {
      id: 'opensource',
      title: 'Open Source Contribution',
      description: 'SSoC \'23 Contributor',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      content: (
        <div>
          <p className="mb-4">One of the top three contributors of the programme.</p>
          <p>Top Contributor in{' '}
            <a 
              href="https://github.com/abhisheks008/DL-Simplified" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              DL-Simplified
            </a>{' '}
            repository with over 21 PRs merged.
          </p>
        </div>
      )
    },
    {
      id: 'personal',
      title: 'Own Projects',
      description: 'Personal development projects',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/TalkCSV" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TalkCSV: Talk to your CSV files!
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/Coderunners_Datahack" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Car Resale Value Prediction using DL
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/tsechacks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Normal. A web application for disabled community
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/mingle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Mingle. Blind dating app
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/openessay.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              OpenEssay.AI
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/Hackanova-2.0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Code Tutor
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/Self-Driving-Car" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Self Driving Car using JS
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/ASL-Alphabets" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              American Sign Language Detection using OpenCV
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/Metaverse-Web-App" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Metaverse Web App
            </a>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/achrekarom12/Data-Analysis-of-Netflix" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Netflix Data Analysis
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some projects I've worked on in my free time & open source contributions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <button
                onClick={() => setActiveModal(project.id)}
                className="btn-secondary text-sm"
              >
                View More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {projects.find(p => p.id === activeModal)?.title}
                  </h3>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-gray-300">
                  {projects.find(p => p.id === activeModal)?.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
