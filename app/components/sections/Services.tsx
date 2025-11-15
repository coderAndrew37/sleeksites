"use client";
import { JSX } from "react";
import { Service } from "../types/Index";
import Button from "../ui/Button";

export default function Services(): JSX.Element {
  const services: Service[] = [
    {
      icon: "💻",
      title: "High-Converting Web Design",
      description:
        "Custom websites designed to convert visitors into customers with proven UX principles.",
      features: [
        "Mobile-First Design",
        "Conversion Optimization",
        "Fast Loading Speed",
        "SEO-Ready Structure",
      ],
      price: "From KES 45,000",
      popular: true,
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Rank higher on Google and attract qualified traffic that converts into customers.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Local SEO",
      ],
      price: "From KES 25,000/mo",
      popular: false,
    },
    {
      icon: "📱",
      title: "Facebook & Instagram Ads",
      description:
        "Targeted social media advertising that reaches your ideal customers in Kenya.",
      features: [
        "Audience Targeting",
        "Ad Creative Design",
        "A/B Testing",
        "Performance Tracking",
      ],
      price: "From KES 15,000/mo",
      popular: false,
    },
    {
      icon: "🎯",
      title: "Google Ads Management",
      description:
        "Appear when potential customers search for your products or services on Google.",
      features: [
        "PPC Management",
        "Landing Pages",
        "Conversion Tracking",
        "ROI Optimization",
      ],
      price: "From KES 20,000/mo",
      popular: false,
    },
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-700">Results-Driven</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is designed to deliver measurable results and help you
            achieve your business goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? "border-orange-500 bg-gradient-to-b from-orange-50 to-white scale-105"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  {service.price}
                </div>
                <div className="text-gray-500 text-sm">One-time or monthly</div>
              </div>

              <Button
                variant={service.popular ? "primary" : "secondary"}
                size="md"
                fullWidth
                onClick={() => scrollToSection("cta-section")}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
