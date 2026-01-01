import Image from 'next/image';

interface Role {
    title: string;
    type: string;
    date: string;
    location?: string;
    skills?: string;
}

interface CompanyExperienceProps {
    company: string;
    totalDuration?: string;
    location: string;
    logo?: string;
    roles: Role[];
}

const CompanyExperience = ({ company, totalDuration, location, logo, roles }: CompanyExperienceProps) => (
    <div className="flex gap-3 sm:gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 px-4 -mx-4 transition-colors group">
        {/* Company Logo Column */}
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex-shrink-0 bg-white rounded-sm overflow-hidden relative">
                {logo ? (
                    <Image src={logo} alt={company} width={48} height={48} className="object-cover" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                        {company.charAt(0)}
                    </div>
                )}
            </div>
            {/* Vertical Line for multi-role */}
            {roles.length > 1 && (
                <div className="w-0.5 h-[calc(100%-48px)] bg-gray-200 mt-2 rounded-full relative"></div>
            )}
        </div>

        {/* Content Column */}
        <div className="flex-1 pt-1.5">
            <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 leading-tight">{company}</h3>
                {totalDuration && <p className="text-sm text-gray-500">{totalDuration}</p>}
                <p className="text-sm text-gray-500">{location}</p>
            </div>

            <div className="relative">
                {roles.map((role, index) => (
                    <div key={index} className="relative pb-6 last:pb-0 pl-4 sm:pl-0">
                        {/* Timeline Dot (only if multiple roles) */}
                        {roles.length > 1 && (
                            <div className="absolute -left-[27px] top-[6px] w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white"></div>
                        )}

                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-gray-900 leading-5">{role.title}</h4>
                            <span className="text-sm text-gray-900">{role.type}</span>
                            <span className="text-sm text-gray-500">{role.date}</span>
                            {role.location && <span className="text-sm text-gray-500">{role.location}</span>}

                            {role.skills && (
                                <div className="mt-3 flex items-center gap-2 text-sm text-gray-900 font-medium">
                                    <span>{role.skills}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function Experience() {
    return (
        <section className="linkedin-card p-5 sm:p-6">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false" className="text-gray-500"><path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path></svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false" className="text-gray-500"><path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2 13-13a3 3 0 000-4.17zM6.76 19.5L4.5 20.24l.74-2.25L15.12 8 16 8.88 6.76 19.5zM18.88 11.76l-.88.88-2.64-2.64.88-.88a1 1 0 011.32 0l1.32 1.32a1 1 0 010 1.32z"></path></svg>
                    </button>
                </div>
            </div>

            <div className="mt-2">
                <CompanyExperience
                    company="Scogo.ai"
                    totalDuration="2 yrs"
                    location="Mumbai, Maharashtra, India"
                    // logo="/scogo-logo.png" // Uncomment when logo is available
                    roles={[
                        {
                            title: "Software Development Engineer I",
                            type: "Full-time",
                            date: "Aug 2024 - Present · 1 yr 6 mos",
                            skills: "Typescript, NestJS, Agentic Systems and +6 skills"
                        },
                        {
                            title: "AI Intern",
                            type: "Internship",
                            date: "Feb 2024 - Jul 2024 · 6 mos",
                            location: "On-site",
                            skills: "RAG, Large Language Models (LLM) and +3 skills"
                        }
                    ]}
                />
            </div>
        </section>
    )
}
