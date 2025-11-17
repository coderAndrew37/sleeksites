"use client";
import { useState } from "react";
import { BlogPost, Category } from "../components/types/blog";
import Layout from "../components/layout/Layout";
import { BlogCard } from "../components/blog/BlogCard";
import Button from "../components/ui/Button";

interface BlogPageProps {
  posts: BlogPost[];
  categories: Category[];
}

export default function BlogPageClient({ posts, categories }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visiblePosts, setVisiblePosts] = useState<number>(6);

  const filteredPosts = posts
    .filter((post) => {
      const matchesCategory =
        selectedCategory === "all" ||
        post.categories?.some((cat) => cat.slug === selectedCategory);

      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.categories?.some((cat) =>
          cat.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    })
    .slice(0, visiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <Layout
      title="Blog - SleekSites Kenya | Web Design & Digital Marketing Insights"
      description="Stay updated with the latest web design trends, SEO strategies, and digital marketing insights for Kenyan businesses from SleekSites experts."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert insights on web design, SEO, and digital marketing for Kenyan
            businesses
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                        selectedCategory === "all"
                          ? "bg-blue-700 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>All Articles</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          selectedCategory === "all"
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {posts.length}
                      </span>
                    </button>

                    {categories.map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => setSelectedCategory(category.slug)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                          selectedCategory === category.slug
                            ? "bg-blue-700 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{category.title}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            selectedCategory === category.slug
                              ? "bg-white/20 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {
                            posts.filter((post) =>
                              post.categories?.some(
                                (cat) => cat.slug === category.slug
                              )
                            ).length
                          }
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Design",
                      "SEO",
                      "Digital Marketing",
                      "E-Commerce",
                      "Mobile",
                      "Kenya Market",
                    ].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300 hover:border-blue-700 hover:text-blue-700 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white mt-8">
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest articles delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <Button variant="primary" size="sm" fullWidth>
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <BlogCard key={post._id} post={post} />
                    ))}
                  </div>

                  {/* Load More */}
                  {visiblePosts < posts.length && (
                    <div className="text-center mt-12">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={loadMorePosts}
                      >
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Put These Insights into Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to implement these strategies and grow your
            business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => (window.location.href = "/services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
