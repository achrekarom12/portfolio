import { getHashnodePosts, getHashnodePost, mapHashnodeToActivityItem } from '@/utils/hashnode';
import BlogContent from '@/components/BlogContent';

export async function generateStaticParams() {
    const posts = await getHashnodePosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // Fetch the single article from hashnode
    const post = await getHashnodePost(slug);
    const activity = post ? mapHashnodeToActivityItem(post) : null;

    // BlogContent is a Client Component that handles the interactive UI
    return <BlogContent slug={slug} initialActivity={activity} />;
}
