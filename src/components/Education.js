import React from 'react';
import { motion } from 'framer-motion';

// Education section
export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="font-semibold">
        Bachelor of Computer Applications (BCA)
      </div>
      <div className="text-sm">MG University — 2022</div>
    </motion.div>
  );
}
