"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import {
  accolades,
  contactInterests,
  credentials,
  education,
  experiences,
  focusAreas,
  marqueeSkills,
  navigation,
  profile,
  projectFilters,
  projects,
  skillGroups,
  stats,
  toolCategories,
  type ProjectFilter,
  type SkillGroup,
} from "@/lib/portfolio";

function SectionTitle({
  id,
  children,
  subtitle,
}: {
  id: string;
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div id={id} className="section-heading">
      <h2>
        {children}
        <span>.</span>
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillTab, setSkillTab] = useState<SkillGroup>("All Skills");
  const [projectTab, setProjectTab] = useState<ProjectFilter>("All Projects");
  const [copied, setCopied] = useState(false);

  const visibleProjects = useMemo(
    () =>
      projectTab === "All Projects"
        ? projects
        : projects.filter((project) => project.filter === projectTab),
    [projectTab],
  );

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${data.get("name")} — ${data.get("interest")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header>
        <div className="container nav-wrap">
          <a className="brand" href="#hero">
            <span className="brand-photo">
              <Image src="/srija-patra-hero.jpeg" alt="Srija Patra" fill sizes="44px" />
            </span>
            <span>
              <b>
                Srija <i />
              </b>
              <small>Digital Marketing & MBA</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="button outline small" href={profile.cv} target="_blank" rel="noopener noreferrer">
              CV
            </a>
            <a className="button primary small" href="#contact">
              Let&apos;s Talk
            </a>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav container" aria-label="Mobile">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="hero" className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">
              Welcome! <Sparkles size={15} />
            </span>
            <h1>
              I&apos;m <em>Srija</em> <span className="wave">👋</span>,
              <br />
              A Digital Marketing
              <br />
              Specialist
            </h1>
            <p>Building brands with search, social, content, and data-led campaigns that convert.</p>
            <blockquote>
              “Srija combines creative storytelling with disciplined campaign execution — from brand building to measurable revenue.”
              <small>Professional highlight</small>
            </blockquote>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Projects <ArrowRight size={18} />
              </a>
              <a className="button outline" href="#contact">
                Hire me
              </a>
            </div>
          </div>

          <div className="portrait-stage">
            <span className="sticker sticker-one">🎯 Campaigns</span>
            <span className="sticker sticker-two">📱 Social Media</span>
            <span className="sticker sticker-three">🛒 Shopify</span>
            <span className="sticker sticker-four">📊 Analytics</span>
            <div className="portrait-frame">
              <Image
                src="/srija-patra-hero.jpeg"
                alt="Srija Patra in professional attire"
                fill
                priority
                sizes="(max-width: 720px) 90vw, 330px"
              />
            </div>
          </div>

          <div className="hero-side">
            <span className="eyebrow dark">MBA @ LPU</span>
            <h3>MBA · Digital Marketing & Operations Management</h3>
            <div className="hero-metric">
              <strong>₹1.4L+</strong>
              <span>Shopify Project Revenue</span>
            </div>
            <div className="mini-note">
              <Target size={21} />
              <span>
                <b>Growth-led execution</b>
                <small>SEO · Ads · Content · Analytics</small>
              </span>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Career highlights">
          <div className="marquee">
            {[...stats, ...stats].map((stat, index) => (
              <div className="stat" key={`${stat.label}-${index}`}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="about">
          <SectionTitle id="about-title">about</SectionTitle>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Call me Srija. I am an MBA candidate at Lovely Professional University, pursuing Digital Marketing and Operations Management with hands-on exposure to SEO, paid media, social media, content strategy, e-commerce and campaign analytics.
              </p>
              <p>
                I founded <b>Sabyashri</b>, a campus beauty brand built around Multani Mitti. From identity and packaging to on-ground promotion and retention, the project generated more than ₹11,000 and gave me end-to-end experience in growing a B2C brand.
              </p>
              <p>
                My internship at Euphoria GenX sharpened my practical execution across Google Ads, GA4, WordPress, SEO content and short-form creative. I enjoy combining insights with storytelling to build marketing that moves people and performance.
              </p>
              <div className="focus-grid">
                {focusAreas.map((area) => (
                  <div className="focus" key={area.title}>
                    <b>{area.title}</b>
                    <span>{area.description}</span>
                  </div>
                ))}
              </div>
              <p className="location">
                <MapPin size={17} /> {profile.location}
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-image">
                <Image src="/srija-patra-alt.jpeg" alt="Srija Patra" fill sizes="(max-width: 900px) 100vw, 420px" />
              </div>
              <div>
                <b>Srija Patra</b>
                <span>MBA @ LPU · Digital Marketing</span>
              </div>
            </div>
          </div>
        </section>

        <div className="skill-marquee" aria-hidden="true">
          <div>
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span key={`${skill}-${index}`}>
                {skill.toUpperCase()} <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section container">
          <SectionTitle id="experience" subtitle="Practical digital execution and community experience that shaped how I work.">
            experience
          </SectionTitle>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-card" key={item.company}>
                <div className="company-logo">{item.initials}</div>
                <div>
                  <span className="period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="company">
                    {item.company} <i>•</i> {item.location}
                  </p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="button outline resume-button" href={profile.cv} target="_blank" rel="noopener noreferrer">
            Resume (PDF) <ExternalLink size={16} />
          </a>
        </section>

        <section className="section container">
          <SectionTitle id="skills" subtitle="Core digital marketing competencies combining structured campaigns with creative storytelling.">
            <em>*</em>skills
          </SectionTitle>
          <div className="tabs" role="tablist" aria-label="Skill groups">
            {(Object.keys(skillGroups) as SkillGroup[]).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={skillTab === tab}
                className={skillTab === tab ? "active" : ""}
                onClick={() => setSkillTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="skill-cloud">
            {skillGroups[skillTab].map((skill) => (
              <span key={skill}>✦ {skill}</span>
            ))}
          </div>
        </section>

        <section className="section dark-section">
          <div className="container">
            <SectionTitle id="tools" subtitle="Platforms and creative suites I use to plan, execute and measure digital growth.">
              tools
            </SectionTitle>
            <div className="tool-categories">
              {toolCategories.map((category) => (
                <div className="tool-category" key={category.title}>
                  <div className="tool-category-title">
                    <h3>{category.title}</h3>
                    <span>{category.tools.length} Platforms</span>
                  </div>
                  <div className="tool-grid">
                    {category.tools.map((tool) => (
                      <article className="tool-card" key={tool.name}>
                        <span className="tool-icon">{tool.initial}</span>
                        <div>
                          <h4>{tool.name}</h4>
                          <b>{tool.role}</b>
                          <p>{tool.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <SectionTitle id="projects" subtitle="Measurable campaigns, brand building and e-commerce work from concept to results.">
            notable Projects
          </SectionTitle>
          <div className="tabs" role="tablist" aria-label="Project categories">
            {projectFilters.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={projectTab === tab}
                className={projectTab === tab ? "active" : ""}
                onClick={() => setProjectTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="projects-list">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.num}>
                <div className="project-content">
                  <div className="project-meta">
                    <b>{project.num}</b>
                    <span>{project.category}</span>
                    <small>{project.period}</small>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Check size={16} /> {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="project-photo">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 520px" />
                  </div>
                </div>
                <div className="metric-grid">
                  {project.metrics.map((metric) => (
                    <div className="metric-box" key={metric.label}>
                      <strong>
                        {metric.value}
                        <i>↑</i>
                      </strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="container">
            <SectionTitle id="education">education</SectionTitle>
            <div className="education-grid">
              <div className="timeline">
                {education.map((item) => (
                  <article key={item.school}>
                    <span>{item.level}</span>
                    <h3>{item.school}</h3>
                    <b>{item.degree}</b>
                    <p>{item.detail}</p>
                    <small>
                      {item.period} <i>•</i> {item.location}
                    </small>
                  </article>
                ))}
              </div>
              <div>
                <h3 className="aside-title">Certifications & Credentials</h3>
                {credentials.map((item) => (
                  <div className="credential" key={item.title}>
                    <span>{item.tag}</span>
                    <b>{item.title}</b>
                    <small>{item.issuer}</small>
                  </div>
                ))}
                <h3 className="aside-title accolades-title">Accolades</h3>
                {accolades.map((item) => (
                  <div className="accolade" key={item.title}>
                    <b>{item.title}</b>
                    <span>{item.organization}</span>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="certificate-grid">
              <div>
                <Image
                  src="/internship-certificate.jpeg"
                  alt="Euphoria GenX internship certificate"
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
              </div>
              <div>
                <Image
                  src="/training-certificate.jpeg"
                  alt="Euphoria GenX training certificate"
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container">
            <p className="contact-kicker">✨ Get in Touch</p>
            <h2>
              Let&apos;s build something
              <br />
              <em>remarkable together.</em>
            </h2>
            <p className="contact-intro">
              Actively exploring Digital Marketing, Social Media and Growth roles — full-time and internships (On-site / Hybrid / Remote).
            </p>
            <div className="contact-grid">
              <div className="contact-details">
                <div className="contact-card">
                  <small>Direct Email</small>
                  <div>
                    <a href={`mailto:${profile.email}`}>
                      <Mail size={18} />
                      {profile.email}
                    </a>
                    <button type="button" onClick={copyEmail}>
                      <Copy size={15} /> {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
                <div className="contact-card">
                  <small>Phone & WhatsApp</small>
                  <a href={profile.phoneHref}>
                    <Phone size={18} />
                    {profile.phone}
                  </a>
                  <a className="orange-link" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp →
                  </a>
                </div>
                <div className="contact-card">
                  <small>Professional Network</small>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    {profile.name} — Connect ↗
                  </a>
                  <p>
                    <b>Current Status:</b> Open to digital marketing, content, social media and growth opportunities.
                  </p>
                </div>
              </div>
              <form className="contact-form" onSubmit={submitMessage}>
                <h3>Send a Direct Message</h3>
                <p>Have an open digital marketing role or project? Drop a note below.</p>
                <label>
                  Your Name *
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Work Email *
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Opportunity / Interest
                  <select name="interest" defaultValue={contactInterests[0]}>
                    {contactInterests.map((interest) => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} />
                </label>
                <button className="button primary" type="submit">
                  Send Message <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div>
            <b>Srija Patra</b>
            <p>Digital Marketing Specialist. MBA candidate at Lovely Professional University.</p>
          </div>
          <div>
            <b>Navigation</b>
            <p>
              <a href="#about">About</a> · <a href="#projects">Projects</a> · <a href="#contact">Contact</a>
            </p>
          </div>
          <div>
            <b>Connect</b>
            <p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
        </div>
        <p className="copyright">© 2026 Srija Patra. All rights reserved. · Built with Next.js & TypeScript</p>
      </footer>
    </>
  );
}
