export interface ActivityItem {
    id: number;
    title: string;
    content: string;
    image?: string;
    date: string;
    likes: number;
    comments: number;
    reposts: number;
}

export const activities: ActivityItem[] = [
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
    },
    {
        id: 4,
        title: "Building a LinkedIn Clone with Next.js and Tailwind CSS",
        content: "I recently embarked on a project to clone the LinkedIn UI. It's been a great exercise in understanding complex layouts, component architecture, and attention to detail. From the sticky navbar to the intricate feed cards, every element matters.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        date: "1mo",
        likes: 156,
        comments: 24,
        reposts: 12
    }
];
