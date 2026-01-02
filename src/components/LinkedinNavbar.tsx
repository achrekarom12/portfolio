'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const NavItem = ({ icon, label, active = false, href = "#" }: { icon: React.ReactNode, label: string, active?: boolean, href?: string }) => (
    <Link href={href} className={`flex flex-col items-center justify-center cursor-pointer min-w-[80px] h-[52px] border-b-2 mr-1 ${active ? 'border-[var(--text-main)] text-[var(--text-main)]' : 'border-transparent text-[var(--text-dim)] hover:text-[var(--text-main)]'} transition-colors`}>
        <div className="relative">
            {icon}
            {label === "Notifications" && (
                <span className="absolute -top-1 -right-1 bg-[#cc1016] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">3</span>
            )}
        </div>
        <span className="text-[12px] mt-0.5 hidden md:block">{label}</span>
    </Link>
);

export default function LinkedinNavbar() {
    const [isFocused, setIsFocused] = useState(false);
    const [isMeOpen, setIsMeOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMeOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-[var(--nav-bg)] border-b border-[var(--nav-border)] z-50 h-[56px] transition-colors duration-200">
            <div className="container-max h-full flex items-center justify-between px-2 sm:px-0 relative">
                <div className="flex items-center gap-2 md:flex-none">
                    <Link href="/">
                        <svg viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-[#0a66c2]" aria-label="LinkedIn">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-2.12-1.61-2.12a1.77 1.77 0 00-1.63 1.15.86.86 0 00-.06.42V19h-3v-9h2.9v1.3a2.89 2.89 0 012.63-1.45c1.92 0 3.37 1.28 3.37 4.02z"></path>
                        </svg>
                    </Link>

                    {/* Mobile Search Icon */}
                    <div className="md:hidden ml-2 flex items-center h-full text-[var(--text-dim)]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="true" fill="currentColor">
                            <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-1.09l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                        </svg>
                    </div>

                    {/* Search Bar - Desktop Only */}
                    <div className="hidden md:block relative w-[280px]">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="true" className="w-5 h-5 fill-[var(--text-dim)]">
                                <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-1.09l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-[var(--input-bg)] h-[34px] w-full rounded-full text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] border border-[var(--nav-border)] pl-10 pr-4 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#0a66c2]"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>
                </div>

                {/* Navigation - Desktop and Mobile (Custom Icons) */}
                <nav className="flex flex-1 justify-end items-center h-full space-x-0 md:space-x-1 pt-0 md:pt-2">
                    <Link href="/" className="flex flex-col items-center justify-center min-w-[40px] md:min-w-[80px] h-[52px] md:border-b-2 border-[var(--text-main)] text-[var(--text-main)] transition-colors">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path></svg>
                            <span className="absolute -top-1 -right-1 bg-[#cc1016] border-2 border-[var(--nav-bg)] rounded-full h-3 w-3"></span>
                        </div>
                        <span className="text-[12px] mt-0.5 hidden md:block">Home</span>
                    </Link>

                    <Link href="#" className="flex flex-col items-center justify-center min-w-[40px] md:min-w-[80px] h-[52px] text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path></svg>
                        <span className="text-[12px] mt-0.5 hidden md:block">My Network</span>
                    </Link>

                    <Link href="#" className="flex flex-col items-center justify-center min-w-[40px] md:min-w-[80px] h-[52px] text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path></svg>
                        <span className="text-[12px] mt-0.5 hidden md:block">Jobs</span>
                    </Link>

                    <Link href="#" className="flex flex-col items-center justify-center min-w-[40px] md:min-w-[80px] h-[52px] text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path></svg>
                        <span className="text-[12px] mt-0.5 hidden md:block">Messaging</span>
                    </Link>

                    <Link href="#" className="flex flex-col items-center justify-center min-w-[40px] md:min-w-[80px] h-[52px] text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path></svg>
                            <span className="absolute -top-1 -right-1 bg-[#cc1016] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-[var(--nav-bg)]">1</span>
                        </div>
                        <span className="text-[12px] mt-0.5 hidden md:block">Notifications</span>
                    </Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsMeOpen(!isMeOpen)}
                            className="flex flex-col items-center justify-center cursor-pointer min-w-[40px] md:min-w-[80px] h-[52px] border-b-2 border-transparent text-[var(--text-dim)] hover:text-[var(--text-main)] md:ml-1 md:border-l border-[var(--divider)] md:pl-2 transition-colors duration-200"
                        >
                            <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden shrink-0">
                                <img src="/my_image.png" alt="Me" className="w-full h-full object-cover" />
                            </div>
                            <div className="hidden md:flex items-center mt-0.5">
                                <span className="text-[12px]">Me</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false" className={`transition-transform duration-200 ${isMeOpen ? 'rotate-180' : ''}`}><path d="M8 11L3 6h10z" fillRule="evenodd"></path></svg>
                            </div>
                        </button>

                        {isMeOpen && (
                            <div className="absolute right-0 top-[56px] w-[280px] bg-[var(--card-bg)] border border-[var(--border-main)] rounded-lg shadow-xl overflow-hidden py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="px-4 py-3 border-b border-[var(--divider)]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                                            <img src="/my_image.png" alt="Me" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-semibold text-sm truncate text-[var(--text-main)]">Om Achrekar</p>
                                            <p className="text-xs text-[var(--text-dim)] truncate">Software Engineer</p>
                                        </div>
                                    </div>
                                    <Link href="/" className="block mt-3 text-center w-full py-1 border border-[#0a66c2] text-[#0a66c2] font-semibold rounded-full text-sm hover:bg-[#e2f0fe] transition-colors">
                                        View Profile
                                    </Link>
                                </div>

                                <div className="py-2">
                                    <div className="px-4 py-2 flex items-center justify-between hover:bg-[var(--bg-color)] transition-colors cursor-pointer" onClick={toggleTheme}>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-[var(--text-main)]">Dark Mode</span>
                                        </div>
                                        <div className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${theme === 'dark' ? 'bg-[#0a66c2]' : 'bg-gray-300'}`}>
                                            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${theme === 'dark' ? 'translate-x-6' : ''}`}></div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 hover:bg-[var(--bg-color)] transition-colors cursor-pointer">
                                        <span className="text-sm text-[var(--text-main)]">Settings & Privacy</span>
                                    </div>
                                    <div className="px-4 py-2 hover:bg-[var(--bg-color)] transition-colors cursor-pointer border-t border-[var(--divider)] mt-1">
                                        <span className="text-sm text-[var(--text-main)]">Sign Out</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
