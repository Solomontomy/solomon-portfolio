import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
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
    role: "ERP Technical Product Owner & Full Stack Development Lead",
    period: "May 2026 - Present", location: "Dubai, UAE",
    points: [
      "Own ERP planning and development for purchasing, pricing, inventory, order, and reporting workflows.",
      "Own architecture, feature prioritization, AWS deployment, and production support; mentor one junior developer through implementation and code review.",
      "Integrate Amazon and Noon APIs with authentication, rate-limit handling, retries, batch processing, and transactional controls.",
    ],
  },
  {
    company: "We Never Close LLC",
    role: "ERP Technical Product Owner & Full Stack Developer",
    period: "Nov 2025 - May 2026", location: "Dubai, UAE",
    points: [
      "As the sole IT professional, owned requirements, architecture, development, and deployment of a custom marketplace ERP.",
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

const caseDetails = [
  { context: "UAE trading businesses · Paramount / We Never Close", problem: "Connect internal pricing, stock, and order workflows with Amazon and Noon marketplace operations.", contribution: "Owned requirements, architecture, full-stack implementation, AWS deployment, and production support. At Paramount, also mentor one junior developer and review implementation work.", engineering: "Authentication and access controls protect integrations. Rate-limit handling, retries, batch processing, and transactional controls support reliable synchronization and data integrity.", result: "Delivered a custom operational platform covering pricing, inventory, and order-status workflows.", flow: ["Pricing, stock & orders", "ERP workflows", "Amazon / Noon APIs"] },
  { context: "Manufacturing · Teksalah", problem: "Manual raw-material costing added repetitive calculation work to manufacturing operations.", contribution: "Developed Java processes and PostgreSQL-backed Adempiere customizations for BOM management, production estimates, and costing.", engineering: "Placed costing automation within existing ERP workflows and integrated JasperReports to make the results available through operational reporting.", result: "Reduced manual costing effort by 40%, as reported in my CV.", flow: ["BOM & material data", "Java costing processes", "ERP estimates & reports"] },
  { context: "ERP reporting · Teksalah", problem: "Slow report generation delayed access to operational information.", contribution: "Optimized SQL queries supporting ERP reports and integrated JasperReports and Chart.js dashboards.", engineering: "Worked on the data queries behind the reports alongside the reporting and web presentation layers.", result: "Improved report-generation performance by 25%, as reported in my CV.", flow: ["PostgreSQL data", "Optimized SQL", "Reports & dashboards"] },
];

const skillGroups = [
  { title: "Frontend", icon: Code2, items: ["JavaScript", "HTML5", "CSS3", "JSP", "Chart.js", "React (this portfolio)"] },
  { title: "Technical ownership", icon: BriefcaseBusiness, items: ["Requirements", "Architecture", "Prioritization", "Code review", "Mentoring"] },
  { title: "Backend", icon: Code2, items: ["Java", "Spring Boot", "Spring MVC", "REST APIs"] },
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
    <MotionConfig reducedMotion="user"><div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Solomon Tomy home"><span className="brand-mark">ST</span><span>Solomon Tomy</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item}`}>{item}</a>)}</nav>
          <a className="nav-cta" href="mailto:solomontomy2446@gmail.com">Let's talk <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); document.querySelector(".menu-button")?.focus(); } }} aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero-section">
          <div className="ambient ambient-one" /><div className="ambient ambient-two" />
          <div className="page-width hero-grid">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="hero-copy">
              <div className="availability"><span /> Dubai, UAE · Open to the right opportunity</div>
              <p className="hero-kicker">JAVA FULL STACK DEVELOPER · ERP TECHNICAL OWNERSHIP</p>
              <h1>Java engineering.<br /><em>Real business impact.</em></h1>
              <p className="hero-lead">I'm Solomon Tomy. I build ERP platforms and marketplace integrations with Java, Spring Boot, and PostgreSQL — owning the work from requirements to production.</p>
              <div className="hero-actions"><a className="button primary" href="#work">View selected work <ArrowRight size={18} /></a><a className="button secondary" href={`${process.env.PUBLIC_URL}/Solomon_Tomy_CV.pdf`} download>Download CV <ArrowUpRight size={18} /></a></div>
              <div className="social-row"><a href="https://www.linkedin.com/in/solomon-tomy-a4a024210" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/Solomontomy" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-visual">
              <div className="portrait-frame"><div className="portrait-accent" /><img src={profileImg} alt="Solomon Tomy" /><div className="portrait-card"><BriefcaseBusiness size={18} /><div><strong>4+ years</strong><span>Software & ERP delivery</span></div></div></div>
            </motion.div>
          </div>
          <div className="page-width metric-strip"><div><strong>4+</strong><span>Years building business software</span></div><div><strong>2</strong><span>UAE e-commerce companies served</span></div><div><strong>40%</strong><span>Less manual costing work · Teksalah</span></div><div><strong>25%</strong><span>Faster report generation · Teksalah</span></div></div>
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
          <motion.div {...reveal}><SectionHeading eyebrow="Experience" title="From code to production ownership." text="4+ years of hands-on engineering across India and the UAE, with growing responsibility for complete ERP delivery." /></motion.div>
          <div className="timeline">{experience.map((job, index) => <motion.article {...reveal} className="timeline-item" key={`${job.company}-${job.period}`}><div className="timeline-meta"><span className="job-index">0{experience.length - index}</span><span>{job.period}</span><span><MapPin size={14} /> {job.location}</span></div><div className="timeline-content"><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.points.map((point) => <li key={point}><CheckCircle2 size={17} /><span>{point}</span></li>)}</ul></div></motion.article>)}</div>
        </section>

        <section id="work" className="section surface-section"><div className="page-width">
          <motion.div {...reveal}><SectionHeading eyebrow="Selected work" title="Business problems, solved with software." text="Representative work from commercial projects. Expand each case study for my contribution, engineering approach, and outcome. Workflow diagrams are simplified explanations; client code and data remain private." /></motion.div>
          <div className="case-grid">{caseStudies.map((project, index) => <motion.article {...reveal} className="case-card" key={project.number}><div className="case-top"><span>{project.number}</span><span className="case-label">{project.label}</span></div><h3>{project.title}</h3><p>{project.text}</p><details className="case-details"><summary>Read case study<span aria-hidden="true"> +</span></summary><div className="case-detail-body"><p className="case-context">{caseDetails[index].context}</p><dl>{[["The problem", "problem"], ["My contribution", "contribution"], ["Engineering approach", "engineering"], ["Outcome", "result"]].map(([label, key]) => <div key={key}><dt>{label}</dt><dd>{caseDetails[index][key]}</dd></div>)}</dl><figure className="workflow"><figcaption>Simplified workflow</figcaption><ol>{caseDetails[index].flow.map((step) => <li key={step}>{step}</li>)}</ol></figure></div></details><div className="tag-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></motion.article>)}</div>
        </div></section>


        <section id="project-gallery" className="section page-width">
          <SectionHeading eyebrow="Interface walkthrough" title="A closer look at the workflows." text="AI-assisted, anonymized recreations of my supplied application screens. All names, records, figures, and product images are fictional. These illustrate interface concepts, not production metrics or screens from the API demo below." />
          <div className="evidence-gallery">{[
            ["partner-catalog", "Catalog management", "Product discovery, stock filters, and pricing in one workspace."],
            ["new-quotation", "Quotation creation", "Customer details, product selection, margins, and totals."],
            ["quotation-records", "Quotation records", "Track quotation status and access related documents."],
            ["order-reconciliation", "Order reconciliation", "Compare marketplace quantities with purchasing progress."],
            ["employee-directory", "Employee directory", "Employee records, roles, and access controls."],
            ["leave-management", "Leave management", "Leave balances and a structured request workflow."]
          ].map(([file,title,caption]) => <figure key={file} className="evidence-card"><a href={`${process.env.PUBLIC_URL}/project-gallery/${file}.png`} target="_blank" rel="noreferrer" aria-label={`Open ${title} illustration full size`}><img loading="lazy" src={`${process.env.PUBLIC_URL}/project-gallery/${file}.png`} alt={`${title}: anonymized interface recreation with fictional sample data`} /></a><figcaption><span className="eyebrow">Fictional demo data</span><h3>{title}</h3><p>{caption}</p><a href={`${process.env.PUBLIC_URL}/project-gallery/${file}.png`} target="_blank" rel="noreferrer">View full-size illustration ↗</a></figcaption></figure>)}</div>
        </section>
        <section id="api-demo" className="section surface-section"><div className="page-width demo-layout">
          <div><SectionHeading eyebrow="Original code sample" title="Inventory & Order API" text="A standalone Java 21 and Spring Boot project with PostgreSQL. Built specifically for this portfolio using fictional products and original code." /><a className="button primary" href="https://github.com/Solomontomy/inventory-order-demo" target="_blank" rel="noreferrer">Explore the source on GitHub <Github size={18} /></a></div>
          <div className="demo-facts"><h3>Engineering you can inspect</h3><ul><li>Transactional, multi-line orders and price snapshots.</li><li>Atomic stock updates to prevent overselling.</li><li>Cancellation that restores stock exactly once.</li><li>Validation, structured errors, and Flyway migrations.</li><li>Eight integration tests against real PostgreSQL.</li></ul><p>Includes setup instructions, Docker Compose, sample requests, and a GitHub Actions test workflow.</p></div>
        </div></section>

        <section className="section page-width skills-section">
          <motion.div {...reveal}><SectionHeading eyebrow="Toolkit" title="Technology chosen for reliable delivery." /></motion.div>
          <div className="skill-grid">{skillGroups.map((group) => { const Icon = group.icon; return <motion.div {...reveal} className="skill-group" key={group.title}><div className="skill-title"><Icon size={20} /><h3>{group.title}</h3></div><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>; })}</div>
          <motion.div {...reveal} className="credentials"><div><span>Education</span><strong>Bachelor of Computer Applications</strong><small>Mahatma Gandhi University · 2019-2022</small></div><div><span>Certification</span><strong>Oracle Certified Associate</strong><small>Java SE 8 Programmer I</small></div></motion.div>
        </section>

        <section id="contact" className="contact-section"><div className="page-width contact-grid">
          <motion.div {...reveal}><span className="eyebrow">Let's work together</span><h2>Let’s build better business software.</h2><p>I'm open to software engineering opportunities and selected ERP or marketplace automation projects in the UAE.</p></motion.div>
          <motion.div {...reveal} className="contact-actions"><a href="mailto:solomontomy2446@gmail.com"><Mail size={20} /><span><small>Email</small>solomontomy2446@gmail.com</span><ArrowUpRight size={18} /></a><a href="tel:+971526548011"><Phone size={20} /><span><small>Phone</small>+971 52 654 8011</span><ArrowUpRight size={18} /></a><a href="https://www.linkedin.com/in/solomon-tomy-a4a024210" target="_blank" rel="noreferrer"><Linkedin size={20} /><span><small>LinkedIn</small>Connect professionally</span><ArrowUpRight size={18} /></a></motion.div>
        </div></section>
      </main>

      <footer><div className="page-width"><span>© {new Date().getFullYear()} Solomon Tomy</span><span>Built with care in Dubai, UAE</span></div></footer>
    </div></MotionConfig>
  );
}
