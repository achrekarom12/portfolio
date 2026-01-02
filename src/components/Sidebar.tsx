import PeopleYouMayKnow, { SidebarItem } from './PeopleYouMayKnow';

export default function Sidebar() {
    return (
        <div className="md:sticky md:top-[72px]">
            <div className="linkedin-card p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base font-semibold text-gray-900">People also viewed</h2>
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

            <div className="text-[12px] text-gray-500 flex justify-center text-center px-4">
                <span>Made this with <span className="text-red-500">❤️</span> by Om Achrekar using <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline cursor-pointer font-medium">Antigravity</a></span>
            </div>
        </div>
    )
}
