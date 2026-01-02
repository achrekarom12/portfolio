import Image from 'next/image';

const SidebarItem = ({ name, headline }: { name: string, headline: string }) => (
    <div className="flex gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-4 -mx-4 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#dde7f1] flex items-center justify-center text-gray-500 font-bold text-lg">{name.charAt(0)}</div>
        </div>
        <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
            <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{headline}</p>
            <button className="mt-2 text-sm text-gray-600 border border-gray-500 rounded-full px-4 py-1 hover:bg-gray-100 hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.6)] font-semibold flex items-center justify-center gap-1 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path></svg>
                Connect
            </button>
        </div>
    </div>
);

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

            <div className="linkedin-card p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base font-semibold text-gray-900">People you may know</h2>
                </div>
                <div className="space-y-1 blur-[3px] select-none pointer-events-none">
                    <SidebarItem name="Alex Johnson" headline="Software Engineer III at Netflix" />
                    <SidebarItem name="Maria Garcia" headline="Data Scientist at Uber" />
                </div>
            </div>

            <div className="text-[12px] text-gray-500 flex justify-center text-center px-4">
                <span>Made this with <span className="text-red-500">❤️</span> by Om Achrekar using <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline cursor-pointer font-medium">Antigravity</a></span>
            </div>
        </div>
    )
}
