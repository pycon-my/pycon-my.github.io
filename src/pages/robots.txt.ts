import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
${
  import.meta.env.PAGE_ENV === "staging" ? "Disallow: /" : "Allow: /\nDisallow:"
}

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
