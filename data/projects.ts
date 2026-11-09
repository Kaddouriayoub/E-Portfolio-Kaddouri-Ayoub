export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Digital Twin pour l'optimisation des performances microservices",
    subtitle: "Observabilité & Machine Learning",
    description:
      "Digital Twin temps réel pour superviser et simuler les performances d'une architecture microservices : collecte de métriques, découverte de topologie, architecture event-driven et moteur de simulation What-If.",
    details: [
      "Collecte des métriques et traces via OpenTelemetry, Prometheus et Jaeger.",
      "Architecture event-driven avec Apache Kafka pour la propagation temps réel des événements système.",
      "Détection d'anomalies hybride : méthodes statistiques (Z-score, EWMA, régression linéaire) + service ML (Isolation Forest) avec réentraînement automatique sur historique TimescaleDB.",
      "Moteur de simulation What-If permettant d'anticiper l'impact de changements architecturaux.",
    ],
    techStack: ["Node.js", "React", "Apache Kafka", "OpenTelemetry", "Prometheus", "Jaeger", "Python/FastAPI", "TimescaleDB", "Docker"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "CampusLink",
    subtitle: "Plateforme étudiante en architecture microservices",
    description:
      "Plateforme étudiante de marketplace, colocation, offres et événements, intégrant un assistant IA, basée sur 7 microservices.",
    details: [
      "Conçu selon une méthodologie Agile : marketplace, colocation, offres d'emploi, événements étudiants et assistant IA intégré.",
      "Architecture microservices : API Gateway, Eureka Service Discovery, communication inter-services via Feign et RabbitMQ.",
      "Chaîne CI/CD complète avec GitHub Actions : build, tests, packaging Docker, déploiement Kubernetes sur AWS.",
      "Infrastructure provisionnée avec Terraform (IaC).",
    ],
    techStack: ["Spring Boot", "Spring Cloud", "React", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes", "GitHub Actions", "AWS", "Terraform"],
    featured: true,
  },
  {
    id: "proj-3",
    title: "Modernisation d'Infrastructure Cloud AWS",
    subtitle: "Migration multi-AZ sécurisée",
    description:
      "Migration d'une architecture AWS mono-instance vers une infrastructure multi-AZ sécurisée, provisionnée en Infrastructure as Code.",
    details: [
      "Migration d'une architecture mono-instance vers une infrastructure multi-AZ sécurisée.",
      "Composants déployés : ALB, WAF, sous-réseaux privés, bastion host, RDS, ECR, Secrets Manager, CloudWatch.",
      "Infrastructure entièrement provisionnée avec Terraform (IaC) et intégrée à une chaîne CI/CD avec analyse de sécurité tfsec.",
    ],
    techStack: ["AWS", "Terraform", "Docker", "GitHub Actions", "tfsec"],
    featured: false,
  },
];
