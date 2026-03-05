import { motion, type Variants, type Easing } from "framer-motion";
import { BookOpen, HeartHandshake, Users, Globe } from "lucide-react";

const easeInOut: Easing = [0.42, 0, 0.58, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: easeInOut },
  }),
};

const missionsData = [
  {
    icon: <BookOpen className="w-10 h-10 text-emerald-600" />,
    title: "Éducation & Alphabétisation",
    description:
      "Promouvoir l'accès à l'éducation pour tous et réduire l'analphabétisme dans la communauté.",
    subMissions: [
      "Formations pour adultes et jeunes",
      "Soutien scolaire et bibliothèque mobile",
      "Campagnes de sensibilisation à l’éducation",
    ],
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-emerald-600" />,
    title: "Inclusion & Solidarité",
    description:
      "Soutenir les populations vulnérables et renforcer la cohésion sociale.",
    subMissions: [
      "Aide aux familles vulnérables",
      "Projets d’insertion pour personnes handicapées",
      "Programmes de mentorat et accompagnement social",
    ],
  },
  {
    icon: <Users className="w-10 h-10 text-emerald-600" />,
    title: "Développement Communautaire",
    description:
      "Mettre en place des projets durables pour améliorer la qualité de vie locale.",
    subMissions: [
      "Construction d’infrastructures communautaires",
      "Projets agricoles et écologiques",
      "Renforcement des capacités locales",
    ],
  },
  {
    icon: <Globe className="w-10 h-10 text-emerald-600" />,
    title: "Sensibilisation & Plaidoyer",
    description:
      "Informer et mobiliser la communauté pour des actions responsables et solidaires.",
    subMissions: [
      "Campagnes sur la santé et l’environnement",
      "Éducation aux droits humains",
      "Plaidoyer auprès des autorités locales",
    ],
  },
];

const MissionsPage = () => {
  return (
    <>
      {/* Hero section spécifique */}
      <section className="relative bg-gray-950 pt-28 md:pt-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="text-5xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Nos <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Missions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeInOut, delay: 0.2 }}
          className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto"
        >
          Découvrez les axes d’action de Suzikadi pour améliorer le bien-être des communautés et promouvoir un développement durable et inclusif.
        </motion.p>
      </section>

      {/* Grille des missions */}
      <section className="bg-gray-950 py-28 md:py-40 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {missionsData.map((mission, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{mission.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{mission.title}</h3>
              <p className="text-gray-300 text-base mb-4">{mission.description}</p>

              {/* Sous-missions */}
              {mission.subMissions && (
                <ul className="text-gray-400 text-sm list-disc list-inside mb-2">
                  {mission.subMissions.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA vers engagement */}
      <section className="bg-gray-950 py-20 px-6 text-center border-t border-gray-800/50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Soutenez nos missions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeInOut, delay: 0.2 }}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
        >
          Votre participation permet à Suzikadi de poursuivre ses actions et d’avoir un impact durable sur les communautés locales.
        </motion.p>

        <motion.a
          href="/engagement"
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg shadow-2xl shadow-emerald-600/40 transition-all duration-300"
        >
          Devenir partenaire
        </motion.a>
      </section>
    </>
  );
};

export default MissionsPage;
