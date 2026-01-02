import PeopleYouMayKnow, { SidebarItem } from './PeopleYouMayKnow';

export default function Sidebar() {
    return (
        <div className="md:sticky md:top-[72px]">
            <div className="linkedin-card p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base font-semibold text-[var(--text-main)] transition-colors">People also viewed</h2>
                </div>
                <div className="space-y-1 blur-[3px] select-none pointer-events-none">
                    <SidebarItem name="Sarah Smith" headline="Senior Software Engineer at Google | Python | React" />
                    <SidebarItem name="David Chen" headline="Full Stack Developer @ Amazon | AWS Certified" />
                    <SidebarItem name="Emily Davis" headline="Frontend Architect | Typography Enthusiast" />
                    <SidebarItem name="Michael Brown" headline="Engineering Manager at Microsoft" />
                    <SidebarItem name="Jessica Wilson" headline="Product Designer | UX/UI" />
                </div>
            </div>

            <PeopleYouMayKnow blurred={true} />

            <div className="text-[12px] text-[var(--text-dim)] flex justify-center text-center px-4 transition-colors">
                <span>Made this with <span className="text-red-500">❤️</span> by Om Achrekar using <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="hover:text-[#71b7fb] hover:underline cursor-pointer font-medium transition-colors">Antigravity</a></span>
            </div>
        </div>
    )
}
