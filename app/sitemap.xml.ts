import { getAllBlogPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://udhayakumarth.com";
  const staticRoutes = ["", "blogs", "careers", "contact"];
  const posts = getAllBlogPosts();

  let urls = staticRoutes.map(
    (route) =>
      `<url><loc>${baseUrl}/${route}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`
  );

  urls = urls.concat(
    posts.map(
      (post) =>
        `<url><loc>${baseUrl}/blogs/${post.slug}</loc><lastmod>${post.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
