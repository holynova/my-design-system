import { copyFile, mkdir, readFile, readdir, rm } from 'node:fs/promises';
import { basename, join } from 'node:path';

const home = await readFile('index.html', 'utf8');
const links = Array.from(home.matchAll(/<a\b[^>]*\bhref="(pages\/[^"]+)"/g), match => match[1]);
const pages = (await readdir('pages')).filter(name => name.endsWith('.html'));
const destinations = new Set(links);
if (!pages.length || links.length !== pages.length || destinations.size !== pages.length ||
    pages.some(name => !destinations.has('pages/' + name))) {
  throw new Error('Every detail page must have exactly one matching catalogue link.');
}

const files = ['index.html', 'screenshot.png', 'github-pages-qr.png', 'pages/page-actions.js'];
for (const page of links) {
  files.push(page, 'specs/' + basename(page, '.html') + '.md');
}

await rm('dist', { recursive: true, force: true });
for (const folder of ['dist/pages', 'dist/specs']) await mkdir(folder, { recursive: true });
for (const file of files) await copyFile(file, join('dist', file));
console.log(`Built ${links.length} catalogue entries with their detail pages and Markdown specifications.`);
