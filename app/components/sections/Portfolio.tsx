"use client";
import { JSX, useState } from "react";
import { PortfolioItem } from "../types/Index";

export default function Portfolio(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "E-Commerce Store - Fashion Retail",
      description:
        "Complete e-commerce solution with integrated payment processing and inventory management",
      image: "/portfolio/fashion-store.jpg",
      category: "ecommerce",
      results: [
        { metric: "Revenue Increase", value: "320%" },
        { metric: "Conversion Rate", value: "4.2%" },
        { metric: "Mobile Sales", value: "68%" },
      ],
    },
    {
      id: "2",
      title: "Service Business Website",
      description:
        "Lead generation focused website for plumbing services with booking system",
      image: "/portfolio/service-business.jpg",
      category: "service",
      results: [
        { metric: "Leads/Month", value: "45" },
        { metric: "Cost per Lead", value: "KES 120" },
        { metric: "Call Conversion", value: "28%" },
      ],
    },
    {
      id: "3",
      title: "Restaurant Online Ordering",
      description:
        "Food ordering platform with menu management and delivery integration",
      image: "/portfolio/restaurant.jpg",
      category: "food",
      results: [
        { metric: "Online Orders", value: "89/day" },
        { metric: "Order Value", value: "KES 2,100" },
        { metric: "Repeat Customers", value: "42%" },
      ],
    },
    {
      id: "4",
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search and virtual tours",
      image: "/portfolio/real-estate.jpg",
      category: "realestate",
      results: [
        { metric: "Property Views", value: "12K/mo" },
        { metric: "Lead Conversion", value: "5.8%" },
        { metric: "Agent Signups", value: "34" },
      ],
    },
  ];

  const categories: string[] = [
    "all",
    "ecommerce",
    "service",
    "food",
    "realestate",
  ];

  const filteredItems: PortfolioItem[] =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-700">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses with high-converting websites
            and digital strategies
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "all"
                ? "All Projects"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {item.results.map((result, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-700">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to See Similar Results for Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with
              a custom digital strategy.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("cta-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors"
            >
              Get Your Free Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
