import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { Award, Heart, Shield, Clock } from "lucide-react";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Senior Agent",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
            bio: "15+ years of experience in luxury real estate",
        },
        {
            name: "Michael Chen",
            role: "Property Specialist",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            bio: "Expert in commercial and residential properties",
        },
        {
            name: "Emily Davis",
            role: "Client Relations",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            bio: "Dedicated to exceptional customer service",
        },
        {
            name: "David Wilson",
            role: "Investment Advisor",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            bio: "Specializing in investment opportunities",
        },
    ];

    const stats = [
        { value: "500+", label: "Properties Sold" },
        { value: "10+", label: "Years Experience" },
        { value: "4.9/5", label: "Client Rating" },
        { value: "300+", label: "Happy Clients" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        subtitle="ABOUT US"
                        title="Your Trusted Real Estate Partner"
                        center
                    />
                    <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        At DreamHomes, we believe that finding the perfect property should be an exciting journey, not a stressful process.
                        With over a decade of experience in the real estate industry, our team of dedicated professionals is committed to
                        helping you find a place you can truly call home.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                                alt="Our Office"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Founded in 2013, DreamHomes has grown from a small local agency to one of the most trusted
                                names in real estate. Our journey began with a simple mission: to revolutionize the way people
                                buy, sell, and rent properties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We understand that every client is unique, with distinct needs and dreams. That's why we take
                                a personalized approach to every transaction, ensuring that you receive the attention and expertise
                                you deserve.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Today, we're proud to have helped hundreds of families and individuals find their perfect homes,
                                and we continue to set the standard for excellence in the real estate industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        subtitle="OUR VALUES"
                        title="What Makes Us Different"
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
                            <p className="text-gray-600">
                                We conduct our business with honesty, transparency, and ethical practices.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Passion</h3>
                            <p className="text-gray-600">
                                We're passionate about real estate and committed to helping our clients succeed.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                            <p className="text-gray-600">
                                We strive for excellence in every aspect of our service and operations.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
                            <p className="text-gray-600">
                                We're here when you need us, providing consistent and dependable service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        subtitle="MEET THE TEAM"
                        title="Our Expert Agents"
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group">
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                                <p className="text-secondary font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
