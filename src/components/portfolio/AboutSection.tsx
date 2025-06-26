"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Hi! I am Ana Belén Zúñiga, a Frontend Engineer from Costa Rica with over 4 years of experience building 
        web and mobile applications with modern technologies.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        I specialize in crafting intuitive, responsive, and accessible user interfaces using frameworks like React, 
         Angular, Next.js, and Ionic, always with a strong focus on performance and user experience.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m passionate about building digital products that make a difference—collaborating with cross-functional teams, 
          writing clean and maintainable code, and staying curious about design systems, accessibility, and UI/UX best practices.
        </p>
      </div>
    </motion.section>
  );
} 