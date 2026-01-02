'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisH,
    faChevronLeft,
    faBookmark
} from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { activities } from '@/data/activities';
import LinkedinNavbar from '@/components/LinkedinNavbar';

export default function BlogContent({ slug }: { slug: string }) {
    const activity = activities.find((a) => a.slug === slug);

    if (!activity) {
        return (
            <div className="min-h-screen bg-[var(--bg-color)] transition-colors">
                <LinkedinNavbar />
                <div className="container-max pt-[72px] pb-8 text-center">
                    <h1 className="text-2xl font-bold mt-10 text-[var(--text-main)] transition-colors">Article not found</h1>
                    <Link href="/recent-activity/all" className="text-[var(--accent-color)] hover:underline mt-4 block">
                        Back to Activity
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--card-bg)] transition-colors">
            <LinkedinNavbar />

            <div className="container-max pt-[72px]">
                <div className="max-w-[840px] mx-auto py-6">
                    {/* Main Content */}
                    <main className="px-4 sm:px-0">
                        <div className="flex items-center gap-2 mb-6 text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors">
                            <Link href="/recent-activity/all" className="flex items-center gap-1 text-sm font-semibold">
                                <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
                                Back to Feed
                            </Link>
                        </div>

                        {/* Article Header */}
                        <div className="mb-8">
                            {activity.image && (
                                <div className="relative aspect-[21/9] w-full mb-8 rounded-lg overflow-hidden ring-1 ring-[var(--divider)]">
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-6 leading-tight transition-colors">
                                {activity.title}
                            </h1>

                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--divider)] transition-colors text-[var(--text-main)]">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/my_image.png"
                                        alt="Om Achrekar"
                                        width={56}
                                        height={56}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold">Om Achrekar</span>
                                        </div>
                                        <p className="text-sm text-[var(--text-dim)]">Software Development Engineer I</p>
                                        <p className="text-xs text-[var(--text-dim)] opacity-70 mt-0.5">{activity.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-full text-[var(--text-dim)] transition-colors">
                                        <FontAwesomeIcon icon={faBookmark} className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-full text-[var(--text-dim)] transition-colors">
                                        <FontAwesomeIcon icon={faEllipsisH} className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Article Body */}
                        <article className="prose prose-slate prose-lg max-w-none mb-12 markdown-content transition-colors">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {activity.fullContent}
                            </ReactMarkdown>
                        </article>

                        {/* Author Signature */}
                        <div className="mt-20 mb-16 flex flex-col items-center">
                            <div className="relative w-full flex justify-center items-center mb-4">
                                <div className="absolute w-full h-[1px] bg-[var(--divider)]"></div>
                                <div className="relative bg-[var(--card-bg)] px-4 transition-colors">
                                    <Image
                                        src="/my_image.png"
                                        alt="Om Achrekar"
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover ring-4 ring-[var(--card-bg)] transition-all"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-[var(--text-main)] transition-colors">Om Achrekar</h3>
                                <p className="text-sm text-[var(--text-dim)] mt-1 transition-colors">Software Development Engineer I</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <style jsx global>{`
                .markdown-content {
                    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
                    color: var(--text-main);
                }
                .markdown-content h1 { font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem; color: var(--text-main); line-height: 1.2; }
                .markdown-content h2 { font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.25rem; color: var(--text-main); border-bottom: 1px solid var(--divider); padding-bottom: 0.5rem; }
                .markdown-content h3 { font-size: 1.4rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-main); }
                .markdown-content p { margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-main); opacity: 0.9; font-size: 1.125rem; }
                .markdown-content ul { list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; }
                .markdown-content li { margin-bottom: 0.75rem; color: var(--text-main); opacity: 0.8; font-size: 1.125rem; }
                .markdown-content strong { font-weight: 700; color: var(--text-main); }
                .markdown-content blockquote { border-left: 5px solid var(--accent-color); padding: 1rem 1.5rem; font-style: italic; color: var(--text-main); opacity: 0.8; margin-bottom: 1.5rem; background: var(--bg-color); border-radius: 0 0.5rem 0.5rem 0; }
                .markdown-content code { background-color: var(--bg-color); color: var(--text-main); padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.9em; }
            `}</style>
        </div>

    );
}
