const About = () => {
  return (
    <section className="linkedin-card p-5 sm:p-6 sm:pb-8 sm:pt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-900">About</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false" className="text-gray-500"><path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2 13-13a3 3 0 000-4.17zM6.76 19.5L4.5 20.24l.74-2.25L15.12 8 16 8.88 6.76 19.5zM18.88 11.76l-.88.88-2.64-2.64.88-.88a1 1 0 011.32 0l1.32 1.32a1 1 0 010 1.32z"></path></svg>
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
