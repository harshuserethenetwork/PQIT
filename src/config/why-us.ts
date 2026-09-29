// ============================================================
// Why Us Page Configuration
// ============================================================

export const whyUsHero = {
  badge: "Why Process IQ Tech",
  headline: "The Difference Between",
  headlineAccent: "Good and Transformational",
  description:
    "In a crowded market of BPM vendors and consultants, Process IQ Tech stands apart through a unique combination of deep domain expertise, proprietary technology, and an unwavering commitment to client outcomes.",
};

export const differentiators = [
  {
    number: "01",
    icon: "Brain",
    title: "Outcome-First Methodology",
    description:
      "Unlike traditional consultancies that charge for effort, we define success metrics upfront and structure every engagement around delivering them. Our outcome-based contracts align our incentives directly with your results.",
    highlight: "Performance-guaranteed engagements",
  },
  {
    number: "02",
    icon: "Layers",
    title: "Proprietary IQ Platform",
    description:
      "Our purpose-built BPM platform — IQ Automate — integrates process design, automation, analytics, and AI in a single environment. This reduces implementation risk, accelerates delivery, and gives clients a unified command center for all their processes.",
    highlight: "3x faster implementation vs. point solutions",
  },
  {
    number: "03",
    icon: "Users",
    title: "Domain-Deep Expertise",
    description:
      "We don't deploy generalist consultants — we deploy teams with deep industry and process domain expertise. Every client engagement is staffed with specialists who've solved the same problem dozens of times before.",
    highlight: "Average 12+ years domain experience per lead",
  },
  {
    number: "04",
    icon: "Globe",
    title: "True Global Delivery",
    description:
      "With delivery centers in Austin, London, Singapore, and Mumbai, we provide 24/7 follow-the-sun support and local expertise. We understand the regulatory, cultural, and operational nuances of the markets you operate in.",
    highlight: "40+ countries served",
  },
  {
    number: "05",
    icon: "Repeat",
    title: "Continuous Optimization",
    description:
      "Our engagement doesn't end at go-live. We deploy process intelligence tools that continuously monitor performance, surface improvement opportunities, and feed recommendations back into your operations automatically.",
    highlight: "Ongoing value creation post-launch",
  },
  {
    number: "06",
    icon: "Shield",
    title: "Enterprise Security & Compliance",
    description:
      "Security is built into our DNA. From zero-trust architecture to automated compliance monitoring, we ensure your most sensitive processes are protected without compromising operational agility.",
    highlight: "Zero breaches in 15 years of operation",
  },
];

export const comparisonTable = {
  headers: ["Capability", "Process IQ Tech", "Traditional SI", "Boutique Consultant", "Offshore BPO"],
  rows: [
    { capability: "End-to-End BPM Services", piqt: true, si: true, boutique: false, bpo: false },
    { capability: "Proprietary Automation Platform", piqt: true, si: false, boutique: false, bpo: false },
    { capability: "AI/ML Cognitive Automation", piqt: true, si: "partial", boutique: false, bpo: false },
    { capability: "Outcome-Based Pricing", piqt: true, si: false, boutique: "partial", bpo: false },
    { capability: "Domain Expert Teams", piqt: true, si: "partial", boutique: true, bpo: false },
    { capability: "24/7 Global Support", piqt: true, si: true, boutique: false, bpo: true },
    { capability: "Process Intelligence & Mining", piqt: true, si: "partial", boutique: false, bpo: false },
    { capability: "Rapid 90-Day Value Delivery", piqt: true, si: false, boutique: "partial", bpo: false },
    { capability: "Change Management Built-In", piqt: true, si: "partial", boutique: "partial", bpo: false },
    { capability: "ROI Guarantee", piqt: true, si: false, boutique: false, bpo: false },
  ],
};

export const clientSuccessStories = [
  {
    company: "Nexora Financial Group",
    industry: "Financial Services",
    challenge: "Manual, paper-heavy accounts payable process causing 14-day invoice cycles and frequent compliance violations.",
    solution: "Deployed intelligent document processing + RPA for end-to-end AP automation integrated with SAP S/4HANA.",
    results: [
      { metric: "Invoice cycle time", before: "14 days", after: "1.8 days" },
      { metric: "Processing cost per invoice", before: "$18.40", after: "$3.20" },
      { metric: "Straight-through processing", before: "22%", after: "91%" },
      { metric: "Compliance score", before: "67%", after: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    company: "GlobalTech Manufacturing",
    industry: "Manufacturing",
    challenge: "Fragmented supply chain workflows across 12 ERP systems causing $47M in annual inventory overruns.",
    solution: "Unified process layer with real-time visibility dashboard and predictive demand planning automation.",
    results: [
      { metric: "Inventory carrying cost", before: "$47M excess", after: "$9M excess" },
      { metric: "Order accuracy", before: "84%", after: "99.1%" },
      { metric: "Supplier lead time", before: "22 days", after: "11 days" },
      { metric: "Annual savings", before: "-", after: "$38M" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

export const partnerBrands = [
  "UiPath", "Automation Anywhere", "Microsoft", "SAP", "Salesforce",
  "ServiceNow", "AWS", "Google Cloud", "Oracle", "IBM", "Blue Prism", "Pegasystems",
];
