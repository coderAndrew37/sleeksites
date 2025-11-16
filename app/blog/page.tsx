"use client";
import { JSX, useState } from "react";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export default function Blog(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title:
        "10 Essential Features Every Kenyan Business Website Needs in 2024",
      excerpt:
        "Discover the must-have features that will make your website stand out and convert visitors into customers in the competitive Kenyan market.",
      content: "",
      author: "John Kamau",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "web-design",
      image: "/blog/website-features.jpg",
      tags: ["Web Design", "Conversion", "Kenya Market"],
    },
    {
      id: "2",
      title: "How to Rank Your Kenyan Business on Google: Local SEO Strategies",
      excerpt:
        "Learn proven local SEO techniques to help your business appear in Google searches when potential customers are looking for your services.",
      content: "",
      author: "David Ochieng",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "seo",
      image: "/blog/local-seo.jpg",
      tags: ["SEO", "Google Ranking", "Local Business"],
    },
    {
      id: "3",
      title:
        "The Power of Mobile-First Design in Kenya: Statistics and Strategies",
      excerpt:
        "With over 80% of Kenyans accessing the internet via mobile, learn why mobile-first design is no longer optional for business success.",
      content: "",
      author: "Sarah Wanjiku",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "web-design",
      image: "/blog/mobile-design.jpg",
      tags: ["Mobile Design", "User Experience", "Statistics"],
    },
    {
      id: "4",
      title: "Facebook Ads for Kenyan Businesses: Cost-Effective Strategies",
      excerpt:
        "Maximize your advertising budget with targeted Facebook ads that reach your ideal customers in Kenya and drive real results.",
      content: "",
      author: "Grace Mwende",
      date: "2024-01-02",
      readTime: "8 min read",
      category: "marketing",
      image: "/blog/facebook-ads.jpg",
      tags: ["Facebook Ads", "Digital Marketing", "ROI"],
    },
    {
      id: "5",
      title: "E-Commerce in Kenya: Trends and Opportunities for 2024",
      excerpt:
        "Explore the latest e-commerce trends in Kenya and discover how to capitalize on the growing online shopping market.",
      content: "",
      author: "John Kamau",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "ecommerce",
      image: "/blog/ecommerce-trends.jpg",
      tags: ["E-Commerce", "Trends", "Online Shopping"],
    },
    {
      id: "6",
      title: "Why Your Business Needs a Website: Kenyan Market Insights",
      excerpt:
        "Understand the critical importance of having a professional website for business growth in the digital age in Kenya.",
      content: "",
      author: "Sarah Wanjiku",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "business",
      image: "/blog/business-website.jpg",
      tags: ["Business Growth", "Digital Presence", "Market Insights"],
    },
  ];

  const categories = [
    { id: "all", name: "All Articles", count: blogPosts.length },
    {
      id: "web-design",
      name: "Web Design",
      count: blogPosts.filter((post) => post.category === "web-design").length,
    },
    {
      id: "seo",
      name: "SEO",
      count: blogPosts.filter((post) => post.category === "seo").length,
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      count: blogPosts.filter((post) => post.category === "marketing").length,
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      count: blogPosts.filter((post) => post.category === "ecommerce").length,
    },
    {
      id: "business",
      name: "Business",
      count: blogPosts.filter((post) => post.category === "business").length,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                          selectedCategory === category.id
                            ? "bg-blue-700 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            selectedCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {category.count}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                    >
                      {/* Post Image */}
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                        <div className="absolute top-4 left-4">
                          <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                            {post.category.replace("-", " ")}
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>By {post.author}</span>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors cursor-pointer">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              onClick={() => setSearchTerm(tag)}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Button variant="secondary" size="sm">
                          Read More
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
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

              {/* Load More */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
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
