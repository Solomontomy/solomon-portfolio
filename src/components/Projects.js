import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ERP Customization",
    items: [
      "Engineered ERP modules for Manufacturing, Finance & Inventory, tailored to client workflows.",
      "Developed secure REST APIs with Spring Boot, ensuring seamless system integrations.",
      "Delivered real-time dashboards & reports with JasperReports, driving data-backed decisions.",
    ],
  },
  {
    title: "Web Dashboard",
    items: [
      "Designed and built a responsive React-based UI, optimized for performance and usability.",
      "Implemented interactive data visualization using Chart.js for actionable insights.",
      "Integrated scalable backend APIs, improving efficiency and user experience.",
    ],
  },
  {
    title: "Automation Tool",
    items: [
      "Automated raw material cost estimation, cutting manual work by 40%.",
      "Optimized reporting engine, reducing query time by 25% and boosting productivity.",
      "Successfully deployed automation for a Dubai-based client, streamlining operations.",
    ],
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      {/* Three-column layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-slate-900/30 rounded-2xl hover:bg-slate-800/50 transition"
          >
            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              {project.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
