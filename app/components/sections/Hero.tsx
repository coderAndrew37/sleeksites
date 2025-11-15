"use client";
import { JSX } from "react";
import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBudges";

export default function Hero(): JSX.Element {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const results: { metric: string; label: string }[] = [
    { metric: "2.3x", label: "Average Conversion Rate" },
    { metric: "127+", label: "Clients in Kenya" },
    { metric: "94%", label: "Client Retention Rate" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto px-4 text-center text-white">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
          <div className="flex -space-x-2 mr-3">
            {[1, 2, 3, 4].map((i: number) => (
              <div
                key={i}
                className="w-6 h-6 bg-blue-300 rounded-full border-2 border-white"
              ></div>
            ))}
          </div>
          <span className="text-sm font-medium">
            Trusted by 127+ Kenyan Businesses
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">We Create Websites</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            That Generate Leads
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Get a{" "}
          <span className="font-semibold">
            high-converting website + digital marketing strategy
          </span>{" "}
          that attracts qualified customers and grows your revenue.
        </p>

        {/* Results Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {results.map((item, index: number) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {item.metric}
              </div>
              <div className="text-white/80 text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="primary"
            size="xl"
            onClick={() => scrollToSection("cta-section")}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          >
            Get Your Free Proposal
          </Button>
          <Button
            variant="secondary"
            size="xl"
            onClick={() => scrollToSection("portfolio")}
          >
            View Our Work
          </Button>
        </div>

        {/* Trust Badges */}
        <TrustBadges />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
