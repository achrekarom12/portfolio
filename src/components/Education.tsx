import Image from 'next/image';

interface EducationItemProps {
    school: string;
    degree: string;
    duration: string;
    logo?: string;
}

const EducationItem = ({ school, degree, duration, logo }: EducationItemProps) => {
    return (
        <div className="flex gap-4 py-4 border-b border-[var(--divider)] last:border-0 px-4 -mx-4 transition-colors">
            <div className="w-12 h-12 flex-shrink-0 bg-[var(--card-bg)] rounded-sm overflow-hidden relative transition-colors">
                {logo ? (
                    <Image
                        src={logo}
                        alt={school}
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                ) : (
                    <div className="w-full h-full bg-[var(--bg-color)] flex items-center justify-center text-[var(--text-dim)] font-bold text-xl transition-colors">
                        {school.charAt(0)}
                    </div>
                )}
            </div>

            <div className="flex flex-col">
                <h3 className="text-base font-bold text-[var(--text-main)] leading-tight transition-colors">{school}</h3>
                <p className="text-sm text-[var(--text-main)] transition-colors">{degree}</p>
                <p className="text-sm text-[var(--text-dim)] mt-1 transition-colors">{duration}</p>
            </div>
        </div>
    );
};

export default function Education() {
    return (
        <section className="linkedin-card p-5 sm:p-6">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Education</h2>
            </div>

            <div className="mt-2">
                <EducationItem
                    school="University of Mumbai"
                    degree="Bachelor of Engineering - BE, Computer Engineering with Honors in Data Science"
                    duration="Jun 2020 - May 2024"
                    logo="/uni.jpeg"
                />
            </div>
        </section>
    );
}
