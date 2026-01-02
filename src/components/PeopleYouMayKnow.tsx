import Image from 'next/image';

interface SidebarItemProps {
    name: string;
    headline: string;
    showConnect?: boolean;
}

export const SidebarItem = ({ name, headline, showConnect = true }: SidebarItemProps) => (
    <div className="flex gap-3 py-3 border-b border-[var(--divider)] last:border-0 hover:bg-[var(--bg-color)] px-4 -mx-4 cursor-pointer transition-colors group">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#dde7f1] flex items-center justify-center text-gray-500 font-bold text-lg">{name.charAt(0)}</div>
        </div>
        <div className="flex-1">
            <h3 className="text-sm font-semibold text-[var(--text-main)] transition-colors">{name}</h3>
            <p className="text-xs text-[var(--text-dim)] line-clamp-2 mt-0.5 transition-colors">{headline}</p>
            {showConnect && (
                <button className="mt-2 text-sm text-[var(--text-dim)] border border-[var(--text-dim)] rounded-full px-4 py-1 hover:bg-[var(--bg-color)] hover:shadow-[inset_0_0_0_1px_var(--text-main)] font-semibold flex items-center justify-center gap-1 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path></svg>
                    Connect
                </button>
            )}
        </div>
    </div>
);

export default function PeopleYouMayKnow({ blurred = false }: { blurred?: boolean }) {
    const people = [
        { name: "David Chen", headline: "Full Stack Developer @ Amazon | AWS Certified" },
        { name: "Emily Davis", headline: "Frontend Architect | Typography Enthusiast" },
        { name: "Michael Brown", headline: "Engineering Manager at Microsoft" }
    ];

    return (
        <div className="linkedin-card p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-semibold text-[var(--text-main)] transition-colors">People you may know</h2>
            </div>
            <div className={`space-y-1 ${blurred ? 'blur-[3px] select-none pointer-events-none' : ''}`}>
                {people.map((person, index) => (
                    <SidebarItem key={index} name={person.name} headline={person.headline} />
                ))}
            </div>
        </div>
    );
}
