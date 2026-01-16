import Link from "next/link";
import { getAllBlogPosts, formatDate } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Blog - Udhayakumar",
    description: "Read my latest articles and insights on web development",
    openGraph: {
        title: "Blog",
        description: "Read my latest articles and insights on web development",
        type: "website",
    },
};

export default function BlogsPage() {
    const posts = getAllBlogPosts();

    return (
        <div className="px-2 py-2">
            <Navbar currentPage="blogs" />

            <div className="mx-auto max-w-6xl px-4 py-8">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
                    Blogs
                </h2>

                <p className="leading-7 [&:not(:first-child)]:mt-3 mb-8">
                    Things I have written recently.
                </p>

                {posts.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-muted-foreground text-lg">
                            No blog posts yet. Check back soon!
                        </p>
                    </div>
                ) : (
                    <ul>
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link key={post.slug} href={`/blogs/${post.slug}`}>
                                    <div className="flex h-5 items-center space-x-4">
                                        <div>• </div>
                                        <div className="text-sm text-muted-foreground">{formatDate(post.date)}</div>
                                        <div>: </div>
                                        <div className="bg-yellow-300 px-1 text-black font-semibold text-sm">{post.title}</div>
                                        <Separator orientation="vertical" />
                                        
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Footer />
        </div>
    );
}
