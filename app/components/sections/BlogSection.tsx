import Link from "next/link";
import { BlogCard } from "../blog/BlogCard";
import { BlogPost } from "../types/blog";
import Button from "../ui/Button";

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  // Take only the first 3 posts for the homepage
  const featuredPosts = posts.slice(0, 3);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-blue-700">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest web design trends, SEO strategies, and
            digital marketing tips for Kenyan businesses
          </p>
        </div>

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post._id} post={post} featured={index === 0} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/blog">
            <Button variant="primary" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
