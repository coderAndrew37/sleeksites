"use client";
import { JSX, useState } from "react";
import { FAQItem } from "../types/Index";

export default function FAQ(): JSX.Element {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["1"]));

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "How long does it take to build a website?",
      answer:
        "Typically, we deliver complete websites within 2-4 weeks depending on complexity. We start with a strategy session, then move to design, development, and testing. We maintain clear communication throughout the process and provide regular updates.",
    },
    {
      id: "2",
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support packages starting from KES 5,000/month. This includes security updates, performance optimization, content updates, and technical support. Many of our clients choose our maintenance plans to ensure their website remains secure and up-to-date.",
    },
    {
      id: "3",
      question: "Can you help with website hosting?",
      answer:
        "Absolutely! We provide reliable hosting solutions optimized for Kenyan businesses. Our hosting includes SSL certificates, daily backups, and 99.9% uptime guarantee. We handle all technical aspects so you can focus on your business.",
    },
    {
      id: "4",
      question: "What makes your websites different from templates?",
      answer:
        "Our websites are custom-built to convert visitors into customers. We focus on user experience, loading speed, and conversion optimization. Unlike templates, we conduct thorough research on your industry and competitors to create a unique solution that drives results.",
    },
    {
      id: "5",
      question: "Do you work with businesses outside Nairobi?",
      answer:
        "Yes! We work with businesses across Kenya and East Africa. Our remote collaboration process is streamlined with regular video calls, project management tools, and clear communication. Distance is never a barrier to delivering exceptional results.",
    },
    {
      id: "6",
      question: "What results can I expect from SEO services?",
      answer:
        "Our SEO clients typically see significant improvements within 3-6 months, including higher search rankings, increased organic traffic, and more qualified leads. We provide monthly reports showing exactly how your investment is performing.",
    },
    {
      id: "7",
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options. For web design projects, we typically require 50% upfront and 50% upon completion. For ongoing services like SEO and ads, we offer monthly billing. We can also create custom payment plans for larger projects.",
    },
    {
      id: "8",
      question: "What if I need changes after the website is live?",
      answer:
        "We provide training on how to manage basic content updates yourself. For more complex changes, we offer flexible support packages. All our websites come with a content management system that's easy to use, even for non-technical users.",
    },
  ];

  const toggleItem = (id: string): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-700">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our web design and digital
            marketing services in Kenya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq: FAQItem) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-blue-700 transition-transform ${
                      openItems.has(faq.id) ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openItems.has(faq.id) && (
                  <div className="px-6 pb-6">
                    <div className="w-12 h-1 bg-blue-700 rounded-full mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're here to help! Contact us directly and we'll get back to
                you within hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("cta-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors"
                >
                  Get Free Consultation
                </button>
                <a
                  href="tel:+254700000000"
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Call Us: +254 700 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
