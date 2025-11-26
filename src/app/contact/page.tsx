import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    subtitle="GET IN TOUCH"
                    title="Contact Us"
                    center
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Preferred Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g., New York, Manhattan"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Tell us how we can help you..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Office Info Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Office Address</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            5618 TENTH LINE W UNIT 9<br />
                                            MISSISSAUGA, Ontario L5M7L9
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Phone</h4>
                                        <p className="text-gray-600 text-sm">+1 (416) 835-5068</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                                        <p className="text-gray-600 text-sm">info@dreamhomes.com</p>
                                        <p className="text-gray-600 text-sm">support@dreamhomes.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Working Hours</h4>
                                        <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600 text-sm">Sat: 10:00 AM - 4:00 PM</p>
                                        <p className="text-gray-600 text-sm">Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-primary mb-4">Our Office Location</h3>
                            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 font-medium">Map Placeholder</p>
                                    <p className="text-sm text-gray-400">123 Real Estate Ave</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
