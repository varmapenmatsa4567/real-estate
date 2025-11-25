"use client";

import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [priceRange, setPriceRange] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (location) params.append("location", location);
        if (propertyType) params.append("type", propertyType);
        if (priceRange) params.append("price", priceRange);

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto border border-gray-100"
        >
            <div className="flex-1 relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Location</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                    <MapPin className="text-secondary w-5 h-5 mr-3" />
                    <input
                        type="text"
                        placeholder="City, Neighborhood, or Address"
                        className="bg-transparent w-full outline-none text-primary placeholder-gray-400"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Type</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                    <Home className="text-secondary w-5 h-5 mr-3" />
                    <select
                        className="bg-transparent w-full outline-none text-primary appearance-none cursor-pointer"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    >
                        <option value="">Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Studio">Studio</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>
            </div>

            <div className="flex-1 relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Price Range</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-white group-focus-within:ring-2 ring-secondary/20 transition-all">
                    <DollarSign className="text-secondary w-5 h-5 mr-3" />
                    <select
                        className="bg-transparent w-full outline-none text-primary appearance-none cursor-pointer"
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

            <div className="flex items-end">
                <button
                    type="submit"
                    className="w-full md:w-auto bg-secondary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                    <Search size={20} />
                    <span>Search</span>
                </button>
            </div>
        </form>
    );
}
