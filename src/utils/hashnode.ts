export interface HashnodePost {
    id: string;
    slug: string;
    title: string;
    brief: string;
    coverImage?: {
        url: string;
    };
    publishedAt: string;
    reactionCount: number;
    replyCount: number;
    content?: {
        markdown: string;
    };
}

export async function getHashnodePosts(): Promise<HashnodePost[]> {
    const query = `
        query Publication {
            publication(host: "blogs.itsom.dev") {
                posts(first: 10) {
                    edges {
                        node {
                            id
                            slug
                            title
                            brief
                            coverImage {
                                url
                            }
                            publishedAt
                            reactionCount
                            replyCount
                        }
                    }
                }
            }
        }
    `;

    try {
        const res = await fetch('https://gql.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            console.error('Failed to fetch Hashnode posts', res.statusText);
            return [];
        }

        const data = await res.json();
        const posts = data.data?.publication?.posts?.edges?.map((edge: { node: HashnodePost }) => edge.node) || [];
        return posts;
    } catch (error) {
        console.error('Error fetching Hashnode posts:', error);
        return [];
    }
}

export async function getHashnodePost(slug: string): Promise<HashnodePost | null> {
    const query = `
        query Post($slug: String!) {
            publication(host: "blogs.itsom.dev") {
                post(slug: $slug) {
                    id
                    slug
                    title
                    brief
                    coverImage {
                        url
                    }
                    publishedAt
                    reactionCount
                    replyCount
                    content {
                        markdown
                    }
                }
            }
        }
    `;

    try {
        const res = await fetch('https://gql.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { slug }
            }),
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            console.error('Failed to fetch Hashnode post', res.statusText);
            return null;
        }

        const data = await res.json();
        return data.data?.publication?.post || null;
    } catch (error) {
        console.error('Error fetching Hashnode post:', error);
        return null;
    }
}

export interface ActivityItem {
    id: number | string;
    slug: string;
    url?: string;
    title: string;
    content: string;
    fullContent: string;
    image?: string;
    date: string;
    likes: number;
    comments: number;
    reposts: number;
}

// Generate a steady pseudo-random number based on a string seed
function getDeterministicRandom(seedStr: string, min: number, max: number): number {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
        hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const random = Math.abs(Math.sin(hash));
    return Math.floor(random * (max - min + 1)) + min;
}

export function mapHashnodeToActivityItem(post: HashnodePost): ActivityItem {
    const fallbackLikes = getDeterministicRandom(post.id + "likes", 15, 120);
    const fallbackComments = getDeterministicRandom(post.id + "comments", 2, 25);
    const fallbackReposts = getDeterministicRandom(post.id + "reposts", 0, 8);

    return {
        id: post.id,
        slug: post.slug,
        url: `https://blogs.itsom.dev/${post.slug}`,
        title: post.title,
        content: post.brief,
        fullContent: post.content?.markdown || '',
        image: post.coverImage?.url || undefined,
        date: post.publishedAt,
        likes: post.reactionCount > 0 ? post.reactionCount : fallbackLikes,
        comments: post.replyCount > 0 ? post.replyCount : fallbackComments,
        reposts: fallbackReposts
    };
}

