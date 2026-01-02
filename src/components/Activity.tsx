import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faCommentDots,
    faRetweet,
    faPaperPlane,
    faPlus,
    faPen,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpReg, faCommentDots as faCommentDotsReg } from '@fortawesome/free-regular-svg-icons';

import Link from 'next/link';
import { activities as blogs } from '@/data/activities';

export default function Activity() {
    return (
        <section className="linkedin-card p-5 sm:p-6">
            <div className="flex justify-between items-start mb-1">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
                    <p className="text-sm font-semibold text-[#0a66c2] hover:underline cursor-pointer">1,205 followers</p>
                </div>
            </div>

            <div className="flex gap-2 mt-4 mb-4">
                <button className="bg-[#057642] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Blogs
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-hide">
                {blogs.map((blog) => (
                    <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col min-w-[300px] md:min-w-[350px] bg-white hover:shadow-md transition-shadow">
                        <div className="p-3">
                            <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                                <Image
                                    src="/my_image.png"
                                    alt="Om Achrekar"
                                    width={38}
                                    height={38}
                                    className="rounded-full object-cover aspect-square"
                                />
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[14px] font-bold text-gray-900">Om Achrekar</span>
                                    </div>
                                    <span className="text-[10px]">Software Development Engineer I</span>
                                    <span className="text-[10px]">{blog.date}</span>
                                </div>
                            </div>
                            <h3 className="font-bold text-sm line-clamp-2 mb-1 text-gray-900">{blog.title}</h3>
                            <p className="text-xs text-gray-600 line-clamp-3 mb-3">{blog.content}</p>
                        </div>

                        {blog.image && (
                            <div className="relative aspect-video w-full bg-gray-100">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="p-3 mt-auto">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100 mb-2">
                                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                    <div className="flex -space-x-1">
                                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-white ring-1 ring-white">
                                            <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2" />
                                        </div>
                                    </div>
                                    <span>{blog.likes}</span>
                                </div>
                                <div className="text-[10px] text-gray-500">
                                    {blog.comments} comments • {blog.reposts} reposts
                                </div>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <button className="flex items-center gap-1.5 hover:bg-gray-100 px-2 py-1.5 rounded transition-colors">
                                    <FontAwesomeIcon icon={faThumbsUpReg} className="w-5 h-5" />
                                    <span className="text-xs font-semibold">Like</span>
                                </button>
                                <button className="flex items-center gap-1.5 hover:bg-gray-100 px-2 py-1.5 rounded transition-colors">
                                    <FontAwesomeIcon icon={faCommentDotsReg} className="w-5 h-5" />
                                    <span className="text-xs font-semibold">Comment</span>
                                </button>
                                <button className="flex items-center gap-1.5 hover:bg-gray-100 px-2 py-1.5 rounded transition-colors">
                                    <FontAwesomeIcon icon={faRetweet} className="w-5 h-5" />
                                    <span className="text-xs font-semibold">Repost</span>
                                </button>
                                <button className="flex items-center gap-1.5 hover:bg-gray-100 px-2 py-1.5 rounded transition-colors">
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                                    <span className="text-xs font-semibold">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <Link href="/recent-activity/all/" className="text-gray-600 font-semibold hover:bg-gray-100 px-4 py-2 rounded-md transition-colors w-full flex items-center justify-center gap-2">
                    Show all activity
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </Link>
            </div>
        </section>
    );
}
