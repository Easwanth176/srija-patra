export const profile = {
  name: "Srija Patra",
  email: "srijapatra1996@gmail.com",
  phone: "+91 87685 51792",
  phoneHref: "tel:+918768551792",
  whatsapp: "https://wa.me/918768551792",
  linkedin: "https://www.linkedin.com/in/srija-patra-",
  cv: "/Srija-Patra-CV.pdf",
  location: "Howrah, West Bengal, India",
} as const;

export const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills & Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "7.42", label: "MBA CGPA (LPU)" },
  { value: "₹1.4L+", label: "Shopify Revenue" },
  { value: "₹11k+", label: "Sabyashri Revenue" },
  { value: "5%+", label: "Above Campaign Target" },
  { value: "91.6%", label: "Higher Secondary" },
  { value: "4+", label: "Live Marketing Projects" },
] as const;

export const focusAreas = [
  { title: "Digital Marketing", description: "Search, paid media & social growth" },
  { title: "Brand & E-commerce", description: "Sabyashri · Shopify · retention" },
  { title: "MBA @ LPU", description: "Operations, projects & analytics" },
] as const;

export const experiences = [
  {
    initials: "EG",
    role: "Digital Marketing Intern",
    company: "Euphoria GenX",
    location: "Kolkata",
    period: "Jun 2026 – Jul 2026",
    bullets: [
      "Monitored social media performance and content engagement using platform insights and analytics.",
      "Designed promotional graphics and short-form videos with Canva and CapCut.",
      "Developed SEO-friendly blogs and website content using keyword research and on-page SEO.",
      "Applied Google Ads, GA4 and WordPress to support measurable audience growth.",
    ],
    tags: ["SEO", "Google Ads", "GA4", "Content", "WordPress"],
  },
  {
    initials: "TF",
    role: "Volunteer Teacher",
    company: "Tarunadaya",
    location: "Howrah",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Provided academic support and taught foundational subjects to underprivileged students.",
      "Built communication, empathy and community engagement through volunteer teaching.",
    ],
    tags: ["Community", "Teaching", "Communication"],
  },
] as const;

export const skillGroups = {
  "All Skills": [
    "SEO",
    "SEM",
    "Social Media Management",
    "Content Strategy",
    "Campaign Analytics",
    "Retention Marketing",
    "Google Ads",
    "GA4",
    "Shopify",
    "WordPress",
    "Mailchimp",
    "Canva",
    "CapCut",
    "Adobe Premiere Pro",
    "Leadership",
    "Communication",
  ],
  Marketing: ["SEO", "SEM", "Social Media", "Content Strategy", "Retention Marketing", "Campaign Analytics"],
  "E-commerce & Analytics": ["Shopify", "GA4", "Google Search Console", "Mailchimp", "CRO", "A/B Testing"],
  "Tools & Creative": ["Canva", "CapCut", "VN", "Adobe Premiere Pro", "WordPress", "Google Flow"],
  "Power Skills": ["Leadership", "Communication", "Teamwork", "Decision Making", "Persuasiveness", "Tenacity"],
} as const;

export type SkillGroup = keyof typeof skillGroups;

export const marqueeSkills = [
  ...Object.keys(skillGroups).filter((group) => group !== "All Skills"),
  ...skillGroups["All Skills"],
] as const;

export const toolCategories = [
  {
    title: "Marketing & Growth",
    tools: [
      { initial: "G", name: "Google Ads", role: "Paid Search", description: "Search campaigns for measurable acquisition and reach." },
      { initial: "M", name: "Meta Ads", role: "Social Ads", description: "Audience targeting and creative-led conversion campaigns." },
      { initial: "S", name: "SEO & SEM", role: "Search Growth", description: "Keyword research, on-page SEO and search visibility." },
      { initial: "MC", name: "Mailchimp", role: "Retention", description: "CRM journeys, email communication and customer retention." },
    ],
  },
  {
    title: "Analytics & Web",
    tools: [
      { initial: "GA", name: "Google Analytics 4", role: "Web Analytics", description: "Traffic, engagement and campaign performance analysis." },
      { initial: "GSC", name: "Search Console", role: "Organic Data", description: "Search performance and website visibility monitoring." },
      { initial: "W", name: "WordPress", role: "Web Content", description: "SEO-friendly blogs, pages and website publishing." },
      { initial: "Sh", name: "Shopify", role: "E-commerce", description: "Store creation, optimization and customer journey improvement." },
    ],
  },
  {
    title: "Content & Creative",
    tools: [
      { initial: "C", name: "Canva", role: "Design", description: "Campaign graphics, presentations and social content." },
      { initial: "CC", name: "CapCut", role: "Video", description: "Short-form promotional video editing." },
      { initial: "PR", name: "Premiere Pro", role: "Video Editing", description: "Structured video production and post-processing." },
      { initial: "AI", name: "AI Tools", role: "Productivity", description: "AI-assisted ideation, content and campaign workflows." },
    ],
  },
] as const;

