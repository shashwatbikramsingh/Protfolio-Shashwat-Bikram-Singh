export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  status?: string
  featured: boolean
  summary: string
  description: string
  problemStatement: string
  solution: string
  workflow: {
    step: string
    title: string
    details: string
    tools: string[]
  }[]
  scientificCalculations?: string[]
  myContribution?: string
  springerPublication?: {
    status: string
    title: string
    author: string
    focus: string
  }
  techStack: string[]
  metrics: {
    label: string
    value: string
  }[]
  deliverables: string[]
  liveUrl?: string
  githubUrl?: string
  accentColor: string
}

export const PROJECTS: Project[] = [
  // 1. HackaMate (Main Flagship)
  {
    id: "hackamate",
    title: "HackaMate",
    tagline: "Distributed developer matchmaking and hackathon orchestration platform",
    category: "Full-Stack & Systems",
    status: "Flagship Production",
    featured: true,
    summary:
      "A platform engineered to help student builders discover hackathons, connect with complementary developers across frontend, backend, and data/AI domains, and form balanced teams.",
    description:
      "HackaMate is a high-concurrency developer matchmaking and sprint platform designed for university and national hackathons. It eliminates the early-stage friction of hackathon team formation by matching builders via complementary skill-graph alignment, providing real-time team discovery, user profiling, and project sprint collaboration.",
    problemStatement:
      "Hackathon participants routinely lose critical early hours attempting to form balanced squads across frontend, backend, and machine learning domains, while organizers lack real-time visibility into team formation and skill shortages.",
    solution:
      "Built a high-velocity matchmaking workspace featuring skill-matrix compatibility scoring, hackathon discovery filters, instant team invitations, and responsive real-time UI powered by React, TypeScript, and Tailwind CSS.",
    workflow: [
      {
        step: "01",
        title: "Developer Profile & Skill Graph Ingestion",
        details:
          "Captures candidate tech stacks, GitHub languages, hackathon preferences, and self-assessed proficiencies across frontend, backend, and data engineering.",
        tools: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        step: "02",
        title: "Compatibility Scoring & Matchmaking Logic",
        details:
          "Computes complementary skill compatibility between open team vacancies and individual builder profiles to recommend optimal squad configurations.",
        tools: ["Matching Algorithm", "Node.js", "Express"],
      },
      {
        step: "03",
        title: "Hackathon Discovery & Squad Locking",
        details:
          "Enables participants to explore upcoming hackathons, filter by theme or prize pool, broadcast open roles, and send instant invitations.",
        tools: ["Framer Motion", "Tailwind UI", "REST APIs"],
      },
      {
        step: "04",
        title: "Real-Time Sprint & Collaboration UI",
        details:
          "Provides a unified dashboard for accepted team members to coordinate project deliverables, define task roadmaps, and monitor submission milestones.",
        tools: ["WebSockets / SSE", "State Management", "Responsive UI"],
      },
    ],
    scientificCalculations: [
      "Multi-attribute compatibility scoring weighting domain complementarity",
      "Dynamic skill-balance matrix across frontend, backend, and AI roles",
      "Low-latency indexed search across candidate developer profiles",
      "Real-time squad lock state transitions with optimistic UI updates",
    ],
    myContribution:
      "Spearheaded the frontend architecture in React and TypeScript, designed the responsive user interface and matchmaking workflows, and implemented client-side state management and hackathon discovery filters.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "REST APIs",
    ],
    metrics: [
      { label: "Query Latency", value: "<45ms" },
      { label: "Skill Categories", value: "6+ Domains" },
      { label: "Squad Balance", value: "Full Stack" },
      { label: "Platform Status", value: "Production MVP" },
    ],
    deliverables: [
      "Automated team matching and recommendation workflow",
      "Comprehensive hackathon discovery index",
      "User profile customization with skill badges",
      "Real-time squad invitation and status interface",
      "Fully responsive mobile and desktop layout",
    ],
    liveUrl: "https://github.com/shashwatbikramsingh",
    githubUrl: "https://github.com/shashwatbikramsingh",
    accentColor: "#B87333",
  },

  // 2. MEDEQUIP (Full Stack Medical Supplies Platform)
  {
    id: "medequip",
    title: "MEDEQUIP",
    tagline: "Enterprise medical equipment procurement, cart management & checkout platform",
    category: "Full-Stack Web Application",
    status: "Completed",
    featured: true,
    summary:
      "An end-to-end e-commerce platform for medical supplies featuring dual consumer and administrative workflows, shopping cart state management, checkout, and integrated Stripe payment processing.",
    description:
      "MEDEQUIP provides healthcare clinics, hospitals, and individual practitioners with a verified procurement platform. Engineered with a React frontend and a robust Java Spring Boot backend backed by MySQL, the system enforces transactional consistency for inventory allocation, order dispatch, and payment validation.",
    problemStatement:
      "Medical clinics and healthcare providers frequently experience supply chain bottlenecks and order discrepancies due to fragmented procurement channels lacking live inventory verification and transparent transaction records.",
    solution:
      "Architected a full-stack platform uniting a clean React client with a Spring Boot REST API, relational MySQL database schema, role-based admin controls, and Stripe payment integration.",
    workflow: [
      {
        step: "01",
        title: "Product Catalog & Search Indexing",
        details:
          "Structured relational schemas for medical devices, certification documentation, specifications, and dynamic category filtering.",
        tools: ["MySQL", "Spring Data JPA", "Hibernate"],
      },
      {
        step: "02",
        title: "Cart Management & Atomic Inventory Reservation",
        details:
          "Ensures accurate stock decrementing during active checkout sessions, preventing inventory overselling across concurrent buyers.",
        tools: ["Java Spring Boot", "ACID Transactions", "REST"],
      },
      {
        step: "03",
        title: "Secure Payment Gateway Processing",
        details:
          "Integrated Stripe API webhooks to verify payment signatures and dispatch automated order confirmation tokens.",
        tools: ["Stripe API", "Webhooks", "JSON Web Tokens"],
      },
      {
        step: "04",
        title: "Admin Dashboard & Order Fulfillment",
        details:
          "Delivers back-office tools for medical equipment inventory updates, order status dispatch, and sales telemetry.",
        tools: ["React", "Tailwind CSS", "Spring Security"],
      },
    ],
    scientificCalculations: [
      "ACID transactional consistency for inventory decrements during payment locks",
      "Cryptographic webhook signature verification for payment fulfillment",
      "Normalized 3NF relational database schema across users, orders, and products",
    ],
    myContribution:
      "Architected the full-stack system, developing the React user interface, Spring Boot REST endpoints, MySQL entity relationships, and Stripe checkout workflow.",
    techStack: [
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
      "Stripe",
      "Tailwind CSS",
      "REST APIs",
    ],
    metrics: [
      { label: "Architecture", value: "Full-Stack" },
      { label: "Backend", value: "Spring Boot" },
      { label: "Database", value: "MySQL 3NF" },
      { label: "Payment", value: "Stripe Verified" },
    ],
    deliverables: [
      "Responsive medical supplies storefront",
      "Comprehensive shopping cart and checkout pipeline",
      "Role-based administrative management portal",
      "Stripe webhook payment verification handler",
      "Relational MySQL schema migrations",
    ],
    liveUrl: "https://github.com/shashwatbikramsingh",
    githubUrl: "https://github.com/shashwatbikramsingh",
    accentColor: "#2563EB",
  },

  // 3. PCA Classification Research (Empirical ML Study)
  {
    id: "pca-classification-research",
    title: "PCA Classification Research",
    tagline: "Empirical evaluation of supervised ML classifiers under PCA dimensionality reduction",
    category: "Empirical ML Research",
    status: "Research Submitted to Springer",
    featured: true,
    summary:
      "Quantitative benchmark and reproducible Python pipeline evaluating supervised classification models across Principal Component Analysis (PCA) eigen-subspaces.",
    description:
      "High-dimensional feature spaces introduce severe multicollinearity, redundant feature noise, and computational overhead. This research formulates standardized Z-score scaling and covariance matrix singular value decomposition pipelines, analyzing classifier stability across variance thresholds (75%, 85%, 95%, 99%).",
    problemStatement:
      "High-dimensional datasets inflate inference latency and risk overfitting in production ML pipelines. Practitioners often apply PCA arbitrarily without empirical benchmarks on the exact accuracy-compression tradeoff across distinct classifier families.",
    solution:
      "Built a reproducible empirical benchmark measuring F1-score, accuracy, training time, and inference compute across SVM, Random Forest, Logistic Regression, and k-NN at incremental PCA explained variance ratios.",
    workflow: [
      {
        step: "01",
        title: "Standardization & Data Preprocessing",
        details:
          "Formulated Z-score normalization ensuring zero-mean unit-variance scaling across heterogeneous numerical feature distributions.",
        tools: ["Python", "NumPy", "Pandas"],
      },
      {
        step: "02",
        title: "Covariance Matrix Eigen-Decomposition",
        details:
          "Constructed singular value decomposition (SVD) projection matrices to extract principal component vectors and scree plot variance curves.",
        tools: ["Scikit-Learn", "PCA", "Linear Algebra"],
      },
      {
        step: "03",
        title: "Multi-Classifier Ensemble Benchmarking",
        details:
          "Trained and evaluated SVM, Random Forest, Logistic Regression, and k-NN models across four variance retention tiers (75%, 85%, 95%, 99%).",
        tools: ["Scikit-Learn", "Cross-Validation", "F1 Metrics"],
      },
      {
        step: "04",
        title: "Empirical Analysis & Statistical Synthesis",
        details:
          "Synthesized quantitative benchmarks demonstrating a 38.4% compute reduction with <1.1% F1-score variance at 95% explained variance ratio.",
        tools: ["Matplotlib", "Seaborn", "Springer Manuscript"],
      },
    ],
    scientificCalculations: [
      "Z-score standard normalization: z = (x - mu) / sigma",
      "Sample covariance matrix Sigma = (1 / n) * X^T * X",
      "Eigenvalue-eigenvector decomposition: Sigma * v_i = lambda_i * v_i",
      "Explained variance ratio: EVR_k = lambda_k / sum(lambda_j)",
      "Orthogonal subspace projection into top-k principal component axes",
    ],
    myContribution:
      "Co-authored the empirical study alongside Siddhant Dixit and Ashutosh Kumar Jha. Contributed to pipeline formulation, model evaluation runs, variance tradeoff analysis, and manuscript preparation.",
    springerPublication: {
      status: "Submitted to Springer",
      title:
        "Supervised Classification Fidelity and Computational Bounds across PCA Eigen-Subspaces",
      author: "Shashwat Bikram Singh, Siddhant Dixit, Ashutosh Kumar Jha",
      focus: "Applied Machine Learning, Dimensionality Reduction & Pattern Recognition",
    },
    techStack: [
      "Python",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Statistical ML",
      "PCA",
    ],
    metrics: [
      { label: "Compute Reduction", value: "38.4%" },
      { label: "F1 Score Variance", value: "<1.1%" },
      { label: "Variance Retained", value: "95% Ratio" },
      { label: "Classifiers Tested", value: "4 Architectures" },
    ],
    deliverables: [
      "Modular Python benchmark evaluation suite",
      "Automated PCA variance retention plots and scree curves",
      "Cross-validated accuracy and F1 stability telemetry",
      "Research paper manuscript submitted to Springer",
    ],
    liveUrl: "https://github.com/shashwatbikramsingh",
    githubUrl: "https://github.com/shashwatbikramsingh",
    accentColor: "#8C482A",
  },

  // 4. Ghumau (Travel Exploration Platform)
  {
    id: "ghumau",
    title: "Ghumau",
    tagline: "Interactive travel and destination exploration platform showcasing Himalayan landscapes",
    category: "Frontend & Web Design",
    status: "Completed",
    featured: true,
    summary:
      "A modern travel exploration web platform designed to present destination itineraries, scenic visual storytelling, and rich interactive layouts for explorers.",
    description:
      "Ghumau offers an immersive digital gateway for travel enthusiasts exploring Nepal and Himalayan destinations. Engineered with Next.js and Tailwind CSS, the platform delivers fluid scroll transitions, curated route guides, and interactive visual showcases.",
    problemStatement:
      "Travel discovery portals are often cluttered with advertisements and rigid layouts, lacking the visual elegance, performance, and narrative depth needed to inspire adventure planning.",
    solution:
      "Built a high-performance Next.js web application utilizing Tailwind CSS and Framer Motion for responsive visual discovery, rich itinerary presentation, and seamless device adaptation.",
    workflow: [
      {
        step: "01",
        title: "Visual Architecture & Design Language",
        details:
          "Formulated clean typography, warm natural earth tones, and responsive media containers tailored for travel imagery.",
        tools: ["Figma", "Tailwind CSS", "Next.js"],
      },
      {
        step: "02",
        title: "Interactive Itinerary Navigation",
        details:
          "Developed categorized regional exploration tracks highlighting cultural heritage, trekking trails, and elevation profiles.",
        tools: ["React", "TypeScript", "Next.js Router"],
      },
      {
        step: "03",
        title: "Micro-Interactions & Fluid Motion",
        details:
          "Integrated subtle scroll-triggered reveals and interactive cards to create an engaging browsing journey.",
        tools: ["Framer Motion", "CSS Keyframes", "Canvas"],
      },
    ],
    scientificCalculations: [
      "Image optimization with responsive srcset and WebP compression",
      "Sub-millisecond route transitions using Next.js prefetching",
      "Fluid typography scaling across mobile, tablet, and widescreen viewports",
    ],
    myContribution:
      "Designed and developed the entire application from concept to deployment, focusing on responsive layout architecture, typography hierarchy, and visual performance.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Performance", value: "High FPS" },
      { label: "Responsive", value: "100% Mobile Ready" },
      { label: "Visual Tone", value: "Editorial Aesthetic" },
    ],
    deliverables: [
      "Complete destination showcase platform",
      "Curated trekking itinerary modules",
      "Optimized multi-viewport responsive design",
      "Fluid interactive card animations",
    ],
    liveUrl: "https://github.com/shashwatbikramsingh",
    githubUrl: "https://github.com/shashwatbikramsingh",
    accentColor: "#10B981",
  },

  // 5. AlertNet (Disaster Preparedness Hackathon Platform)
  {
    id: "alertnet",
    title: "AlertNet",
    tagline: "Disaster preparedness and real-time civic emergency coordination interface",
    category: "Hackathon & Data",
    status: "Hackathon Prototype",
    featured: true,
    summary:
      "A disaster preparedness platform UI engineered during a hackathon sprint to enhance situational awareness, emergency broadcast readability, and civic response coordination.",
    description:
      "AlertNet was designed during an engineering hackathon to address the chaotic communication environment following localized climate and environmental disasters. The platform organizes critical emergency protocols, helpline directories, real-time alert streams, and evacuation zone maps into a high-contrast, zero-confusion dashboard.",
    problemStatement:
      "During critical disaster scenarios, citizens face informational overload, confusing government web portals, and unverified rumors across social media, preventing timely emergency action.",
    solution:
      "Prototyped a clean, high-contrast emergency UI with immediate incident categorization, priority SOS action cards, and localized helpline discovery.",
    workflow: [
      {
        step: "01",
        title: "High-Stress Interface Architecture",
        details:
          "Designed high-contrast, accessible layouts prioritizing crucial safety advisories and emergency contact numbers at first glance.",
        tools: ["React", "Tailwind CSS", "Accessibility / WCAG"],
      },
      {
        step: "02",
        title: "Incident Categorization & Alert Priority",
        details:
          "Classified emergency data feeds by severity level (Critical, Warning, Advisory) with immediate visual color-coding.",
        tools: ["JavaScript", "UI Design System"],
      },
      {
        step: "03",
        title: "Civic Resource & Evacuation Discovery",
        details:
          "Provided rapid-lookup directories for medical centers, evacuation shelters, and community relief checkpoints.",
        tools: ["Geolocation API", "Interactive Cards"],
      },
    ],
    scientificCalculations: [
      "High-contrast color ratios exceeding WCAG AAA standards for low-visibility readability",
      "Lightweight bundle footprint under 50KB for rapid loading on compromised mobile networks",
    ],
    myContribution:
      "Engineered the front-end user experience, emergency component library, and alert card architecture under strict hackathon sprint time constraints.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Geolocation APIs",
      "UI/UX Design",
    ],
    metrics: [
      { label: "Domain", value: "Civic Tech" },
      { label: "Event", value: "Hackathon Sprint" },
      { label: "Readability", value: "High Contrast" },
      { label: "Load Speed", value: "Ultra Lightweight" },
    ],
    deliverables: [
      "Interactive emergency response dashboard",
      "Priority-tiered alert broadcast feed",
      "Localized emergency helpline directory",
      "Rapid evacuation resource finder",
    ],
    liveUrl: "https://github.com/shashwatbikramsingh",
    githubUrl: "https://github.com/shashwatbikramsingh",
    accentColor: "#DC2626",
  },
]
