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
import { useToast } from './ToastProvider';

export default function ActivityFeed() {
    const { showToast } = useToast();
    const filters = ["Blogs", "Projects", "Articles", "Events"];

    const handleLike = () => {
        showToast("Wait, this isn't the real LinkedIn... but I'll take it!");
    };

    const handleComment = () => {
        showToast("This comment section is serverless!");
    };

    const handleRepost = () => {
        showToast("Reposted in your heart!");
    };

    const handleSend = async (slug: string) => {
        const url = `${window.location.origin}/recent-activity/${slug}`;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                // Fallback for non-HTTPS mobile devices
                const textArea = document.createElement("textarea");
                textArea.value = url;
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                textArea.remove();
            }
            showToast("Copied to your clipboard!");
        } catch (err) {
            showToast("Failed to copy link");
        }
    };

    return (
        <div className="linkedin-card p-4 transition-colors">
            <h1 className="text-xl font-semibold text-[var(--text-main)] mb-4 transition-colors">All activity</h1>
            <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`px-3 py-1 rounded-full text-md font-bold border transition-colors ${filter === 'Blogs' ? 'bg-[#00754f] text-[#38c898] dark:bg-[#38c898] dark:text-[#000000] border-transparent ' : 'text-[var(--text-dim)] border-[var(--text-dim)] '}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {activities.map((activity) => (
                    <div key={activity.id} className="border border-[var(--divider)] rounded-xl overflow-hidden bg-[var(--card-bg)] transition-colors">
                        <div className="p-3 pb-0">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2 mb-2 text-xs text-[var(--text-dim)] font-semibold transition-colors">
                                    <Image
                                        src="/my_image.png"
                                        alt="Om Achrekar"
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[14px] font-bold text-[var(--text-main)] cursor-pointer transition-colors">Om Achrekar</span>
                                            <span className="text-[var(--text-dim)] text-[12px] font-normal transition-colors">• You</span>
                                        </div>
                                        <span className="text-[12px] font-normal leading-tight transition-colors">Software Development Engineer I</span>
                                        <div className="flex items-center gap-1 text-[var(--text-dim)] text-[12px] font-normal transition-colors">
                                            <span>{activity.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-[var(--text-dim)] p-1.5 rounded-full transition-colors" onClick={(e) => e.preventDefault()}>
                                    <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
                                </button>
                            </div>

                            <Link href={`/recent-activity/${activity.slug}`} className="block group">
                                <div className="mt-2 mb-3 px-1 text-[14px]">
                                    <h3 className="font-bold mb-1 text-[var(--text-main)] transition-colors">{activity.title}</h3>
                                    <p className="text-[var(--text-main)] opacity-80 whitespace-pre-wrap line-clamp-3 transition-colors">{activity.content}</p>
                                </div>

                                {activity.image && (
                                    <div className="relative aspect-video w-[calc(100%+1.5rem)] -mx-3 bg-[var(--bg-color)] transition-colors">
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
                            <div className="flex items-center justify-between text-[12px] text-[var(--text-dim)] pb-2 border-b border-[var(--divider)] transition-colors">
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

                            <div className="flex justify-between mt-1 pt-1 -mx-2">
                                <button
                                    onClick={handleLike}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 rounded transition-colors text-[var(--text-dim)] font-semibold group"
                                >
                                    <FontAwesomeIcon icon={faThumbsUpReg} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)] transition-colors" />
                                    <span className="text-[10px] sm:text-sm group-hover:text-[var(--text-main)] transition-colors">Like</span>
                                </button>
                                <button
                                    onClick={handleComment}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 rounded transition-colors text-[var(--text-dim)] font-semibold group"
                                >
                                    <FontAwesomeIcon icon={faCommentDotsReg} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)] transition-colors" />
                                    <span className="text-[10px] sm:text-sm group-hover:text-[var(--text-main)] transition-colors">Comment</span>
                                </button>
                                <button
                                    onClick={handleRepost}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 rounded transition-colors text-[var(--text-dim)] font-semibold group"
                                >
                                    <FontAwesomeIcon icon={faRetweet} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)] transition-colors" />
                                    <span className="text-[10px] sm:text-sm group-hover:text-[var(--text-main)] transition-colors">Repost</span>
                                </button>
                                <button
                                    onClick={() => handleSend(activity.slug)}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 rounded transition-colors text-[var(--text-dim)] font-semibold group"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)] transition-colors" />
                                    <span className="text-[10px] sm:text-sm group-hover:text-[var(--text-main)] transition-colors">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
