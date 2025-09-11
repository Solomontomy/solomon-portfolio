import React from "react";
import { motion } from "framer-motion";
import { 
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGithub, FaJira 
} from "react-icons/fa";
import { 
  SiSpringboot, SiPostgresql, SiMysql, SiJaspersoft, SiApachetomcat 
} from "react-icons/si";
import { DiSqllite } from "react-icons/di"; // SQL-like
import { BiData } from "react-icons/bi"; // PL/pgSQL placeholder
// ✅ import your custom logo
import JasperLogo from "../assets/jasper.jpg";  

// Map skills to icons
const skillsList = [
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "SQL", icon: <DiSqllite className="text-blue-400" /> },
  { name: "PL/pgSQL", icon: <BiData className="text-green-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "JasperReports", icon: <img src={JasperLogo} alt="JasperReports" className="w-5 h-5 rounded" /> },
  { name: "Apache Tomcat", icon: <SiApachetomcat className="text-orange-400" /> },
  { name: "Adempiere ERP", icon: <BiData className="text-purple-400" /> }, // placeholder
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
  { name: "pgAdmin", icon: <SiPostgresql className="text-indigo-400" /> }, // using postgres icon
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Jira", icon: <FaJira className="text-blue-500" /> }, // Jira icon comes from react-icons/fa
  { name: "Docker (basic)", icon: <FaDocker className="text-sky-500" /> },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsList.map((s) => (
          <div
            key={s.name}
            className="p-3 bg-slate-900/30 backdrop-blur-md rounded-md flex items-center gap-2"
          >
            {s.icon}
            <span className="text-sm">{s.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
