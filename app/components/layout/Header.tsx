"use client";
import { useState, useEffect, JSX } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "../ui/Button";

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (page: string): void => {
    router.push(page);
    setMobileMenuOpen(false);
  };

  const isActivePage = (page: string): boolean => {
    return pathname === page;
  };

  const menuItems = [
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => navigateToPage("/")}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span
              className={`ml-4 text-2xl font-extrabold transition-all duration-300 ${
                isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              } group-hover:scale-105`}
            >
              SleekSites
              <span className="text-orange-500 animate-pulse">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateToPage(item.path)}
                className={`relative px-6 py-3 font-semibold transition-all duration-300 rounded-2xl group ${
                  isActivePage(item.path)
                    ? "text-blue-600 bg-blue-50/80 shadow-inner"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Hover effect */}
                {!isActivePage(item.path) && (
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-50 to-purple-50"
                        : "bg-white/5 backdrop-blur-sm"
                    }`}
                  />
                )}

                {/* Active indicator */}
                {isActivePage(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}

            {/* CTA Button */}
            <div className="ml-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigateToPage("/strategy-call")}
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 border-0"
              >
                Free Strategy Call
              </Button>
            </div>
          </nav>

          {/* Mobile menu button - Modern design */}
          <button
            className={`lg:hidden relative w-12 h-12 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            } ${mobileMenuOpen ? "bg-white/20" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6">
              <span
                className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 top-3" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              />
              <span
                className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${
                  mobileMenuOpen ? "-rotate-45 bottom-3" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div
            className={`mt-4 py-6 rounded-3xl shadow-2xl backdrop-blur-xl border ${
              isScrolled
                ? "bg-white/95 border-gray-200"
                : "bg-black/20 border-white/20"
            }`}
          >
            <div className="flex flex-col space-y-2 px-4">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigateToPage(item.path)}
                  className={`relative px-6 py-4 text-left font-semibold rounded-2xl transition-all duration-300 group ${
                    isActivePage(item.path)
                      ? "text-blue-600 bg-blue-50/80 shadow-inner"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    {item.label}
                    {isActivePage(item.path) && (
                      <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    )}
                  </span>

                  {/* Hover effect for mobile */}
                  {!isActivePage(item.path) && (
                    <div
                      className={`absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        isScrolled
                          ? "bg-gradient-to-r from-blue-50 to-purple-50"
                          : "bg-white/5"
                      }`}
                    />
                  )}
                </button>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 px-2">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => navigateToPage("/strategy-call")}
                  className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white py-4 text-base font-semibold"
                >
                  Free Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
