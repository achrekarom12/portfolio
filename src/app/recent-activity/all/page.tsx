import LinkedinNavbar from '@/components/LinkedinNavbar';
import ProfileMiniCard from '@/components/ProfileMiniCard';
import ActivityFeed from '@/components/ActivityFeed';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow';

export const metadata = {
    title: 'Recent Activity | Om Achrekar',
    description: 'View all recent activities and posts by Om Achrekar',
};

export default function RecentActivityPage() {
    return (
        <div className="min-h-screen bg-[#f3f2ef]">
            <LinkedinNavbar />

            <div className="container-max pt-[72px] pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Sidebar - Profile Mini Card (Wider col-span-3) */}
                    <aside className="md:col-span-4 lg:col-span-3">
                        <ProfileMiniCard />
                    </aside>

                    {/* Main Content - Activity Feed (Narrower col-span-6) */}
                    <main className="col-span-1 md:col-span-8 lg:col-span-6 space-y-4">
                        <ActivityFeed />
                    </main>

                    {/* Right Sidebar (col-span-3) */}
                    <aside className="hidden lg:block lg:col-span-3 space-y-4">
                        <PeopleYouMayKnow blurred={true} />
                    </aside>
                </div>
            </div>
        </div>
    );
}
