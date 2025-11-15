"use client";
import { JSX, useState } from "react";
import { Testimonial } from "../types/Index";

export default function Testimonials(): JSX.Element {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Kimani",
      company: "Nairobi Spares",
      role: "Owner",
      content:
        "SleekSites transformed our auto parts business. Our online revenue went from zero to KES 450,000 per month in just 6 months. Their understanding of the Kenyan market is exceptional.",
      rating: 5,
      image: "/testimonials/sarah.jpg",
    },
    {
      id: "2",
      name: "James Omondi",
      company: "QuickFix Plumbers",
      role: "Managing Director",
      content:
        "The website they built for us generates 25-30 qualified leads every month. We've expanded our team from 3 to 8 plumbers thanks to the consistent business coming through our site.",
      rating: 5,
      image: "/testimonials/james.jpg",
    },
    {
      id: "3",
      name: "Grace Mwende",
      company: "Mombasa Fashion House",
      role: "CEO",
      content:
        "Our e-commerce store built by SleekSites increased our sales by 320%. The user experience is seamless, and the mobile optimization has been crucial for our Kenyan customers.",
      rating: 5,
      image: "/testimonials/grace.jpg",
    },
    {
      id: "4",
      name: "David Maina",
      company: "Tech Solutions Ltd",
      role: "Marketing Manager",
      content:
        "Their SEO strategy put us on the first page of Google for all our key services. The quality of leads has improved dramatically, and our conversion rate is now 4.2%.",
      rating: 5,
      image: "/testimonials/david.jpg",
    },
  ];

  const nextTestimonial = (): void => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-700">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Kenyan business owners
            have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute top-6 right-6 text-6xl text-blue-100 font-serif">
              "
            </div>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonials[activeTestimonial].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[activeTestimonial].role},{" "}
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex mb-4">
              {renderStars(testimonials[activeTestimonial].rating)}
            </div>

            <blockquote className="text-xl text-gray-700 leading-relaxed italic">
              "{testimonials[activeTestimonial].content}"
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous Button"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-blue-700" : "bg-gray-300"
                  }`}
                  aria-label="Dots Indicator"
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next Button"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>127+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
