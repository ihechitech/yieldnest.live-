"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmailForm from "./EmailForm";

export default function ExitPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("yieldnest-exit-popup");

        if (hasSeenPopup) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                setShow(true);
                localStorage.setItem("yieldnest-exit-popup", "true");
            }
        };

        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const close = () => setShow(false);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-w-lg bg-[#0B0F17] border border-white/10 rounded-2xl p-8 text-center relative"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={close}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                        >
                            ✕
                        </button>

                        {/* BADGE */}
                        <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300 mb-4">
                            Before you go…
                        </div>

                        {/* HEADLINE */}
                        <h2 className="text-2xl font-bold text-white">
                            Don’t miss the YieldNest Blueprint
                        </h2>

                        <p className="mt-3 text-gray-300 text-sm">
                            Learn how digital income systems actually work in 2026 — step by step.
                        </p>

                        {/* VALUE POINTS */}
                        <div className="mt-6 text-left space-y-2 text-sm text-gray-300">
                            <p>✓ 12 digital income models explained</p>
                            <p>✓ Beginner-friendly 7-day system</p>
                            <p>✓ Clear breakdown of how income systems work</p>
                        </div>

                        {/* EMAIL FORM */}
                        <div className="mt-6">
                            <EmailForm />
                        </div>

                        <p className="mt-3 text-xs text-gray-500">
                            No spam. Unsubscribe anytime.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}