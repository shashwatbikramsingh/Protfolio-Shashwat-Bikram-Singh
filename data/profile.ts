export interface SocialLink {
  id: string
  name: string
  url: string
  handle: string
  description: string
  icon: "linkedin" | "github" | "instagram" | "mail"
}

export const PERSONAL_INFO = {
  name: "Shashwat Bikram Singh",
  nickname: "Shashwat",
  title: "Data Engineer & Software Developer",
  tagline: "Building Data-Driven Digital Experiences & High-Performance Intelligent Systems.",
  location: "Bengaluru, India",
  email: "shashwatbsingh@gmail.com",
  status: "Open to Internships • B.Tech CSE • Builder",
  bio: [
    "I'm Shashwat Bikram Singh—a curious builder, data engineer, and software developer based in Bengaluru, India. Currently pursuing my Bachelor of Technology in Computer Science & Engineering at Jain University (2025–2029), I love turning ideas into practical, high-impact digital experiences.",
    "My technical journey centers on data engineering pipelines, Python systems, scalable full-stack applications, and exploring how AI solves meaningful real-world challenges. Beyond code, I value discipline, continuous learning, consistent effort, and surrounding myself with people who inspire growth.",
    "From co-authoring empirical machine learning research on PCA dimensionality reduction to engineering full-stack platforms like HackaMate, MEDEQUIP, Ghumau, and AlertNet, I combine structured computational pipelines with clean, user-centric engineering.",
  ],
  stats: [
    { label: "Degree & Specialization", value: "B.Tech CSE" },
    { label: "University", value: "Jain University" },
    { label: "Hackathon Track", value: "1x Runner-Up" },
    { label: "Location", value: "Bengaluru" },
  ],
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shashwat-bikram-singh-62364438a/",
    handle: "in/shashwatbsingh",
    description: "Professional updates, career trajectory, and tech discussions",
    icon: "linkedin",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/shashwatbikramsingh",
    handle: "shashwatbikramsingh",
    description: "Open source repositories, hackathon projects, and data engineering pipelines",
    icon: "github",
  },
  {
    id: "mail",
    name: "Direct Email",
    url: "mailto:shashwatbsingh@gmail.com",
    handle: "shashwatbsingh@gmail.com",
    description: "Direct conversations, internship inquiries, and engineering collaborations",
    icon: "mail",
  },
]
