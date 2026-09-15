import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Boxes, BriefcaseBusiness, CheckCircle2,
  Cloud, Code2, Database, Github, Linkedin, Mail, MapPin, Menu,
  Phone, ShoppingCart, Workflow, X,
} from "lucide-react";
import profileImg from "./assets/profile1.jpg";

const navItems = ["about", "expertise", "experience", "work", "contact"];

const capabilities = [
  { icon: Boxes, title: "Custom ERP systems", text: "Business-specific ERP workflows for inventory, purchasing, pricing, orders, finance, manufacturing, and reporting." },
  { icon: ShoppingCart, title: "Marketplace automation", text: "Amazon SP-API and Noon integrations for product data, bulk pricing, stock synchronization, orders, and status updates." },
  { icon: Workflow, title: "Process automation", text: "Reliable systems that replace repetitive manual work with traceable workflows, alerts, dashboards, and exception handling." },
];

const experience = [
  {
    company: "Paramount Global General Trading LLC",
    role: "Full Stack Developer - Amazon API Integration Specialist",
    period: "May 2026 - Present", location: "Dubai, UAE",
    points: [
      "Own ERP planning and development for purchasing, pricing, inventory, order, and reporting workflows.",
      "Translate operational requirements into prioritized features, integrations, deployments, and production support.",
      "Integrate Amazon and Noon APIs for pricing, inventory synchronization, order processing, and status updates.",
    ],
  },
  {
    company: "We Never Close LLC",
    role: "Full Stack Developer - Amazon API Integration Specialist",
    period: "Nov 2025 - May 2026", location: "Dubai, UAE",
    points: [
      "Planned and delivered an automated ERP solution for marketplace operations, pricing, inventory, and orders.",
      "Led secure integrations, monitoring, exception handling, AWS deployment, and ERP data integrity.",
      "Converted stakeholder needs into dependable business-process improvements and production-ready releases.",
    ],
  },
  {
    company: "Teksalah",
    role: "Software Developer / Software Engineer",
    period: "May 2023 - May 2025", location: "Kochi, India",
    points: [
      "Customized Adempiere manufacturing, finance, and inventory modules using Java and PostgreSQL.",
      "Automated raw-material cost estimation, reducing manual effort by 40%, and improved report generation by 25%.",
      "Led ERP and web customization for a Dubai manufacturing client, from requirements through production support.",
    ],
  },
  {
    company: "PIT Solutions", role: "Associate Software Engineer",
    period: "May 2022 - Apr 2023", location: "Thiruvananthapuram, India",
    points: [
      "Contributed to Agile planning, client reviews, testing, issue resolution, and application enhancements.",
      "Delivered three key features with zero critical bugs and optimized SQL queries for a 15% speed improvement.",
    ],
  },
];

const caseStudies = [
  { number: "01", title: "Marketplace operations ERP", label: "Amazon + Noon", text: "An automated ERP workflow connecting marketplace pricing, inventory, orders, and status updates with internal operations.", stack: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "AWS"] },
  { number: "02", title: "Manufacturing cost automation", label: "40% less manual work", text: "BOM, production estimates, raw-material costing, and reports tailored to the client's Adempiere ERP process.", stack: ["Adempiere", "Java", "PostgreSQL", "JasperReports"] },
  { number: "03", title: "Operational dashboards", label: "25% faster reporting", text: "Optimized data queries and clear management dashboards for faster operational tracking and decision-making.", stack: ["SQL", "JasperReports", "Chart.js", "JavaScript"] },
];

