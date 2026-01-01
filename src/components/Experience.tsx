import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

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

const CompanyExperience = ({ company, totalDuration, location, logo, roles }: CompanyExperienceProps) => {
    const isMultiRole = roles.length > 1;

    return (
        <div className="grid grid-cols-[48px_1fr] gap-x-3 sm:gap-x-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 px-4 -mx-4 transition-colors group">
            {/* Row 1: Logo & Company Header */}
            <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-sm overflow-hidden relative z-10">
                    {logo ? (
                        <Image src={logo} alt={company} width={48} height={48} className="object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                            {company.charAt(0)}
                        </div>
                    )}
                </div>
                {/* Line from Logo down to next row (only if multi-role) */}
                {isMultiRole && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-2 absolute top-10 bottom-0"></div>
                )}
            </div>

            <div className="pt-1.5 mb-2">
                <h3 className="text-base font-bold text-gray-900 leading-tight">{company}</h3>
                {totalDuration && <p className="text-sm text-gray-500">{totalDuration}</p>}
                <p className="text-sm text-gray-500">{location}</p>
            </div>

            {/* Roles Rows */}
            {roles.map((role, index) => (
                <div key={index} className="contents">
                    {/* Left Column: Timeline (Empty if single role) */}
                    <div className="relative flex flex-col items-center">
                        {isMultiRole && (
                            <>
                                {/* Line from top to dot */}
                                <div className="w-0.5 h-[6px] bg-gray-200 absolute top-0"></div>
                                {/* Dot */}
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white z-10 mt-[1px]"></div>
                                {/* Line from dot to bottom (if not last) */}
                                {index !== roles.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-gray-200 absolute top-[11px] bottom-0"></div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Right Column: Role Content */}
                    <div className={`pb-6 last:pb-0 ${!isMultiRole ? 'col-start-2' : ''}`}>
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
                </div>
            ))}
        </div>
    );
};

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
                        <FontAwesomeIcon icon={faPenToSquare} className="text-gray-500 w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="mt-2">
                <CompanyExperience
                    company="Scogo.AI"
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
