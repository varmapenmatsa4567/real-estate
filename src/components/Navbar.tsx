"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/properties" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
                : "bg-black/20 backdrop-blur-sm py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className={`flex items-center gap-2 text-2xl font-bold transition-colors ${scrolled ? "text-primary" : "text-white"
                    }`}>
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <Home className="w-8 h-8 text-secondary" />
                    </motion.div>
                    <span>Dream<span className="text-secondary">Homes</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <Link
                                href={item.href}
                                className={`font-medium transition-colors relative group ${scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                                    }`}
                            >
                                {item.name}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/contact"
                            className="bg-secondary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
                        >
                            Contact Agent
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    className={`md:hidden transition-colors ${scrolled ? "text-primary" : "text-white"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-primary hover:text-secondary font-medium py-2 border-b border-gray-100 block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/contact"
                                className="bg-secondary text-white text-center py-3 rounded-lg font-medium mt-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Agent
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
