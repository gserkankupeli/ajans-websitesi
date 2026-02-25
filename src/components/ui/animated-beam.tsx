"use client";

import { motion } from "framer-motion";

export function AnimatedBeam() {
    return (
        <div className="absolute inset-x-0 h-full w-full overflow-hidden pointer-events-none rounded-2xl">
            {/* Horizontal Beam 1 */}
            <motion.div
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 top-1/4 opacity-0"
                animate={{
                    x: ["-100%", "200%"],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Horizontal Beam 2 */}
            <motion.div
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-[40%] top-[60%]"
                animate={{
                    x: ["200%", "-100%"],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                }}
            />
            {/* Vertical Beam */}
            <motion.div
                className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent h-1/2 left-1/3"
                animate={{
                    y: ["-100%", "200%"],
                    opacity: [0, 0.6, 0],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                }}
            />
        </div>
    );
}
