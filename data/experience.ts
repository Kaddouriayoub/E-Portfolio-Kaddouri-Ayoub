export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: "Internship" | "Part-time" | "Full-time" | "Academic Project" | "Volunteer";
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Stagiaire Ingénieur Logiciel",
    company: "PORTNET S.A.",
    location: "Hybride",
    type: "Internship",
    startDate: "Juillet 2026",
    endDate: "Septembre 2026",
    description:
      "Stage au sein de PORTNET S.A., plateforme nationale marocaine de commerce extérieur. Conception et développement d'une application de gestion des incidents IT et mise en place d'une infrastructure DevOps complète sur AWS.",
    responsibilities: [
      "Conception et développement d'une application de gestion des incidents IT (suivi, traçabilité, tableaux de bord d'activité) répondant aux besoins opérationnels.",
      "Mise en place d'une chaîne DevOps / CI-CD sur AWS : infrastructure avec Terraform, configuration via Ansible et pipeline CD en Bash pour le déploiement automatisé des services conteneurisés.",
    ],
    achievements: [
      "Livraison complète d'une application de gestion d'incidents IT en production.",
      "Infrastructure AWS entièrement provisionnée en Infrastructure as Code (Terraform).",
      "Automatisation du déploiement continu des services Docker via pipeline Bash.",
    ],
    skills: ["Spring Boot", "React.js", "PostgreSQL", "Docker", "Nginx", "Terraform", "Ansible", "Bash", "AWS"],
  },
  {
    id: "exp-2",
    role: "Stagiaire Ingénieur Logiciel",
    company: "Open Lluna",
    location: "Hybride",
    type: "Internship",
    startDate: "Juillet 2025",
    endDate: "Février 2026",
    description:
      "Stage dans une startup de location de voitures. Contribution en équipe Agile au développement d'une plateforme multicanal (web + mobile) avec backend commun.",
    responsibilities: [
      "Contribution en équipe Agile à une plateforme de location de voitures (backend commun web/mobile).",
      "Développement de fonctionnalités mobiles (React Native) et intégration de l'authentification via Clerk.",
      "Développement de dashboards d'administration et enrichissement de l'application web (Node.js / Express).",
    ],
    achievements: [
      "Intégration complète du système d'authentification Clerk sur mobile et web.",
      "Livraison de dashboards d'administration permettant la supervision en temps réel.",
    ],
    skills: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "JWT", "Docker", "Git", "Agile"],
  },
  {
    id: "exp-3",
    role: "Vice-Président",
    company: "Junior Entreprise ENSIAS",
    location: "Rabat, Maroc",
    type: "Volunteer",
    startDate: "2024",
    endDate: "2026",
    description:
      "Rôle de leadership au sein de la Junior Entreprise de l'ENSIAS, structure associative réalisant des projets informatiques pour des clients réels.",
    responsibilities: [
      "Pilotage de projets clients de bout en bout.",
      "Coordination des équipes techniques et gestion des délais.",
      "Représentation de la JE auprès des partenaires et clients.",
    ],
    achievements: [
      "Pilotage réussi de plusieurs projets clients livrés dans les délais.",
      "Développement de compétences en gestion de projet et leadership.",
    ],
    skills: ["Gestion de projet", "Leadership", "Communication client", "Coordination d'équipe"],
  },
  {
    id: "exp-4",
    role: "Responsable Sponsoring",
    company: "Club Social CINDH — ENSIAS",
    location: "Rabat, Maroc",
    type: "Volunteer",
    startDate: "2024",
    endDate: "2026",
    description:
      "Responsable du développement des partenariats et du sponsoring pour le club social à impact humanitaire de l'ENSIAS.",
    responsibilities: [
      "Gestion des partenariats avec des entreprises et organisations.",
      "Organisation d'initiatives à impact social et humanitaire.",
      "Mobilisation de ressources et fonds pour les projets associatifs.",
    ],
    achievements: [
      "Développement d'un réseau de partenaires soutenant les initiatives du club.",
    ],
    skills: ["Négociation", "Communication", "Gestion de partenariats", "Engagement social"],
  },
];
