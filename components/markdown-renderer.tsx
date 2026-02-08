
import { processMarkdown } from '@/lib/markdown';

interface MarkdownRendererProps {
  content: string;
}

// Server component: processes markdown to HTML at build/server time
export async function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = await processMarkdown(content);
  return (
    <div className="prose prose-invert max-w-6xl mx-auto">
      <style>{`
        .prose {
          color: #e5e7eb;
          line-height: 1.75;
        }
        .prose h1 {
          font-weight: 600;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          color: #fff;
          scroll-margin-top: 80px;
          text-decoration: none;
        }
        .prose h2 {
          font-weight: 600;
          margin-top: 1.3em;
          margin-bottom: 0.4em;
          color: #fff;
          scroll-margin-top: 80px;
          text-decoration: none;
        }
        .prose h3 {
          font-weight: 600;
          margin-top: 1.2em;
          margin-bottom: 0.3em;
          color: #fff;
          scroll-margin-top: 80px;
          text-decoration: none;
        }
        .prose h4, .prose h5, .prose h6 {
          color: #fff;
          font-weight: 600;
          scroll-margin-top: 80px;
          text-decoration: none;
        }
        .prose h1,
        .prose h2,
        .prose h3,
        .prose h4,
        .prose h5,
        .prose h6 {
          display: inline-block;
          max-width: 100%;
          color: #fff;
          font-size: 16px;
          margin-top: 1rem;
        }
        .prose p {
          line-height: 2.1;
          margin-bottom: 1.25em;
        }
        .prose h1 a,
        .prose h2 a,
        .prose h3 a,
        .prose h4 a,
        .prose h5 a,
        .prose h6 a {
          text-decoration: none !important;
          font-size: 1.5em;
          color: #fbbf24;
        }
        .prose a {
          color: #e5e5e5;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .prose a:hover {
          color: #fbbf24;
        }
        .prose code {
          background-color: #1f2937;
          color: #fbbf24;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-family: "Fira Code", "Courier New", monospace;
          font-size: 0.9em;
        }
        .prose pre {
          background: #1a1a1a !important;
          border: 2px solid #666666 !important;
          border-radius: 0.5rem !important;
          padding: 0.75rem 0.5rem 0.5rem 0.75rem !important;
          margin-bottom: 1.5em !important;
          overflow: auto;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        .prose pre code {
          background: transparent !important;
          color: inherit !important;
          padding: 0.25rem 0.5rem !important;
          font-size: 0.95em !important;
          line-height: 1.6 !important;
          border-radius: 0.3rem;
          display: block;
        }
        .prose pre {
          display: flex;
          flex-direction: column;
        }
        .shiki {
          background: transparent !important;
          padding: 1rem !important;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: #475569 #0f172a;
        }
        .shiki::-webkit-scrollbar {
          height: 6px;
        }
        .shiki::-webkit-scrollbar-track {
          background: #0f172a;
        }
        .shiki::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 3px;
        }
        .shiki::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
        .shiki code {
          display: grid;
        }
        .shiki .line {
          padding: 0 2rem;
        }
        .copy-button.compact {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(30, 41, 59, 0.7);
          border: none;
          color: #2a2a2b;
          cursor: pointer;
          padding: 0.35rem;
          border-radius: 0.3rem;
          font-size: 0.8rem;
          transition: background 0.15s, color 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .copy-button.compact:hover {
          background: #fde047;
          color: #18181b;
        }
        .copy-button.compact[data-copied="true"] {
          background: #10b981;
          color: #fff;
        }
        .prose ul,
        .prose ol {
          margin-bottom: 1.25em;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 2rem;
        }
        .prose ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }
        .prose li {
          margin-bottom: 0.5em;
        }
        .prose blockquote {
          border-left: 2px solid #fbbf24;
          margin-top: 1rem;
          padding-left: 1rem;
          margin-left: 0;
          margin-bottom: 1.25em;
          color: #9ca3af;
          font-style: italic;
        }
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5em 0;
        }
        .prose hr {
          border: none;
          border-top: 1px solid #374151;
          margin: 2em 0;
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #18181b;
          box-shadow: none;
          border: 1px solid #27272a;
        }
        .prose thead {
          background: #232326;
        }
        .prose th {
          color: #fafafa;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
          border-bottom: 1px solid #27272a;
          border-right: none;
          background: none;
        }
        .prose th:last-child {
          border-right: none;
        }
        .prose td {
          color: #e5e7eb;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #232326;
          border-right: none;
          background: none;
        }
        .prose td:last-child {
          border-right: none;
        }
        .prose tbody tr {
          background: none;
        }
        .prose tbody tr:nth-child(even) {
          background-color: #202023;
        }
        .prose tbody tr:hover {
          background-color: #232326;
          transition: background-color 0.2s ease;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* Client-side enhancer for copy buttons */}
      {/* This will be rendered as a child in the page or parent component */}
    </div>
  );
}
