"use client"

import { WavyBackground } from "@/components/ui/wavy-background"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function AboutWelcome() {
    return (
        <section id="about" className="scroll-mt-20">
            <WavyBackground className="max-w-4xl mx-auto pb-40 pt-32">
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl text-white font-bold inter-var">
                        Welcome to iD Studio
                    </h2>
                    <p className="text-base md:text-lg mt-6 text-white font-normal inter-var">
                        Where imagination meets execution. Let’s create something extraordinary.
                    </p>
                </motion.div>

                {/* Animated Down Arrow */}
                <div className="mt-12 flex justify-center animate-bounce">
                    <ArrowDown className="w-8 h-8 text-white" />
                </div>
            </WavyBackground>
        </section>
    )
}
