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
        image: "https://s46486.pcdn.co/wp-content/uploads/2023/09/image3.png",
        date: "2024-02-15",
        likes: 89,
        comments: 14,
        reposts: 3
    },
    {
        id: 2,
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
        image: "https://www.mongodb.com/docs/assets/meta_generic.png",
        date: "2025-04-01",
        likes: 40,
        comments: 12,
        reposts: 5
    },
];
