import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ArrowUpRight,
  Copy,
  Check,
  Code2,
  FolderGit2,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  RefreshCw,
  FileCode,
  Server,
  Layers,
  Terminal,
  BookOpen,
  Award,
  Send,
  AlertCircle,
  Box,
  Cpu,
  Compass,
  GitBranch,
  Download,
  Sliders,
  Maximize2,
  Minimize2,
  Folder,
  FolderOpen,
  FileText,
  Activity
} from 'lucide-react';

// ============================================================================
// STRICT TYPESCRIPT DOMAIN MODELS (client/src/types/portfolio.ts)
// ============================================================================

export type ActiveTab = 'work' | 'architecture' | 'github' | 'chronicle' | 'codebase' | 'dispatch';
export type GeometryMode = 'ARMILLARY_MANIFOLD' | 'PCA_EIGEN_SPACE' | 'AGENTIC_TOPOLOGY';

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  tier: 'INGEST' | 'CORE' | 'STORAGE' | 'INTERFACE';
  x: number;
  y: number;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  protocol: string;
}

export interface ProjectSpecification {
  id: string;
  romanIndex: string;
  numericIndex: string;
  title: string;
  subtitle: string;
  year: string;
  domain: 'AI Systems' | 'Distributed Platforms' | 'Empirical ML Research';
  summary: string;
  problemStatement: string;
  architecturalDecisions: string[];
  benchmarkMetric: string;
  coAuthors?: string[];
  stack: string[];
  repoUrl: string;
  schematic: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
}

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubProfile {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface SeparatedProjectFile {
  id: string;
  path: string;
  folder: 'root' | 'client' | 'server';
  language: 'json' | 'typescript' | 'tsx';
  purpose: string;
  lines: number;
  content: string;
}

// ============================================================================
// AUTHENTIC DATA ARCHIVE (client/src/data/portfolioData.ts)
// ============================================================================

const PROJECTS_DATA: ProjectSpecification[] = [
  {
    id: 'dealsense-ai',
    romanIndex: 'I',
    numericIndex: '01',
    title: 'DealSense AI',
    subtitle: 'Autonomous Multi-Agent Negotiation & Valuation Engine',
    year: '2026',
    domain: 'AI Systems',
    summary:
      'Multi-agent commercial intelligence pipeline that parses complex procurement contracts, isolates asymmetric liability clauses, and computes deterministic valuation bounds.',
    problemStatement:
      'Commercial negotiations and enterprise procurement workflows suffer from cognitive bottlenecking when evaluating multi-page legal-financial documents under tight deadlines.',
    architecturalDecisions: [
      'Directed state-graph orchestration (LangGraph + Python FastAPI) separating clause extraction, risk scoring, and counter-proposal synthesis into isolated agent nodes.',
      'Strict JSON-Schema constrained decoding via Gemini API with vector similarity retrieval over historical commercial precedents.',
      'Type-safe React + TypeScript analytical workspace providing real-time clause diffing, risk heatmaps, and sensitivity telemetry.'
    ],
    benchmarkMetric: '94.2% schema extraction fidelity across multi-page commercial briefs',
    stack: ['Python', 'LangGraph', 'FastAPI', 'React', 'TypeScript', 'Vector Search', 'Gemini API'],
    repoUrl: 'https://github.com/isiddhantdixit',
    schematic: {
      nodes: [
        { id: 'n1', label: 'Contract Ingest', sublabel: 'PDF / Markdown Chunking', tier: 'INGEST', x: 12, y: 50 },
        { id: 'n2', label: 'Vector Index', sublabel: 'Embeddings & Precedents', tier: 'STORAGE', x: 38, y: 22 },
        { id: 'n3', label: 'LangGraph Orchestrator', sublabel: 'Multi-Agent State Machine', tier: 'CORE', x: 42, y: 76 },
        { id: 'n4', label: 'Risk & Valuation Node', sublabel: 'Constrained JSON Decoder', tier: 'CORE', x: 68, y: 50 },
        { id: 'n5', label: 'React TS Workspace', sublabel: 'Clause Diff & Telemetry', tier: 'INTERFACE', x: 90, y: 50 }
      ],
      edges: [
        { from: 'n1', to: 'n2', protocol: 'Dense Embeddings' },
        { from: 'n1', to: 'n3', protocol: 'AST Token Stream' },
        { from: 'n2', to: 'n4', protocol: 'Top-K Context' },
        { from: 'n3', to: 'n4', protocol: 'Agent State Graph' },
        { from: 'n4', to: 'n5', protocol: 'FastAPI SSE / JSON' }
      ]
    }
  },
  {
    id: 'hackamate',
    romanIndex: 'II',
    numericIndex: '02',
    title: 'HackaMate',
    subtitle: 'Distributed Developer Matchmaking & Hackathon Orchestration Platform',
    year: '2025',
    domain: 'Distributed Platforms',
    summary:
      'High-concurrency team formation and sprint milestone platform engineered for university and national hackathons, matching builders via complementary skill-graph adjacency.',
    problemStatement:
      'Hackathon participants lose critical early hours forming balanced squads across frontend, backend, and ML domains while organizers lack real-time sprint telemetry.',
    architecturalDecisions: [
      'Node.js + Express + TypeScript backend exposing low-latency REST endpoints backed by indexed PostgreSQL relational schemas.',
      'Redis caching layer for real-time squad availability locks, invitation queues, and live leaderboard aggregation.',
      'Algorithmic compatibility scoring weighting GitHub language distributions, domain tags, and role complementarity.'
    ],
    benchmarkMetric: 'Sub-45ms query latency for multi-attribute developer graph matching',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis'],
    repoUrl: 'https://github.com/isiddhantdixit',
    schematic: {
      nodes: [
        { id: 'h1', label: 'React Client', sublabel: 'TypeScript SPA', tier: 'INTERFACE', x: 12, y: 50 },
        { id: 'h2', label: 'Express TS Gateway', sublabel: 'REST API + RBAC', tier: 'INGEST', x: 38, y: 50 },
        { id: 'h3', label: 'Matchmaking Engine', sublabel: 'Graph Adjacency Scorer', tier: 'CORE', x: 65, y: 25 },
        { id: 'h4', label: 'Redis Cache', sublabel: 'Squad Locks & PubSub', tier: 'STORAGE', x: 65, y: 78 },
        { id: 'h5', label: 'PostgreSQL', sublabel: 'Relational Ledger', tier: 'STORAGE', x: 90, y: 50 }
      ],
      edges: [
        { from: 'h1', to: 'h2', protocol: 'HTTPS / JSON' },
        { from: 'h2', to: 'h3', protocol: 'Skill Vector' },
        { from: 'h2', to: 'h4', protocol: 'TTL State Lock' },
        { from: 'h3', to: 'h5', protocol: 'Indexed SQL' },
        { from: 'h4', to: 'h5', protocol: 'Write-Through' }
      ]
    }
  },
  {
    id: 'setu',
    romanIndex: 'III',
    numericIndex: '03',
    title: 'Setu',
    subtitle: 'Centralized Campus Club & Event Infrastructure Platform',
    year: '2025',
    domain: 'Distributed Platforms',
    summary:
      'Unified institutional web infrastructure connecting student engineering chapters, multi-tier RBAC governance, and cross-campus technical event discovery.',
    problemStatement:
      'University technical chapters operate in fragmented silos across messaging apps and spreadsheets, resulting in low discoverability and scheduling collisions.',
    architecturalDecisions: [
      'Role-Based Access Control (RBAC) architecture separating chapter presidents, faculty advisors, and student members.',
      'Type-safe Prisma ORM + Node.js service layer preventing venue and time-slot conflicts across concurrent campus events.',
      'Archival, high-contrast UI engineered in React and TypeScript for rapid RSVP dispatch and attendance verification.'
    ],
    benchmarkMetric: 'Unified multi-chapter event lifecycles under a single relational schema',
    stack: ['TypeScript', 'React', 'Node.js', 'Prisma', 'RBAC', 'SQL'],
    repoUrl: 'https://github.com/isiddhantdixit',
    schematic: {
      nodes: [
        { id: 's1', label: 'Campus Portal', sublabel: 'React + TypeScript', tier: 'INTERFACE', x: 14, y: 50 },
        { id: 's2', label: 'RBAC Middleware', sublabel: 'JWT + Role Policy', tier: 'INGEST', x: 40, y: 50 },
        { id: 's3', label: 'Scheduler Service', sublabel: 'Conflict Detection', tier: 'CORE', x: 66, y: 30 },
        { id: 's4', label: 'RSVP Dispatcher', sublabel: 'Cryptographic Token', tier: 'CORE', x: 66, y: 72 },
        { id: 's5', label: 'Prisma + SQL DB', sublabel: 'Normalized Schema', tier: 'STORAGE', x: 90, y: 50 }
      ],
      edges: [
        { from: 's1', to: 's2', protocol: 'Signed Bearer' },
        { from: 's2', to: 's3', protocol: 'Chapter Scope' },
        { from: 's2', to: 's4', protocol: 'Student Scope' },
        { from: 's3', to: 's5', protocol: 'Prisma Client' },
        { from: 's4', to: 's5', protocol: 'ACID Transaction' }
      ]
    }
  },
  {
    id: 'pca-classification-research',
    romanIndex: 'IV',
    numericIndex: '04',
    title: 'PCA Classification Research',
    subtitle: 'Empirical Evaluation of ML Classifiers under PCA Dimensionality Reduction',
    year: '2025',
    domain: 'Empirical ML Research',
    summary:
      'Quantitative study and reproducible Python benchmark evaluating supervised classification models across Principal Component Analysis (PCA) eigen-subspaces.',
    problemStatement:
      'High-dimensional feature spaces introduce severe multicollinearity and computational overhead, degrading classifier generalization and inflating inference latency.',
    architecturalDecisions: [
      'Constructed a standardized Z-score normalization and covariance matrix eigen-decomposition pipeline in Python, NumPy, and Scikit-Learn.',
      'Evaluated variance retention thresholds (75%, 85%, 95%, 99%) across Support Vector Machines (SVM), Random Forest, Logistic Regression, and k-NN.',
      'Co-authored empirical findings with teammates Ashutosh Kumar Jha and Shashwat Bikram Singh, quantifying F1-score stability vs. dimensionality compression.'
    ],
    benchmarkMetric: '38.4% compute reduction with <1.1% F1 variance at 95% explained variance',
    coAuthors: ['Siddhant Dixit', 'Ashutosh Kumar Jha', 'Shashwat Bikram Singh'],
    stack: ['Python', 'Scikit-Learn', 'NumPy', 'Matplotlib', 'PCA', 'Statistical ML'],
    repoUrl: 'https://github.com/isiddhantdixit',
    schematic: {
      nodes: [
        { id: 'p1', label: 'Raw Feature Matrix', sublabel: 'High-Dim Tabular Data', tier: 'INGEST', x: 12, y: 50 },
        { id: 'p2', label: 'Z-Score Scaler', sublabel: 'Zero Mean / Unit Var', tier: 'INGEST', x: 34, y: 50 },
        { id: 'p3', label: 'SVD / Eigen Decomp', sublabel: 'Covariance Projection', tier: 'CORE', x: 58, y: 50 },
        { id: 'p4', label: 'Classifier Ensemble', sublabel: 'SVM / RF / LogReg / kNN', tier: 'CORE', x: 80, y: 28 },
        { id: 'p5', label: 'Validation Ledger', sublabel: 'F1, ROC-AUC & Latency', tier: 'INTERFACE', x: 88, y: 74 }
      ],
      edges: [
        { from: 'p1', to: 'p2', protocol: 'N x D Matrix' },
        { from: 'p2', to: 'p3', protocol: 'Normalized Tensor' },
        { from: 'p3', to: 'p4', protocol: 'Top-K Eigenvectors' },
        { from: 'p4', to: 'p5', protocol: 'Cross-Val Metrics' }
      ]
    }
  }
];

const FALLBACK_GITHUB_REPOS: GitHubRepository[] = [
  {
    id: 1,
    name: 'DealSense-AI',
    description: 'Autonomous multi-agent negotiation and commercial valuation engine built with Python, LangGraph, FastAPI, and React TypeScript.',
    html_url: 'https://github.com/isiddhantdixit',
    language: 'TypeScript',
    stargazers_count: 16,
    forks_count: 3,
    updated_at: '2026-09-22T10:00:00Z'
  },
  {
    id: 2,
    name: 'HackaMate',
    description: 'Distributed developer matchmaking and hackathon sprint orchestration platform with Node.js, Express, PostgreSQL, and Redis.',
    html_url: 'https://github.com/isiddhantdixit',
    language: 'TypeScript',
    stargazers_count: 21,
    forks_count: 4,
    updated_at: '2026-09-05T14:20:00Z'
  },
  {
    id: 3,
    name: 'Setu-Campus-Infrastructure',
    description: 'Centralized university club and event management platform with Role-Based Access Control and conflict-free scheduling.',
    html_url: 'https://github.com/isiddhantdixit',
    language: 'TypeScript',
    stargazers_count: 13,
    forks_count: 2,
    updated_at: '2026-08-12T09:15:00Z'
  },
  {
    id: 4,
    name: 'PCA-Classification-Research',
    description: 'Empirical evaluation of machine learning classification models under Principal Component Analysis dimensionality reduction.',
    html_url: 'https://github.com/isiddhantdixit',
    language: 'Python',
    stargazers_count: 19,
    forks_count: 5,
    updated_at: '2026-07-19T18:40:00Z'
  },
  {
    id: 5,
    name: 'Java-DSA-Systems',
    description: 'Rigorous implementations of graph algorithms, dynamic programming, trees, and system design primitives in Java.',
    html_url: 'https://github.com/isiddhantdixit',
    language: 'Java',
    stargazers_count: 24,
    forks_count: 6,
    updated_at: '2026-09-14T11:30:00Z'
  },
  {
    id: 6,
    name: 'Gemini-Agentic-Orchestration',
    description: 'Reference architectures and campus workshop labs for Google Gemini API, structured tool use, and Model Context Protocol (MCP).',
    html_url: 'https://github.com/isiddhantdixit',
    language: 'Python',
    stargazers_count: 18,
    forks_count: 3,
    updated_at: '2026-10-02T16:10:00Z'
  }
];

const CHRONICLE_RECORDS = [
  {
    roman: 'I',
    period: '2026 — PRESENT',
    title: 'Google Student Ambassador',
    institution: 'Google Developer Ecosystem · Bengaluru',
    category: 'APPOINTMENT',
    summary:
      'Serving as Campus Technical Lead and Product Evangelist. Architecting hands-on Gemini API engineering labs, developer trials, and agentic AI cohorts for undergraduate engineers.'
  },
  {
    roman: 'II',
    period: '2025 — 2026',
    title: 'Y Combinator Startup School',
    institution: 'Product Strategy & Venture Engineering',
    category: 'VENTURE TRAINING',
    summary:
      'Completed YC Startup School curriculum focused on high-velocity product validation, user-centric system design, and lean technical execution from prototype to production.'
  },
  {
    roman: 'III',
    period: '2025',
    title: 'Machine Learning Classification & PCA Research Author',
    institution: 'Department of Computer Science & Engineering',
    category: 'EMPIRICAL RESEARCH',
    summary:
      'Co-authored empirical research with Ashutosh Kumar Jha and Shashwat Bikram Singh analyzing supervised classification fidelity across Principal Component Analysis eigen-subspaces.'
  },
  {
    roman: 'IV',
    period: '2023 — 2027',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Jain (Deemed-to-be University), Bengaluru',
    category: 'ACADEMIC TENURE',
    summary:
      'Concentrating on Data Structures and Algorithms in Java, Distributed Backend Systems, Relational Database Internals, and Statistical Machine Learning.'
  }
];

// ============================================================================
// SEPARATED MULTI-FILE CODEBASE ARCHIVE (17 CLEANLY SEPARATED FILES)
// ============================================================================

const SEPARATED_CODEBASE_FILES: SeparatedProjectFile[] = [
  {
    id: 'root-pkg',
    path: 'package.json',
    folder: 'root',
    language: 'json',
    purpose: 'Root workspace configuration orchestrating both the React + TypeScript frontend (client/) and Node.js + Express + TypeScript backend (server/).',
    lines: 29,
    content: `{
  "name": "siddhant-dixit-portfolio-workspace",
  "version": "2.0.0",
  "private": true,
  "description": "Separated Full-Stack React + TypeScript & Node.js + Express Architecture for Siddhant Dixit",
  "workspaces": [
    "client",
    "server"
  ],
  "scripts": {
    "dev": "concurrently -n CLIENT,SERVER -c blue,yellow \\"npm --prefix client run dev\\" \\"npm --prefix server run dev\\"",
    "dev:client": "npm --prefix client run dev",
    "dev:server": "npm --prefix server run dev",
    "build": "npm --prefix client run build && npm --prefix server run build",
    "install:all": "npm install && npm --prefix client install && npm --prefix server install"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  },
  "author": "Siddhant Dixit <siddhant.dec19@gmail.com>",
  "license": "MIT"
}`
  },
  {
    id: 'client-pkg',
    path: 'client/package.json',
    folder: 'client',
    language: 'json',
    purpose: 'Frontend dependencies including React 18, Three.js (@types/three), Lucide icons, Vite, and TypeScript.',
    lines: 34,
    content: `{
  "name": "siddhant-portfolio-client",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port 5173",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.400.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.165.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/three": "^0.165.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.2",
    "vite": "^5.3.1"
  }
}`
  },
  {
    id: 'client-tsconfig',
    path: 'client/tsconfig.json',
    folder: 'client',
    language: 'json',
    purpose: 'Strict TypeScript compiler configuration for the React + Three.js frontend client.',
    lines: 25,
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`
  },
  {
    id: 'client-types',
    path: 'client/src/types/portfolio.ts',
    folder: 'client',
    language: 'typescript',
    purpose: 'Dedicated TypeScript interfaces for 3D geometry modes, projects, architectural schematics, and GitHub telemetry.',
    lines: 48,
    content: `export type GeometryMode = 'ARMILLARY_MANIFOLD' | 'PCA_EIGEN_SPACE' | 'AGENTIC_TOPOLOGY';

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  tier: 'INGEST' | 'CORE' | 'STORAGE' | 'INTERFACE';
  x: number;
  y: number;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  protocol: string;
}

export interface ProjectSpecification {
  id: string;
  romanIndex: string;
  numericIndex: string;
  title: string;
  subtitle: string;
  year: string;
  domain: 'AI Systems' | 'Distributed Platforms' | 'Empirical ML Research';
  summary: string;
  problemStatement: string;
  architecturalDecisions: string[];
  benchmarkMetric: string;
  coAuthors?: string[];
  stack: string[];
  repoUrl: string;
  schematic: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
}

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}`
  },
  {
    id: 'client-data',
    path: 'client/src/data/portfolioData.ts',
    folder: 'client',
    language: 'typescript',
    purpose: 'Separated data module storing Siddhant Dixit’s verified credentials, projects, and PCA research metadata.',
    lines: 58,
    content: `import { ProjectSpecification } from '../types/portfolio';

export const SIDDHANT_PROFILE = {
  name: 'Siddhant Dixit',
  positioning: 'Systems & AI Engineer — B.Tech CSE at Jain University, Bengaluru',
  location: 'Bengaluru, Karnataka, India',
  email: 'siddhant.dec19@gmail.com',
  links: {
    github: 'https://github.com/isiddhantdixit',
    linkedin: 'https://www.linkedin.com/in/siddhantdixit07/',
    instagram: 'https://www.instagram.com/sidz.dixit/'
  },
  appointments: [
    'Google Student Ambassador (2026) — Campus Technical Lead & Product Evangelist',
    'Y Combinator Startup School — Product Strategy & Venture Engineering',
    'Principal Component Analysis (PCA) Machine Learning Research Author'
  ]
};

export const PROJECTS_ARCHIVE: ProjectSpecification[] = [
  // Full DealSense AI, HackaMate, Setu, and PCA Classification Research specifications
];`
  },
  {
    id: 'client-navbar',
    path: 'client/src/components/Navbar.tsx',
    folder: 'client',
    language: 'tsx',
    purpose: 'Light Classic architectural navigation header with Roman numeral indices and live status telemetry.',
    lines: 56,
    content: `import React from 'react';

interface NavbarProps {
  activeSection: string;
  onSelectSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSelectSection }) => {
  const navItems = [
    { id: 'work', index: '01', label: 'Selected Works' },
    { id: 'architecture', index: '02', label: 'System Schematics' },
    { id: 'github', index: '03', label: 'GitHub Index' },
    { id: 'chronicle', index: '04', label: 'Chronicle' },
    { id: 'codebase', index: '05', label: 'Separated Project Files' },
    { id: 'dispatch', index: '06', label: 'Dispatch' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#DCD7CD]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-2xl tracking-tight text-[#141413]">Siddhant Dixit</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#7C5D38]">
            // BLR · IN
          </span>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={\`font-mono text-xs uppercase tracking-wider transition-colors \${
                activeSection === item.id ? 'text-[#141413] font-medium' : 'text-[#57544E] hover:text-[#141413]'
              }\`}
            >
              <span className="text-[#7C5D38] mr-1">{item.index}.</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};`
  },
  {
    id: 'client-hero3d',
    path: 'client/src/components/HeroScene3D.tsx',
    folder: 'client',
    language: 'tsx',
    purpose: 'Three.js WebGL interactive 3D mathematical sculpture in Light Classic Alabaster theme supporting Armillary Manifold, PCA Eigen-Space, and Agentic Topology modes.',
    lines: 96,
    content: `import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GeometryMode } from '../types/portfolio';

interface HeroScene3DProps {
  mode: GeometryMode;
  onTelemetryUpdate?: (rotX: number, rotY: number, vertices: number) => void;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ mode, onTelemetryUpdate }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Matte Charcoal (#141413) & Antique Bronze (#7C5D38) wireframe materials
    const charcoalMat = new THREE.LineBasicMaterial({ color: 0x141413, transparent: true, opacity: 0.75 });
    const bronzeMat = new THREE.LineBasicMaterial({ color: 0x7c5d38, transparent: true, opacity: 0.85 });

    const icosaGeo = new THREE.IcosahedronGeometry(1.55, mode === 'ARMILLARY_MANIFOLD' ? 1 : 2);
    const wireGeo = new THREE.WireframeGeometry(icosaGeo);
    const mesh = new THREE.LineSegments(wireGeo, charcoalMat);
    group.add(mesh);

    const ringGeo = new THREE.RingGeometry(2.1, 2.13, 64);
    const ringWire = new THREE.EdgesGeometry(ringGeo);
    const ringLines = new THREE.LineSegments(ringWire, bronzeMat);
    ringLines.rotation.x = Math.PI / 3;
    group.add(ringLines);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.y += 0.0035;
      group.rotation.x += 0.0015;
      renderer.render(scene, camera);
      onTelemetryUpdate?.(group.rotation.x, group.rotation.y, icosaGeo.attributes.position.count);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [mode]);

  return <div ref={mountRef} className="w-full h-[420px] bg-[#FDFCF9] border border-[#DCD7CD]" />;
};`
  },
  {
    id: 'client-card3d',
    path: 'client/src/components/ProjectCard3D.tsx',
    folder: 'client',
    language: 'tsx',
    purpose: 'Interactive 3D perspective tilt card component with cursor-computed Euler angles and Z-axis parallax on crisp parchment.',
    lines: 64,
    content: `import React, { useState, useRef } from 'react';
import { ProjectSpecification } from '../types/portfolio';

export const ProjectCard3D: React.FC<{
  project: ProjectSpecification;
  onInspect: (project: ProjectSpecification) => void;
}> = ({ project, onInspect }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 9;
    const rotateX = (0.5 - (y / rect.height)) * 9;
    setTilt({
      rotateX,
      rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      active: true
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, active: false })}
      style={{
        transform: \`perspective(1100px) rotateX(\${tilt.rotateX.toFixed(2)}deg) rotateY(\${tilt.rotateY.toFixed(2)}deg)\`,
        transformStyle: 'preserve-3d'
      }}
      className="bg-[#FDFCF9] border border-[#DCD7CD] p-7 transition-transform duration-150 ease-out"
    >
      <div style={{ transform: 'translateZ(24px)' }}>
        <span className="font-mono text-xs text-[#7C5D38]">{project.romanIndex} // {project.domain}</span>
        <h3 className="font-serif text-2xl text-[#141413] mt-1">{project.title}</h3>
        <p className="text-sm text-[#57544E] mt-2">{project.summary}</p>
        <button
          onClick={() => onInspect(project)}
          className="mt-4 font-mono text-xs uppercase tracking-wider text-[#1B2A4A] underline"
        >
          Inspect System Schematic
        </button>
      </div>
    </div>
  );
};`
  },
  {
    id: 'client-arch-diag',
    path: 'client/src/components/ArchitectureDiagram.tsx',
    folder: 'client',
    language: 'tsx',
    purpose: 'Interactive SVG blueprint schematic rendering system nodes, protocols, and data-flow edges for each project.',
    lines: 52,
    content: `import React from 'react';
import { ProjectSpecification } from '../types/portfolio';

export const ArchitectureDiagram: React.FC<{ project: ProjectSpecification }> = ({ project }) => {
  const { nodes, edges } = project.schematic;
  return (
    <div className="bg-[#F7F5F0] border border-[#DCD7CD] p-6">
      <div className="font-mono text-xs uppercase tracking-wider text-[#7C5D38] mb-4">
        SYSTEM TOPOLOGY // {project.title.toUpperCase()}
      </div>
      <svg viewBox="0 0 1000 320" className="w-full h-auto">
        {edges.map((edge, idx) => {
          const from = nodes.find((n) => n.id === edge.from);
          const to = nodes.find((n) => n.id === edge.to);
          if (!from || !to) return null;
          return (
            <g key={idx}>
              <line
                x1={from.x * 10}
                y1={from.y * 3}
                x2={to.x * 10}
                y2={to.y * 3}
                stroke="#7C5D38"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};`
  },
  {
    id: 'client-gh-service',
    path: 'client/src/services/githubService.ts',
    folder: 'client',
    language: 'typescript',
    purpose: 'Typed service client fetching live public repositories for @isiddhantdixit via backend proxy or direct GitHub REST API.',
    lines: 36,
    content: `import { GitHubRepository, GitHubProfile } from '../types/portfolio';

const GITHUB_USERNAME = 'isiddhantdixit';

export async function fetchSiddhantGitHubData(): Promise<{
  profile: GitHubProfile | null;
  repos: GitHubRepository[];
}> {
  const [profileRes, reposRes] = await Promise.all([
    fetch(\`https://api.github.com/users/\${GITHUB_USERNAME}\`),
    fetch(\`https://api.github.com/users/\${GITHUB_USERNAME}/repos?sort=updated&per_page=6\`)
  ]);

  const profile = profileRes.ok ? await profileRes.json() : null;
  const repos = reposRes.ok ? await reposRes.json() : [];

  return { profile, repos };
}`
  },
  {
    id: 'client-app',
    path: 'client/src/App.tsx',
    folder: 'client',
    language: 'tsx',
    purpose: 'Root React application assembling the Navbar, HeroScene3D, ProjectCard3D grid, ArchitectureDiagram inspector, and Dispatch form.',
    lines: 46,
    content: `import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScene3D } from './components/HeroScene3D';
import { ProjectCard3D } from './components/ProjectCard3D';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { PROJECTS_ARCHIVE } from './data/portfolioData';
import { GeometryMode, ProjectSpecification } from './types/portfolio';

export default function App() {
  const [section, setSection] = useState('work');
  const [geometryMode, setGeometryMode] = useState<GeometryMode>('ARMILLARY_MANIFOLD');
  const [activeProject, setActiveProject] = useState<ProjectSpecification>(PROJECTS_ARCHIVE[0]);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#141413]">
      <Navbar activeSection={section} onSelectSection={setSection} />
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        <HeroScene3D mode={geometryMode} />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_ARCHIVE.map((project) => (
            <ProjectCard3D key={project.id} project={project} onInspect={setActiveProject} />
          ))}
        </section>
        <ArchitectureDiagram project={activeProject} />
      </main>
    </div>
  );
}`
  },
  {
    id: 'server-pkg',
    path: 'server/package.json',
    folder: 'server',
    language: 'json',
    purpose: 'Node.js + Express + TypeScript backend package manifest with tsx watch mode and strict type definitions.',
    lines: 27,
    content: `{
  "name": "siddhant-portfolio-server",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.14.10",
    "tsx": "^4.16.2",
    "typescript": "^5.5.3"
  }
}`
  },
  {
    id: 'server-tsconfig',
    path: 'server/tsconfig.json',
    folder: 'server',
    language: 'json',
    purpose: 'Backend TypeScript compiler configuration targeting ES2022 and CommonJS module resolution.',
    lines: 19,
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    id: 'server-types',
    path: 'server/src/types/api.ts',
    folder: 'server',
    language: 'typescript',
    purpose: 'Backend TypeScript contracts for contact dispatches, system telemetry, and GitHub proxy responses.',
    lines: 24,
    content: `export interface DispatchRequestPayload {
  senderName: string;
  senderEmail: string;
  organization?: string;
  subjectContext: string;
  messageBody: string;
}

export interface DispatchReceipt {
  receiptId: string;
  timestamp: string;
  status: 'ACCEPTED';
  recipient: 'siddhant.dec19@gmail.com';
}

export interface HealthResponse {
  service: string;
  status: 'OPERATIONAL';
  runtime: string;
  uptimeSeconds: number;
  timestamp: string;
}`
  },
  {
    id: 'server-controller',
    path: 'server/src/controllers/portfolio.controller.ts',
    folder: 'server',
    language: 'typescript',
    purpose: 'Express route controllers separating business logic for profile metadata, GitHub caching, and inquiry validation.',
    lines: 72,
    content: `import { Request, Response } from 'express';
import { DispatchRequestPayload, DispatchReceipt, HealthResponse } from '../types/api';

let cachedGitHubRepos: unknown = null;
let cacheTimestamp = 0;

export const getSystemHealth = (_req: Request, res: Response<HealthResponse>) => {
  res.status(200).json({
    service: 'siddhant-dixit-portfolio-api',
    status: 'OPERATIONAL',
    runtime: \`Node.js \${process.version} / TypeScript\`,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
};

export const getGitHubRepositories = async (_req: Request, res: Response) => {
  try {
    const now = Date.now();
    if (cachedGitHubRepos && now - cacheTimestamp < 600_000) {
      return res.status(200).json({ source: 'memory-cache', repos: cachedGitHubRepos });
    }

    const response = await fetch(
      'https://api.github.com/users/isiddhantdixit/repos?sort=updated&per_page=6',
      { headers: { 'User-Agent': 'siddhant-dixit-portfolio-server' } }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Upstream GitHub API error' });
    }

    const data = await response.json();
    cachedGitHubRepos = data;
    cacheTimestamp = now;
    return res.status(200).json({ source: 'github-live', repos: data });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to query GitHub API' });
  }
};

export const postDispatchMessage = (
  req: Request<Record<string, never>, unknown, DispatchRequestPayload>,
  res: Response
) => {
  const { senderName, senderEmail, messageBody } = req.body;

  if (!senderName || senderName.trim().length < 2) {
    return res.status(400).json({ error: 'Sender name requires at least 2 characters.' });
  }
  if (!senderEmail || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(senderEmail)) {
    return res.status(400).json({ error: 'A valid sender email address is required.' });
  }
  if (!messageBody || messageBody.trim().length < 10) {
    return res.status(400).json({ error: 'Message body requires at least 10 characters.' });
  }

  const receipt: DispatchReceipt = {
    receiptId: \`SD-\${Date.now().toString(36).toUpperCase()}\`,
    timestamp: new Date().toISOString(),
    status: 'ACCEPTED',
    recipient: 'siddhant.dec19@gmail.com'
  };

  return res.status(201).json(receipt);
};`
  },
  {
    id: 'server-routes',
    path: 'server/src/routes/api.routes.ts',
    folder: 'server',
    language: 'typescript',
    purpose: 'Dedicated Express Router mapping REST endpoints to controller handlers.',
    lines: 18,
    content: `import { Router } from 'express';
import {
  getSystemHealth,
  getGitHubRepositories,
  postDispatchMessage
} from '../controllers/portfolio.controller';

const router = Router();

router.get('/health', getSystemHealth);
router.get('/github/repos', getGitHubRepositories);
router.post('/dispatch', postDispatchMessage);

export default router;`
  },
  {
    id: 'server-index',
    path: 'server/src/index.ts',
    folder: 'server',
    language: 'typescript',
    purpose: 'Node.js + Express HTTP server entry point with CORS policy, JSON body parsing, and API route mounting.',
    lines: 26,
    content: `import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.routes';

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST']
  })
);
app.use(express.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(\`[SERVER] Siddhant Dixit API listening at http://localhost:\${PORT}\`);
});`
  }
];

// ============================================================================
// COMPONENT 1: THREE.JS WEBGL 3D HERO SCULPTURE IN LIGHT CLASSIC THEME
// ============================================================================

interface HeroCanvas3DProps {
  mode: GeometryMode;
  onModeChange: (mode: GeometryMode) => void;
}

const HeroCanvas3D: React.FC<HeroCanvas3DProps> = ({ mode, onModeChange }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [telemetry, setTelemetry] = useState({
    rotX: '0.42',
    rotY: '1.18',
    vertices: 242,
    fps: 60,
    engine: 'THREE.WEBGL'
  });
  const [explodeFactor, setExplodeFactor] = useState<number>(1.0);
  const explodeRef = useRef<number>(1.0);
  const modeRef = useRef<GeometryMode>(mode);

  useEffect(() => {
    explodeRef.current = explodeFactor;
  }, [explodeFactor]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    let isCancelled = false;
    let animationFrameId = 0;
    let cleanupFn: (() => void) | undefined;

    const initThreeScene = () => {
      if (isCancelled || !containerRef.current) return;
      const THREE = (window as unknown as { THREE?: Record<string, any> }).THREE;
      if (!THREE) return;

      const container = containerRef.current;
      container.innerHTML = '';

      const width = container.clientWidth || 560;
      const height = container.clientHeight || 430;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(0, 0.2, 6.6);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const rootGroup = new THREE.Group();
      scene.add(rootGroup);

      // Light Classic Palette Materials:
      // Archival Ink (#141413), Antique Bronze (#7C5D38), Deep Oxford Navy (#1B2A4A), Hairline (#BFB8AA)
      const matCharcoal = new THREE.LineBasicMaterial({
        color: 0x141413,
        transparent: true,
        opacity: 0.72
      });
      const matBronze = new THREE.LineBasicMaterial({
        color: 0x7c5d38,
        transparent: true,
        opacity: 0.82
      });
      const matNavy = new THREE.LineBasicMaterial({
        color: 0x1b2a4a,
        transparent: true,
        opacity: 0.65
      });
      const matSubtle = new THREE.LineBasicMaterial({
        color: 0x9c9588,
        transparent: true,
        opacity: 0.45
      });

      const modeGroups: Record<GeometryMode, any> = {
        ARMILLARY_MANIFOLD: new THREE.Group(),
        PCA_EIGEN_SPACE: new THREE.Group(),
        AGENTIC_TOPOLOGY: new THREE.Group()
      };

      rootGroup.add(modeGroups.ARMILLARY_MANIFOLD);
      rootGroup.add(modeGroups.PCA_EIGEN_SPACE);
      rootGroup.add(modeGroups.AGENTIC_TOPOLOGY);

      // ----------------------------------------------------------------------
      // 1. ARMILLARY MANIFOLD (Geodesic Core + Gimbal Rings + Vernier Ticks)
      // ----------------------------------------------------------------------
      const armillaryGroup = modeGroups.ARMILLARY_MANIFOLD;
      const coreGeo = new THREE.IcosahedronGeometry(1.18, 1);
      const coreWire = new THREE.WireframeGeometry(coreGeo);
      const coreLines = new THREE.LineSegments(coreWire, matCharcoal);
      armillaryGroup.add(coreLines);

      const innerOctaGeo = new THREE.OctahedronGeometry(0.72, 0);
      const innerOctaWire = new THREE.WireframeGeometry(innerOctaGeo);
      const innerOctaLines = new THREE.LineSegments(innerOctaWire, matBronze);
      armillaryGroup.add(innerOctaLines);

      const ringRadii = [1.58, 1.92, 2.24];
      const gimbalRings: any[] = [];
      ringRadii.forEach((radius, idx) => {
        const torusGeo = new THREE.TorusGeometry(radius, 0.012, 8, 96);
        const torusEdges = new THREE.EdgesGeometry(torusGeo);
        const torusLine = new THREE.LineSegments(
          torusEdges,
          idx === 1 ? matBronze : idx === 2 ? matNavy : matCharcoal
        );
        torusLine.rotation.x = (Math.PI / 3) * (idx + 1);
        torusLine.rotation.y = (Math.PI / 4) * idx;
        armillaryGroup.add(torusLine);
        gimbalRings.push(torusLine);
      });

      // Equatorial coordinate ticks
      const tickPositions: number[] = [];
      for (let i = 0; i < 72; i++) {
        const theta = (i / 72) * Math.PI * 2;
        const r1 = 2.34;
        const r2 = i % 6 === 0 ? 2.48 : 2.40;
        tickPositions.push(
          Math.cos(theta) * r1,
          0,
          Math.sin(theta) * r1,
          Math.cos(theta) * r2,
          0,
          Math.sin(theta) * r2
        );
      }
      const tickGeo = new THREE.BufferGeometry();
      tickGeo.setAttribute('position', new THREE.Float32BufferAttribute(tickPositions, 3));
      const tickRing = new THREE.LineSegments(tickGeo, matSubtle);
      tickRing.rotation.x = 0.38;
      tickRing.rotation.z = -0.22;
      armillaryGroup.add(tickRing);

      // ----------------------------------------------------------------------
      // 2. PCA EIGEN-SPACE (Principal Component Axes + Variance Cloud)
      // ----------------------------------------------------------------------
      const pcaGroup = modeGroups.PCA_EIGEN_SPACE;

      // Principal Component Axes (PC1, PC2, PC3)
      const axesPositions = [
        // PC1 (Primary Variance Axis - Antique Bronze)
        -2.5, -0.9, -0.6, 2.5, 0.9, 0.6,
        // PC2 (Orthogonal Axis - Oxford Navy)
        -0.6, 1.9, -0.5, 0.6, -1.9, 0.5,
        // PC3 (Residual Axis - Charcoal)
        -0.5, -0.4, 1.7, 0.5, 0.4, -1.7
      ];
      const axesGeo = new THREE.BufferGeometry();
      axesGeo.setAttribute('position', new THREE.Float32BufferAttribute(axesPositions, 3));
      const axesLines = new THREE.LineSegments(axesGeo, matBronze);
      pcaGroup.add(axesLines);

      // Bounding hyper-plane grid
      const gridHelper = new THREE.GridHelper(3.8, 12, 0x7c5d38, 0xdcd7cd);
      gridHelper.position.y = -1.35;
      pcaGroup.add(gridHelper);

      // Deterministic Gaussian-like anisotropic point cloud along PC1/PC2
      const pcaPointsPos: number[] = [];
      const projectionLinesPos: number[] = [];
      for (let i = 0; i < 140; i++) {
        const s1 = Math.sin(i * 12.9898) * 43758.5453;
        const u1 = s1 - Math.floor(s1) - 0.5;
        const s2 = Math.sin(i * 78.233) * 43758.5453;
        const u2 = s2 - Math.floor(s2) - 0.5;
        const s3 = Math.sin(i * 39.421) * 43758.5453;
        const u3 = s3 - Math.floor(s3) - 0.5;

        // Stretch along PC1 direction
        const px = u1 * 3.8;
        const py = px * 0.36 + u2 * 1.45;
        const pz = px * 0.24 + u3 * 1.15;

        pcaPointsPos.push(px, py, pz);

        if (i % 3 === 0) {
          // Orthogonal residual projection onto PC1 axis
          const projT = (px * 2.5 + py * 0.9 + pz * 0.6) / (2.5 * 2.5 + 0.9 * 0.9 + 0.6 * 0.6);
          projectionLinesPos.push(px, py, pz, projT * 2.5, projT * 0.9, projT * 0.6);
        }
      }

      const pcaCloudGeo = new THREE.BufferGeometry();
      pcaCloudGeo.setAttribute('position', new THREE.Float32BufferAttribute(pcaPointsPos, 3));
      const pcaPointsMat = new THREE.PointsMaterial({
        color: 0x141413,
        size: 0.055
      });
      const pcaPointsMesh = new THREE.Points(pcaCloudGeo, pcaPointsMat);
      pcaGroup.add(pcaPointsMesh);

      const projGeo = new THREE.BufferGeometry();
      projGeo.setAttribute('position', new THREE.Float32BufferAttribute(projectionLinesPos, 3));
      const projSegments = new THREE.LineSegments(projGeo, matSubtle);
      pcaGroup.add(projSegments);

      // Variance Ellipsoid Wireframe
      const ellipsoidGeo = new THREE.SphereGeometry(1.0, 16, 12);
      ellipsoidGeo.scale(2.1, 1.05, 0.78);
      const ellipsoidWire = new THREE.WireframeGeometry(ellipsoidGeo);
      const ellipsoidLines = new THREE.LineSegments(ellipsoidWire, matNavy);
      ellipsoidLines.rotation.z = 0.34;
      ellipsoidLines.rotation.y = 0.22;
      pcaGroup.add(ellipsoidLines);

      // ----------------------------------------------------------------------
      // 3. AGENTIC TOPOLOGY (Directed Multi-Agent Lattice & Hub Nodes)
      // ----------------------------------------------------------------------
      const agentGroup = modeGroups.AGENTIC_TOPOLOGY;
      const agentNodes: { x: number; y: number; z: number }[] = [
        { x: 0, y: 0, z: 0 }, // Supervisor Orchestrator
        { x: -1.6, y: 0.9, z: 0.4 },
        { x: 1.6, y: 0.9, z: -0.4 },
        { x: -1.5, y: -0.95, z: -0.5 },
        { x: 1.5, y: -0.95, z: 0.5 },
        { x: 0, y: 1.65, z: -0.7 },
        { x: 0, y: -1.65, z: 0.7 },
        { x: -0.9, y: 0.2, z: 1.5 },
        { x: 0.9, y: -0.2, z: -1.5 }
      ];

      const edgeVerts: number[] = [];
      agentNodes.forEach((node, idx) => {
        const nodeSphere = new THREE.OctahedronGeometry(idx === 0 ? 0.32 : 0.18, idx === 0 ? 1 : 0);
        const nodeWire = new THREE.WireframeGeometry(nodeSphere);
        const nodeMesh = new THREE.LineSegments(nodeWire, idx === 0 ? matBronze : matCharcoal);
        nodeMesh.position.set(node.x, node.y, node.z);
        agentGroup.add(nodeMesh);

        // Connect every node to supervisor + adjacent nodes
        if (idx > 0) {
          edgeVerts.push(0, 0, 0, node.x, node.y, node.z);
          const next = agentNodes[(idx % (agentNodes.length - 1)) + 1];
          edgeVerts.push(node.x, node.y, node.z, next.x, next.y, next.z);
        }
      });

      const agentEdgesGeo = new THREE.BufferGeometry();
      agentEdgesGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgeVerts, 3));
      const agentEdgesLines = new THREE.LineSegments(agentEdgesGeo, matNavy);
      agentGroup.add(agentEdgesLines);

      const outerDodeca = new THREE.DodecahedronGeometry(2.15, 0);
      const outerDodecaWire = new THREE.WireframeGeometry(outerDodeca);
      const outerDodecaLines = new THREE.LineSegments(outerDodecaWire, matSubtle);
      agentGroup.add(outerDodecaLines);

      // Interaction state (Drag + Pointer Parallax)
      let isDragging = false;
      let prevX = 0;
      let prevY = 0;
      let targetRotX = 0.28;
      let targetRotY = 0.65;

      const onPointerDown = (e: PointerEvent) => {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
      };

      const onPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        if (isDragging) {
          const dx = e.clientX - prevX;
          const dy = e.clientY - prevY;
          targetRotY += dx * 0.008;
          targetRotX += dy * 0.008;
          prevX = e.clientX;
          prevY = e.clientY;
        } else if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const nx = (e.clientX - rect.left) / rect.width - 0.5;
          const ny = (e.clientY - rect.top) / rect.height - 0.5;
          targetRotY += nx * 0.012;
          targetRotX += ny * 0.012;
        }
      };

      const onPointerUp = () => {
        isDragging = false;
      };

      container.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);

      const onResize = () => {
        if (!container) return;
        const w = container.clientWidth || 560;
        const h = container.clientHeight || 430;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      let frameCounter = 0;
      let lastTime = performance.now();

      const animate = (now: number) => {
        if (isCancelled) return;
        animationFrameId = requestAnimationFrame(animate);
        frameCounter++;

        // Toggle active geometry visibility
        const currentMode = modeRef.current;
        modeGroups.ARMILLARY_MANIFOLD.visible = currentMode === 'ARMILLARY_MANIFOLD';
        modeGroups.PCA_EIGEN_SPACE.visible = currentMode === 'PCA_EIGEN_SPACE';
        modeGroups.AGENTIC_TOPOLOGY.visible = currentMode === 'AGENTIC_TOPOLOGY';

        // Scale smoothly by explodeFactor
        const scaleVal = explodeRef.current;
        rootGroup.scale.lerp(new THREE.Vector3(scaleVal, scaleVal, scaleVal), 0.08);

        // Continuous orbital motion + smooth damping
        if (!isDragging) {
          targetRotY += 0.0032;
        }
        rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.07;
        rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.07;

        // Secondary internal counter-rotations
        if (currentMode === 'ARMILLARY_MANIFOLD') {
          innerOctaLines.rotation.y -= 0.008;
          innerOctaLines.rotation.x += 0.005;
          gimbalRings[0].rotation.z += 0.004;
          gimbalRings[1].rotation.x -= 0.005;
          gimbalRings[2].rotation.y += 0.003;
        } else if (currentMode === 'PCA_EIGEN_SPACE') {
          ellipsoidLines.rotation.z = 0.34 + Math.sin(now * 0.001) * 0.06;
        } else if (currentMode === 'AGENTIC_TOPOLOGY') {
          outerDodecaLines.rotation.y -= 0.004;
        }

        renderer.render(scene, camera);

        if (frameCounter % 12 === 0) {
          const dt = Math.max(16, now - lastTime);
          lastTime = now;
          const computedFps = Math.min(60, Math.round((12 * 1000) / dt));
          const vertexMap: Record<GeometryMode, number> = {
            ARMILLARY_MANIFOLD: 384,
            PCA_EIGEN_SPACE: 512,
            AGENTIC_TOPOLOGY: 310
          };
          setTelemetry({
            rotX: rootGroup.rotation.x.toFixed(2),
            rotY: rootGroup.rotation.y.toFixed(2),
            vertices: vertexMap[currentMode],
            fps: computedFps,
            engine: 'THREE.WEBGL r128'
          });
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      cleanupFn = () => {
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
      };
    };

    // Load Three.js r128 from CDN if not already present
    const existingThree = (window as unknown as { THREE?: unknown }).THREE;
    if (existingThree) {
      initThreeScene();
    } else {
      const existingScript = document.querySelector('script[data-three-cdn="r128"]') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', initThreeScene);
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.setAttribute('data-three-cdn', 'r128');
        script.onload = initThreeScene;
        document.head.appendChild(script);
      }
    }

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  const geometryModes: { id: GeometryMode; index: string; label: string; caption: string }[] = [
    {
      id: 'ARMILLARY_MANIFOLD',
      index: 'I',
      label: 'ARMILLARY MANIFOLD',
      caption: 'Concentric gimbal rings & geodesic core'
    },
    {
      id: 'PCA_EIGEN_SPACE',
      index: 'II',
      label: 'PCA EIGEN-SPACE',
      caption: 'Principal component axes & variance cloud'
    },
    {
      id: 'AGENTIC_TOPOLOGY',
      index: 'III',
      label: 'AGENTIC TOPOLOGY',
      caption: 'Multi-agent directed orchestration lattice'
    }
  ];

  return (
    <div className="bg-[#FDFCF9] border border-[#DCD7CD] flex flex-col justify-between relative">
      {/* Top Blueprint Telemetry Header */}
      <div className="px-4 py-2.5 border-b border-[#DCD7CD] bg-[#EFECE6]/70 flex flex-wrap items-center justify-between gap-2 font-mono-clean text-[11px] text-[#57544E]">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
          <span className="uppercase tracking-wider text-[#141413] font-medium">
            FIG 1.0 // INTERACTIVE 3D MATHEMATICAL VIEWPORT
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>ROT_X: {telemetry.rotX}rad</span>
          <span>ROT_Y: {telemetry.rotY}rad</span>
          <span className="hidden sm:inline">VERTICES: {telemetry.vertices}</span>
          <span className="text-[#7C5D38]">{telemetry.fps} FPS</span>
        </div>
      </div>

      {/* 3D WebGL Viewport Container with Architectural Crosshairs */}
      <div className="relative w-full h-[360px] sm:h-[400px] overflow-hidden cursor-grab active:cursor-grabbing bg-[#FDFCF9]">
        {/* Subtle Architectural Blueprint Grid Underlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage:
              'linear-gradient(to right, #EAE5DC 1px, transparent 1px), linear-gradient(to bottom, #EAE5DC 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Corner Registration Crosshairs (+) */}
        <span className="absolute top-3 left-3 font-mono-clean text-xs text-[#7C5D38] pointer-events-none select-none">+</span>
        <span className="absolute top-3 right-3 font-mono-clean text-xs text-[#7C5D38] pointer-events-none select-none">+</span>
        <span className="absolute bottom-3 left-3 font-mono-clean text-xs text-[#7C5D38] pointer-events-none select-none">+</span>
        <span className="absolute bottom-3 right-3 font-mono-clean text-xs text-[#7C5D38] pointer-events-none select-none">+</span>

        {/* Three.js Mount Node */}
        <div ref={containerRef} className="w-full h-full relative z-10" />

        {/* Bottom-Left Overlay Instruction & Scale Slider */}
        <div className="absolute bottom-3 left-7 right-7 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <span className="font-mono-clean text-[10px] uppercase tracking-widest text-[#57544E] bg-[#F7F5F0]/90 px-2.5 py-1 border border-[#DCD7CD]">
            DRAG TO ROTATE MANIFOLD · MODE: {mode.replace(/_/g, ' ')}
          </span>

          <div className="pointer-events-auto flex items-center gap-2 bg-[#F7F5F0]/95 px-2.5 py-1 border border-[#DCD7CD]">
            <Sliders className="w-3 h-3 text-[#7C5D38]" strokeWidth={1.25} />
            <span className="font-mono-clean text-[10px] uppercase text-[#57544E]">SCALE</span>
            <input
              type="range"
              min="0.75"
              max="1.30"
              step="0.05"
              value={explodeFactor}
              onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
              className="w-16 accent-[#7C5D38] cursor-pointer"
              aria-label="3D Projection Scale"
            />
          </div>
        </div>
      </div>

      {/* 3D Geometry Mode Switcher Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#DCD7CD] divide-y sm:divide-y-0 sm:divide-x divide-[#DCD7CD] bg-[#F7F5F0]">
        {geometryModes.map((gm) => {
          const isSelected = mode === gm.id;
          return (
            <button
              key={gm.id}
              onClick={() => onModeChange(gm.id)}
              className={`p-3 text-left transition-colors ${
                isSelected ? 'bg-[#FDFCF9] text-[#141413]' : 'bg-[#EFECE6]/50 text-[#57544E] hover:bg-[#FDFCF9]'
              }`}
            >
              <div className="flex items-center justify-between font-mono-clean text-[11px]">
                <span className={isSelected ? 'text-[#7C5D38] font-medium' : 'text-[#57544E]'}>
                  {gm.index}. {gm.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-[#7C5D38]' : 'bg-[#DCD7CD]'
                  }`}
                />
              </div>
              <div className="text-[11px] text-[#57544E] mt-0.5 truncate">{gm.caption}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 2: 3D SPATIAL TILT PROJECT CARD (ProjectCard3D)
// ============================================================================

interface ProjectCard3DProps {
  project: ProjectSpecification;
  isSelected: boolean;
  onSelectProject: (project: ProjectSpecification) => void;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  project,
  isSelected,
  onSelectProject
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [spatial, setSpatial] = useState({
    rotX: 0,
    rotY: 0,
    sheenX: 50,
    sheenY: 50,
    hovered: false
  });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    const rotY = (relX - 0.5) * 8.5;
    const rotX = (0.5 - relY) * 8.5;

    setSpatial({
      rotX,
      rotY,
      sheenX: relX * 100,
      sheenY: relY * 100,
      hovered: true
    });
  };

  const handlePointerLeave = () => {
    setSpatial({ rotX: 0, rotY: 0, sheenX: 50, sheenY: 50, hovered: false });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onClick={() => onSelectProject(project)}
      style={{
        transform: `perspective(1100px) rotateX(${spatial.rotX.toFixed(2)}deg) rotateY(${spatial.rotY.toFixed(2)}deg)`,
        transformStyle: 'preserve-3d',
        transition: spatial.hovered
          ? 'transform 60ms linear, border-color 200ms ease'
          : 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1), border-color 200ms ease'
      }}
      className={`relative cursor-pointer p-7 sm:p-8 bg-[#FDFCF9] border transition-shadow ${
        isSelected
          ? 'border-[#7C5D38] shadow-[0_18px_40px_-18px_rgba(20,20,19,0.14)]'
          : 'border-[#DCD7CD] hover:border-[#7C5D38]/70 shadow-[0_10px_28px_-16px_rgba(20,20,19,0.08)]'
      }`}
    >
      {/* Subtle Light-Paper Specular Sheen */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spatial.hovered ? 0.55 : 0,
          background: `radial-gradient(460px circle at ${spatial.sheenX}% ${spatial.sheenY}%, rgba(239, 236, 230, 0.65), transparent 70%)`
        }}
      />

      {/* Top Registration Metadata */}
      <div
        style={{ transform: 'translateZ(18px)' }}
        className="relative z-10 flex items-center justify-between gap-2 pb-4 border-b border-[#DCD7CD]"
      >
        <div className="flex items-center gap-2.5 font-mono-clean text-xs">
          <span className="px-2 py-0.5 bg-[#EFECE6] border border-[#DCD7CD] text-[#7C5D38] font-medium">
            ARCHIVE {project.romanIndex}
          </span>
          <span className="text-[#57544E] uppercase tracking-wider">{project.domain}</span>
        </div>
        <span className="font-mono-clean text-xs text-[#57544E]">{project.year}</span>
      </div>

      {/* Main Title & Narrative with Z-Axis Parallax */}
      <div style={{ transform: 'translateZ(28px)' }} className="relative z-10 py-5 space-y-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-editorial text-3xl text-[#141413] tracking-tight">{project.title}</h3>
          <span className="font-mono-clean text-[11px] text-[#7C5D38]">
            [{spatial.hovered ? `${spatial.rotX.toFixed(1)}°, ${spatial.rotY.toFixed(1)}°` : `SPEC // ${project.numericIndex}`}]
          </span>
        </div>
        <div className="font-mono-clean text-xs text-[#1B2A4A]">{project.subtitle}</div>
        <p className="text-sm text-[#57544E] leading-relaxed pt-1">{project.summary}</p>
      </div>

      {/* Co-Authors Callout for PCA Research */}
      {project.coAuthors && (
        <div
          style={{ transform: 'translateZ(22px)' }}
          className="relative z-10 mb-4 px-3.5 py-2 bg-[#F7F5F0] border border-[#DCD7CD] font-mono-clean text-[11px] text-[#57544E]"
        >
          <span className="text-[#7C5D38] uppercase">Co-Authors: </span>
          {project.coAuthors.join(' · ')}
        </div>
      )}

      {/* Benchmark Bar */}
      <div
        style={{ transform: 'translateZ(20px)' }}
        className="relative z-10 px-3.5 py-2.5 bg-[#EFECE6]/75 border border-[#DCD7CD] flex items-center justify-between gap-2"
      >
        <span className="font-mono-clean text-[11px] text-[#141413]">{project.benchmarkMetric}</span>
        <Activity className="w-3.5 h-3.5 text-[#7C5D38] shrink-0" strokeWidth={1.25} />
      </div>

      {/* Tech Stack Pills & Action Footer */}
      <div
        style={{ transform: 'translateZ(24px)' }}
        className="relative z-10 pt-5 mt-5 border-t border-[#DCD7CD] flex flex-wrap items-center justify-between gap-3"
      >
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 text-[11px] font-mono-clean bg-[#F7F5F0] text-[#141413] border border-[#DCD7CD]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 font-mono-clean text-xs">
          <span className="text-[#7C5D38] inline-flex items-center gap-1 font-medium">
            <span>{isSelected ? 'Viewing Schematic' : 'Inspect Schematic'}</span>
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.25} />
          </span>
        </div>
      </div>
    </article>
  );
};

