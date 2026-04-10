"use client";

import PeopleYouMayKnow from './PeopleYouMayKnow';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from './ThemeProvider';

const selectLastHalfYear = (contributions: any[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
    
    return contributions.filter((activity: any) => {
        const date = new Date(activity.date);
        const monthDiff = (currentYear - date.getFullYear()) * 12 + (currentMonth - date.getMonth());
        return monthDiff < shownMonths;
    });
};

export default function Sidebar() {
    const { theme } = useTheme();

    return (
        <div className="md:sticky md:top-[72px] space-y-4">
            <div className="linkedin-card p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base font-semibold text-[var(--text-main)] transition-colors">GitHub Contributions</h2>
                </div>
                <div className="w-full mt-3 flex justify-center [&_svg]:!w-full [&_svg]:!max-w-[400px]">
                    <GitHubCalendar 
                        username="achrekarom12" 
                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                        blockSize={18}
                        blockMargin={5}
                        blockRadius={4}
                        fontSize={14}
                        transformData={selectLastHalfYear}
                        hideColorLegend={true}
                    />
                </div>
            </div>

            <PeopleYouMayKnow blurred={true} />

            <div className="text-[12px] text-[var(--text-dim)] flex justify-center text-center px-4 transition-colors">
                <span>Made this with <span className="text-red-500">❤️</span> by Om Achrekar using <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] hover:underline cursor-pointer font-medium transition-colors">Antigravity</a></span>
            </div>
        </div>
    )
}
