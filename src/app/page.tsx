import LinkedinNavbar from '@/components/LinkedinNavbar'
import ProfileHeader from '@/components/ProfileHeader'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <LinkedinNavbar />

      <div className="container-max pt-[72px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content - Left Side */}
          <main className="md:col-span-8 lg:col-span-9 space-y-2 sm:space-y-4">
            <ProfileHeader />
            <About />
            <Experience />
            <Education />
            <Skills />

            {/* Credits / Footer for Main Column */}
            <div className="text-center text-sm text-gray-500 py-4">
            </div>
          </main>

          {/* Sidebar - Right Side */}
          <aside className="md:col-span-4 lg:col-span-3 sm:space-y-4">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}