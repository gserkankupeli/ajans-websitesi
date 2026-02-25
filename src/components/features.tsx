"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart, Globe, Layers, MousePointer2 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed. Your website will load in milliseconds, boosting SEO and user retention.",
    },
    {
        icon: Shield,
        title: "Secure by Default",
        description: "Enterprise-grade security features built-in to protect your data and your users.",
    },
    {
        icon: BarChart,
        title: "Analytics Included",
        description: "Gain insights into your traffic with our privacy-friendly analytics dashboard.",
    },
    {
        icon: Globe,
        title: "Global CDN",
        description: "Serve your content from the edge. We have servers in over 200 cities worldwide.",
    },
    {
        icon: Layers,
        title: "Scalable Infrastructure",
        description: "Start small and grow to millions of users without changing a single line of code.",
    },
    {
        icon: MousePointer2,
        title: "Intuitive Interface",
        description: "Designed for the best user experience. Easy to navigate and delightful to use.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Everything you need to <br />
                        <span className="text-blue-600">scale your business</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600"
                    >
                        We've thought of everything so you can focus on building your product.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
