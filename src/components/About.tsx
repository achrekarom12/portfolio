import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  return (
    <section className="linkedin-card p-5 sm:p-6 sm:pb-8 sm:pt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-900">About</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <FontAwesomeIcon icon={faPenToSquare} className="text-gray-500 w-6 h-6" />
        </button>
      </div>
      <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-line">
        I am skilled in Machine Learning, C++, Java, Python, and Typescript, and I specialize in Deep Learning and Natural Language Processing.
        {'\n\n'}
        With a solid foundation in these technologies, I am passionate about developing innovative AI-driven solutions. My proficiency across multiple programming languages and expertise in advanced domains allow me to approach challenges creatively and contribute significantly to projects at the forefront of technology.
      </p>
    </section>
  )
}

export default About
