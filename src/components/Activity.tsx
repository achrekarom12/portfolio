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

interface Blog {
    id: number;
    title: string;
    content: string;
    image?: string;
    date: string;
    likes: number;
    comments: number;
    reposts?: number;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: "Making AI Smarter with a New MongoDB-Powered MCP Server 🚀",
        content: "Super excited to share something I've been working on! I built a MongoDB-powered MCP server that allows AI agents to interact with your databases more intuitively. This bridge opens up so many possibilities...",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        date: "8mo",
        likes: 40,
        comments: 12,
        reposts: 5
    },
    {
        id: 2,
        title: "Why Retrieval-Augmented Generation (RAG) is a Gamechanger for LLMs?",
        content: "Hey there! 🤔 Have you heard about Retrieval-Augmented Generation (RAG) and how it's changing the game for Large Language Models (LLMs)?  💡 RAG is an exciting new approach that helps AI systems fetch up-to-date and relevant information before generating responses.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        date: "11mo",
        likes: 89,
        comments: 14,
        reposts: 3
    },
    {
        id: 3,
        title: "What it's like to be a Dev Lead at college clubs?",
        content: "As my tenure as a Dev Lead comes to a happy end, I couldn't be more grateful for the journey it has been. Organizing MLSC Coherence 1.0, a 24-hour offline hackathon has been a highlight for me, marking the culmination of my time in this role. ",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        date: "1yr",
        likes: 90,
        comments: 16,
        reposts: 0
    }
];

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
                <button className="text-gray-600 font-semibold hover:bg-gray-100 px-4 py-2 rounded-md transition-colors w-full flex items-center justify-center gap-2">
                    Show all activity
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </button>
            </div>
        </section>
    );
}
