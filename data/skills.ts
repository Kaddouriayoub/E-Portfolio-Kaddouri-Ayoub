export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    category: "Développement Backend",
    icon: "Code",
    skills: [
      "Java & Spring Boot / Spring Cloud",
      "Python & FastAPI",
      "Node.js & Express.js",
      "Apache Kafka",
      "RabbitMQ",
      "Architecture Microservices",
      "API REST",
    ],
  },
  {
    id: "frontend",
    category: "Développement Frontend & Mobile",
    icon: "MessageSquare",
    skills: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript / JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "cloud",
    category: "Cloud & DevOps",
    icon: "BarChart",
    skills: [
      "AWS (EC2, RDS, ECR, ALB, WAF, Secrets Manager, CloudWatch)",
      "Docker & Docker Compose",
      "Kubernetes",
      "Terraform (IaC)",
      "Ansible",
      "GitHub Actions (CI/CD)",
      "Nginx",
    ],
  },
  {
    id: "data",
    category: "Données & Observabilité",
    icon: "Star",
    skills: [
      "PostgreSQL / SQL",
      "MongoDB",
      "TimescaleDB",
      "DuckDB",
      "Redis",
      "OpenTelemetry",
      "Prometheus & Jaeger",
    ],
  },
  {
    id: "methods",
    category: "Méthodologies & Outils",
    icon: "Users",
    skills: [
      "Méthodes Agile / Scrum",
      "Git & GitHub",
      "Linux",
      "Bash Scripting",
      "JUnit & Tests Unitaires",
      "Infrastructure as Code",
    ],
  },
  {
    id: "languages",
    category: "Langues",
    icon: "Globe",
    skills: [
      "Français — Professionnel (C1)",
      "Anglais — Professionnel (C1)",
      "Arabe — Langue maternelle",
    ],
  },
];
