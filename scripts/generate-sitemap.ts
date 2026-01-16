const fs = require("fs");
const path = require("path");
const blog = require("../lib/blog");

const baseUrl = "https://udhayakumarth.com";
const staticRoutes = ["", "blogs", "careers", "contact"];
const posts = blog.getAllBlogPosts();

let urls = staticRoutes.map(
  (route) =>
    `<url><loc>${baseUrl}/${route}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`
);

urls = urls.concat(
  posts.map((post: { slug: string; date: string }) => {
    // Ensure date is in ISO 8601 format (YYYY-MM-DD)
    let isoDate = post.date;
    if (isoDate && !/^\d{4}-\d{2}-\d{2}/.test(isoDate)) {
      const d = new Date(isoDate);
      if (!isNaN(d.getTime())) {
        isoDate = d.toISOString().split('T')[0];
      }
    }
    return `<url><loc>${baseUrl}/blogs/${post.slug}</loc><lastmod>${isoDate}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`;
  })
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

const outPath = path.join(process.cwd(), "public/sitemap.xml");
fs.writeFileSync(outPath, xml);
console.log("Sitemap generated at", outPath);
