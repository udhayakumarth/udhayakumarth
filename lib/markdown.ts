import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function processMarkdown(content: string): Promise<string> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm) // GitHub Flavored Markdown support for tables, strikethrough, etc.
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      keepBackground: true,
      defaultLang: 'plaintext',
    })
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor-link'],
      },
    })
    .use(rehypeStringify);

  const file = await processor.process(content);
  return String(file);
}
