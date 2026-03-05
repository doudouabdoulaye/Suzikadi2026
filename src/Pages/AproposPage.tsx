import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import heroImage from "../assets/Hero/SUZIKADI2.jpg";
import { 
  Quote, Target, History, ArrowRight, 
  Users, Globe, TrendingUp, 
  Leaf, Zap, Clock,
  ChevronRight, Play, Pause, BarChart3,
  Trophy, Diamond, Crown, Rocket,
  Heart
} from "lucide-react";

const AproposPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={containerRef} className="bg-[#050505] text-white selection:bg-emerald-500/30 overflow-hidden">
      
      {/* Effets de particules */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-emerald-500/15 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, window.innerHeight + 100],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-16 lg:pt-0 overflow-hidden">
        {/* Effets de lumière */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[35%] h-[35%] bg-gradient-to-r from-emerald-900/20 via-blue-900/15 to-purple-900/15 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-16">
          
          {/* Colonne Texte */}
          <motion.div 
            style={{ x: textX }}
            className="lg:col-span-7 z-10 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 
              }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm mb-8 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  Édition 2026
                </span>
              </motion.div>
              
              {/* Titre principal */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] mb-4 tracking-tight">
                  Révolution
                  <br />
                  <span className="relative">
                    <span className="font-serif italic bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      Humaine
                    </span>
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                    />
                  </span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-gray-400">Leadership</span>
                  </div>
                  <div className="w-1 h-1 bg-emerald-500/40 rounded-full" />
                  <div className="flex items-center gap-2">
                    <Diamond className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">Excellence</span>
                  </div>
                </div>
              </div>

              {/* Citation */}
              <div className="relative max-w-xl mb-10">
                <div className="absolute -left-8 top-0 text-emerald-800/20">
                  <Quote size={60} />
                </div>
                <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300 pl-8 italic">
                  "Nous cultivons des écosystèmes où chaque être humain devient architecte de sa propre dignité."
                </p>
                <div className="flex items-center gap-3 mt-4 pl-8">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Vision SUZIKADI</span>
                </div>
              </div>

              {/* CTA et statistiques */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 animate-shimmer" />
                    <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-700 via-cyan-700 to-emerald-700 rounded-xl" />
                    <div className="relative flex items-center gap-3 text-base font-semibold">
                      <span>EXPLORER NOTRE MISSION</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePlayVideo}
                    className="px-6 py-4 rounded-xl border border-emerald-500/25 bg-emerald-500/5 backdrop-blur-sm flex items-center gap-2 group hover:bg-emerald-500/8 transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Play className="w-4 h-4 text-emerald-400" />
                    )}
                    <span className="text-sm">Notre histoire en vidéo</span>
                  </motion.button>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                  <StatCard value="14+" label="Années" icon={<Clock size={16} />} delay={0.2} />
                  <StatCard value="250K+" label="Vies impactées" icon={<Users size={16} />} delay={0.3} />
                  <StatCard value="98%" label="Réussite" icon={<TrendingUp size={16} />} delay={0.4} />
                  <StatCard value="45+" label="Communautés" icon={<Globe size={16} />} delay={0.5} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne Image */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <motion.div 
              style={{ y: imageY }}
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Cadre */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-emerald-500/15 rounded-2xl blur-xl opacity-25" />
                
                {/* Image principale */}
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-black">
                  <img
                    src={heroImage}
                    alt="SUZIKADI - Révolution Humaine"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-lg">
                          <BarChart3 size={14} className="text-emerald-400" />
                        </div>
                        <span className="text-xs font-medium">Impact Quantifié</span>
                      </div>
                      <h3 className="text-lg font-bold">Vision 2030 En Action</h3>
                      <p className="text-xs text-gray-400">Documentaire immersif terrain</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-8 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-lg hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 rounded-lg">
                    <Trophy size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      25+
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
                      Prix d'excellence
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-8 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-lg hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-500/15 to-yellow-500/15 rounded-lg">
                    <Rocket size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      2026
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
                      Stratégie
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Timeline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 hidden lg:block"
            >
              <div className="flex items-center justify-between px-3">
                {[2010, 2015, 2020, 2023, 2026].map((year, index) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-2 h-2 rounded-full ${year === 2026 ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                    <div className={`h-6 w-[1px] ${year === 2026 ? 'bg-gradient-to-b from-emerald-400 to-transparent' : 'bg-gray-700'} mt-1`} />
                    <span className={`text-xs mt-1 ${year === 2026 ? 'text-emerald-400 font-semibold' : 'text-gray-500'}`}>
                      {year}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-3">
                <span className="text-xs text-gray-400">Parcours d'excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION VALEURS --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Notre ADN
              </span>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              L'Art de l'<span className="font-serif italic bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Une philosophie d'action pour créer des écosystèmes durables
            </p>
          </motion.div>

          {/* Grille de valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.map((value, index) => (
              <ValueCardPremium 
                key={value.title}
                {...value}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/25 bg-emerald-500/5 backdrop-blur-sm">
              <Zap size={16} className="text-emerald-400 animate-pulse" />
              <span className="text-sm">Prêt à co-construire l'avenir ?</span>
              <button className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                <span>Nous rejoindre</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Données des valeurs
const valuesData = [
  {
    icon: <History size={20} />,
    title: "Héritage Stratégique",
    description: "14 ans d'innovation sociale pour le développement humain durable.",
    color: "from-blue-500 to-cyan-500",
    stats: "500+ projets",
    delay: 0.1
  },
  {
    icon: <Target size={20} />,
    title: "Impact Mesurable",
    description: "Résultats quantifiables et transparence totale dans nos actions.",
    color: "from-emerald-500 to-green-500",
    stats: "98% satisfaction",
    delay: 0.2,
    highlight: true
  },
  {
    icon: <Heart size={20} />,
    title: "Éthique Radicale",
    description: "Gouvernance inclusive et approche centrée sur la dignité.",
    color: "from-rose-500 to-pink-500",
    stats: "100% transparence",
    delay: 0.3
  },
  {
    icon: <Leaf size={20} />,
    title: "Durabilité 2030",
    description: "Solutions écologiques pour un impact générationnel.",
    color: "from-amber-500 to-yellow-500",
    stats: "ODD alignés",
    delay: 0.4
  }
];

// Composant de carte de valeur
const ValueCardPremium = ({ icon, title, description, color, stats, delay, highlight, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ 
      y: -6, 
      scale: 1.01,
    }}
    className={`relative group cursor-pointer ${highlight ? 'lg:-translate-y-4' : ''}`}
  >
    <div className={`relative p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
      highlight 
      ? `bg-gradient-to-br from-emerald-600/10 to-emerald-500/5 border-emerald-500/30 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.2)]` 
      : 'bg-white/3 border-white/10 hover:border-white/20'
    }`}>
      
      {/* Numéro */}
      <div className="absolute top-4 right-4 text-4xl font-bold text-white/5">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      {/* Icône */}
      <div className={`mb-6 p-3 w-fit rounded-xl bg-gradient-to-br ${color}/10 border border-white/10`}>
        {icon}
      </div>
      
      {/* Contenu */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
        
        {/* Statistique */}
        <div className="pt-3 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{stats}</span>
            <ChevronRight size={14} className="text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Composant de statistique
const StatCard = ({ value, label, icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    className="text-center group"
  >
    <div className="inline-block p-2 rounded-lg bg-white/5 mb-3">
      {icon}
    </div>
    <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
      {label}
    </div>
  </motion.div>
);

export default AproposPage;