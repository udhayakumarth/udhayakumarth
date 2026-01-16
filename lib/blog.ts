import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMetadata {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
}

export interface BlogPost extends BlogMetadata {
  content: string;
}

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllBlogPosts(): BlogMetadata[] {
  const files = fs.readdirSync(blogsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title,
        slug: data.slug,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
      } as BlogMetadata;
    });

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      slug: data.slug,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
