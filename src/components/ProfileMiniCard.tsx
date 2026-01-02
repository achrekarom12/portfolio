import Image from 'next/image';

export default function ProfileMiniCard() {
    return (
        <div className="linkedin-card overflow-hidden bg-white">
            {/* Banner */}
            <div className="h-16 bg-[url('/background_image.png')] bg-cover bg-center bg-[#a0b4b7]"></div>

            {/* Profile Info */}
            <div className="px-3 pb-4 -mt-10 flex flex-col items-center border-b border-gray-100">
                <div className="w-[84px] h-[84px] rounded-full border-4 border-white overflow-hidden bg-white shadow-sm mb-3">
                    <Image
                        src="/my_image.png"
                        alt="Om Achrekar"
                        width={84}
                        height={84}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Om Achrekar</h2>
                <p className="text-sm text-gray-500 text-center">Software Development Engineer I</p>
            </div>

            {/* Stats List */}
            <div className="divide-y divide-gray-100">
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <span className="text-[14px] font-semibold text-gray-500">Followers</span>
                    <span className="text-[14px] font-bold text-[#0a66c2]">1,205</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <span className="text-[14px] font-semibold text-gray-500">Drafts</span>
                    <span className="text-[14px] font-bold text-[#0a66c2]">1</span>
                </div>
            </div>
        </div>
    );
}
