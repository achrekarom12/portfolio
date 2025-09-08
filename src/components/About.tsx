const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-justify">
            I am skilled in Machine Learning, C++, Java, Python, and Typescript, and I specialize in Deep Learning and
Natural Language Processing. With a solid foundation in these technologies, I am passionate about
developing innovative AI-driven solutions. My proficiency across multiple programming languages
and expertise in advanced domains allow me to approach challenges creatively and contribute
significantly to projects at the forefront of technology..
            </p>

            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1EoKdiC797U4H1NY7C5w1Md0FxvOYTGKN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
