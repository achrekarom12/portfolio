import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const Skills = () => {
  const skills = [
    "Machine Learning",
    "Natural Language Processing",
    "Backend Development",
    "Deep Learning",
    "Data Science",
    "Data Structures and Algorithms",
    "React.js",
    "Next.js",
    "Python",
    "TypeScript"
  ]

  return (
    <section className="linkedin-card p-5 sm:p-6 pb-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false" className="text-gray-500"><path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path></svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FontAwesomeIcon icon={faPenToSquare} className="text-gray-500 w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="">
        {skills.slice(0, 3).map((skill, index) => (
          <div key={index} className="py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-4 -mx-4 cursor-pointer transition-colors">
            <h3 className="font-semibold text-gray-900 text-base">{skill}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">2 endorsements</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 mt-2">
        <button className="w-full py-3 text-base font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors flex items-center justify-center gap-1">
          Show all {skills.length} skills
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M8 12L12 8 11.29 7.29 8.5 10.08 8.5 1 7.5 1 7.5 10.08 4.71 7.29 4 8z"></path></svg>
        </button>
      </div>
    </section>
  )
}

export default Skills
