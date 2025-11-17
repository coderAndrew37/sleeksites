import { client } from "@/lib/sanity";
import BlogPageClient from "./BlogClient";

export default async function BlogPage() {
  // Fetch posts
  const postsQuery = `*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    "author": author->{
      name,
      role
    },
    "categories": categories[]->{
      title,
      slug
    }
  }`;

  // Fetch categories
  const categoriesQuery = `*[_type == "category"] {
    title,
    slug
  }`;

  const [posts, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(categoriesQuery),
  ]);

  return <BlogPageClient posts={posts} categories={categories} />;
}
