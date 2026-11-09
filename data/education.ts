export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
  courses: string[];
  achievements: string[];
  current: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Ingénieur en Système Logiciel",
    institution: "ENSEEIHT — École Nationale Supérieure d'Électrotechnique, d'Électronique, d'Informatique, d'Hydraulique et des Télécommunications",
    location: "Toulouse, France",
    startYear: "2026",
    endYear: "2028",
    description:
      "Formation d'ingénieur de haut niveau en spécialité Système Logiciel, couvrant l'architecture logicielle avancée, les systèmes distribués, le Cloud Computing et le génie logiciel industriel.",
    courses: [
      "Architecture des Systèmes Logiciels",
      "Systèmes Distribués",
      "Cloud Computing & DevOps",
      "Génie Logiciel Avancé",
      "Sécurité Informatique",
      "Bases de Données Avancées",
    ],
    achievements: [],
    current: true,
  },
  {
    id: "edu-2",
    degree: "Ingénieur en Génie Logiciel",
    institution: "ENSIAS — École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
    location: "Rabat, Maroc",
    startYear: "2024",
    endYear: "2026",
    description:
      "Formation d'ingénieur en Génie Logiciel avec une forte orientation développement Full-Stack, microservices et architecture cloud. Projets intensifs en équipe Agile.",
    courses: [
      "Développement Full-Stack (Java/Spring, React)",
      "Architecture Microservices",
      "DevOps & CI/CD",
      "Gestion de Projets Agile",
      "Bases de Données & Big Data",
      "Réseaux & Sécurité",
    ],
    achievements: [
      "Vice-Président de la Junior Entreprise ENSIAS",
      "Responsable Sponsoring — Club Social CINDH",
    ],
    current: false,
  },
  {
    id: "edu-3",
    degree: "Classes Préparatoires aux Grandes Écoles (CPGE)",
    institution: "CPGE — Physique & Sciences de l'Ingénieur",
    location: "Maroc",
    startYear: "2022",
    endYear: "2024",
    description:
      "Formation intensive en mathématiques, physique et sciences de l'ingénieur. Préparation aux concours des grandes écoles d'ingénieurs. Développement de la rigueur analytique et de la capacité à résoudre des problèmes complexes.",
    courses: [
      "Mathématiques Avancées",
      "Physique",
      "Sciences de l'Ingénieur",
      "Informatique",
    ],
    achievements: [
      "Admis à l'ENSIAS — Grande école nationale d'informatique",
    ],
    current: false,
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: "2025",
    description:
      "Certification professionnelle validant la maîtrise avancée du langage Java SE 17 : API, concurrence, modules, et bonnes pratiques de développement.",
  },
  {
    id: "cert-2",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    description:
      "Certification fondamentale AWS validant la compréhension des services cloud AWS, de l'architecture, de la sécurité et de la tarification.",
  },
  {
    id: "cert-3",
    title: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    description:
      "Certification AWS validant les connaissances en intelligence artificielle et machine learning sur la plateforme AWS.",
  },
];
