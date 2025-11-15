import { JSX } from "react";
import { Client } from "../types/Index";

export default function SocialProof(): JSX.Element {
  const clients: Client[] = [
    { name: "Safaricom", logo: "/clients/safaricom.svg" },
    { name: "KCB Bank", logo: "/clients/kcb.svg" },
    { name: "Naivas", logo: "/clients/naivas.svg" },
    { name: "Jumia", logo: "/clients/jumia.svg" },
    { name: "Bamburi Cement", logo: "/clients/bamburi.svg" },
  ];

  const stats: { number: string; label: string }[] = [
    { number: "127+", label: "Happy Clients" },
    { number: "94%", label: "Client Retention" },
    { number: "2.3x", label: "Avg. ROI" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Kenyan Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve remarkable growth
            online
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 mb-16">
          {clients.map((client: Client, index: number) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-gray-700">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index: number) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
