"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Is this about crypto?",
        answer:
            "It includes crypto concepts, but focuses on broader digital income systems like automation models, yield systems, and online income structures.",
    },
    {
        question: "Do I need experience to understand this?",
        answer:
            "No. The content is designed for complete beginners. Everything is broken down step-by-step in simple language.",
    },
    {
        question: "Is this financial advice?",
        answer:
            "No. This is educational content only. We explain how digital income systems work so you can make informed decisions.",
    },
    {
        question: "What exactly will I receive?",
        answer:
            "You will get the YieldNest Blueprint, a 7-day email course, and a breakdown of 12 digital income models used in 2026.",
    },
    {
        question: "How soon will I get access?",
        answer:
            "Immediately after entering your email. The first email arrives within seconds.",
    },
    {
        question: "Is this suitable for beginners in Nigeria / Africa?",
        answer:
            "Yes. The system is designed globally and works for beginners regardless of location.",
    },
    {
        question: "Will I need to invest money?",
        answer:
            "The guide is educational. Some income systems discussed may require optional capital, but nothing is required to start learning.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => {
                const isOpen = openIndex === i;

                return (
                    <div
                        key={i}
                        className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-all"
                    >
                        {/* QUESTION */}
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-white/5 transition"
                        >
                            <span className="font-medium text-white">
                                {faq.question}
                            </span>

                            <span className="text-gray-400 text-xl">
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>

                        {/* ANSWER */}
                        <div
                            className={`px-5 pb-4 text-gray-300 text-sm leading-relaxed transition-all duration-300 ${isOpen ? "block" : "hidden"
                                }`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}