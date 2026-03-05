import { motion } from "framer-motion";
import { HeartHandshake, TrendingUp, Sparkles, Gem, Target, Zap } from "lucide-react";

const missionsData = [
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Excellence Éducative",
    description: "Programmes d'alphabétisation élite et éducation transformative.",
    color: "amber",
    stats: "95% réussite"
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Inclusion Stratégique",
    description: "Intégration systémique des populations vulnérables.",
    color: "emerald",
    stats: "50K+ bénéficiaires"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Développement Élite",
    description: "Infrastructures innovantes pour transformation durable.",
    color: "blue",
    stats: "24 projets"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Leadership Social",
    description: "Plaidoyer d'influence pour impact à grande échelle.",
    color: "purple",
    stats: "Pionnier"
  },
];

const Missions = () => {
  return (
    <section id="missions" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
          <Target className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-400">Axes Stratégiques</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Architecture <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">d'Impact</span>
        </h2>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Interventions stratégiques pour un changement systémique durable
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionsData.map((mission, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`h-full p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300`}>
                
                <div className={`inline-flex p-3 rounded-lg bg-${mission.color}-500/10 mb-4`}>
                  <div className={`text-${mission.color}-400`}>
                    {mission.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold text-${mission.color}-300 mb-3`}>
                  {mission.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4">
                  {mission.description}
                </p>
                
                <div className={`text-sm font-medium text-${mission.color}-400`}>
                  {mission.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700">
          <Zap className="w-5 h-5 text-amber-400" />
          <p className="text-sm text-slate-300">
            <span className="text-amber-400 font-medium">Synergie d'impact</span> créant un écosystème complet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Missions;