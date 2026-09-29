"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Zap } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const servicesDropdown = [
  { label: "BPM Consulting & Strategy", href: "/services#bpm-consulting", icon: "🎯" },
  { label: "Intelligent Process Automation", href: "/services#automation", icon: "⚡" },
  { label: "Workflow Optimization", href: "/services#workflow", icon: "🔄" },
  { label: "Intelligent Document Processing", href: "/services#idp", icon: "📄" },
  { label: "Process Analytics & Insights", href: "/services#analytics", icon: "📊" },
  { label: "Managed BPO Services", href: "/services#bpo", icon: "🌐" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-primary group-hover:shadow-primary-lg transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-neutral-900 tracking-tight leading-none">
                  Process<span className="text-primary-600">IQ</span>
                </span>
                <span className="block text-[10px] font-medium text-neutral-400 tracking-widest uppercase leading-none">
                  Tech
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                if (link.label === "Services") {
                  return (
                    <div key={link.label} className="relative group">
                      <button
                        className={cn(
                          "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[0.9rem] font-medium transition-all duration-200",
                          isActive
                            ? "text-primary-600 bg-primary-50"
                            : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                        )}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        aria-expanded={servicesOpen}
                      >
                        Services
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
                          servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                        )}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-2 overflow-hidden">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 group/item transition-all duration-150"
                            >
                              <span className="text-xl leading-none">{item.icon}</span>
                              <span className="text-[0.85rem] font-medium text-neutral-700 group-hover/item:text-primary-600 transition-colors">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                          <div className="border-t border-neutral-100 mt-1 pt-1">
                            <Link
                              href="/services"
                              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 group/all transition-all duration-150"
                            >
                              <span className="text-[0.85rem] font-semibold text-primary-600">
                                View All Services
                              </span>
                              <ArrowRight className="w-4 h-4 text-primary-600 group-hover/all:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-[0.9rem] font-medium transition-all duration-200",
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="tel:+18887429100"
                className="text-[0.85rem] font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                {siteConfig.phone}
              </Link>
              <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-neutral-100 text-neutral-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 pt-20 flex flex-col h-full overflow-y-auto">
            {/* Mobile nav links */}
            <div className="space-y-1 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-150",
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-neutral-100 pt-6 space-y-3">
              <p className="text-sm text-neutral-400 font-medium px-1">
                {siteConfig.phone}
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Schedule Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
