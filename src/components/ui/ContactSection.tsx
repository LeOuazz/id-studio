"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {StarBorder} from "@/components/ui/star-border";

export function ContactSection() {
    const [status, setStatus] = useState("idle")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("loading")
        // In real use: call an API or use form backend
        setTimeout(() => {
            setStatus("sent")
        }, 1500)
    }

    return (
        <section id="contact" className="bg-black 0 text-white py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    ID Studio. Ai powered creativity.
                </motion.h2>

                <p className="text-lg text-neutral-400 mb-12">
                    Reach out and tell us about your vision.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-white/5 placeholder:text-neutral-500"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="bg-white/5 placeholder:text-neutral-500"
                    />
                    <Textarea
                        name="message"
                        placeholder="Your message"
                        required
                        rows={5}
                        className="bg-white/5 placeholder:text-neutral-500"
                    />
                    <StarBorder
                        type="submit"
                        disabled={status === "loading" || status === "sent"}
                        className="w-full"
                    >
                        {status === "sent" ? "Sent! ✅" : status === "loading" ? "Sending..." : "Send message"}
                    </StarBorder>
                </form>

            </div>
        </section>
    )
}
