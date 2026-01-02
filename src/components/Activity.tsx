'use client';

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
import { useToast } from './ToastProvider';

export default function Activity() {
    const { showToast } = useToast();

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
        <section className="linkedin-card p-5 sm:p-6">
            <div className="flex justify-between items-start mb-1">
                <div>
                    <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Activity</h2>
                    <p className="text-sm font-semibold text-[var(--accent-color)] hover:underline cursor-pointer">1,205 followers</p>
                </div>
            </div>

            <div className="flex gap-2 mt-4 mb-4">
                <button className="bg-[#00754f] text-[#38c898] dark:bg-[#38c898] dark:text-[#000000] px-3 py-1 rounded-full text-md font-bold transition-colors">
                    Blogs
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-hide">
                {blogs.map((blog) => (
                    <div key={blog.id} className="border border-[var(--divider)] rounded-lg overflow-hidden flex flex-col min-w-[300px] md:min-w-[350px] bg-[var(--card-bg)] hover:shadow-md transition-all">
                        <div className="p-3">
                            <div className="flex items-center gap-2 mb-2 text-xs text-[var(--text-dim)]">
                                <Image
                                    src="/my_image.png"
                                    alt="Om Achrekar"
                                    width={38}
                                    height={38}
                                    className="rounded-full object-cover aspect-square"
                                />
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[14px] font-bold text-[var(--text-main)]">Om Achrekar</span>
                                    </div>
                                    <span className="text-[10px]">Software Development Engineer I</span>
                                    <span className="text-[10px]">{blog.date}</span>
                                </div>
                            </div>
                            <h3 className="font-bold text-sm line-clamp-2 mb-1 text-[var(--text-main)]">{blog.title}</h3>
                            <p className="text-xs text-[var(--text-dim)] line-clamp-3 mb-3">{blog.content}</p>
                        </div>

                        {blog.image && (
                            <div className="relative aspect-video w-full bg-[var(--bg-color)] transition-colors">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="p-3 mt-auto">
                            <div className="flex items-center justify-between py-2 border-b border-[var(--divider)] mb-2 transition-colors">
                                <div className="flex items-center gap-1 text-[10px] text-[var(--text-dim)]">
                                    <div className="flex -space-x-1">
                                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-white ring-1 ring-white">
                                            <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2" />
                                        </div>
                                    </div>
                                    <span>{blog.likes}</span>
                                </div>
                                <div className="text-[10px] text-[var(--text-dim)]">
                                    {blog.comments} comments • {blog.reposts} reposts
                                </div>
                            </div>

                            <div className="flex justify-between text-[var(--text-dim)] -mx-1">
                                <button
                                    onClick={handleLike}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-0.5 sm:px-2 py-1.5 rounded transition-colors group"
                                >
                                    <FontAwesomeIcon icon={faThumbsUpReg} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)]" />
                                    <span className="text-[10px] sm:text-xs font-semibold group-hover:text-[var(--text-main)]">Like</span>
                                </button>
                                <button
                                    onClick={handleComment}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-0.5 sm:px-2 py-1.5 rounded transition-colors group"
                                >
                                    <FontAwesomeIcon icon={faCommentDotsReg} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)]" />
                                    <span className="text-[10px] sm:text-xs font-semibold group-hover:text-[var(--text-main)]">Comment</span>
                                </button>
                                <button
                                    onClick={handleRepost}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-0.5 sm:px-2 py-1.5 rounded transition-colors group"
                                >
                                    <FontAwesomeIcon icon={faRetweet} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)]" />
                                    <span className="text-[10px] sm:text-xs font-semibold group-hover:text-[var(--text-main)]">Repost</span>
                                </button>
                                <button
                                    onClick={() => handleSend(blog.slug)}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-0.5 sm:px-2 py-1.5 rounded transition-colors group"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[var(--text-main)]" />
                                    <span className="text-[10px] sm:text-xs font-semibold group-hover:text-[var(--text-main)]">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--divider)] text-center transition-colors">
                <Link href="/recent-activity/all/" className="text-[var(--text-dim)] font-semibold hover:text-[var(--text-main)] px-4 py-2 rounded-md transition-colors w-full flex items-center justify-center gap-2">
                    Show all activity
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </Link>
            </div>
        </section>
    );
}
