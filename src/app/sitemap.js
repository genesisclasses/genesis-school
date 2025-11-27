// app/sitemap.js
import { createStaticClient } from "@/lib/supabase/client";
import { createSlug } from "@/lib/utils/slugify";

const BASE_URL = "https://thegenesisschool.in";

async function getAllBlogs() {
  try {
    const supabase = createStaticClient();

    const { data: posts, error } = await supabase
      .from("posts")
      .select("id, title, created_at, updated_at") // adjust field names if different
      .order("created_at", { ascending: false });

    if (error || !posts) {
      console.error("Error fetching posts for sitemap:", error);
      return [];
    }

    return posts;
  } catch (err) {
    console.error("Unexpected error in getAllBlogs for sitemap:", err);
    return [];
  }
}

export default async function sitemap() {
  const today = new Date().toISOString().split("T")[0];

  // ✅ Main static routes of your site
  const staticRoutes = ["/", "/academics", "/about", "/project-darpan", "/co-curricular", "/blogs", "/contact"];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));

  // ✅ Dynamic blog routes based on Supabase + createSlug(title)
  const posts = await getAllBlogs();

  const blogEntries = posts.map((post) => {
    const slug = createSlug(post.title);
    const lastModified = post.updated_at || post.created_at || today;

    return {
      url: `${BASE_URL}/blogs/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticEntries, ...blogEntries];
}
