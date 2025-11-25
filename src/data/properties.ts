export interface Property {
    id: string;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number; // in sq ft
    propertyType: "Apartment" | "Villa" | "Studio" | "Commercial";
    status: "For Sale" | "For Rent";
    imageUrl: string;
    amenities: string[];
    description: string;
    agent: {
        name: string;
        phone: string;
        email: string;
        image: string;
    };
}

export const properties: Property[] = [
    {
        id: "1",
        title: "Luxury 3BHK in Downtown",
        location: "Downtown, New York",
        price: 1200000,
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        propertyType: "Apartment",
        status: "For Sale",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        amenities: ["Parking", "Gym", "Pool", "Security", "Balcony"],
        description: "Experience luxury living in the heart of the city. This stunning 3BHK apartment offers breathtaking views and top-notch amenities.",
        agent: {
            name: "Sarah Johnson",
            phone: "+1 555 123 4567",
            email: "sarah@dreamhomes.com",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
        },
    },
    {
        id: "2",
        title: "Modern Villa with Private Pool",
        location: "Beverly Hills, Los Angeles",
        price: 3500000,
        bedrooms: 5,
        bathrooms: 4,
        area: 4500,
        propertyType: "Villa",
        status: "For Sale",
        imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000",
        amenities: ["Private Pool", "Garden", "Home Theater", "Smart Home", "Garage"],
        description: "A masterpiece of modern architecture. This villa features a private pool, expansive garden, and state-of-the-art smart home technology.",
        agent: {
            name: "Michael Chen",
            phone: "+1 555 987 6543",
            email: "michael@dreamhomes.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        },
    },
    {
        id: "3",
        title: "Cozy Studio near Central Park",
        location: "Manhattan, New York",
        price: 3500,
        bedrooms: 1,
        bathrooms: 1,
        area: 550,
        propertyType: "Studio",
        status: "For Rent",
        imageUrl: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=1000",
        amenities: ["Furnished", "Wi-Fi", "Concierge", "Near Subway"],
        description: "Perfect for young professionals. This cozy studio is just steps away from Central Park and major subway lines.",
        agent: {
            name: "Emily Davis",
            phone: "+1 555 234 5678",
            email: "emily@dreamhomes.com",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
        },
    },
    {
        id: "4",
        title: "Spacious Family Home",
        location: "Austin, Texas",
        price: 650000,
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        propertyType: "Villa",
        status: "For Sale",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
        amenities: ["Backyard", "Fireplace", "School District", "Quiet Neighborhood"],
        description: "Ideal for growing families. This spacious home offers a large backyard and is located in a top-rated school district.",
        agent: {
            name: "David Wilson",
            phone: "+1 555 876 5432",
            email: "david@dreamhomes.com",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        },
    },
    {
        id: "5",
        title: "Modern Office Space",
        location: "San Francisco, CA",
        price: 8000,
        bedrooms: 0,
        bathrooms: 2,
        area: 1200,
        propertyType: "Commercial",
        status: "For Rent",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
        amenities: ["Conference Room", "High-speed Internet", "24/7 Access", "Kitchenette"],
        description: "Boost your productivity in this modern office space located in the tech hub of San Francisco.",
        agent: {
            name: "Sarah Johnson",
            phone: "+1 555 123 4567",
            email: "sarah@dreamhomes.com",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
        },
    },
    {
        id: "6",
        title: "Seaside Condo with Ocean View",
        location: "Miami, Florida",
        price: 950000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1100,
        propertyType: "Apartment",
        status: "For Sale",
        imageUrl: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000",
        amenities: ["Ocean View", "Beach Access", "Gym", "Valet Parking"],
        description: "Wake up to the sound of waves. This seaside condo offers panoramic ocean views and direct beach access.",
        agent: {
            name: "Michael Chen",
            phone: "+1 555 987 6543",
            email: "michael@dreamhomes.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        },
    },
];
