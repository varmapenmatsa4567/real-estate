// Helper functions for filtering and sorting properties

export interface FilterParams {
    location?: string;
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    minBeds?: number;
    maxBeds?: number;
    status?: string;
}

export function filterProperties<T extends {
    location: string;
    propertyType: string;
    price: number;
    bedrooms: number;
    status: string;
}>(properties: T[], filters: FilterParams): T[] {
    return properties.filter((property) => {
        // Location filter
        if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
            return false;
        }

        // Type filter
        if (filters.type && property.propertyType !== filters.type) {
            return false;
        }

        // Price filter
        if (filters.minPrice !== undefined && property.price < filters.minPrice) {
            return false;
        }
        if (filters.maxPrice !== undefined && property.price > filters.maxPrice) {
            return false;
        }

        // Bedrooms filter
        if (filters.minBeds !== undefined && property.bedrooms < filters.minBeds) {
            return false;
        }
        if (filters.maxBeds !== undefined && property.bedrooms > filters.maxBeds) {
            return false;
        }

        // Status filter
        if (filters.status && property.status !== filters.status) {
            return false;
        }

        return true;
    });
}

export function sortProperties<T extends { price: number; id: string }>(
    properties: T[],
    sortBy: string
): T[] {
    const sorted = [...properties];

    switch (sortBy) {
        case "price-low":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-high":
            return sorted.sort((a, b) => b.price - a.price);
        case "newest":
            return sorted.sort((a, b) => b.id.localeCompare(a.id));
        default:
            return sorted;
    }
}
