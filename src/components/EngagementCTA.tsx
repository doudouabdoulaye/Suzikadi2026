import { motion, type Variants, type Easing } from "framer-motion";
import { HeartHandshake, Users } from "lucide-react";

const easeInOut: Easing = [0.42, 0, 0.58, 1];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut },
  },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" },
  tap: { scale: 0.97 },
};

const EngagementCTA = () => {
  return (
    <section
      id="engagement"
      className="relative bg-gray-950 py-28 md:py-40 px-6 text-center overflow-hidden border-t border-gray-800/50"
    >
      {/* Fond décoratif */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: easeInOut }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        <Users className="w-12 h-12 text-emerald-500" />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
          Participez au <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">développement humain</span>
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl">
          Rejoignez nos initiatives pour améliorer la vie des communautés locales. Votre soutien permet de créer un impact réel et durable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-5">
          <motion.a
            href="/soutenir"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg shadow-2xl shadow-emerald-600/40 flex items-center justify-center gap-2"
          >
            <HeartHandshake className="w-5 h-5" />
            Nous soutenir
          </motion.a>

          <motion.a
            href="/partenariat"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 rounded-xl border-2 border-gray-400 hover:border-emerald-500 text-white font-semibold text-lg"
          >
            Devenir partenaire
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default EngagementCTA;
