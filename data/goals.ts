export interface Goal {
  id: string;
  horizon: "Short-term" | "Medium-term" | "Long-term";
  timeframe: string;
  title: string;
  description: string;
  icon: string;
}

export interface TargetRole {
  title: string;
  industry: string;
}

export const careerGoals: Goal[] = [
  {
    id: "goal-1",
    horizon: "Short-term",
    timeframe: "Juin – Décembre 2027",
    title: "Stage + Alternance en ingénierie logicielle",
    description:
      "Décrocher un stage de 3 à 4 mois à partir de juin 2027 dans une entreprise innovante, suivi d'une alternance à partir de septembre 2027. Mettre en pratique mes compétences Full-Stack et Cloud/DevOps sur des projets à fort impact technique.",
    icon: "Target",
  },
  {
    id: "goal-2",
    horizon: "Medium-term",
    timeframe: "2028 – 2030",
    title: "Ingénieur Logiciel / Cloud Architect",
    description:
      "Intégrer, après l'obtention du diplôme ENSEEIHT, une équipe d'ingénierie chez une scale-up ou un grand groupe tech. Évoluer vers un rôle d'ingénieur senior spécialisé en architecture cloud, systèmes distribués et observabilité.",
    icon: "TrendingUp",
  },
  {
    id: "goal-3",
    horizon: "Long-term",
    timeframe: "2030 et au-delà",
    title: "Lead Engineer / Solutions Architect",
    description:
      "Devenir architecte solutions ou lead engineer, capable de piloter des projets technologiques complexes, de mentorer des équipes juniors et de contribuer à l'évolution des pratiques d'ingénierie logicielle dans mon organisation.",
    icon: "Star",
  },
];

export const targetRoles: TargetRole[] = [
  { title: "Ingénieur Full-Stack", industry: "Tech / SaaS" },
  { title: "Cloud / DevOps Engineer", industry: "Cloud & Infrastructure" },
  { title: "Backend Engineer (Java/Node.js)", industry: "Fintech / E-commerce" },
  { title: "Solutions Architect", industry: "Entreprise & Consulting" },
];

export const skillsToDevelope: string[] = [
  "Architecture Cloud avancée (AWS Solutions Architect)",
  "Machine Learning & MLOps",
  "Sécurité des applications (OWASP, Pentesting)",
  "Observabilité avancée (OpenTelemetry, Grafana)",
  "Management de projet technique",
  "Rust / Go pour les systèmes performants",
];

export const professionalVision = `Ma vision est de devenir un ingénieur logiciel de référence, alliant expertise technique 
pointue en Cloud et systèmes distribués avec une vraie capacité à concevoir des architectures robustes, 
scalables et maintenables. Je veux travailler dans des environnements où l'innovation technique est valorisée, 
contribuer à des projets à fort impact, et progressivement évoluer vers des responsabilités d'architecture 
et de leadership technique pour accompagner des équipes dans la conception de solutions de demain.`;
