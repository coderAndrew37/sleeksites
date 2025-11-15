"use client";
import { JSX } from "react";
import { ResultMetric } from "../types/Index";

export default function Results(): JSX.Element {
  const results: ResultMetric[] = [
    {
      before: "KES 0",
      after: "KES 450,000/mo",
      metric: "Monthly Revenue",
      change: "+4500%",
    },
    {
      before: "12/day",
      after: "89/day",
      metric: "Website Visitors",
      change: "+641%",
    },
    {
      before: "0.8%",
      after: "3.2%",
      metric: "Conversion Rate",
      change: "+300%",
    },
    {
      before: "#47",
      after: "#3",
      metric: "Google Ranking",
      change: "+44 positions",
    },
  ];

  return (
    <section
      id="results"
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results for Kenyan Businesses
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how we've helped local businesses achieve remarkable growth with
            our data-driven approach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Results Metrics */}
          <div className="space-y-6">
            {results.map((result: ResultMetric, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Before</div>
                    <div className="text-lg line-through opacity-70">
                      {result.before}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-300 mb-1">After</div>
                    <div className="text-2xl font-bold text-green-400">
                      {result.after}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{result.metric}</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {result.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Highlight */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                NS
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Nairobi Spares</h3>
                <p className="text-gray-600">Auto Parts Retailer</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                <p className="text-gray-700">
                  Low online visibility and poor website conversion despite
                  having quality auto parts. Struggling to compete with larger
                  retailers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Complete website redesign with e-commerce functionality
                  </li>
                  <li>Local SEO optimization for "auto parts Nairobi"</li>
                  <li>Google Ads campaign targeting specific vehicle parts</li>
                  <li>Facebook retargeting for abandoned carts</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-sm text-blue-800 font-semibold mb-2">
                6-Month Results
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-700">
                    KES 2.7M
                  </div>
                  <div className="text-xs text-blue-600">Total Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">18.4x</div>
                  <div className="text-xs text-green-600">ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors"
          >
            View More Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
