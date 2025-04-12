"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Hero } from "@/components/ui/hero";
import { ContactSection } from "@/components/ui/ContactSection";

export default function AboutPage() {
    const navItems = [
        { name: "Home", url: "/", icon: Home },
        { name: "About", url: "/about", icon: Briefcase },
        { name: "Portfolio", url: "#portfolio", icon: User },
        { name: "Contact", url: "#contact", icon: FileText },
    ];

    const scrollToExpertise = () => {
        const section = document.getElementById("expertise");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const testimonials = [
        {
            quote:
                "We craft brand identities that resonate and evolve — from bold logos to immersive guidelines that tell your story visually.",
            name: "Branding",
            designation: "Visual identity, logo design, art direction",
            src: "/image.jpeg",
        },
        {
            quote:
                "At iD Studio, we design digital experiences that blend aesthetics with performance — websites, apps, and platforms that move.",
            name: "UI/UX & Web Design",
            designation: "Figma, Webflow, Next.js, Tailwind CSS",
            src: "/image3.png",
        },
        {
            quote:
                "We develop full-stack applications that scale — from MVPs to custom dashboards with beautiful frontends and bulletproof backends.",
            name: "Full-Stack Development",
            designation: "React, Next.js, Firebase, Tailwind, Appwrite",
            src: "/image4.jpeg",
        },
        {
            quote:
                "We build intelligent agents and personalized AI assistants tailored to your workflow, using the latest in LLMs and generative AI.",
            name: "AI Agents",
            designation: "Custom GPTs, workflow automation, LLM integration",
            src: "/image(1).jpeg",
        },
        {
            quote:
                "From scheduling to strategic insights, we help you create personal AI copilots that act with precision and context-awareness.",
            name: "Personal AI Assistant",
            designation: "Copilots, assistants, multi-modal AI UX",
            src: "/image2.jpeg",
        },
    ];

    return (
        <main className="relative scroll-smooth bg-black text-white">
            {/* Welcome Section */}
            <section className="relative z-10 h-screen pb-0">
                <WavyBackground className="max-w-4xl mx-auto pb-40 pt-32">
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1 }}
                        className="text-center"
                    >
                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-7xl text-white font-bold inter-var"
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            Welcome to iD Studio
                        </motion.h2>
                        <motion.p
                            className="text-base md:text-lg mt-6 text-white font-normal inter-var"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            Where imagination meets execution. Let’s create something extraordinary.
                        </motion.p>
                    </motion.div>

                    <div className="mt-12 flex justify-center animate-bounce">
                        <button onClick={scrollToExpertise}>
                            <ArrowDown className="w-8 h-8 text-white" />
                        </button>
                    </div>
                </WavyBackground>
            </section>

            {/* Expertise Section */}
            <section
                id="expertise"
                className="relative z-10 bg-black text-white pt-0 pb-24 px-4 md:px-8 lg:px-12"
            >
                <motion.h3
                    className="text-3xl md:text-5xl font-bold text-center mb-10"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    Our Expertise
                </motion.h3>
                <AnimatedTestimonials testimonials={testimonials} />
            </section>

            {/* Hero CTA Section */}
            <section id="portfolio" className="relative z-10 py-24">
                <Hero
                    title="Discover Le Ouazz's Portfolio"
                    subtitle="Our Lead Dev’s best work, on display. Dive into innovation."
                    actions={[
                        {
                            label: "View Portfolio",
                            href: "https://LeOuazz.xyz",
                            variant: "default",
                        },
                        {
                            label: "Contact Us",
                            href: "#contact",
                            variant: "outline",
                        },
                    ]}
                    gradient={true}
                    blur={true}
                    titleClassName="text-white"
                    subtitleClassName="text-white/70"
                    actionsClassName="mt-6"
                />

            </section>

            {/* Contact Form */}
            <section id="contact" className="relative z-10 bg-black text-white pt-0 pb-32 text-center">
                <ContactSection />
            </section>

            <NavBar items={navItems} />
        </main>
    );
}
