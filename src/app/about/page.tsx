"use client";

import SectionTitle from "@/components/SectionTitle";
import CountUp from "@/components/CountUp";
import Image from "next/image";
import { Award, Heart, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewport } from "@/lib/animation-utils";

export default function AboutPage() {
    const clients = [
        {
            name: "ABDUL KHALIK",
            phone: "+1 (416) 835-5068",
            image: "https://pbs.twimg.com/profile_images/698591780065792000/jGoNrlQB_400x400.jpg",
            bio: "Trusted partner with extensive experience in real estate investment and property development across North America",
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
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={staggerItem}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.value.includes("+") ? (
                                        <>
                                            <CountUp end={parseInt(stat.value)} />
                                            <span>+</span>
                                        </>
                                    ) : stat.value.includes("/") ? (
                                        stat.value
                                    ) : (
                                        <>
                                            <CountUp end={parseInt(stat.value)} />
                                            <span>+</span>
                                        </>
                                    )}
                                </h3>
                                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                                alt="Our Office"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
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
                        </motion.div>
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

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Shield className="w-8 h-8 text-secondary" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
                            <p className="text-gray-600">
                                We conduct our business with honesty, transparency, and ethical practices.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Heart className="w-8 h-8 text-secondary" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-primary mb-3">Passion</h3>
                            <p className="text-gray-600">
                                We're passionate about real estate and committed to helping our clients succeed.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Award className="w-8 h-8 text-secondary" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                            <p className="text-gray-600">
                                We strive for excellence in every aspect of our service and operations.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Clock className="w-8 h-8 text-secondary" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
                            <p className="text-gray-600">
                                We're here when you need us, providing consistent and dependable service.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Client Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        subtitle="OUR VALUED CLIENTS"
                        title="Trusted by Industry Leaders"
                        center
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Client Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            variants={fadeInUp}
                        >
                            {clients.map((client, index) => (
                                <motion.div
                                    key={index}
                                    className="group"
                                    variants={staggerItem}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                                        <Image
                                            src={client.image}
                                            alt={client.name}
                                            fill
                                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-primary mb-2">{client.name}</h4>
                                    <p className="text-secondary font-medium mb-3 text-lg">{client.phone}</p>
                                    <p className="text-gray-600">{client.bio}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Client Excellence Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h3 className="text-3xl font-bold text-primary mb-6">Building Lasting Partnerships</h3>
                            <p className="text-gray-700 leading-relaxed">
                                At DreamHomes, we take pride in the strong, enduring relationships we build with our valued clients.
                                Our commitment to excellence goes beyond transactions—we're dedicated to understanding your unique
                                vision and turning your real estate dreams into reality.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                With years of expertise in the industry, we've had the privilege of working with exceptional
                                individuals and businesses who trust us with their most important investments. From first-time
                                homebuyers to seasoned investors, each client receives personalized attention and professional
                                guidance tailored to their specific needs.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Our clients are at the heart of everything we do. Their success stories inspire us to continuously
                                raise the bar, deliver exceptional service, and maintain the highest standards of integrity and
                                professionalism in every interaction.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We believe that trust is earned through consistent results, transparent communication, and unwavering
                                dedication to our clients' goals. This philosophy has helped us build a reputation as a trusted
                                partner in real estate across North America.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
