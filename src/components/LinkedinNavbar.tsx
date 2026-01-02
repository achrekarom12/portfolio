'use client';

import Link from 'next/link';
import { useState } from 'react';

const NavItem = ({ icon, label, active = false, href = "#" }: { icon: React.ReactNode, label: string, active?: boolean, href?: string }) => (
    <Link href={href} className={`flex flex-col items-center justify-center cursor-pointer min-w-[80px] h-[52px] border-b-2 mr-1 ${active ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black hover:fill-black'} transition-colors`}>
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-[#e0dfdc] z-50 h-[52px]">
            <div className="container-max h-full flex items-center justify-between px-4 sm:px-0 relative">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <svg viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-[#0a66c2]" aria-label="LinkedIn">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-2.12-1.61-2.12a1.77 1.77 0 00-1.63 1.15.86.86 0 00-.06.42V19h-3v-9h2.9v1.3a2.89 2.89 0 012.63-1.45c1.92 0 3.37 1.28 3.37 4.02z"></path>
                        </svg>
                    </Link>

                    {/* Search Bar - Desktop Only */}
                    <div className="hidden md:block relative w-[280px]">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-opacity'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="true" className="w-5 h-5 fill-gray-600">
                                <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-1.09l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-[#eef3f8] h-[34px] w-full rounded-full text-sm text-gray-900 placeholder-gray-600 border border-gray-200 pl-10 pr-4 transition-colors duration-200"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center h-full sm:space-x-1 pt-2">
                    <NavItem
                        active={true}
                        label="Home"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path></svg>}
                    />
                    <NavItem
                        label="My Network"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path></svg>}
                    />
                    <NavItem
                        label="Jobs"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path></svg>}
                    />
                    <NavItem
                        label="Messaging"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path></svg>}
                    />
                    <NavItem
                        label="Notifications"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path></svg>}
                    />
                    <div className="flex flex-col items-center justify-center cursor-pointer min-w-[80px] h-[52px] border-b-2 border-transparent text-gray-500 hover:text-black hover:fill-black ml-1 border-l border-gray-100 pl-2">
                        <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                            <img src="/my_image.png" alt="Me" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center mt-0.5">
                            <span className="text-[12px]">Me</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M8 11L3 6h10z" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Button - Right Most */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-black"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-[52px] right-0 w-full sm:w-[300px] bg-white border-b border-gray-200 shadow-xl md:hidden flex flex-col z-40 animate-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col py-2">
                            <Link href="#" className="flex items-center px-6 py-4 hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent hover:border-[#0a66c2] hover:text-[#0a66c2]" onClick={toggleMenu}>
                                <span className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path></svg>
                                </span>
                                Home
                            </Link>
                            <Link href="#" className="flex items-center px-6 py-4 hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent hover:border-[#0a66c2] hover:text-[#0a66c2]" onClick={toggleMenu}>
                                <span className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path></svg>
                                </span>
                                My Network
                            </Link>
                            <Link href="#" className="flex items-center px-6 py-4 hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent hover:border-[#0a66c2] hover:text-[#0a66c2]" onClick={toggleMenu}>
                                <span className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path></svg>
                                </span>
                                Jobs
                            </Link>
                            <Link href="#" className="flex items-center px-6 py-4 hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent hover:border-[#0a66c2] hover:text-[#0a66c2]" onClick={toggleMenu}>
                                <span className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path></svg>
                                </span>
                                Messaging
                            </Link>
                            <Link href="#" className="flex items-center px-6 py-4 hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent hover:border-[#0a66c2] hover:text-[#0a66c2]" onClick={toggleMenu}>
                                <span className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path></svg>
                                </span>
                                Notifications
                            </Link>
                            <div className="border-t border-gray-200 mt-2 pt-2 px-6 py-4 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-3">
                                    <img src="/my_image.png" alt="Me" className="w-full h-full object-cover" />
                                </div>
                                <span className="font-medium text-gray-700">Me</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