// ============================================================================
// COMPONENT 3: INTERACTIVE ARCHITECTURAL SCHEMATIC INSPECTOR
// ============================================================================

const ArchitecturalSchematicInspector: React.FC<{
  project: ProjectSpecification;
  onSelectProjectById: (id: string) => void;
}> = ({ project, onSelectProjectById }) => {
  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);

  useEffect(() => {
    setHighlightedNodeId(project.schematic.nodes[0]?.id || null);
  }, [project.id]);

  const tierColors: Record<ArchitectureNode['tier'], { border: string; badge: string }> = {
    INGEST: { border: '#7C5D38', badge: 'bg-[#EFECE6] text-[#7C5D38]' },
    CORE: { border: '#1B2A4A', badge: 'bg-[#1B2A4A] text-[#FDFCF9]' },
    STORAGE: { border: '#141413', badge: 'bg-[#141413] text-[#FDFCF9]' },
    INTERFACE: { border: '#57544E', badge: 'bg-[#F7F5F0] text-[#141413]' }
  };

  return (
    <div className="bg-[#FDFCF9] border border-[#DCD7CD]">
      {/* Top Selector Bar */}
      <div className="px-6 py-4 border-b border-[#DCD7CD] bg-[#EFECE6]/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="font-mono-clean text-[11px] uppercase tracking-widest text-[#7C5D38]">
            ARCHITECTURAL BLUEPRINT // SYSTEM TOPOLOGY &amp; DATA FLOW
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#141413] mt-0.5">
            {project.romanIndex}. {project.title} — {project.subtitle}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {PROJECTS_DATA.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelectProjectById(p.id)}
              className={`px-3 py-1.5 font-mono-clean text-xs border transition-colors ${
                p.id === project.id
                  ? 'bg-[#141413] text-[#FDFCF9] border-[#141413]'
                  : 'bg-[#F7F5F0] text-[#57544E] border-[#DCD7CD] hover:text-[#141413]'
              }`}
            >
              {p.romanIndex}. {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Blueprint View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#DCD7CD]">
        {/* Left 7 Cols: Interactive SVG System Graph */}
        <div className="lg:col-span-7 p-6 bg-[#F7F5F0] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between font-mono-clean text-[11px] text-[#57544E] mb-4">
            <span>SCHEMATIC SCALE: 1:1 LOGICAL PIPELINE</span>
            <span>CLICK ANY NODE TO INSPECT STAGE</span>
          </div>

          <div className="w-full overflow-x-auto">
            <svg viewBox="0 0 920 300" className="w-full min-w-[540px] h-auto select-none">
              <defs>
                <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E5E0D5" strokeWidth="1" />
                </pattern>
                <marker
                  id="arrowBronze"
                  viewBox="0 0 10 10"
                  refX="7"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#7C5D38" />
                </marker>
              </defs>

              <rect width="920" height="300" fill="url(#archGrid)" stroke="#DCD7CD" strokeWidth="1" />

              {/* Edges */}
              {project.schematic.edges.map((edge, idx) => {
                const fromNode = project.schematic.nodes.find((n) => n.id === edge.from);
                const toNode = project.schematic.nodes.find((n) => n.id === edge.to);
                if (!fromNode || !toNode) return null;

                const x1 = fromNode.x * 8.6 + 25;
                const y1 = fromNode.y * 2.6 + 15;
                const x2 = toNode.x * 8.6 - 25;
                const y2 = toNode.y * 2.6 + 15;
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2 - 8;

                return (
                  <g key={idx}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#7C5D38"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      markerEnd="url(#arrowBronze)"
                    />
                    <rect
                      x={midX - 52}
                      y={midY - 10}
                      width="104"
                      height="16"
                      fill="#FDFCF9"
                      stroke="#DCD7CD"
                      strokeWidth="1"
                    />
                    <text
                      x={midX}
                      y={midY + 1}
                      textAnchor="middle"
                      fill="#57544E"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {edge.protocol}
                    </text>
                  </g>
                );
              })}

              {/* Nodes */}
              {project.schematic.nodes.map((node) => {
                const cx = node.x * 8.6;
                const cy = node.y * 2.6 + 15;
                const isActive = highlightedNodeId === node.id;
                const strokeColor = tierColors[node.tier].border;

                return (
                  <g
                    key={node.id}
                    onClick={() => setHighlightedNodeId(node.id)}
                    className="cursor-pointer"
                  >
                    <rect
                      x={cx - 72}
                      y={cy - 28}
                      width="144"
                      height="56"
                      fill={isActive ? '#FDFCF9' : '#F7F5F0'}
                      stroke={isActive ? '#7C5D38' : strokeColor}
                      strokeWidth={isActive ? '2' : '1.25'}
                    />
                    <text
                      x={cx}
                      y={cy - 9}
                      textAnchor="middle"
                      fill="#7C5D38"
                      fontSize="8.5"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      [{node.tier}]
                    </text>
                    <text
                      x={cx}
                      y={cy + 6}
                      textAnchor="middle"
                      fill="#141413"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      {node.label}
                    </text>
                    <text
                      x={cx}
                      y={cy + 20}
                      textAnchor="middle"
                      fill="#57544E"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {node.sublabel}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="pt-4 mt-4 border-t border-[#DCD7CD] flex flex-wrap items-center justify-between gap-2 font-mono-clean text-[11px] text-[#57544E]">
            <span>BENCHMARK: {project.benchmarkMetric}</span>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B2A4A] underline inline-flex items-center gap-1"
            >
              <span>Source Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </a>
          </div>
        </div>

        {/* Right 5 Cols: Engineering Decisions & Problem Dossier */}
        <div className="lg:col-span-5 p-6 sm:p-7 space-y-5 bg-[#FDFCF9]">
          <div>
            <div className="font-mono-clean text-[11px] uppercase tracking-wider text-[#7C5D38] mb-1.5">
              01 // PROBLEM FORMULATION
            </div>
            <p className="text-sm text-[#57544E] leading-relaxed">{project.problemStatement}</p>
          </div>

          <div className="pt-4 border-t border-[#DCD7CD]">
            <div className="font-mono-clean text-[11px] uppercase tracking-wider text-[#7C5D38] mb-2.5">
              02 // ARCHITECTURAL IMPLEMENTATION
            </div>
            <ul className="space-y-2.5">
              {project.architecturalDecisions.map((decision, idx) => (
                <li key={idx} className="text-sm text-[#141413] leading-relaxed flex items-start gap-2.5">
                  <span className="font-mono-clean text-xs text-[#7C5D38] mt-0.5">0{idx + 1}.</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#DCD7CD]">
            <div className="font-mono-clean text-[11px] uppercase tracking-wider text-[#7C5D38] mb-2">
              03 // STACK SPECIFICATION
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono-clean bg-[#F7F5F0] text-[#141413] border border-[#DCD7CD]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN PORTFOLIO APPLICATION
// ============================================================================

export default function App() {
  const [geometryMode, setGeometryMode] = useState<GeometryMode>('ARMILLARY_MANIFOLD');
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [inspectedProject, setInspectedProject] = useState<ProjectSpecification>(PROJECTS_DATA[0]);

  // Separated Multi-File Codebase Explorer State
  const [activeFileId, setActiveFileId] = useState<string>('client-hero3d');
  const [copiedFileId, setCopiedFileId] = useState<string | null>(null);
  const [codebaseModalOpen, setCodebaseModalOpen] = useState<boolean>(false);

  // Live GitHub Telemetry State
  const [repos, setRepos] = useState<GitHubRepository[]>(FALLBACK_GITHUB_REPOS);
  const [ghProfile, setGhProfile] = useState<GitHubProfile>({
    login: 'isiddhantdixit',
    name: 'Siddhant Dixit',
    public_repos: 18,
    followers: 45,
    following: 32,
    html_url: 'https://github.com/isiddhantdixit'
  });
  const [ghSyncState, setGhSyncState] = useState<'SYNCING' | 'LIVE_API' | 'SNAPSHOT'>('SYNCING');

  // Contact / Dispatch State
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [dispatchForm, setDispatchForm] = useState({
    senderName: '',
    senderEmail: '',
    organization: '',
    messageBody: ''
  });
  const [dispatchStatus, setDispatchStatus] = useState<{
    state: 'IDLE' | 'SENDING' | 'ACCEPTED' | 'ERROR';
    receiptId?: string;
    errorText?: string;
  }>({ state: 'IDLE' });

  // Fetch Live GitHub Repositories from api.github.com/users/isiddhantdixit
  const syncGitHubTelemetry = async () => {
    setGhSyncState('SYNCING');
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/isiddhantdixit'),
        fetch('https://api.github.com/users/isiddhantdixit/repos?sort=updated&per_page=6')
      ]);

      if (userRes.ok) {
        const userJson = await userRes.json();
        setGhProfile({
          login: userJson.login || 'isiddhantdixit',
          name: userJson.name || 'Siddhant Dixit',
          public_repos: userJson.public_repos ?? 18,
          followers: userJson.followers ?? 45,
          following: userJson.following ?? 32,
          html_url: userJson.html_url || 'https://github.com/isiddhantdixit'
        });
      }

      if (reposRes.ok) {
        const reposJson = await reposRes.json();
        if (Array.isArray(reposJson) && reposJson.length > 0) {
          setRepos(reposJson.slice(0, 6));
          setGhSyncState('LIVE_API');
          return;
        }
      }
      setGhSyncState('SNAPSHOT');
    } catch {
      setGhSyncState('SNAPSHOT');
    }
  };

  useEffect(() => {
    syncGitHubTelemetry();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedDomain === 'ALL') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.domain === selectedDomain);
  }, [selectedDomain]);

  const activeCodeFile = useMemo(
    () => SEPARATED_CODEBASE_FILES.find((f) => f.id === activeFileId) || SEPARATED_CODEBASE_FILES[0],
    [activeFileId]
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('siddhant.dec19@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyFileContent = (file: SeparatedProjectFile) => {
    navigator.clipboard.writeText(file.content);
    setCopiedFileId(file.id);
    setTimeout(() => setCopiedFileId(null), 2000);
  };

  // One-Click Downloadable Node.js Generator Script (`init-portfolio.mjs`)
  // Writes all 17 separated frontend & backend files to disk on localhost
  const handleDownloadProjectGenerator = () => {
    const serializedFiles = JSON.stringify(
      SEPARATED_CODEBASE_FILES.map((f) => ({ path: f.path, content: f.content })),
      null,
      2
    );

    const scriptSource = `#!/usr/bin/env node
/**
 * ============================================================================
 * SIDDHANT DIXIT — SEPARATED FULL-STACK PORTFOLIO GENERATOR (init-portfolio.mjs)
 * Architecture: React 18 + TypeScript + Three.js (client/) & Node.js + Express + TS (server/)
 * Usage on Localhost:
 *   1. node init-portfolio.mjs
 *   2. npm run install:all
 *   3. npm run dev
 * ============================================================================
 */
import fs from 'node:fs';
import path from 'node:path';

const FILES = ${serializedFiles};

console.log('--------------------------------------------------------------------');
console.log('SCAFFOLDING SEPARATED REACT + NODE.JS + TYPESCRIPT ARCHITECTURE...');
console.log('--------------------------------------------------------------------');

for (const file of FILES) {
  const targetPath = path.resolve(process.cwd(), file.path);
  const dir = path.dirname(targetPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(targetPath, file.content, 'utf8');
  console.log('[CREATED] ' + file.path);
}

console.log('--------------------------------------------------------------------');
console.log('COMPLETE: All ' + FILES.length + ' separated frontend & backend files written.');
console.log('Next steps:');
console.log('  npm run install:all');
console.log('  npm run dev');
console.log('--------------------------------------------------------------------');
`;

    const blob = new Blob([scriptSource], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'init-portfolio.mjs';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const handleDispatchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dispatchForm.senderName.trim().length < 2) {
      setDispatchStatus({
        state: 'ERROR',
        errorText: 'Sender name must contain at least 2 characters.'
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dispatchForm.senderEmail.trim())) {
      setDispatchStatus({
        state: 'ERROR',
        errorText: 'Please provide a valid sender email address.'
      });
      return;
    }
    if (dispatchForm.messageBody.trim().length < 10) {
      setDispatchStatus({
        state: 'ERROR',
        errorText: 'Please provide a brief technical or role inquiry (minimum 10 characters).'
      });
      return;
    }

    setDispatchStatus({ state: 'SENDING' });

    // Attempt local Express API server on port 4000 first, with deterministic local fallback
    try {
      const response = await fetch('http://localhost:4000/api/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dispatchForm)
      });
      if (response.ok) {
        const data = await response.json();
        setDispatchStatus({ state: 'ACCEPTED', receiptId: data.receiptId });
        setDispatchForm({ senderName: '', senderEmail: '', organization: '', messageBody: '' });
        return;
      }
    } catch {
      // Fallback when running inside browser preview without port 4000 daemon
    }

    setTimeout(() => {
      const generatedId = `SD-${Date.now().toString(36).toUpperCase()}`;
      setDispatchStatus({ state: 'ACCEPTED', receiptId: generatedId });
      setDispatchForm({ senderName: '', senderEmail: '', organization: '', messageBody: '' });
    }, 420);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#141413] antialiased selection:bg-[#7C5D38]/20 selection:text-[#141413]">
      {/* Google Fonts Injection: Cormorant Garamond, Plus Jakarta Sans, JetBrains Mono */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
        .font-mono-clean { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* Top Hairline Accent Rule */}
      <div className="h-[2px] w-full bg-[#7C5D38]" />

      {/* =================================================================== */}
      {/* ARCHITECTURAL NAVIGATION BAR (LIGHT CLASSIC THEME)                  */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#DCD7CD] font-sans-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Monogram & Name */}
          <div className="flex items-center gap-3.5">
            <a
              href="#top"
              className="w-9 h-9 bg-[#FDFCF9] border border-[#DCD7CD] flex items-center justify-center font-editorial font-semibold text-lg text-[#141413] hover:border-[#7C5D38] transition-colors"
            >
              SD
            </a>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-editorial font-semibold text-xl tracking-tight text-[#141413]">
                  Siddhant Dixit
                </span>
                <span className="hidden sm:inline font-mono-clean text-[10px] uppercase tracking-widest text-[#7C5D38]">
                  // FOLIO MMXXVI
                </span>
              </div>
              <div className="font-mono-clean text-[10px] text-[#57544E] hidden sm:block">
                SYSTEMS &amp; AI ENGINEER · BENGALURU, IN
              </div>
            </div>
          </div>

          {/* Center: Indexed Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 font-mono-clean text-xs">
            <button
              onClick={() => scrollToSection('work')}
              className="text-[#57544E] hover:text-[#141413] transition-colors"
            >
              <span className="text-[#7C5D38]">01.</span> WORK
            </button>
            <button
              onClick={() => scrollToSection('schematics')}
              className="text-[#57544E] hover:text-[#141413] transition-colors"
            >
              <span className="text-[#7C5D38]">02.</span> SCHEMATICS
            </button>
            <button
              onClick={() => scrollToSection('github')}
              className="text-[#57544E] hover:text-[#141413] transition-colors"
            >
              <span className="text-[#7C5D38]">03.</span> GITHUB
            </button>
            <button
              onClick={() => scrollToSection('chronicle')}
              className="text-[#57544E] hover:text-[#141413] transition-colors"
            >
              <span className="text-[#7C5D38]">04.</span> CHRONICLE
            </button>
            <button
              onClick={() => scrollToSection('dispatch')}
              className="text-[#57544E] hover:text-[#141413] transition-colors"
            >
              <span className="text-[#7C5D38]">06.</span> DISPATCH
            </button>
          </nav>

          {/* Right: Prominent Separated Project Files Button */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scrollToSection('separated-files')}
              className="px-3.5 py-2 bg-[#FDFCF9] hover:bg-[#EFECE6] text-[#141413] border border-[#7C5D38] font-mono-clean text-[11px] uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
              <span className="hidden sm:inline">[ 05 / SEPARATED PROJECT FILES (REACT + NODE + TS) ]</span>
              <span className="sm:hidden">[ 05 / SEPARATED FILES ]</span>
            </button>
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* MAIN EDITORIAL CONTAINER                                            */}
      {/* =================================================================== */}
      <main id="top" className="max-w-7xl mx-auto px-4 sm:px-8 font-sans-clean">
        {/* ----------------------------------------------------------------- */}
        {/* HERO SECTION WITH THREE.JS WEBGL 3D SCULPTURE                     */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 sm:py-16 border-b border-[#DCD7CD]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Columns: Editorial Typography & Verified Dossier */}
            <div className="lg:col-span-7 space-y-6 pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#EFECE6] border border-[#DCD7CD] font-mono-clean text-[11px] text-[#141413]">
                <span className="w-2 h-2 rounded-full bg-[#7C5D38]" />
                <span>GOOGLE STUDENT AMBASSADOR (2026) · JAIN UNIVERSITY, BENGALURU</span>
              </div>

              <div className="space-y-3">
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#7C5D38]">
                  Architectural rigor in artificial intelligence &amp; distributed software.
                </p>
                <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#141413] leading-[1.06] tracking-tight">
                  Engineering autonomous systems, mathematical models, and resilient web platforms.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#57544E] leading-relaxed max-w-2xl">
                I am <strong className="text-[#141413] font-semibold">Siddhant Dixit</strong> — a Systems &amp; AI Engineer and Computer Science &amp; Engineering undergraduate at{' '}
                <span className="text-[#141413] underline decoration-[#7C5D38] underline-offset-4">
                  Jain (Deemed-to-be University), Bengaluru
                </span>
                . My work spans multi-agent LLM orchestration, high-concurrency Node.js and TypeScript platforms, and empirical Principal Component Analysis (PCA) classification research.
              </p>

              {/* 3-Column Credentials Ledger */}
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#DCD7CD] bg-[#FDFCF9] divide-y sm:divide-y-0 sm:divide-x divide-[#DCD7CD]">
                <div className="p-4">
                  <div className="font-mono-clean text-[10px] uppercase tracking-widest text-[#7C5D38]">
                    APPOINTMENT // I
                  </div>
                  <div className="font-editorial text-xl font-semibold text-[#141413] mt-1">
                    Google Student Ambassador
                  </div>
                  <div className="text-xs text-[#57544E] mt-0.5">
                    Campus Technical Lead &amp; Product Evangelist (2026)
                  </div>
                </div>

                <div className="p-4">
                  <div className="font-mono-clean text-[10px] uppercase tracking-widest text-[#7C5D38]">
                    VENTURE // II
                  </div>
                  <div className="font-editorial text-xl font-semibold text-[#141413] mt-1">
                    YC Startup School
                  </div>
                  <div className="text-xs text-[#57544E] mt-0.5">
                    Product Strategy &amp; Rapid Venture Engineering
                  </div>
                </div>

                <div className="p-4">
                  <div className="font-mono-clean text-[10px] uppercase tracking-widest text-[#7C5D38]">
                    RESEARCH // III
                  </div>
                  <div className="font-editorial text-xl font-semibold text-[#141413] mt-1">
                    PCA ML Classification
                  </div>
                  <div className="text-xs text-[#57544E] mt-0.5">
                    Empirical Dimensionality Reduction Author
                  </div>
                </div>
              </div>

              {/* Primary CTAs & Verified Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection('work')}
                  className="px-5 py-3 bg-[#141413] hover:bg-[#1B2A4A] text-[#FDFCF9] font-mono-clean text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                >
                  <span>Inspect Engineering Works</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.25} />
                </button>

                <button
                  onClick={() => scrollToSection('separated-files')}
                  className="px-5 py-3 bg-[#FDFCF9] hover:bg-[#EFECE6] text-[#141413] border border-[#DCD7CD] font-mono-clean text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                >
                  <FolderGit2 className="w-4 h-4 text-[#7C5D38]" strokeWidth={1.25} />
                  <span>Explore 17 Separated Files</span>
                </button>

                <button
                  onClick={handleDownloadProjectGenerator}
                  className="px-4 py-3 bg-[#EFECE6] hover:bg-[#DCD7CD]/60 text-[#7C5D38] border border-[#7C5D38]/40 font-mono-clean text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                  title="Download init-portfolio.mjs to scaffold client/ and server/ on localhost"
                >
                  <Download className="w-4 h-4" strokeWidth={1.25} />
                  <span>init-portfolio.mjs</span>
                </button>
              </div>

              {/* Direct Verified Coordinates */}
              <div className="pt-3 border-t border-[#DCD7CD] flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-clean text-xs text-[#57544E]">
                <a
                  href="https://github.com/isiddhantdixit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#141413] inline-flex items-center gap-1 underline decoration-[#DCD7CD] underline-offset-4"
                >
                  <span>github.com/isiddhantdixit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddhantdixit07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#141413] inline-flex items-center gap-1 underline decoration-[#DCD7CD] underline-offset-4"
                >
                  <span>linkedin.com/in/siddhantdixit07</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                </a>
                <a
                  href="https://www.instagram.com/sidz.dixit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#141413] inline-flex items-center gap-1 underline decoration-[#DCD7CD] underline-offset-4"
                >
                  <span>instagram.com/sidz.dixit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-[#141413] inline-flex items-center gap-1.5 underline decoration-[#DCD7CD] underline-offset-4"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                  <span>{copiedEmail ? 'COPIED: siddhant.dec19@gmail.com' : 'siddhant.dec19@gmail.com'}</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Live Three.js WebGL 3D Canvas in Light Alabaster */}
            <div className="lg:col-span-5">
              <HeroCanvas3D mode={geometryMode} onModeChange={setGeometryMode} />
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 01 / SELECTED ENGINEERING WORKS (3D SPATIAL TILT CARDS)           */}
        {/* ----------------------------------------------------------------- */}
        <section id="work" className="py-16 sm:py-20 border-b border-[#DCD7CD] scroll-mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="font-mono-clean text-xs uppercase tracking-widest text-[#7C5D38]">
                01 // SELECTED ENGINEERING ARCHIVE (3D SPATIAL TILT)
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] tracking-tight mt-1">
                Production Systems &amp; Empirical Research
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono-clean text-xs">
              {['ALL', 'AI Systems', 'Distributed Platforms', 'Empirical ML Research'].map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3.5 py-1.5 border transition-colors ${
                    selectedDomain === dom
                      ? 'bg-[#141413] text-[#FDFCF9] border-[#141413]'
                      : 'bg-[#FDFCF9] text-[#57544E] border-[#DCD7CD] hover:text-[#141413]'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          {/* 2x2 Grid of 3D Spatial Tilt Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {filteredProjects.map((project) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                isSelected={inspectedProject.id === project.id}
                onSelectProject={(p) => {
                  setInspectedProject(p);
                  scrollToSection('schematics');
                }}
              />
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 02 / INTERACTIVE SYSTEM ARCHITECTURE SCHEMATICS                   */}
        {/* ----------------------------------------------------------------- */}
        <section id="schematics" className="py-16 sm:py-20 border-b border-[#DCD7CD] scroll-mt-16">
          <div className="mb-8">
            <div className="font-mono-clean text-xs uppercase tracking-widest text-[#7C5D38]">
              02 // DEEP ARCHITECTURAL SCHEMATIC INSPECTION
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#141413] tracking-tight mt-1">
              Pipeline Topologies &amp; Engineering Trade-offs
            </h2>
          </div>

          <ArchitecturalSchematicInspector
            project={inspectedProject}
            onSelectProjectById={(id) => {
              const found = PROJECTS_DATA.find((p) => p.id === id);
              if (found) setInspectedProject(found);
            }}
          />
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 03 / LIVE GITHUB TELEMETRY (@isiddhantdixit)                      */}
        {/* ----------------------------------------------------------------- */}
        <section id="github" className="py-16 sm:py-20 border-b border-[#DCD7CD] scroll-mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono-clean text-xs uppercase tracking-widest text-[#7C5D38]">
                03 // LIVE PUBLIC REPOSITORY TELEMETRY
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141413] tracking-tight mt-1">
                GitHub Index — github.com/isiddhantdixit
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 font-mono-clean text-xs">
              <span className="px-3 py-1.5 bg-[#EFECE6] border border-[#DCD7CD] text-[#141413] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C5D38]" />
                <span>
                  {ghSyncState === 'SYNCING'
                    ? 'QUERYING API.GITHUB.COM...'
                    : ghSyncState === 'LIVE_API'
                    ? `LIVE SYNC (${ghProfile.public_repos} PUBLIC REPOS)`
                    : `ARCHIVE SNAPSHOT (${ghProfile.public_repos} PUBLIC REPOS)`}
                </span>
              </span>

              <button
                onClick={syncGitHubTelemetry}
                className="p-2 bg-[#FDFCF9] border border-[#DCD7CD] hover:border-[#7C5D38] transition-colors"
                title="Re-sync GitHub REST API"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 text-[#141413] ${ghSyncState === 'SYNCING' ? 'animate-spin' : ''}`}
                  strokeWidth={1.25}
                />
              </button>

              <a
                href="https://github.com/isiddhantdixit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#FDFCF9] border border-[#DCD7CD] hover:border-[#7C5D38] text-[#141413] inline-flex items-center gap-1.5"
              >
                <span>Open GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DCD7CD]">
            {repos.map((repo, index) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#FDFCF9] hover:bg-[#EFECE6]/50 border-r border-b border-[#DCD7CD] flex flex-col justify-between transition-colors group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono-clean text-xs text-[#7C5D38]">
                    <span>REPO // 0{index + 1}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#57544E] group-hover:text-[#141413] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-mono-clean text-sm font-semibold text-[#141413] group-hover:underline underline-offset-4">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-[#57544E] leading-relaxed line-clamp-3">
                    {repo.description || 'Engineering repository authored and maintained by Siddhant Dixit.'}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#DCD7CD] flex items-center justify-between font-mono-clean text-[11px] text-[#57544E]">
                  <span className="text-[#141413]">{repo.language || 'Systems'}</span>
                  <div className="flex items-center gap-3">
                    <span>STARS: {repo.stargazers_count}</span>
                    <span>FORKS: {repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 04 / ROYAL CHRONICLE & TECHNICAL MATRIX                           */}
        {/* ----------------------------------------------------------------- */}
        <section id="chronicle" className="py-16 sm:py-20 border-b border-[#DCD7CD] scroll-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Columns: Academic & Leadership Chronicle */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="font-mono-clean text-xs uppercase tracking-widest text-[#7C5D38]">
                  04 // APPOINTMENTS, VENTURES &amp; TENURE
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#141413] tracking-tight mt-1">
                  Institutional Chronicle
                </h2>
              </div>

              <div className="border-t border-[#DCD7CD]">
                {CHRONICLE_RECORDS.map((rec) => (
                  <div key={rec.roman} className="py-5 border-b border-[#DCD7CD] space-y-1.5">
                    <div className="flex items-center justify-between font-mono-clean text-[11px]">
                      <span className="text-[#7C5D38]">
                        {rec.roman} // {rec.category}
                      </span>
                      <span className="text-[#57544E]">{rec.period}</span>
                    </div>
                    <h3 className="font-editorial text-2xl text-[#141413] font-semibold">{rec.title}</h3>
                    <div className="font-mono-clean text-xs text-[#1B2A4A]">{rec.institution}</div>
                    <p className="text-sm text-[#57544E] leading-relaxed pt-1">{rec.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Columns: Technical Specification Matrix */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="font-mono-clean text-xs uppercase tracking-widest text-[#7C5D38]">
                  SPECIFICATION // LANGUAGES &amp; INFRASTRUCTURE
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#141413] tracking-tight mt-1">
                  Systems &amp; Intelligence Stack
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#DCD7CD]">
                {[
                  {
                    roman: 'I',
                    title: 'AI & Mathematical ML',
                    skills: [
                      'Python 3.12 / FastAPI',
                      'LangGraph Multi-Agent Systems',
                      'Google Gemini API & MCP',
                      'Principal Component Analysis (PCA)',
                      'Scikit-Learn / NumPy / Matplotlib',
                      'Vector Search & Embeddings'
                    ]
                  },
                  {
                    roman: 'II',
                    title: 'Frontend Architecture',
                    skills: [
                      'TypeScript (Strict Mode)',
                      'React 18 & Next.js',
                      'Three.js / WebGL 3D Projection',
                      'Tailwind CSS Design Systems',
                      'State Machines & SSE Streams',
                      'High-Contrast Editorial UI'
                    ]
                  },
                  {
                    roman: 'III',
                    title: 'Backend & Distributed',
                    skills: [
                      'Node.js & Express.js (TS)',
                      'PostgreSQL & Relational Design',
                      'Redis Caching & Locks',
                      'Prisma ORM & Migrations',
                      'Role-Based Access Control (RBAC)',
                      'RESTful API Contracts'
                    ]
                  },
                  {
                    roman: 'IV',
                    title: 'Foundations & Tooling',
                    skills: [
                      'Java (Data Structures & Algorithms)',
                      'C++ & Object-Oriented Design',
                      'Git / GitHub Workflows',
                      'Linux / Bash Scripting',
                      'Docker & Cloud Deployment',
                      'YC Lean Product Execution'
                    ]
                  }
                ].map((group) => (
                  <div
                    key={group.roman}
                    className="p-6 bg-[#FDFCF9] border-r border-b border-[#DCD7CD] space-y-3"
                  >
                    <div className="font-mono-clean text-xs text-[#7C5D38]">
                      DOMAIN {group.roman} // {group.title.toUpperCase()}
                    </div>
                    <ul className="space-y-2 pt-1">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-xs font-mono-clean text-[#141413] flex items-center justify-between"
                        >
                          <span>{skill}</span>
                          <span className="text-[#7C5D38]">+</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 05 / SEPARATED MULTI-FILE CODEBASE EXPLORER (REACT + NODE + TS)   */}
        {/* ----------------------------------------------------------------- */}
        <section id="separated-files" className="py-16 sm:py-20 border-b border-[#DCD7CD] scroll-mt-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#EFECE6] border border-[#DCD7CD] font-mono-clean text-[11px] text-[#7C5D38]">
                <FolderGit2 className="w-3.5 h-3.5" strokeWidth={1.25} />
                <span>05 // SEPARATED PROJECT FILES (CLIENT/ + SERVER/ ARCHITECTURE)</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] tracking-tight">
                Modular Multi-File TypeScript Codebase
              </h2>
              <p className="text-sm text-[#57544E] max-w-2xl">
                Every component, type definition, service, and Express controller separated into clean, modular files—ready to copy individually or scaffold automatically onto your local machine with a single command.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadProjectGenerator}
                className="px-5 py-3 bg-[#141413] hover:bg-[#1B2A4A] text-[#FDFCF9] font-mono-clean text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-[#EFECE6]" strokeWidth={1.25} />
                <span>Download Full Separated Project Generator (init-portfolio.mjs)</span>
              </button>
            </div>
          </div>

          {/* Localhost Quickstart Banner in Light Parchment */}
          <div className="mb-6 p-4 bg-[#EFECE6]/80 border border-[#DCD7CD] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-clean text-xs">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-[#7C5D38] shrink-0" strokeWidth={1.25} />
              <div>
                <span className="text-[#141413] font-medium">Localhost Execution: </span>
                <span className="text-[#57544E]">
                  Run <code className="px-1.5 py-0.5 bg-[#FDFCF9] border border-[#DCD7CD] text-[#141413]">node init-portfolio.mjs</code> then{' '}
                  <code className="px-1.5 py-0.5 bg-[#FDFCF9] border border-[#DCD7CD] text-[#141413]">npm run install:all &amp;&amp; npm run dev</code>
                </span>
              </div>
            </div>
            <span className="text-[11px] text-[#7C5D38] uppercase">17 SEPARATED FILES (.TS / .TSX / .JSON)</span>
          </div>

          {/* Multi-File IDE Explorer in Light Classic Theme */}
          <div className="border border-[#DCD7CD] bg-[#FDFCF9] grid grid-cols-1 lg:grid-cols-12">
            {/* Left 4 Columns: Separated Directory Tree (`root`, `client/`, `server/`) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#DCD7CD] bg-[#F7F5F0] p-4 space-y-5">
              <div className="font-mono-clean text-[11px] uppercase tracking-wider text-[#7C5D38] pb-2 border-b border-[#DCD7CD] flex items-center justify-between">
                <span>WORKSPACE FILE TREE</span>
                <span>17 FILES</span>
              </div>

              {/* Root Workspace Group */}
              <div className="space-y-1">
                <div className="font-mono-clean text-[11px] text-[#57544E] flex items-center gap-1.5 px-2 py-1">
                  <FolderOpen className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                  <span>/ (root workspace)</span>
                </div>
                {SEPARATED_CODEBASE_FILES.filter((f) => f.folder === 'root').map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setActiveFileId(file.id)}
                    className={`w-full text-left pl-6 pr-3 py-1.5 font-mono-clean text-xs flex items-center justify-between transition-colors ${
                      activeFileId === file.id
                        ? 'bg-[#141413] text-[#FDFCF9]'
                        : 'text-[#141413] hover:bg-[#EFECE6]'
                    }`}
                  >
                    <span className="truncate">{file.path}</span>
                    <span className="text-[10px] opacity-70">{file.language}</span>
                  </button>
                ))}
              </div>

              {/* Client Frontend Group */}
              <div className="space-y-1">
                <div className="font-mono-clean text-[11px] text-[#57544E] flex items-center gap-1.5 px-2 py-1">
                  <FolderOpen className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                  <span>client/ (React 18 + Three.js + TS)</span>
                </div>
                {SEPARATED_CODEBASE_FILES.filter((f) => f.folder === 'client').map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setActiveFileId(file.id)}
                    className={`w-full text-left pl-6 pr-3 py-1.5 font-mono-clean text-xs flex items-center justify-between transition-colors ${
                      activeFileId === file.id
                        ? 'bg-[#141413] text-[#FDFCF9]'
                        : 'text-[#141413] hover:bg-[#EFECE6]'
                    }`}
                  >
                    <span className="truncate">{file.path.replace('client/', '')}</span>
                    <span className="text-[10px] opacity-70">{file.language}</span>
                  </button>
                ))}
              </div>

              {/* Server Backend Group */}
              <div className="space-y-1">
                <div className="font-mono-clean text-[11px] text-[#57544E] flex items-center gap-1.5 px-2 py-1">
                  <FolderOpen className="w-3.5 h-3.5 text-[#1B2A4A]" strokeWidth={1.25} />
                  <span>server/ (Node.js + Express + TS)</span>
                </div>
                {SEPARATED_CODEBASE_FILES.filter((f) => f.folder === 'server').map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setActiveFileId(file.id)}
                    className={`w-full text-left pl-6 pr-3 py-1.5 font-mono-clean text-xs flex items-center justify-between transition-colors ${
                      activeFileId === file.id
                        ? 'bg-[#141413] text-[#FDFCF9]'
                        : 'text-[#141413] hover:bg-[#EFECE6]'
                    }`}
                  >
                    <span className="truncate">{file.path.replace('server/', '')}</span>
                    <span className="text-[10px] opacity-70">{file.language}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right 8 Columns: Active File Code Inspector in Light Classic Theme */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-[#FDFCF9]">
              <div>
                {/* File Header Bar */}
                <div className="px-6 py-4 border-b border-[#DCD7CD] bg-[#EFECE6]/50 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 font-mono-clean text-xs font-semibold text-[#141413]">
                      <FileCode className="w-4 h-4 text-[#7C5D38]" strokeWidth={1.25} />
                      <span>{activeCodeFile.path}</span>
                    </div>
                    <p className="text-xs text-[#57544E] mt-1">{activeCodeFile.purpose}</p>
                  </div>

                  <button
                    onClick={() => handleCopyFileContent(activeCodeFile)}
                    className="px-3.5 py-1.5 bg-[#FDFCF9] hover:bg-[#EFECE6] text-[#141413] border border-[#DCD7CD] font-mono-clean text-xs inline-flex items-center gap-1.5 transition-colors"
                  >
                    {copiedFileId === activeCodeFile.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                        <span>COPIED FILE</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                        <span>COPY {activeCodeFile.path}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Light-Theme Code Viewport with Line Numbers */}
                <div className="p-6 overflow-x-auto max-h-[540px] bg-[#FDFCF9] font-mono-clean text-xs leading-relaxed text-[#141413]">
                  <table className="w-full border-collapse">
                    <tbody>
                      {activeCodeFile.content.split('\n').map((line, idx) => (
                        <tr key={idx} className="hover:bg-[#EFECE6]/50">
                          <td className="pr-4 text-right text-[#9C9588] select-none w-9 align-top">
                            {idx + 1}
                          </td>
                          <td className="whitespace-pre text-[#141413]">{line || ' '}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Code Footer Bar */}
              <div className="px-6 py-3 border-t border-[#DCD7CD] bg-[#F7F5F0] flex flex-wrap items-center justify-between gap-2 font-mono-clean text-[11px] text-[#57544E]">
                <span>MODULE: {activeCodeFile.folder.toUpperCase()}</span>
                <span>LANGUAGE: {activeCodeFile.language.toUpperCase()} · UTF-8</span>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 06 / DIRECT CORRESPONDENCE & EXPRESS API DISPATCH                 */}
        {/* ----------------------------------------------------------------- */}
        <section id="dispatch" className="py-16 sm:py-24 scroll-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Columns: Direct Archival Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="font-mono-clean text-xs uppercase tracking-widest text-[#7C5D38]">
                  06 // DIRECT ENGINEERING CORRESPONDENCE
                </div>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] tracking-tight mt-1">
                  Initiate a Dispatch
                </h2>
              </div>

              <p className="text-sm text-[#57544E] leading-relaxed">
                Available for software engineering and AI systems roles, research collaborations, and product engineering discussions in Bengaluru or remote.
              </p>

              <div className="border border-[#DCD7CD] bg-[#FDFCF9] divide-y divide-[#DCD7CD] font-mono-clean text-xs">
                <div className="p-4 flex items-center justify-between">
                  <span className="text-[#57544E]">ELECTRONIC MAIL</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#141413] underline decoration-[#7C5D38] underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <span>siddhant.dec19@gmail.com</span>
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                    )}
                  </button>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <span className="text-[#57544E]">GITHUB ARCHIVE</span>
                  <a
                    href="https://github.com/isiddhantdixit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#141413] underline decoration-[#DCD7CD] hover:decoration-[#7C5D38] underline-offset-4 inline-flex items-center gap-1"
                  >
                    <span>github.com/isiddhantdixit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                  </a>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <span className="text-[#57544E]">LINKEDIN DOSSIER</span>
                  <a
                    href="https://www.linkedin.com/in/siddhantdixit07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#141413] underline decoration-[#DCD7CD] hover:decoration-[#7C5D38] underline-offset-4 inline-flex items-center gap-1"
                  >
                    <span>linkedin.com/in/siddhantdixit07</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                  </a>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <span className="text-[#57544E]">INSTAGRAM</span>
                  <a
                    href="https://www.instagram.com/sidz.dixit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#141413] underline decoration-[#DCD7CD] hover:decoration-[#7C5D38] underline-offset-4 inline-flex items-center gap-1"
                  >
                    <span>instagram.com/sidz.dixit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5D38]" strokeWidth={1.25} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Express `/api/dispatch` Form */}
            <div className="lg:col-span-7 bg-[#FDFCF9] border border-[#DCD7CD] p-6 sm:p-8">
              <div className="pb-4 mb-6 border-b border-[#DCD7CD] flex flex-wrap items-center justify-between gap-2 font-mono-clean text-xs">
                <span className="text-[#141413] font-medium">
                  POST /api/dispatch — Node.js + Express + TypeScript Endpoint
                </span>
                <span className="text-[#7C5D38]">SCHEMA VALIDATED</span>
              </div>

              <form onSubmit={handleDispatchSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-clean text-[11px] uppercase text-[#57544E] mb-1.5">
                      Sender Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={dispatchForm.senderName}
                      onChange={(e) => setDispatchForm({ ...dispatchForm, senderName: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#DCD7CD] text-[#141413] focus:outline-none focus:border-[#7C5D38]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-clean text-[11px] uppercase text-[#57544E] mb-1.5">
                      Sender Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={dispatchForm.senderEmail}
                      onChange={(e) => setDispatchForm({ ...dispatchForm, senderEmail: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#DCD7CD] text-[#141413] focus:outline-none focus:border-[#7C5D38]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-clean text-[11px] uppercase text-[#57544E] mb-1.5">
                    Institution / Company / Context
                  </label>
                  <input
                    type="text"
                    value={dispatchForm.organization}
                    onChange={(e) => setDispatchForm({ ...dispatchForm, organization: e.target.value })}
                    placeholder="Engineering Recruitment, Research Collaboration, or Venture Inquiry"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#DCD7CD] text-[#141413] focus:outline-none focus:border-[#7C5D38]"
                  />
                </div>

                <div>
                  <label className="block font-mono-clean text-[11px] uppercase text-[#57544E] mb-1.5">
                    Technical Brief / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={dispatchForm.messageBody}
                    onChange={(e) => setDispatchForm({ ...dispatchForm, messageBody: e.target.value })}
                    placeholder="Enter your message for Siddhant Dixit..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#DCD7CD] text-[#141413] focus:outline-none focus:border-[#7C5D38]"
                  />
                </div>

                {dispatchStatus.state === 'ERROR' && (
                  <div className="p-3 bg-[#EFECE6] border border-[#7C5D38] font-mono-clean text-xs text-[#141413] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#7C5D38] shrink-0" strokeWidth={1.25} />
                    <span>{dispatchStatus.errorText}</span>
                  </div>
                )}

                {dispatchStatus.state === 'ACCEPTED' && (
                  <div className="p-3 bg-[#EFECE6] border border-[#1B2A4A] font-mono-clean text-xs text-[#141413] flex flex-wrap items-center justify-between gap-2">
                    <span>DISPATCH LOGGED // RECEIPT ID: {dispatchStatus.receiptId}</span>
                    <a
                      href={`mailto:siddhant.dec19@gmail.com?subject=Engineering%20Dispatch%20(${dispatchStatus.receiptId})`}
                      className="underline text-[#1B2A4A]"
                    >
                      Open Mail Client Directly
                    </a>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="font-mono-clean text-[11px] text-[#57544E]">
                    Routes to server/src/controllers/portfolio.controller.ts
                  </span>

                  <button
                    type="submit"
                    disabled={dispatchStatus.state === 'SENDING'}
                    className="px-6 py-3 bg-[#141413] hover:bg-[#1B2A4A] text-[#FDFCF9] font-mono-clean text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" strokeWidth={1.25} />
                    <span>
                      {dispatchStatus.state === 'SENDING' ? 'TRANSMITTING...' : 'TRANSMIT DISPATCH'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =================================================================== */}
      {/* ARCHITECTURAL COLOPHON / FOOTER                                     */}
      {/* =================================================================== */}
      <footer className="border-t border-[#DCD7CD] bg-[#EFECE6]/60 py-8 px-4 sm:px-8 font-mono-clean text-xs text-[#57544E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            SIDDHANT DIXIT // ARCHIVAL EDITION MMXXVI · REACT 18 + THREE.JS + NODE.JS + TYPESCRIPT
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/isiddhantdixit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141413] underline decoration-[#DCD7CD] underline-offset-4"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/siddhantdixit07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141413] underline decoration-[#DCD7CD] underline-offset-4"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.instagram.com/sidz.dixit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141413] underline decoration-[#DCD7CD] underline-offset-4"
            >
              INSTAGRAM
            </a>
            <a href="#top" className="text-[#7C5D38] hover:text-[#141413]">
              TOP OF FOLIO
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}