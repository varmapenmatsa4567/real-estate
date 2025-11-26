"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";
import { Property } from "@/data/properties";
import { motion } from "framer-motion";
import { useState } from "react";

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <motion.div
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.imageUrl}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Shimmer effect overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {property.status}
                </motion.div>
                <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-gray-400 hover:text-red-500 transition-colors backdrop-blur-sm"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsLiked(!isLiked);
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <Heart
                        size={20}
                        className={`transition-all ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                    />
                </motion.button>
                <motion.div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.p
                        className="text-white font-bold text-xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        ${property.price.toLocaleString()}
                        {property.status === "For Rent" && <span className="text-sm font-normal">/mo</span>}
                    </motion.p>
                </motion.div>
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
                    <motion.div
                        className="flex items-center gap-2 text-gray-600 text-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Bed size={18} className="text-secondary" />
                        <span>{property.bedrooms} Beds</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-2 text-gray-600 text-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Bath size={18} className="text-secondary" />
                        <span>{property.bathrooms} Baths</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-2 text-gray-600 text-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Maximize size={18} className="text-secondary" />
                        <span>{property.area.toLocaleString()} sqft</span>
                    </motion.div>
                </div>

                <Link
                    href={`/properties/${property.id}`}
                    className="block w-full mt-4"
                >
                    <motion.button
                        className="w-full text-center bg-gray-50 hover:bg-secondary hover:text-white text-primary font-medium py-2.5 rounded-lg transition-colors border border-gray-100"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Details
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
