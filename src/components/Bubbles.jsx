import React from 'react';
import { motion } from 'framer-motion';

export const Bubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div key={i} className="absolute rounded-full bg-[#00A3FF]/20 backdrop-blur-sm border border-[#00A3FF]/30"
        initial={{ y: "120vh", x: Math.random() * 100 + "vw", scale: Math.random() * 0.5 + 0.5, opacity: 0 }}
        animate={{ y: "-20vh", opacity: [0, 1, 0] }}
        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
        style={{ width: Math.random() * 50 + 20 + "px", height: Math.random() * 50 + 20 + "px" }}
      />
    ))}
  </div>
);
