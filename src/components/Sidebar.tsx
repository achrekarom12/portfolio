"use client";

import PeopleYouMayKnow from './PeopleYouMayKnow';

export default function Sidebar() {
    return (
        <div className="md:sticky md:top-[72px] space-y-4">
            <PeopleYouMayKnow blurred={true} />

            <div className="text-[12px] text-[var(--text-dim)] flex justify-center text-center px-4 transition-colors">
                <span>Made this with <span className="text-red-500">❤️</span> by Om Achrekar using <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] hover:underline cursor-pointer font-medium transition-colors">Antigravity</a></span>
            </div>
        </div>
    )
}
