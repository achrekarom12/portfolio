

const About = () => {
  return (
    <section className="linkedin-card p-5 sm:p-6 sm:pb-8 sm:pt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">About</h2>
      </div>
      <p className="text-sm text-[var(--text-main)] leading-relaxed whitespace-pre-line transition-colors">
        I am a Software Development Engineer specializing in Backend Development and Agentic AI Systems. With a core stack of <b>TypeScript</b>, <b>Python</b>, and <b>C++</b>, I bridge the gap between advanced AI research and scalable production environments. 
        {'\n\n'}
        In my current role at Scogo Networks, I focus on building and optimizing robust backend. My work involves designing <b>multi-agentic workflows</b> and <b>LLMOps pipelines</b> for Agentic backend systems. I have a proven track record of taking complex AI concepts—from custom NER pipelines for task extraction to OCR systems for financial documents—and turning them into high-performance tools.
      </p>
    </section>
  )
}

export default About
