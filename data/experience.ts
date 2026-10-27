export interface CertificationItem {
  id: string
  title: string
  issuer: string
  credentialId?: string
  verificationUrl?: string
  category: string
  skills: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period?: string
  type: string
  summary: string
  achievements: string[]
  skills: string[]
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hackamate-creator",
    role: "Co-Creator & Frontend Architect",
    company: "HackaMate (Hackathon & Team Discovery Platform)",
    location: "Bengaluru, India",
    period: "2025 — 2026",
    type: "Flagship Production",
    summary:
      "Engineered HackaMate: a developer matchmaking and hackathon discovery platform helping builders form balanced squads across complementary skill sets.",
    achievements: [
      "Built responsive React, TypeScript, and Tailwind CSS interfaces for multi-attribute developer filtering and squad requests.",
      "Designed clean user profiles, skill-matrix visualization, and interactive hackathon browsing directory.",
      "Implemented real-time messaging UI layouts and project milestone tracking components.",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Team Matchmaking"],
  },
  {
    id: "ml-researcher",
    role: "Machine Learning & PCA Research Co-Author",
    company: "Department of Computer Science & Engineering",
    location: "Bengaluru, India",
    period: "2025 — Present",
    type: "Empirical ML Research",
    summary:
      "Co-authored empirical research submitted to Springer analyzing supervised classification fidelity and variance stability across Principal Component Analysis (PCA) eigen-subspaces alongside team collaborators.",
    achievements: [
      "Formulated standardized Z-score scaling and covariance matrix singular value decomposition pipelines in Python.",
      "Demonstrated a 38.4% compute reduction with <1.1% F1-score variance at 95% explained variance ratio across SVM, Random Forest, Logistic Regression, and k-NN.",
      "Collaborated on empirical benchmark experiments, statistical evaluations, and research manuscript documentation.",
    ],
    skills: ["Python", "Scikit-Learn", "PCA Eigen Analysis", "Statistical ML", "NumPy", "Matplotlib"],
  },
  {
    id: "hackathon-runner-up",
    role: "Hackathon Runner-Up & Lead Builder",
    company: "Dayananda Sagar University Hackathon",
    location: "Bengaluru, India",
    period: "2025",
    type: "Competitive Hackathon",
    summary:
      "Won Runner-Up honors among top engineering collegiate teams in a 36-hour sprint, architecting rapid responsive web prototypes, user workflows, and live evaluation demonstrations.",
    achievements: [
      "Spearheaded fast-paced product conceptualization and end-to-end full-stack frontend development under strict sprint constraints.",
      "Designed modern, accessible UI components with fluid interactions and data synchronization.",
      "Presented product telemetry, architectural design decisions, and system problem-solving to the expert jury panel.",
    ],
    skills: ["Rapid Prototyping", "React", "Tailwind CSS", "Team Leadership", "UI/UX Architecture"],
  },
  {
    id: "jain-cse-builder",
    role: "Data Systems & Full-Stack Builder",
    company: "Jain University Engineering Cohort",
    location: "Bengaluru, India",
    period: "2025 — Present",
    type: "Academic Engineering",
    summary:
      "Developing hands-on data engineering pipelines, relational databases, Java Spring Boot backends, and full-stack solutions including MEDEQUIP, Ghumau, and AlertNet.",
    achievements: [
      "Engineered MEDEQUIP: full-stack medical supply e-commerce platform with React, Java Spring Boot, MySQL, and Stripe integration.",
      "Constructed Ghumau: immersive travel exploration platform using Next.js, Tailwind CSS, and Framer Motion.",
      "Prototyped AlertNet: disaster preparedness emergency coordination interface designed for high-stress civic response.",
    ],
    skills: ["Java", "Spring Boot", "MySQL", "Next.js", "Python", "Data Engineering", "Git & GitHub"],
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "hackathon-dsu-award",
    title: "Hackathon Runner-Up Award",
    issuer: "Dayananda Sagar University",
    category: "Hackathon & Innovation",
    skills: ["Rapid Prototyping", "Team Engineering", "Product Strategy"],
  },
  {
    id: "jain-btech-cse",
    title: "Bachelor of Technology — Computer Science & Engineering",
    issuer: "Jain (Deemed-to-be University)",
    credentialId: "2025-2029 Cohort",
    category: "Academic Degree",
    skills: ["Data Engineering", "Python", "Algorithms", "Database Systems"],
  },
]

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Jain (Deemed-to-be University), Bengaluru",
    period: "2025 — 2029",
    details: "Focusing on Data Engineering, Python Systems, Machine Learning Foundations, Data Structures & Algorithms, and Distributed Web Platforms.",
  },
]

export const SKILL_CATEGORIES = [
  {
    name: "Data Engineering & Analytics",
    skills: ["Python", "Pandas", "NumPy", "SQL Databases", "ETL Pipelines", "Data Modeling", "Matplotlib"],
  },
  {
    name: "Machine Learning & Research",
    skills: ["Scikit-Learn", "PCA Dimensionality Reduction", "Statistical ML", "Supervised Classifiers", "Model Benchmarking"],
  },
  {
    name: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design", "Framer Motion"],
  },
  {
    name: "Backend & Architecture",
    skills: ["Node.js", "Express", "Java", "Spring Boot", "MySQL", "REST APIs", "Stripe Payments"],
  },
  {
    name: "Foundations & Tools",
    skills: ["C/C++", "Java DSA", "Git & GitHub", "Docker", "Postman", "Linux CLI", "Vite"],
  },
]
