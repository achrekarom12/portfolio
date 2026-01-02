import Image from 'next/image';

export default function ProfileMiniCard() {
    return (
        <div className="linkedin-card overflow-hidden bg-[var(--card-bg)] transition-colors">
            {/* Banner */}
            <div className="h-16 bg-[image:var(--banner-image)] bg-cover bg-center bg-[#a0b4b7]"></div>

            {/* Profile Info */}
            <div className="px-3 pb-4 -mt-10 flex flex-col items-center border-b border-[var(--divider)] transition-colors">
                <div className="w-[84px] h-[84px] rounded-full border-4 border-[var(--card-bg)] overflow-hidden bg-[var(--card-bg)] shadow-sm mb-3 transition-colors">
                    <Image
                        src="/my_image.png"
                        alt="Om Achrekar"
                        width={84}
                        height={84}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="text-lg font-bold text-[var(--text-main)] transition-colors">Om Achrekar</h2>
                <p className="text-sm text-[var(--text-dim)] text-center transition-colors">Software Development Engineer I</p>
            </div>

            {/* Stats List */}
            <div className="divide-y divide-[var(--divider)] transition-colors">
                <div className="flex justify-between items-center px-4 py-3 cursor-pointer transition-colors">
                    <span className="text-[14px] font-semibold text-[var(--text-dim)]">Followers</span>
                    <span className="text-[14px] font-bold text-[#71b7fb]">1,205</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3 cursor-pointer transition-colors">
                    <span className="text-[14px] font-semibold text-[var(--text-dim)] transition-colors">Drafts</span>
                    <span className="text-[14px] font-bold text-[#71b7fb]">1</span>
                </div>
            </div>
        </div>
    );
}
