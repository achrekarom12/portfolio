'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactInfoModal from './ContactInfoModal';
import OpenToModal from './OpenToModal';
import GitHubContributionChart from './GitHubContributionChart';
import { useTheme } from './ThemeProvider';
import { ContributionCalendar } from '@/utils/github';

interface ProfileHeaderProps {
    calendar: ContributionCalendar | null;
}

export default function ProfileHeader({ calendar }: ProfileHeaderProps) {
    const [showContactInfo, setShowContactInfo] = useState(false);
    const [showOpenToModal, setShowOpenToModal] = useState(false);
    const { theme } = useTheme();

    return (
        <>
            <ContactInfoModal isOpen={showContactInfo} onClose={() => setShowContactInfo(false)} />
            <OpenToModal isOpen={showOpenToModal} onClose={() => setShowOpenToModal(false)} />
            <section className="linkedin-card relative pt-[150px] sm:pt-[200px]">
                {/* Banner: GitHub Contribution Chart as background */}
                <div
                    className="absolute top-0 left-0 w-full h-[200px] sm:h-[250px] overflow-hidden rounded-t-lg"
                    style={{ background: 'var(--card-bg)' }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none select-none p-2"
                        style={{ opacity: 0.6 }}
                    >
                        <GitHubContributionChart
                            calendar={calendar}
                            colorScheme={theme === 'dark' ? 'dark' : 'light'}
                            months={6}
                        />
                    </div>
                    {/* Edge fades */}
                    <div className="absolute top-0 left-0 w-full h-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, var(--card-bg), transparent)' }}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to top, var(--card-bg), transparent)' }}
                    />
                    <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, var(--card-bg), transparent)' }}
                    />
                    <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, var(--card-bg), transparent)' }}
                    />
                </div>

                <div className="px-6 pb-6 relative">
                    {/* Profile Picture */}
                    <div className="absolute -top-[95px] sm:-top-[140px] left-6 border-4 border-[var(--card-bg)] rounded-full overflow-hidden w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] bg-[var(--card-bg)] shadow-sm">
                        <Image
                            src="/my_image.png"
                            alt="Om Achrekar"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>


                    <div className="mt-20 sm:mt-16">
                        <div className="flex flex-col sm:flex-row justify-between items-start">
                            <div>
                                <h1 className="mt-10 text-2xl font-semibold text-[var(--text-main)] flex items-center gap-1 transition-colors">
                                    Om Achrekar
                                    <span className="text-[var(--text-dim)] text-sm font-normal transition-colors">(He/Him)</span>
                                </h1>
                                <p className="text-base text-[var(--text-main)] mt-1 transition-colors">Software Development Engineer - I @Scogo.AI</p>

                                <div className="text-md text-[var(--text-dim)] mt-1 flex items-center gap-1 flex-wrap transition-colors">
                                    <span>Mumbai, Maharashtra, India</span>
                                    <span className="mx-1">·</span>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setShowContactInfo(true); }} className="text-[var(--accent-color)] hover:underline font-semibold">Contact info</a>
                                </div>

                                <div className="text-md text-[var(--text-dim)] mt-1 flex items-center gap-1 flex-wrap transition-colors">
                                    <span>1K followers</span>
                                    <span className="mx-1">·</span>
                                    <span>500+ connections</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-4 sm:mt-0">
                                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                                    <div className="w-6 h-6 rounded bg-[var(--bg-color)] flex items-center justify-center transition-colors">
                                        <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl rounded-sm">
                                            S
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-[var(--text-main)] transition-colors">Scogo.AI</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <button className="btn-primary">Open to</button>
                            <button className="btn-secondary flex items-center gap-2" onClick={() => setShowOpenToModal(true)}>
                                <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                                Message
                            </button>
                        </div>

                        {/* Carousel: Suggested for you / Opento work / etc */}
                        <div className="mt-6 p-4 bg-[var(--input-bg)] rounded-lg flex justify-between items-start cursor-pointer transition-colors relative">
                            <div>
                                <p className="text-sm font-semibold text-[var(--text-main)] transition-colors">Open to work</p>
                                <p className="text-sm text-[var(--text-main)] transition-colors">Software Engineer, Backend Engineer and AI Engineer roles</p>
                                <button className="text-[var(--accent-color)] text-sm font-semibold hover:underline mt-1">See all details</button>
                            </div>
                            <button className="p-1 rounded-full absolute top-2 right-2 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false" className="text-[var(--text-dim)]"><path d="M14 3.26L12.74 2 8 6.74 3.26 2 2 3.26 6.74 8 2 12.74 3.26 14 8 9.26 12.74 14 14 12.74 9.26 8z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
