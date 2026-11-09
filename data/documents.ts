export type DocumentCategory =
  | "CV"
  | "Cover Letter"
  | "Mentor Interview"
  | "Internship Report"
  | "Project Assessment"
  | "Presentation"
  | "Certificate"
  | "Other";

export type FileFormat = "PDF" | "DOCX" | "PPTX" | "XLSX" | "JPG" | "PNG";

export interface Document {
  id: string;
  title: string;
  category: DocumentCategory;
  description: string;
  file: string | null;
  format: FileFormat;
  date: string;
  language?: string;
  tags?: string[];
  featured?: boolean;
}

export interface PresentationDoc {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slideCount: number;
  file: string | null;
  pdfPreview: string | null;
  thumbnail: string | null;
  date: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// TO ADD YOUR OWN DOCUMENTS:
// 1. Place your file in /public/documents/ (e.g. /public/documents/my-cv.pdf)
// 2. Set `file: "/documents/my-cv.pdf"` below
// 3. Update the title, description, date fields
// ─────────────────────────────────────────────────────────────────────────────

export const documents: Document[] = [
  // ── CVs ──────────────────────────────────────────────────────────────────
  {
    id: "cv-1",
    title: "CV Professionnel — KADDOURI Ayoub",
    category: "CV",
    description:
      "Curriculum vitae à jour : formation ENSEEIHT, expériences chez PORTNET et Open Lluna, projets personnels, certifications Oracle et AWS.",
    file: null, // → "/documents/Kaddouri_Ayoub_CV.pdf"
    format: "PDF",
    date: "Novembre 2026",
    language: "Français",
    featured: true,
    tags: ["CV", "Ingénieur Logiciel", "Cloud", "Full-Stack"],
  },
  {
    id: "cv-2",
    title: "CV — English Version",
    category: "CV",
    description:
      "English version of my professional CV for international applications.",
    file: null, // → "/documents/Kaddouri_Ayoub_CV_EN.pdf"
    format: "PDF",
    date: "Novembre 2026",
    language: "English",
    tags: ["CV", "English", "International"],
  },

  // ── Cover Letters ─────────────────────────────────────────────────────────
  {
    id: "cl-1",
    title: "Lettre de motivation — Stage Ingénieur Logiciel (Juin 2027)",
    category: "Cover Letter",
    description:
      "Lettre de motivation pour une candidature à un stage de 3 à 4 mois à partir de juin 2027 en développement Full-Stack ou Cloud/DevOps.",
    file: null, // → "/documents/LM_Stage_2027_Kaddouri.pdf"
    format: "PDF",
    date: "Novembre 2026",
    language: "Français",
    tags: ["Lettre de motivation", "Stage", "Full-Stack", "DevOps"],
  },
  {
    id: "cl-2",
    title: "Lettre de motivation — Alternance (Septembre 2027)",
    category: "Cover Letter",
    description:
      "Lettre de motivation ciblant une alternance d'ingénieur logiciel à partir de septembre 2027 dans le secteur tech/cloud.",
    file: null, // → "/documents/LM_Alternance_2027_Kaddouri.pdf"
    format: "PDF",
    date: "Novembre 2026",
    language: "Français",
    tags: ["Lettre de motivation", "Alternance"],
  },

  // ── Mentor Interviews ─────────────────────────────────────────────────────
  {
    id: "mi-1",
    title: "Compte-rendu d'entretien mentor — [Nom du mentor]",
    category: "Mentor Interview",
    description:
      "Synthèse de l'entretien avec [prénom nom], [titre/rôle]. Points abordés : trajectoire de carrière, conseils sur le secteur tech en France, retours sur mon profil.",
    file: null, // → "/documents/Entretien_Mentor_1.pdf"
    format: "PDF",
    date: "[Mois Année]",
    tags: ["Mentor", "Entretien", "Conseil carrière"],
  },
  {
    id: "mi-2",
    title: "Compte-rendu d'entretien mentor — [Nom du mentor]",
    category: "Mentor Interview",
    description:
      "Synthèse du deuxième entretien mentor. Discussion autour de [thème] et des perspectives d'évolution dans le domaine Cloud/DevOps.",
    file: null,
    format: "PDF",
    date: "[Mois Année]",
    tags: ["Mentor", "Cloud", "DevOps"],
  },

  // ── Internship Reports ────────────────────────────────────────────────────
  {
    id: "ir-1",
    title: "Rapport de stage — PORTNET S.A. (Juillet – Septembre 2026)",
    category: "Internship Report",
    description:
      "Rapport complet du stage chez PORTNET S.A. : contexte de l'entreprise, mission (application incidents IT + infrastructure AWS), réalisations techniques, compétences acquises et bilan personnel.",
    file: null, // → "/documents/Rapport_Stage_PORTNET_Kaddouri.pdf"
    format: "PDF",
    date: "Septembre 2026",
    tags: ["Stage", "Rapport", "PORTNET", "AWS", "DevOps"],
  },
  {
    id: "ir-2",
    title: "Rapport de stage — Open Lluna (Juillet 2025 – Février 2026)",
    category: "Internship Report",
    description:
      "Rapport du stage chez Open Lluna : plateforme de location de voitures, développement mobile React Native, dashboards admin, méthodes Agile.",
    file: null, // → "/documents/Rapport_Stage_OpenLluna_Kaddouri.pdf"
    format: "PDF",
    date: "Février 2026",
    tags: ["Stage", "Rapport", "React Native", "Agile"],
  },

  // ── Project Assessments ───────────────────────────────────────────────────
  {
    id: "pa-1",
    title: "Rapport de projet — Digital Twin Microservices",
    category: "Project Assessment",
    description:
      "Rapport détaillé du projet Digital Twin temps réel pour la supervision de performances d'une architecture microservices : architecture event-driven, détection d'anomalies hybride (Z-score, EWMA, Isolation Forest), TimescaleDB.",
    file: null,
    format: "PDF",
    date: "2026",
    tags: ["Projet", "Microservices", "Machine Learning", "Observabilité"],
  },
  {
    id: "pa-2",
    title: "Rapport de projet — CampusLink (Plateforme étudiante)",
    category: "Project Assessment",
    description:
      "Rapport du projet CampusLink : plateforme étudiante marketplace/colocation/événements en architecture microservices (7 services), CI/CD GitHub Actions, Kubernetes, Terraform AWS.",
    file: null,
    format: "PDF",
    date: "2026",
    tags: ["Projet", "Microservices", "Kubernetes", "CI/CD", "AWS"],
  },
  {
    id: "pa-3",
    title: "Rapport de projet — Modernisation Infrastructure AWS",
    category: "Project Assessment",
    description:
      "Rapport du projet de migration d'une architecture mono-instance vers une infrastructure AWS multi-AZ sécurisée (ALB, WAF, RDS, ECR, Secrets Manager), provisionnée avec Terraform.",
    file: null,
    format: "PDF",
    date: "2026",
    tags: ["AWS", "Terraform", "Cloud", "IaC", "Sécurité"],
  },

  // ── Certificates ──────────────────────────────────────────────────────────
  {
    id: "cert-1",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    category: "Certificate",
    description:
      "Certification professionnelle Oracle validant la maîtrise avancée de Java SE 17 : API modernes, concurrence, modules et bonnes pratiques.",
    file: null, // → "/documents/Oracle_Java_SE17_Kaddouri.pdf"
    format: "PDF",
    date: "2025",
    tags: ["Java", "Oracle", "Certification"],
  },
  {
    id: "cert-2",
    title: "AWS Certified Cloud Practitioner",
    category: "Certificate",
    description:
      "Certification AWS fondamentale validant la maîtrise des services cloud AWS, de l'architecture, de la sécurité et de la facturation.",
    file: null, // → "/documents/AWS_CloudPractitioner_Kaddouri.pdf"
    format: "PDF",
    date: "2025",
    tags: ["AWS", "Cloud", "Certification"],
  },
  {
    id: "cert-3",
    title: "AWS AI Practitioner",
    category: "Certificate",
    description:
      "Certification AWS validant les connaissances en intelligence artificielle et machine learning sur la plateforme AWS.",
    file: null, // → "/documents/AWS_AIPractitioner_Kaddouri.pdf"
    format: "PDF",
    date: "2025",
    tags: ["AWS", "Intelligence Artificielle", "Certification"],
  },

  // ── Other ─────────────────────────────────────────────────────────────────
  {
    id: "other-1",
    title: "Bilan de compétences — Vice-Président Junior Entreprise ENSIAS",
    category: "Other",
    description:
      "Document de synthèse de mon engagement en tant que Vice-Président de la Junior Entreprise ENSIAS : projets pilotés, compétences en leadership et gestion de projet développées.",
    file: null,
    format: "PDF",
    date: "2026",
    tags: ["Leadership", "Junior Entreprise", "Engagement associatif"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ORAL EXAMINATION PRESENTATION
// ─────────────────────────────────────────────────────────────────────────────
export const oralPresentation: PresentationDoc = {
  id: "pres-1",
  title: "Mon Projet Professionnel et Personnel — KADDOURI Ayoub",
  subtitle: "Présentation Orale PPP",
  description:
    "Présentation de 6 à 8 slides synthétisant mon parcours académique (CPGE → ENSIAS → ENSEEIHT), mes expériences professionnelles (PORTNET, Open Lluna), mes projets techniques, mes certifications, mes objectifs de carrière (stage 2027, alternance, ingénieur senior) et ma vision professionnelle.",
  slideCount: 8,
  file: null, // → "/documents/PPP_Presentation_Kaddouri_Ayoub.pptx"
  pdfPreview: null, // → "/documents/PPP_Presentation_Kaddouri_Ayoub_Preview.pdf"
  thumbnail: null, // → "/images/presentation-thumbnail.png"
  date: "Novembre 2026",
};

export const documentCategories: DocumentCategory[] = [
  "CV",
  "Cover Letter",
  "Mentor Interview",
  "Internship Report",
  "Project Assessment",
  "Presentation",
  "Certificate",
  "Other",
];
