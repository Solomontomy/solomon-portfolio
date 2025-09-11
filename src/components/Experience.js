import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // for expand/collapse arrows

// Work experience timeline
const jobs = [
  {
    company: "Tek Salah",
    title: "Software Engineer",
    period: "May 2023 – May 2025 | Kerala, India",
    details: [
      "Customized Adempiere ERP modules including Manufacturing, Finance, and Inventory.",
      "Developed Java-based process classes using PostgreSQL.",
      "Integrated JasperReports for real-time dashboards and printed reports.",
      "Implemented automatic email alerts for business notifications using Java and Spring Boot.",
      "Designed and developed responsive web applications using HTML, CSS, and JavaScript.",
      "Built REST APIs with Spring Boot and integrated them into ERP web modules.",
      "Created dynamic dashboards and reporting tools with JavaScript and Chart.js.",
      "Participated in deployment and handled production-level debugging.",
    ],
    achievements: [
      "Automated raw material cost estimation, reducing manual effort by 40%.",
      "Improved report generation time by 25% through query optimization.",
      "Led ERP and web application customization for Dubai-based manufacturing client.",
    ],
  },
  {
    company: "PIT Solutions",
    title: "Associate Software Engineer",
    period: "May 2022 – April 2023 | Trivandrum, India",
    details: [
      "Supported Java-based application development using Spring MVC.",
      "Worked on bug fixing, unit testing, and feature enhancement tasks.",
      "Developed and maintained web modules using HTML, CSS, JavaScript, and JSP.",
      "Integrated backend APIs with front-end systems for client projects.",
      "Participated in client meetings and sprint reviews in Agile setup.",
    ],
    achievements: [
      "Delivered 3 key features with zero critical bugs.",
      "Optimized SQL reporting queries, improving speed by 15%.",
      "Successfully deployed web application enhancements for European clients.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleJob = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={job.company}
            className="p-4 bg-slate-900/30 rounded-2xl cursor-pointer"
          >
            {/* Header row (job title + company + toggle arrow) */}
            <div
              className="flex items-center justify-between"
              onClick={() => toggleJob(index)}
            >
              <h3 className="text-lg font-semibold">
                {job.title} — {job.company}
              </h3>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-sky-400" />
              ) : (
                <ChevronDown size={20} className="text-sky-400" />
              )}
            </div>
            <div className="text-sm text-slate-400">{job.period}</div>

            {/* Expandable content */}
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-3 overflow-hidden"
              >
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                  {job.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                {job.achievements && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-sky-400">
                      Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                      {job.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
