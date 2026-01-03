export interface ActivityItem {
    id: number;
    slug: string;
    title: string;
    content: string; // Summary for the feed
    fullContent: string; // Full markdown content
    image?: string;
    date: string;
    likes: number;
    comments: number;
    reposts: number;
}

export const activities: ActivityItem[] = [
    {
        id: 1,
        slug: "mongodb-mcp-server",
        title: "Making AI Smarter with a New MongoDB-Powered MCP Server 🚀",
        content: "Super excited to share something I've been working on! I built a MongoDB-powered MCP server that allows AI agents to interact with your databases more intuitively. This bridge opens up so many possibilities...",
        fullContent: `
Super excited to share something I've been working on! I built a MongoDB-powered MCP server that allows AI agents to interact with your databases more intuitively. This bridge opens up so many possibilities for building truly autonomous agents that can manage and query data without constant human intervention.

### Why MongoDB?
MongoDB's flexible document schema makes it an ideal choice for AI applications where data structures might evolve quickly. By providing a Model Context Protocol (MCP) interface, we enable:

- **Natural Language Querying**: Talk to your database.
- **Automated Data Analysis**: AI can now look at trends in your collections.
- **Easy Integration**: Hooks right into your existing AI workflows.

### Key Features
1. **Dynamic Schema Discovery**: Automatically understands your collections.
2. **Secure Access**: Granular permissions for AI agents.
3. **Performance Optimized**: Uses efficient aggregation pipelines.

I'd love to hear your thoughts on how this could be used in your projects!

#ArtificialIntelligence #MongoDB #Automation #SoftwareDevelopment #WebDev
        `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        date: "8mo",
        likes: 40,
        comments: 12,
        reposts: 5
    },
    {
        id: 2,
        slug: "rag-is-a-gamechanger",
        title: "Why Retrieval-Augmented Generation (RAG) is a Gamechanger for LLMs?",
        content: "Hey there! 🤔 Have you heard about Retrieval-Augmented Generation (RAG) and how it's changing the game for Large language Models (LLMs)?  💡 RAG is an exciting new approach that helps AI systems fetch up-to-date and relevant information before generating responses.",
        fullContent: `
Hey there! 🤔 Have you heard about Retrieval-Augmented Generation (RAG) and how it's changing the game for Large Language Models (LLMs)?

💡 **RAG** is an exciting new approach that helps AI systems fetch up-to-date and relevant information before generating responses. Unlike traditional LLMs that rely solely on their training data (which can get outdated), RAG models act like students with an "open book" — they can look up information in real-time.

### How it Works:
1. **Retrieve**: When a question is asked, the system searches a knowledge base (like a database or document store) for relevant snippets.
2. **Augment**: These snippets are added to the user's prompt to give the LLM more context.
3. **Generate**: The LLM uses this extra context to produce a more accurate and factual response.

### Benefits:
- **Accuracy**: Reduces hallucinations by grounding responses in facts.
- **Freshness**: Can access information that wasn't in the original training data.
- **Efficiency**: No need to retrain large models just to update their knowledge.

This is where the future of AI is headed — moving from static models to dynamic, knowledge-aware systems.

#AI #MachineLearning #RAG #NLP #TechInnovation
        `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        date: "11mo",
        likes: 89,
        comments: 14,
        reposts: 3
    },
    {
        id: 3,
        slug: "dev-lead-college-clubs",
        title: "What it's like to be a Dev Lead at college clubs?",
        content: "As my tenure as a Dev Lead comes to a happy end, I couldn't be more grateful for the journey it has been. Organizing MLSC Coherence 1.0, a 24-hour offline hackathon has been a highlight for me, marking the culmination of my time in this role. ",
        fullContent: `
As my tenure as a Dev Lead comes to a happy end, I couldn't be more grateful for the journey it has been. 

### The Journey
Organizing **MLSC Coherence 1.0**, a 24-hour offline hackathon, has been a highlight for me, marking the culmination of my time in this role. It wasn't just about the code; it was about the people, the sleepless nights, and the satisfaction of seeing hundreds of students build incredible things.

### Lessons Learned:
- **Leadership**: Managing a team of developers means more than just assigning tasks. It's about mentorship and vision.
- **Resilience**: Things go wrong in hackathons. The venue wifi fails, the snacks run out, or a critical server goes down. Staying calm is key.
- **Community**: Building a community of like-minded individuals is the most rewarding part of any college club.

I'm excited to see what the next generation of leads will achieve!

#CollegeLife #Engineering #Hackathon #Leadership #Community
        `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        date: "1yr",
        likes: 90,
        comments: 16,
        reposts: 0
    },
    {
        id: 4,
        slug: "linkedin-clone-nextjs",
        title: "Building a LinkedIn Clone with Next.js and Tailwind CSS",
        content: "I recently embarked on a project to clone the LinkedIn UI. It's been a great exercise in understanding complex layouts, component architecture, and attention to detail. From the sticky navbar to the intricate feed cards, every element matters.",
        fullContent: `
I recently embarked on a project to clone the LinkedIn UI. It's been a great exercise in understanding complex layouts, component architecture, and attention to detail.

### Why a LinkedIn Clone?
LinkedIn has a unique UI that balances information density with clarity. Recreating it helps in mastering:
- **Sticky Layouts**: Keeping the navbar and sidebars where they belong.
- **Responsive Design**: Ensuring it looks great from a phone to a 4K monitor.
- **Dynamic Content**: Managing feeds, profiles, and interactions.

### The Stack
- **Next.js**: For routing and performance.
- **Tailwind CSS**: For rapid and consistent styling.
- **Lucide Icons**: For those crisp, modern icons.

This project is a work in progress, but I'm loving the challenge!

#WebDevelopment #ReactJS #TailwindCSS #Coding #Portfolio
        `,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        date: "1mo",
        likes: 156,
        comments: 24,
        reposts: 12
    }
];
