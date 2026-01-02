'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faRetweet,
    faPaperPlane,
    faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpReg, faCommentDots as faCommentDotsReg } from '@fortawesome/free-regular-svg-icons';
import { activities } from '@/data/activities';

export default function ActivityFeed() {
    const filters = ["Blogs", "Projects", "Articles", "Events"];

    return (
        <div className="linkedin-card bg-white p-4">
            <h1 className="text-xl font-semibold text-gray-900 mb-4">All activity</h1>
            <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`px-3 py-1 rounded-full text-sm font-semibold border border-gray-500 hover:bg-gray-100 transition-colors ${filter === 'Blogs' ? 'bg-[#057642] text-white border-transparent hover:bg-[#046338]' : 'text-gray-600'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {activities.map((activity) => (
                    <div key={activity.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                        <div className="p-3 pb-0">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 font-semibold">
                                    <Image
                                        src="/my_image.png"
                                        alt="Om Achrekar"
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[14px] font-bold text-gray-900 hover:text-[#0a66c2] hover:underline cursor-pointer">Om Achrekar</span>
                                            <span className="text-gray-500 text-[12px] font-normal">• You</span>
                                        </div>
                                        <span className="text-[12px] font-normal leading-tight">Software Development Engineer I</span>
                                        <div className="flex items-center gap-1 text-gray-500 text-[12px] font-normal">
                                            <span>{activity.date}</span>
                                            <span className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="12" height="12" focusable="false" className="text-gray-500"><path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3.13l7.13 7.13A5 5 0 013 8zm9 3.13L4.87 4a5 5 0 017.13 7.13z"></path></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:bg-gray-100 p-1.5 rounded-full">
                                    <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-2 mb-3 px-1 text-[14px]">
                                <h3 className="font-bold mb-1 text-gray-900">{activity.title}</h3>
                                <p className="text-gray-700 whitespace-pre-wrap">{activity.content}</p>
                            </div>
                        </div>

                        {activity.image && (
                            <div className="relative aspect-video w-full bg-gray-100">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="px-3 py-2">
                            <div className="flex items-center justify-between text-[12px] text-gray-500 pb-2 border-b border-gray-100">
                                <div className="flex items-center gap-1">
                                    <div className="flex -space-x-1">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white ring-1 ring-white">
                                            <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2" />
                                        </div>
                                    </div>
                                    <span>{activity.likes}</span>
                                </div>
                                <div>
                                    {activity.comments > 0 && <span>{activity.comments} comments • </span>}
                                    {activity.reposts > 0 && <span>{activity.reposts} reposts</span>}
                                </div>
                            </div>

                            <div className="flex justify-between mt-1 pt-1">
                                <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-gray-100 py-2.5 rounded transition-colors text-gray-600 font-semibold">
                                    <FontAwesomeIcon icon={faThumbsUpReg} className="w-5 h-5" />
                                    <span className="text-sm">Like</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-gray-100 py-2.5 rounded transition-colors text-gray-600 font-semibold">
                                    <FontAwesomeIcon icon={faCommentDotsReg} className="w-5 h-5" />
                                    <span className="text-sm">Comment</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-gray-100 py-2.5 rounded transition-colors text-gray-600 font-semibold">
                                    <FontAwesomeIcon icon={faRetweet} className="w-5 h-5" />
                                    <span className="text-sm">Repost</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-gray-100 py-2.5 rounded transition-colors text-gray-600 font-semibold">
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                                    <span className="text-sm">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
