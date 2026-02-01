import Link from "next/link";
import { getAllBlogPosts, formatDate } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
                <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 mb-6">
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
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link href={`/blogs/${post.slug}`}>
                                    <div className="border rounded-xl p-4 hover:shadow-md transition bg-background h-full">

                                        <span className="text-xs text-muted-foreground block mb-2">
                                            {formatDate(post.date)}
                                        </span>

                                        <h3 className="text-sm font-semibold leading-tight">
                                            {post.title}
                                        </h3>

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
