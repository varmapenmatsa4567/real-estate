import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Home, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
                            <Home className="w-8 h-8 text-secondary" />
                            <span>Dream<span className="text-secondary">Homes</span></span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We help you find the perfect home. Whether you are buying, selling, or renting, we are here to support you every step of the way.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-secondary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties" className="text-gray-400 hover:text-secondary transition-colors">
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                    Buy a Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                    Sell a Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                    Rent a Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                    Property Management
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <span>123 Real Estate Ave, Suite 100<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>info@dreamhomes.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} DreamHomes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
