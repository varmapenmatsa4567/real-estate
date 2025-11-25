import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.imageUrl}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                    {property.status}
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-white hover:text-red-500 transition-colors backdrop-blur-sm">
                    <Heart size={20} className="fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-bold text-xl">
                        ${property.price.toLocaleString()}
                        {property.status === "For Rent" && <span className="text-sm font-normal">/mo</span>}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <p className="text-secondary text-sm font-medium mb-1">{property.propertyType}</p>
                        <h3 className="text-lg font-bold text-primary line-clamp-1 group-hover:text-secondary transition-colors">
                            {property.title}
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="text-secondary" />
                    <span className="line-clamp-1">{property.location}</span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Bed size={18} className="text-secondary" />
                        <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Bath size={18} className="text-secondary" />
                        <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Maximize size={18} className="text-secondary" />
                        <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                </div>

                <Link
                    href={`/properties/${property.id}`}
                    className="block w-full mt-4 text-center bg-gray-50 hover:bg-secondary hover:text-white text-primary font-medium py-2.5 rounded-lg transition-colors border border-gray-100"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
