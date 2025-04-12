"use client"

import { SplashCursor } from "@/components/ui/SplashCursor"
import { SparklesCore } from "@/components/ui/SparklesCore"
import { StarBorder } from "@/components/ui/star-border"


export default function Home() {
    return (
        <main className="scroll-smooth">
            {/* Landing Hero Section */}
            <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <SplashCursor />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
                    <div className="w-full absolute inset-0">
                        <SparklesCore
                            id="idstudio-sparkles"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={100}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                            speed={0.7}
                        />
                    </div>

                    <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 relative z-10">
                        ID Studio
                    </h1>
                    <p className="text-neutral-300 text-lg md:text-xl mt-4 text-center z-10">
                        Empowering ideas through design and code.
                    </p>

                    <div className="mt-12 z-10">
                        <a href="/about">
                            <StarBorder>
                                Enter →
                            </StarBorder>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}