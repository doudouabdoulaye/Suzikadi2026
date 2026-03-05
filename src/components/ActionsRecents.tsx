import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Exemple de projets récents (remplace par les vrais)
const projects = [
  {
    title: "Programme d’Alphabétisation",
    description: "Formation de 150 adultes à la lecture et l’écriture en milieu rural.",
    image: "/assets/projects/education.jpg",
  },
  {
    title: "Campagne Santé & Nutrition",
    description: "Dépistage et sensibilisation pour 300 familles vulnérables.",
    image: "/assets/projects/health.jpg",
  },
  {
    title: "Protection de l’Enfance",
    description: "Mise en place d’espaces éducatifs sécurisés pour enfants.",
    image: "/assets/projects/child.jpg",
  },
  {
    title: "Inclusion Sociale des Femmes",
    description: "Ateliers d’autonomisation et micro-projets pour femmes locales.",
    image: "/assets/projects/women.jpg",
  },
];

const easeInOut: Easing = [0.42, 0, 0.58, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: easeInOut },
  }),
};

const ActionsRecents = () => {
  return (
    <section
      id="actions"
      className="relative bg-gray-950 py-28 md:py-40 px-6 overflow-hidden border-t border-b border-gray-800/50"
    >
      {/* En-tête */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeInOut }}
          className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4"
        >
          Actions & Projets Récents
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg"
        >
          Nos projets <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">phare</span>
        </motion.h2>
      </div>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-gray-900/40 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="relative w-full h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-base mb-4 flex-1">{project.description}</p>
              <a
                href="/actions"
                className="mt-auto inline-flex items-center gap-2 text-emerald-500 font-semibold hover:underline"
              >
                Voir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActionsRecents;
