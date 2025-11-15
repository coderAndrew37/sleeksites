"use client";
import { useState, useEffect, JSX } from "react";
import Button from "../ui/Button";

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <span
              className={`ml-3 text-xl font-bold transition-colors ${
                isScrolled ? "text-blue-700" : "text-white"
              }`}
            >
              SleekSites<span className="text-orange-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium hover:text-blue-700 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className={`font-medium hover:text-blue-700 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`font-medium hover:text-blue-700 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`font-medium hover:text-blue-700 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Reviews
            </button>
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection("cta-section")}
            >
              Free Strategy Call
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 font-medium px-4 py-2 hover:bg-blue-50 rounded text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-gray-700 font-medium px-4 py-2 hover:bg-blue-50 rounded text-left"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 font-medium px-4 py-2 hover:bg-blue-50 rounded text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 font-medium px-4 py-2 hover:bg-blue-50 rounded text-left"
              >
                Reviews
              </button>
              <div className="px-4 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => scrollToSection("cta-section")}
                >
                  Free Strategy Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
