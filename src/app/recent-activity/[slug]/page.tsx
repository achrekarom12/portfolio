import { activities } from '@/data/activities';
import BlogContent from '@/components/BlogContent';

// generateStaticParams MUST be in a Server Component
export async function generateStaticParams() {
    return activities.map((activity) => ({
        slug: activity.slug,
    }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // BlogContent is a Client Component that handles the interactive UI
    return <BlogContent slug={slug} />;
}
