import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import SectionTitle from "@/components/SectionTitle";
import { properties } from "@/data/properties";
import { Shield, CheckCircle, Eye, Award, Quote } from "lucide-react";

export default function Home() {
  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            The Key to Your New Beginning
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Discover properties that match your lifestyle. The perfect home is just a search away.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="FEATURED LISTINGS"
            title="Featured Properties in New York"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="WHY CHOOSE US"
            title="We Help You Find Your Dream Home"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                <Shield className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Trusted Agents</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced agents guide you through every step of the process.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                <CheckCircle className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Verified Listings</h3>
              <p className="text-gray-600 leading-relaxed">
                All properties are carefully verified for accuracy and authenticity.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                <Eye className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Virtual Tours</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience properties with immersive 360° virtual tours online.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                <Award className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized for excellence in real estate services nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="TESTIMONIALS"
            title="What Our Clients Say"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "John Miller",
                role: "Home Buyer",
                content: "The team helped us find our dream home in just 3 weeks! Their expertise and dedication made the entire process seamless.",
                rating: 5,
              },
              {
                name: "Emma Wilson",
                role: "Property Seller",
                content: "Sold my property above asking price. Their marketing strategy and negotiation skills are truly exceptional.",
                rating: 5,
              },
              {
                name: "Robert Chen",
                role: "First-time Buyer",
                content: "As a first-time buyer, I was nervous. But they guided me through every step with patience and professionalism.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <Quote className="w-10 h-10 text-secondary/20 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of properties or get in touch with our expert agents today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