const skillGroups = [
  { title: "Backend", icon: Code2, items: ["Java", "Spring Boot", "REST APIs", "JavaScript"] },
  { title: "ERP & Data", icon: Database, items: ["Custom ERP", "Adempiere", "PostgreSQL", "SQL", "JasperReports"] },
  { title: "Commerce", icon: ShoppingCart, items: ["Amazon SP-API", "Noon APIs", "Pricing", "Inventory", "Orders"] },
  { title: "Cloud & Delivery", icon: Cloud, items: ["AWS EC2", "IAM", "VPC", "Git", "Deployment", "Monitoring"] },
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } };

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Solomon Tomy home"><span className="brand-mark">ST</span><span>Solomon Tomy</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item}`}>{item}</a>)}</nav>
          <a className="nav-cta" href="mailto:solomontomy2446@gmail.com">Let's talk <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="ambient ambient-one" /><div className="ambient ambient-two" />
          <div className="page-width hero-grid">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="hero-copy">
              <div className="availability"><span /> Dubai, UAE · Open to the right opportunity</div>
              <p className="hero-kicker">CUSTOM ERP · MARKETPLACE AUTOMATION · BACKEND ENGINEERING</p>
              <h1>I build systems that make <em>operations run better.</em></h1>
              <p className="hero-lead">I'm Solomon, a software engineer with 4+ years of experience building custom ERP workflows and automation for trading, e-commerce, and manufacturing businesses.</p>
              <div className="hero-actions"><a className="button primary" href="#work">View selected work <ArrowRight size={18} /></a><a className="button secondary" href="mailto:solomontomy2446@gmail.com">Contact me</a></div>
              <div className="social-row"><a href="https://www.linkedin.com/in/solomon-tomy-a4a024210" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/Solomontomy" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-visual">
              <div className="portrait-frame"><div className="portrait-accent" /><img src={profileImg} alt="Solomon Tomy" /><div className="portrait-card"><BriefcaseBusiness size={18} /><div><strong>4+ years</strong><span>Software & ERP delivery</span></div></div></div>
            </motion.div>
          </div>
          <div className="page-width metric-strip"><div><strong>4+</strong><span>Years building business software</span></div><div><strong>2</strong><span>UAE e-commerce companies served</span></div><div><strong>40%</strong><span>Manual effort reduced</span></div><div><strong>25%</strong><span>Faster ERP reporting</span></div></div>
        </section>

        <section id="about" className="section page-width about-section">
          <motion.div {...reveal}><SectionHeading eyebrow="About" title="Developer thinking, business understanding." /></motion.div>
          <motion.div {...reveal} className="about-grid"><p className="about-lead">I turn real operational problems into practical software - from initial workflow mapping to development, deployment, monitoring, and support.</p><div className="about-detail"><p>My experience spans trading, e-commerce, manufacturing, inventory, finance, and reporting. I work closely with stakeholders, understand the process first, and then build the right automation around it.</p><p>I currently focus on custom ERP platforms, Amazon and Noon marketplace integrations, Java backend services, and dependable cloud delivery.</p></div></motion.div>
        </section>

        <section id="expertise" className="section surface-section"><div className="page-width">
          <motion.div {...reveal}><SectionHeading eyebrow="What I build" title="Software designed around your operation." text="Not a one-size-fits-all product. Each solution starts with the workflow your business actually needs." /></motion.div>
          <div className="capability-grid">{capabilities.map((item, index) => { const Icon = item.icon; return <motion.article {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }} className="capability-card" key={item.title}><div className="icon-box"><Icon size={24} /></div><h3>{item.title}</h3><p>{item.text}</p></motion.article>; })}</div>
        </div></section>

        <section id="experience" className="section page-width">
          <motion.div {...reveal}><SectionHeading eyebrow="Experience" title="From code to production ownership." text="Four years of hands-on engineering across India and the UAE, with growing responsibility for complete ERP delivery." /></motion.div>
          <div className="timeline">{experience.map((job, index) => <motion.article {...reveal} className="timeline-item" key={`${job.company}-${job.period}`}><div className="timeline-meta"><span className="job-index">0{experience.length - index}</span><span>{job.period}</span><span><MapPin size={14} /> {job.location}</span></div><div className="timeline-content"><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.points.map((point) => <li key={point}><CheckCircle2 size={17} /><span>{point}</span></li>)}</ul></div></motion.article>)}</div>
        </section>

        <section id="work" className="section surface-section"><div className="page-width">
          <motion.div {...reveal}><SectionHeading eyebrow="Selected work" title="Business problems, solved with software." text="Representative work from commercial projects. Client-sensitive implementation details remain private." /></motion.div>
          <div className="case-grid">{caseStudies.map((project) => <motion.article {...reveal} className="case-card" key={project.number}><div className="case-top"><span>{project.number}</span><span className="case-label">{project.label}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></motion.article>)}</div>
        </div></section>

        <section className="section page-width skills-section">
          <motion.div {...reveal}><SectionHeading eyebrow="Toolkit" title="Technology chosen for reliable delivery." /></motion.div>
          <div className="skill-grid">{skillGroups.map((group) => { const Icon = group.icon; return <motion.div {...reveal} className="skill-group" key={group.title}><div className="skill-title"><Icon size={20} /><h3>{group.title}</h3></div><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>; })}</div>
          <motion.div {...reveal} className="credentials"><div><span>Education</span><strong>Bachelor of Computer Applications</strong><small>Mahatma Gandhi University · 2019-2022</small></div><div><span>Certification</span><strong>Oracle Certified Associate</strong><small>Java SE 8 Programmer I · 2022</small></div></motion.div>
        </section>

        <section id="contact" className="contact-section"><div className="page-width contact-grid">
          <motion.div {...reveal}><span className="eyebrow">Let's work together</span><h2>Need a custom ERP or an automated business system?</h2><p>I'm open to software engineering opportunities and selected ERP or marketplace automation projects in the UAE.</p></motion.div>
          <motion.div {...reveal} className="contact-actions"><a href="mailto:solomontomy2446@gmail.com"><Mail size={20} /><span><small>Email</small>solomontomy2446@gmail.com</span><ArrowUpRight size={18} /></a><a href="tel:+971526548011"><Phone size={20} /><span><small>Phone</small>+971 52 654 8011</span><ArrowUpRight size={18} /></a><a href="https://www.linkedin.com/in/solomon-tomy-a4a024210" target="_blank" rel="noreferrer"><Linkedin size={20} /><span><small>LinkedIn</small>Connect professionally</span><ArrowUpRight size={18} /></a></motion.div>
        </div></section>
      </main>

      <footer><div className="page-width"><span>© {new Date().getFullYear()} Solomon Tomy</span><span>Built with care in Dubai, UAE</span></div></footer>
    </div>
  );
}
