"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-black/20 backdrop-blur-sm py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className={`flex items-center gap-2 text-2xl font-bold transition-colors ${scrolled ? "text-primary" : "text-white"
                    }`}>
                    <Home className="w-8 h-8 text-secondary" />
                    <span>Dream<span className="text-secondary">Homes</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className={`font-medium transition-colors ${scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                        }`}>
                        Home
                    </Link>
                    <Link href="/properties" className={`font-medium transition-colors ${scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                        }`}>
                        Properties
                    </Link>
                    <Link href="/about" className={`font-medium transition-colors ${scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                        }`}>
                        About
                    </Link>
                    <Link href="/contact" className={`font-medium transition-colors ${scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                        }`}>
                        Contact
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="bg-secondary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Contact Agent
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden transition-colors ${scrolled ? "text-primary" : "text-white"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    <Link
                        href="/"
                        className="text-primary hover:text-secondary font-medium py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/properties"
                        className="text-primary hover:text-secondary font-medium py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Properties
                    </Link>
                    <Link
                        href="/about"
                        className="text-primary hover:text-secondary font-medium py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-primary hover:text-secondary font-medium py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-secondary text-white text-center py-3 rounded-lg font-medium mt-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Agent
                    </Link>
                </div>
            )}
        </nav>
    );
}
