import type { APIRoute } from 'astro';

const site = 'https://benchmarks.jagoba.dev';
const base = '/dotnet-mappers';

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${site}${base}/</loc>
        <lastmod>${lastmod}</lastmod> 
        <changefreq>hourly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};