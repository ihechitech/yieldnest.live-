"use client";

import { motion } from "framer-motion";
import EmailForm from "@/components/EmailForm";
import FAQ from "@/components/FAQ";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/20 to-transparent" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200 mb-6"
          >
            YieldNest • Digital Income System 2026
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Most people misunderstand how digital income actually works
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Learn how structured digital income systems are built in 2026.
            Get the free{" "}
            <span className="text-white font-semibold">
              YieldNest Blueprint + 7-Day Starter System
            </span>.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <EmailForm />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm text-gray-400"
          >
            No spam. Just structured learning.
          </motion.p>
        </motion.div>
      </section>

      {/* VALUE CARDS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 -mt-10 grid md:grid-cols-3 gap-6"
      >
        <motion.div
          variants={fadeUp}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
        >
          <h3 className="text-lg font-semibold">📘 Blueprint</h3>
          <p className="text-gray-300 mt-2">
            Understand how digital income systems actually work.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
        >
          <h3 className="text-lg font-semibold">📊 12 Income Models</h3>
          <p className="text-gray-300 mt-2">
            From beginner-friendly to advanced system structures.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
        >
          <h3 className="text-lg font-semibold">🧠 7-Day System</h3>
          <p className="text-gray-300 mt-2">
            Step-by-step breakdown of real income systems.
          </p>
        </motion.div>
      </motion.section>

      {/* PROBLEM SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <h2 className="text-3xl font-bold text-center">
          Why most people struggle online
        </h2>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <p className="text-gray-300 text-lg leading-relaxed">
            Most beginners jump between crypto, trading, side hustles, and apps
            without understanding the system behind income generation.
          </p>

          <p className="mt-6 text-white font-medium text-lg">
            The problem is not effort — it’s lack of structure.
          </p>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <h2 className="text-3xl font-bold text-center">
          How it works
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          {["Enter email", "Get instant access", "Follow 7-day system"].map(
            (item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="text-2xl font-bold">{i + 1}</div>
                <p className="mt-2 text-gray-300">{item}</p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 rounded-2xl p-10 text-center backdrop-blur">

          <h2 className="text-2xl md:text-3xl font-bold">
            Start understanding digital income systems today
          </h2>

          <p className="mt-3 text-gray-300">
            Get the free YieldNest Blueprint instantly.
          </p>

          <div className="mt-8">
            <EmailForm />
          </div>

        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24 pb-20"
      >
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8">
          <FAQ />
        </div>
      </motion.section>

    </main>
  );
}