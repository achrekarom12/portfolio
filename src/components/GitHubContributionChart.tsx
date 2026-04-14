'use client';

import { ContributionCalendar, ContributionWeek } from '@/utils/github';

interface Props {
    calendar: ContributionCalendar | null;
    colorScheme?: 'dark' | 'light';
    /** Number of recent months to show (default: 6) */
    months?: number;
}

function getLevel(count: number, max: number): 0 | 1 | 2 | 3 | 4 {
    if (count === 0 || max === 0) return 0;
    const ratio = count / max;
    if (ratio <= 0.15) return 1;
    if (ratio <= 0.40) return 2;
    if (ratio <= 0.70) return 3;
    return 4;
}

const DARK_COLORS: Record<0 | 1 | 2 | 3 | 4, string> = {
    0: '#161b22',
    1: '#0e4429',
    2: '#006d32',
    3: '#26a641',
    4: '#39d353',
};

const LIGHT_COLORS: Record<0 | 1 | 2 | 3 | 4, string> = {
    0: '#ebedf0',
    1: '#9be9a8',
    2: '#40c463',
    3: '#30a14e',
    4: '#216e39',
};

function filterLastNMonths(weeks: ContributionWeek[], months: number): ContributionWeek[] {
    const now = new Date();
    const cutoff = new Date(now.getFullYear(), now.getMonth() - months, now.getDate());

    return weeks
        .map((week) => ({
            contributionDays: week.contributionDays.filter(
                (day) => new Date(day.date) >= cutoff
            ),
        }))
        .filter((week) => week.contributionDays.length > 0);
}

/** Returns 0 (Sun) – 6 (Sat) for a date string */
function getDayOfWeek(dateStr: string): number {
    return new Date(dateStr).getDay();
}

export default function GitHubContributionChart({
    calendar,
    colorScheme = 'dark',
    months = 6,
}: Props) {
    if (!calendar) return null;

    const colors = colorScheme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
    const filteredWeeks = filterLastNMonths(calendar.weeks, months);
    const numCols = filteredWeeks.length;

    const max = filteredWeeks.reduce((acc, week) => {
        const weekMax = week.contributionDays.reduce(
            (a, d) => Math.max(a, d.contributionCount),
            0
        );
        return Math.max(acc, weekMax);
    }, 0);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 1fr)`,
                    gridTemplateRows: 'repeat(7, auto)',
                    gap: '4px',
                    width: '100%',
                }}
            >
                {filteredWeeks.map((week, wi) =>
                    week.contributionDays.map((day) => {
                        const level = getLevel(day.contributionCount, max);
                        const row = getDayOfWeek(day.date); // 0=Sun .. 6=Sat
                        return (
                            <div
                                key={day.date}
                                title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}`}
                                style={{
                                    gridColumn: wi + 1,
                                    gridRow: row + 1,
                                    borderRadius: '3px',
                                    backgroundColor: colors[level],
                                    aspectRatio: '1',
                                }}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}
