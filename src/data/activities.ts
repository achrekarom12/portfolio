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
    {
        id: 3,
        slug: "oops-for-system-design",
        title: "From Code to Architecture: Why OOP is the DNA of System Design",
        content: "Super excited to share something I've been working on! I built a MongoDB-powered MCP server that allows AI agents to interact with your databases more intuitively. This bridge opens up so many possibilities...",
        fullContent: `
When we think about **System Design**, we often jump straight to load balancers, databases, and microservices. However, before you can scale a system to millions of users, you must first define how its components interact. This is where **Object-Oriented Programming (OOP)** transitions from a coding style to a foundational design philosophy.

In essence, System Design is just "Programming at Scale," and OOP provides the vocabulary needed to build it.

---

### 1. Classes & Objects: The Building Blocks of Services
In system design, we don't just write functions; we define **entities**. 
* **The Class** is your architectural blueprint (e.g., a "User Service" definition or a "Database Schema").
* **The Object** is the actual running instance of that service or a specific record in your cache.

By thinking in objects, you can break a massive, monolithic problem into smaller, manageable service components.

### 2. Encapsulation: Creating "Black Boxes"
System design relies heavily on **isolation**. Encapsulation ensures that a service (like "Payments") hides its internal logic and database structure from the rest of the system.
* **Why it matters:** If the Payment service changes its internal logic, the "Order Service" doesn't need to be rewritten. As long as the **API (the public interface)** remains the same, the internal "private" data stays protected.

### 3. Inheritance vs. Composition: Scaling Logic
Inheritance allows us to create specialized versions of a general component. 
* **Example:** You might have a base \`Notification\` service. Through inheritance, you create \`EmailNotification\` and \`SMSNotification\`. 
* In high-level design, we often prefer **Composition** (putting objects together) over Inheritance to keep systems decoupled and flexible, but the mental model of shared traits begins with OOP inheritance.

### 4. Polymorphism: The Key to Extensibility
Polymorphism allows a system to remain "plug-and-play." 
* **System Design Scenario:** Imagine your system needs to support multiple storage types (S3, Google Cloud Storage, or Azure Blob). 
* By using polymorphism, your application logic simply calls a \`.upload()\` method. It doesn't care which cloud provider is being used at runtime; the specific implementation handles the details.

### 5. Abstraction: Managing System Complexity
Perhaps the most critical pillar for a System Architect is **Abstraction**. At a high level, you don't want to know how a Load Balancer distributes traffic at the packet level; you just need to know it balances the load.
* **Interfaces:** By designing with interfaces (abstract contracts), you ensure that different teams can work on different parts of a system simultaneously without stepping on each other's toes.
        `,
        image: "https://media.istockphoto.com/id/1290154699/vector/comic-speech-bubble-with-text-oops-message-in-pop-art-style.jpg?s=612x612&w=0&k=20&c=4J-vEqvSWx-HEq8IiG5qP1WcM4Sf1xNsmXNInjMzWHY=",
        date: "2026-01-04",
        likes: 30,
        comments: 2,
        reposts: 1
    },
];
