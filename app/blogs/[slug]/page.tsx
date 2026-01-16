import { getBlogPostBySlug, getAllBlogPosts, formatDate } from "@/lib/blog";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="px-2 py-2">
        <Navbar />
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/blogs"
            className="text-foreground font-medium hover:text-muted-foreground transition mb-8 inline-block"
          >
            ← Back to Blogs
          </Link>
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blogs"
              className="inline-block px-6 py-3 bg-foreground text-background rounded-lg transition hover:opacity-80"
            >
              Return to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="px-2 py-2">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="text-foreground font-medium hover:text-muted-foreground transition mb-8 inline-block"
        >
          ← Back to Blogs
        </Link>

        {/* Header */}
        <article>
          <header className="mb-12 pb-8 border-b border-white/10">
            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </header>

          {/* Content */}
          <div className="mb-12">
            <MarkdownRenderer content={post.content} />
          </div>

        </article>
      </div>

      <Footer />
    </div>
  );
}
