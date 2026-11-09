"use client";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Shield, Compass, Heart, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const reflections = [
  {
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    title: "Ce que mon parcours académique m'a apporté",
    content:
      "Les Classes Préparatoires m'ont forgé une rigueur analytique et une capacité à travailler sous pression que j'applique au quotidien. L'ENSIAS m'a donné les bases techniques du génie logiciel et m'a confronté très tôt à des projets réels en équipe. L'ENSEEIHT approfondit désormais ma vision systémique de l'ingénierie logicielle, en insistant sur l'architecture, la performance et la fiabilité des systèmes.",
  },
  {
    icon: TrendingUp,
    color: "bg-accent/10 text-accent",
    title: "Comment mon projet professionnel a évolué",
    content:
      "Au départ orienté vers le développement applicatif pur, mes expériences en startup (Open Lluna) et en entreprise (PORTNET) m'ont révélé ma passion pour l'infrastructure, le DevOps et les systèmes distribués. Mes projets personnels — Digital Twin, CampusLink, migration AWS — ont confirmé cette direction : je veux concevoir des systèmes robustes, pas seulement des fonctionnalités.",
  },
  {
    icon: Shield,
    color: "bg-emerald-50 text-emerald-600",
    title: "Forces & Axes d'amélioration",
    content:
      "Mes forces résident dans ma capacité à comprendre rapidement des systèmes complexes, ma polyvalence technique (Full-Stack + Cloud), et mon autonomie sur des projets de bout en bout. Mon axe de progression principal est la profondeur de mon expertise en architecture cloud avancée et en sécurité applicative — des domaines sur lesquels je travaille activement avec des certifications AWS et des projets pratiques.",
  },
  {
    icon: Compass,
    color: "bg-purple-50 text-purple-600",
    title: "Défis rencontrés et leçons apprises",
    content:
      "Lors de mon stage chez PORTNET, la mise en place de la chaîne CI/CD AWS from scratch m'a confronté à des problèmes d'infrastructure réels que les cours n'anticipent pas : gestion des secrets, latences réseau, rollback en production. Ces défis m'ont appris que la robustesse d'un système se construit autant dans le déploiement que dans le code.",
  },
  {
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
    title: "Ce que les expériences professionnelles m'ont apporté",
    content:
      "Travailler en startup (Open Lluna) m'a appris l'agilité, la communication d'équipe et la livraison continue sous contrainte de temps. Le stage chez PORTNET m'a exposé aux enjeux d'une infrastructure d'entreprise réelle, avec des contraintes de sécurité, de disponibilité et de conformité. Ces deux environnements m'ont donné une perspective complète du cycle de vie logiciel.",
  },
  {
    icon: Lightbulb,
    color: "bg-amber-50 text-amber-600",
    title: "Mon plan de développement personnel",
    content:
      "À court terme : préparer la certification AWS Solutions Architect et approfondir mes connaissances en sécurité applicative (OWASP). À moyen terme : développer mes compétences en MLOps pour compléter ma compréhension de l'IA appliquée aux systèmes distribués. Je consacre également du temps à l'open source et à des projets personnels ambitieux pour rester à la pointe des pratiques d'ingénierie.",
  },
];

export function Reflection() {
  return (
    <section id="reflection" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Développement Personnel"
          title="Réflexion & Progression"
          subtitle="Un regard honnête et structuré sur mon parcours, mes apprentissages et ma vision de l'ingénieur que je veux devenir."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reflections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card hover padding="lg" className="h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
