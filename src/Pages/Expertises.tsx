import { motion, type Variants, type Easing } from "framer-motion";

const easeInOut: Easing = [0.42, 0, 0.58, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: easeInOut,
    },
  }),
};

const expertises = [
  {
    title: "Alphabétisation et éducation",
    desc: "Programmes d’alphabétisation, appui scolaire et initiatives éducatives pour améliorer l’accès au savoir.",
  },
  {
    title: "Protection et réintégration des enfants",
    desc: "Actions de protection, accompagnement psychosocial et réinsertion des enfants en situation de vulnérabilité.",
  },
  {
    title: "Accompagnement des orphelins et personnes handicapées",
    desc: "Soutien social, éducatif et communautaire pour favoriser l’autonomie et la dignité.",
  },
  {
    title: "Santé & accompagnement VIH/SIDA",
    desc: "Sensibilisation, orientation, suivi et soutien des personnes vivant avec le VIH/SIDA.",
  },
  {
    title: "Lutte contre la pauvreté et l’exclusion",
    desc: "Projets communautaires et activités génératrices de revenus pour réduire la précarité.",
  },
  {
    title: "Égalité de genre & inclusion sociale",
    desc: "Promotion des droits des femmes et de l’inclusion des groupes marginalisés.",
  },
  {
    title: "Économie de la connaissance",
    desc: "Diffusion du savoir, innovation sociale et accès à l’information utile.",
  },
  {
    title: "Renforcement des capacités",
    desc: "Formations, ateliers et appui organisationnel pour les communautés et acteurs locaux.",
  },
];

const ExpertisesPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 pt-28 md:pt-36 pb-20 px-6 text-center border-b border-gray-800/60">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6"
        >
          Domaines d’<span className="text-emerald-500">Expertise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
        >
          SUZIKADI intervient dans plusieurs domaines clés du développement
          humain, avec une approche inclusive, durable et orientée impact.
        </motion.p>
      </section>

      {/* GRID */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-7 shadow-xl hover:border-emerald-600/40 hover:shadow-emerald-600/10 transition-all duration-300"
            >
              <div className="mb-4 w-11 h-11 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-500 font-bold text-lg group-hover:scale-110 transition">
                ✓
              </div>

              <h3 className="text-lg font-extrabold text-white mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROCHE */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-6"
          >
            Une expertise au service de l’humain
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            Chaque intervention de SUZIKADI est basée sur l’écoute des besoins
            réels, la participation communautaire et le suivi durable des
            bénéficiaires.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full px-10 py-4 shadow-lg shadow-emerald-600/30 transition"
          >
            Collaborer avec SUZIKADI
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default ExpertisesPage;
