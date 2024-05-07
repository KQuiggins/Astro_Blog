import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHTML from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
    const posts = await getCollection('posts');
  return rss({
    title: "Ken's Code",
    description: 'A coders journey through the world of software development.',
    site: context.site?.toString() ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizeHTML(parser.render(post.body)),
      image: post.data.image,
    })),
  });
}