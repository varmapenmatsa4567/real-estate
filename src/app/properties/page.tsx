"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import SectionTitle from "@/components/SectionTitle";
import { properties } from "@/data/properties";
import { filterProperties, sortProperties } from "@/lib/utils";
import { Search, SlidersHorizontal, MapPin, Home, DollarSign, Bed } from "lucide-react";

function PropertiesContent() {
    const searchParams = useSearchParams();

    const [location, setLocation] = useState(searchParams.get("location") || "");
    const [propertyType, setPropertyType] = useState(searchParams.get("type") || "");
    const [priceRange, setPriceRange] = useState(searchParams.get("price") || "");
    const [bedroomCount, setBedroomCount] = useState("");
    const [sortBy, setSortBy] = useState("newest");
    const [showFilters, setShowFilters] = useState(false);

    const [filteredProperties, setFilteredProperties] = useState(properties);

    useEffect(() => {
        let filtered = properties;

        // Apply filters
        const filters: any = {};

        if (location) {
            filters.location = location;
        }

        if (propertyType) {
            filters.type = propertyType;
        }

        // Parse price range
        if (priceRange) {
            if (priceRange.includes("-")) {
                const [min, max] = priceRange.split("-");
                filters.minPrice = parseInt(min);
                if (max && !max.includes("+")) {
                    filters.maxPrice = parseInt(max);
                }
            } else if (priceRange.endsWith("+")) {
                filters.minPrice = parseInt(priceRange.replace("+", ""));
            }
        }

        if (bedroomCount) {
            filters.minBeds = parseInt(bedroomCount);
        }

        filtered = filterProperties(properties, filters);
        filtered = sortProperties(filtered, sortBy);

        setFilteredProperties(filtered);
    }, [location, propertyType, priceRange, bedroomCount, sortBy]);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    subtitle="EXPLORE LISTINGS"
                    title="Find Your Perfect Property"
                    center
                />

                {/* Filter Bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                            <SlidersHorizontal className="w-5 h-5 text-secondary" />
                            Refine Your Search
                        </h3>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden text-secondary font-medium"
                        >
                            {showFilters ? "Hide" : "Show"} Filters
                        </button>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ${showFilters ? "block" : "hidden md:grid"}`}>
                        {/* Location */}
                        <div className="relative group">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                                Location
                            </label>
                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                                <MapPin className="text-secondary w-5 h-5 mr-2 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Enter city or area"
                                    className="bg-transparent w-full outline-none text-primary text-sm"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Property Type */}
                        <div className="relative group">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                                Property Type
                            </label>
                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                                <Home className="text-secondary w-5 h-5 mr-2 shrink-0" />
                                <select
                                    className="bg-transparent w-full outline-none text-primary appearance-none cursor-pointer text-sm"
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                >
                                    <option value="">All Types</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="relative group">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                                Price Range
                            </label>
                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                                <DollarSign className="text-secondary w-5 h-5 mr-2 shrink-0" />
                                <select
                                    className="bg-transparent w-full outline-none text-primary appearance-none cursor-pointer text-sm"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                >
                                    <option value="">Any Price</option>
                                    <option value="0-500000">Under $500k</option>
                                    <option value="500000-1000000">$500k - $1M</option>
                                    <option value="1000000-2000000">$1M - $2M</option>
                                    <option value="2000000+">$2M+</option>
                                </select>
                            </div>
                        </div>

                        {/* Bedrooms */}
                        <div className="relative group">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                                Bedrooms
                            </label>
                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                                <Bed className="text-secondary w-5 h-5 mr-2 shrink-0" />
                                <select
                                    className="bg-transparent w-full outline-none text-primary appearance-none cursor-pointer text-sm"
                                    value={bedroomCount}
                                    onChange={(e) => setBedroomCount(e.target.value)}
                                >
                                    <option value="">Any</option>
                                    <option value="1">1+ Beds</option>
                                    <option value="2">2+ Beds</option>
                                    <option value="3">3+ Beds</option>
                                    <option value="4">4+ Beds</option>
                                </select>
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="relative group">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                                Sort By
                            </label>
                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                                <Search className="text-secondary w-5 h-5 mr-2 shrink-0" />
                                <select
                                    className="bg-transparent w-full outline-none text-primary appearance-none cursor-pointer text-sm"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            <span className="font-bold text-primary">{filteredProperties.length}</span> properties found
                        </p>
                        <button
                            onClick={() => {
                                setLocation("");
                                setPropertyType("");
                                setPriceRange("");
                                setBedroomCount("");
                                setSortBy("newest");
                            }}
                            className="text-sm text-secondary hover:text-blue-700 font-medium"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* Properties Grid */}
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Home className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">No Properties Found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
                        <button
                            onClick={() => {
                                setLocation("");
                                setPropertyType("");
                                setPriceRange("");
                                setBedroomCount("");
                            }}
                            className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 pt-24 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading properties...</p>
                </div>
            </div>
        }>
            <PropertiesContent />
        </Suspense>
    );
}
