import { notFound } from "next/navigation";
import Image from "next/image";
import { properties } from "@/data/properties";
import { Bed, Bath, Maximize, MapPin, Mail, Phone, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
    return properties.map((property) => ({
        id: property.id,
    }));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = properties.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Image */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <Image
                    src={property.imageUrl}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="container mx-auto">
                        <span className="bg-secondary px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
                            {property.status}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{property.title}</h1>
                        <div className="flex items-center gap-2 text-lg">
                            <MapPin className="w-5 h-5" />
                            <span>{property.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Price & Stats */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Price</p>
                                    <h2 className="text-4xl font-bold text-primary">
                                        ${property.price.toLocaleString()}
                                        {property.status === "For Rent" && <span className="text-xl text-gray-500">/mo</span>}
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <Bed className="w-6 h-6 text-secondary mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-primary">{property.bedrooms}</p>
                                    <p className="text-sm text-gray-500">Bedrooms</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <Bath className="w-6 h-6 text-secondary mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-primary">{property.bathrooms}</p>
                                    <p className="text-sm text-gray-500">Bathrooms</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <Maximize className="w-6 h-6 text-secondary mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-primary">{property.area.toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Sq Ft</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span className="text-secondary font-bold text-xs">T</span>
                                    </div>
                                    <p className="text-sm font-bold text-primary">{property.propertyType}</p>
                                    <p className="text-xs text-gray-500">Type</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span className="text-accent font-bold text-xs">S</span>
                                    </div>
                                    <p className="text-sm font-bold text-primary">{property.status}</p>
                                    <p className="text-xs text-gray-500">Status</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">About This Property</h3>
                            <p className="text-gray-700 leading-relaxed">{property.description}</p>
                        </div>

                        {/* Amenities */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Amenities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                        <span className="text-gray-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Location</h3>
                            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500 font-medium">Map Placeholder</p>
                                    <p className="text-sm text-gray-400">{property.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Contact Agent */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-primary mb-6">Contact Agent</h3>

                            {/* Agent Info */}
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                                <Image
                                    src={property.agent.image}
                                    alt={property.agent.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-primary">{property.agent.name}</h4>
                                    <p className="text-sm text-gray-500">Senior Agent</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                                    <span className="text-sm">{property.agent.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                                    <span className="text-sm">{property.agent.email}</span>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="I'm interested in this property..."
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none"
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
                    </div>
                </div>
            </div>
        </div>
    );
}