export const projectFilters = ["All Projects", "Digital Marketing", "E-commerce", "Social Impact"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export const projects = [
  {
    num: "01",
    category: "Brand Building",
    filter: "Digital Marketing",
    title: "Sabyashri Beauty Brand",
    summary: "Founded and scaled a campus B2C beauty brand around Multani Mitti, shaping its identity, packaging, positioning and customer experience.",
    period: "Aug – Sep 2025",
    image: "/sabyashri-founder.jpeg",
    metrics: [
      { value: "₹11k+", label: "Brand Revenue" },
      { value: "B2C", label: "Business Model" },
      { value: "100%", label: "Built From Scratch" },
    ],
    highlights: [
      "Developed the brand name, identity, product packaging and positioning",
      "Ran on-ground lifecycle and word-of-mouth campaigns",
      "Built hands-on customer acquisition and retention experience",
    ],
  },
  {
    num: "02",
    category: "E-commerce",
    filter: "E-commerce",
    title: "Website Design & Optimization",
    summary: "Designed, marketed and optimized a Shopify website through search, paid acquisition, CRM and conversion testing.",
    period: "Apr – May 2026",
    image: "/sabyashri-products.jpeg",
    metrics: [
      { value: "₹1.4L+", label: "Revenue" },
      { value: "Shopify", label: "Platform" },
      { value: "A/B", label: "Testing" },
    ],
    highlights: [
      "Applied SEO-friendly content and Google Keyword Planner research",
      "Ran Google Ads, A/B tests and Mailchimp CRM journeys",
      "Used CRO and retention strategies to improve business performance",
    ],
  },
  {
    num: "03",
    category: "Performance",
    filter: "Digital Marketing",
    title: "August Bio Science Affiliate Campaign",
    summary: "Executed affiliate marketing and paid social campaigns that generated qualified leads and exceeded the revenue target.",
    period: "Nov – Dec 2025",
    image: "/presentation.jpeg",
    metrics: [
      { value: "5%+", label: "Above Target" },
      { value: "Meta", label: "Paid Media" },
      { value: "Trello", label: "Planning" },
    ],
    highlights: [
      "Promoted products through performance-focused digital channels",
      "Used Meta Ads to improve conversion opportunities",
      "Planned campaign content and execution through Trello",
    ],
  },
  {
    num: "04",
    category: "Social Impact",
    filter: "Social Impact",
    title: "NGO Fundraising Campaign",
    summary: "Supported Seva Satkar Foundation with cause-led social content, fundraising awareness and donor engagement.",
    period: "Jun – Jul 2026",
    image: "/srija-patra-alt.jpeg",
    metrics: [
      { value: "NGO", label: "Sector" },
      { value: "Social", label: "Channels" },
      { value: "Donor", label: "Engagement" },
    ],
    highlights: [
      "Promoted fundraising campaigns across social media platforms",
      "Created campaign messaging for cause-driven storytelling",
      "Strengthened negotiation and stakeholder communication",
    ],
  },
] as const;

export const education = [
  {
    level: "Master’s Degree",
    school: "Lovely Professional University",
    degree: "MBA — Digital Marketing & Operations Management",
    detail: "CGPA: 7.42",
    period: "Aug 2025 – Present",
    location: "Phagwara, Punjab",
  },
  {
    level: "Bachelor’s Degree",
    school: "Vidyasagar College, University of Calcutta",
    degree: "BA — English Literature & History (Hons.)",
    detail: "Percentage: 61.07%",
    period: "Jul 2018 – Aug 2021",
    location: "Kolkata, West Bengal",
  },
  {
    level: "Schooling",
    school: "Udaynarayan Pur SC Institution",
    degree: "Higher Secondary",
    detail: "Percentage: 91.60%",
    period: "Jun 2017 – Jul 2018",
    location: "Howrah, West Bengal",
  },
] as const;

export const credentials = [
  { tag: "Internship · Aug 2026", title: "AI in Digital Marketing Project", issuer: "Euphoria GenX" },
  { tag: "Training · Aug 2026", title: "Digital Marketing & Operations", issuer: "Euphoria GenX" },
  { tag: "Fine Arts · May 2020", title: "Senior Diploma in Fine Arts", issuer: "Sarbbavharatiya Sangeet O Sanskriti Parishad" },
  { tag: "Office · Dec 2018", title: "Diploma in Office Management", issuer: "WEBEL Informatics Limited" },
] as const;

export const accolades = [
  {
    title: "Kanyashree Award 2019",
    organization: "West Bengal Government",
    description: "Recognized for consistently maintaining strong academic grades.",
  },
  {
    title: "Akashvani Kolkata — Yuvavani",
    organization: "All India Radio · Mar 2021",
    description: "Invited as a special guest and storyteller after winning a creative-writing competition.",
  },
] as const;

export const contactInterests = [
  "Full-Time Digital Marketing Role",
  "Social Media & Content Role",
  "Internship / Trainee",
  "E-commerce & Brand Project",
  "Other Collaboration",
] as const;
