"use client";
import { useEffect } from "react";

export default function MarkdownCopyEnhancer() {
  useEffect(() => {
    const prose = document.querySelector('.prose');
    if (!prose) return;
    // Remove all copy buttons from prose, including any orphaned ones
    prose.querySelectorAll('.copy-button').forEach((btn) => btn.remove());
    // Find all code blocks
    prose.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.copy-button')) return;
      const code = pre.querySelector('code');
      if (!code) return;
      const button = document.createElement('button');
      button.className = 'copy-button compact';
      button.type = 'button';
      button.style.zIndex = '1000';
      button.style.background = 'rgba(255, 222, 39, 0.95)';
      button.innerHTML = 'Copy';
      button.setAttribute('data-copied', 'false');
      button.setAttribute('aria-label', 'Copy code');
      button.title = 'Copy code';
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || '');
          button.setAttribute('data-copied', 'true');
          button.innerHTML = 'Copied!';
          setTimeout(() => {
            button.setAttribute('data-copied', 'false');
            button.innerHTML = 'Copy';
          }, 1200);
        } catch {
          button.innerHTML = 'Error';
        }
      });
      pre.appendChild(button);
      pre.style.position = 'relative';
    });
    // Add copy button for inline code
    prose.querySelectorAll('p code, li code, td code').forEach((inlineCode) => {
      if (inlineCode.closest('pre')) return;
      if (inlineCode.parentElement?.querySelector('.copy-button')) return;
      if (inlineCode.parentElement && inlineCode.parentElement.tagName === 'SPAN') return;
      const button = document.createElement('button');
      button.className = 'copy-button compact';
      button.type = 'button';
      button.style.marginLeft = '0.3em';
      button.innerHTML = 'Copy';
      button.setAttribute('data-copied', 'false');
      button.setAttribute('aria-label', 'Copy code');
      button.title = 'Copy code';
      button.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(inlineCode.textContent || '');
          button.setAttribute('data-copied', 'true');
          button.innerHTML = 'Copied!';
          setTimeout(() => {
            button.setAttribute('data-copied', 'false');
            button.innerHTML = 'Copy';
          }, 1200);
        } catch {
          button.innerHTML = 'Error';
        }
      });
      inlineCode.parentElement?.insertBefore(button, inlineCode.nextSibling);
    });
  }, []);
  return null;
}