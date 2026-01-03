"use client";

import Image from 'next/image';
import { useState } from 'react';
import SkillsModal from './SkillsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


interface Role {
    title: string;
    type: string;
    startDate: string; // "YYYY-MM"
    endDate?: string;  // "YYYY-MM" or undefined for "Present"
    location?: string;
    description?: string;
    skills?: string[];
}

interface CompanyExperienceProps {
    company: string;
    location: string;
    logo?: string;
    roles: Role[];
}

const calculateDuration = (startStr: string, endStr?: string) => {
    const start = new Date(startStr);
    const end = endStr ? new Date(endStr) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = (end.getMonth() - start.getMonth()) + 1; // Inclusive of start month

    if (months < 0) {
        years--;
        months += 12;
    }

    if (months >= 12) {
        years += Math.floor(months / 12);
        months = months % 12;
    }

    const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

    return [yearStr, monthStr].filter(Boolean).join(' ');
};

const formatDateRange = (startStr: string, endStr?: string) => {
    const start = new Date(startStr);
    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const startFormatted = start.toLocaleDateString('en-US', options);

    if (!endStr) {
        return `${startFormatted} - Present · ${calculateDuration(startStr)}`;
    }

    const end = new Date(endStr);
    const endFormatted = end.toLocaleDateString('en-US', options);
    return `${startFormatted} - ${endFormatted} · ${calculateDuration(startStr, endStr)}`;
};

const CompanyExperience = ({ company, location, logo, roles }: CompanyExperienceProps) => {
    const isMultiRole = roles.length > 1;
    const [selectedRoleForSkills, setSelectedRoleForSkills] = useState<Role | null>(null);

    // Calculate total duration from the earliest start to the latest end
    const earliestStart = roles.reduce((min, r) => r.startDate < min ? r.startDate : min, roles[0].startDate);
    const latestEnd = roles.some(r => !r.endDate) ? undefined : roles.reduce((max, r) => (r.endDate || "") > (max || "") ? r.endDate : max, roles[0].endDate);
    const totalDuration = calculateDuration(earliestStart, latestEnd);

    return (
        <div className="grid grid-cols-[48px_1fr] gap-x-3 sm:gap-x-4 py-4 border-b border-[var(--divider)] last:border-0 px-4 -mx-4 transition-colors group">
            {selectedRoleForSkills && (
                <SkillsModal
                    isOpen={!!selectedRoleForSkills}
                    onClose={() => setSelectedRoleForSkills(null)}
                    skills={selectedRoleForSkills.skills || []}
                    title={selectedRoleForSkills.title}
                />
            )}
            {/* Row 1: Logo & Company Header */}
            <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--card-bg)] rounded-sm overflow-hidden relative z-10 transition-colors">
                    {logo ? (
                        <Image src={logo} alt={company} width={48} height={48} className="object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                            {company.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            <div className="pt-1.5 mb-2">
                <h3 className="text-base font-bold text-[var(--text-main)] leading-tight transition-colors">{company}</h3>
                {totalDuration && <p className="text-sm text-[var(--text-dim)] transition-colors">{totalDuration}</p>}
                <p className="text-sm text-[var(--text-dim)] transition-colors">{location}</p>
            </div>

            {/* Roles Rows */}
            {roles.map((role, index) => (
                <div key={index} className="contents">
                    {/* Left Column: Timeline (Empty if single role) */}
                    <div className="relative flex flex-col items-center">
                        {isMultiRole && (
                            <>
                                {/* Line from top to dot */}
                                <div className="w-0.5 h-[6px] bg-[var(--divider)] absolute top-0 transition-colors"></div>
                                {/* Dot */}
                                <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-dim)] ring-4 ring-[var(--card-bg)] z-10 mt-[1px] transition-all"></div>
                                {/* Line from dot to bottom (if not last) */}
                                {index !== roles.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-[var(--divider)] absolute top-[11px] bottom-0 transition-colors"></div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Right Column: Role Content */}
                    <div className={`pb-6 last:pb-3 ${!isMultiRole ? 'col-start-2' : ''}`}>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-[var(--text-main)] leading-5 transition-colors">{role.title}</h4>
                            <span className="text-sm text-[var(--text-main)] transition-colors">{role.type}</span>
                            <span className="text-sm text-[var(--text-dim)] transition-colors">{formatDateRange(role.startDate, role.endDate)}</span>
                            {role.location && <span className="text-sm text-[var(--text-dim)] transition-colors">{role.location}</span>}

                            {role.description && (
                                <p className="mt-2 text-sm text-[var(--text-main)] whitespace-pre-line transition-colors">
                                    {role.description}
                                </p>
                            )}

                            {role.skills && role.skills.length > 0 && (
                                <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-main)] font-medium transition-colors">
                                    <FontAwesomeIcon icon={faLightbulb} className="text-[var(--text-dim)] w-3.5 h-3.5" />
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        {role.skills.slice(0, 2).map((skill, i) => (
                                            <span key={i}>
                                                {skill}{i < Math.min(role.skills!.length, 2) - 1 || role.skills!.length > 2 ? ' · ' : ''}
                                            </span>
                                        ))}
                                        {role.skills.length > 2 && (
                                            <button
                                                onClick={() => setSelectedRoleForSkills(role)}
                                                className="text-[var(--text-dim)] hover:text-[var(--accent-color)] hover:underline transition-colors ml-0.5"
                                            >
                                                +{role.skills.length - 2} skills
                                            </button>
                                        )}
                                    </div>
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
                <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Experience</h2>
            </div>

            <div className="mt-2">
                <CompanyExperience
                    company="Scogo.AI"
                    location="Mumbai, Maharashtra, India"
                    // logo="/scogo-logo.png" // Uncomment when logo is available
                    roles={[
                        {
                            title: "Software Development Engineer I",
                            type: "Full-time",
                            startDate: "2024-08",
                            description: "I take care of the backend of agentic system including agent orchestration, async execution, event streaming, workflows management and integrating the agents into existing NestJS microservice stack.",
                            skills: ["Typescript", "NestJS", "Agentic Systems", "Microservices", "Event Streaming", "Workflow Management", "Backend Development", "Async Execution"]
                        },
                        {
                            title: "AI Intern",
                            type: "Internship",
                            startDate: "2024-02",
                            endDate: "2024-07",
                            location: "On-site",
                            description: "I created a small AI based utility which could automatically parse the invoices and return the information in structured JSON format for better use. This was integrated into the core platform and was used by end users.",
                            skills: ["RAG", "Large Language Models (LLM)", "Python", "JSON Parsing", "AI Integration"]
                        }
                    ]}
                />
            </div>
        </section>
    )
}
