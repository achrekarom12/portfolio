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
import Link from 'next/link';

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
                                        </div>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:bg-gray-100 p-1.5 rounded-full" onClick={(e) => e.preventDefault()}>
                                    <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
                                </button>
                            </div>

                            <Link href={`/recent-activity/${activity.slug}`} className="block group">
                                <div className="mt-2 mb-3 px-1 text-[14px]">
                                    <h3 className="font-bold mb-1 text-gray-900 group-hover:text-[#0a66c2] group-hover:underline transition-colors">{activity.title}</h3>
                                    <p className="text-gray-700 whitespace-pre-wrap line-clamp-3">{activity.content}</p>
                                </div>

                                {activity.image && (
                                    <div className="relative aspect-video w-[calc(100%+1.5rem)] -mx-3 bg-gray-100">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </Link>
                        </div>

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
