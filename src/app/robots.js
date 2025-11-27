// app/robots.js

const BASE_URL = "https://thegenesisschool.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin", "/draft", "/internal"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin", "/draft", "/internal"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
