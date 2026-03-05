import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { HeartHandshake, ArrowDown, Users, Shield, Sparkles, Gem, Crown, CheckCircle } from "lucide-react";

import heroImage1 from "../assets/Hero/SUZIKADI4.jpg";
import heroImage2 from "../assets/Hero/SUZIKADI2.jpg";

/* =======================
   Types et Interfaces
======================= */
interface HeroImage {
  src: string;
  title: string;
  subtitle: string;
  gradient: string;
  accentColor: string;
  pattern: string;
}

interface ImpactStat {
  value: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  color: string;
  trend?: string;
}

/* =======================
   Animations Premium
======================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.4,
      ease: "circOut",
      delay: 0.3
    }
  }
};

const floatingAnimation: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* =======================
   Données Configurables
======================= */
const heroImages: HeroImage[] = [
  {
    src: heroImage1,
    title: "Excellence Humanitaire",
    subtitle: "Leadership en développement durable depuis 2008",
    gradient: "linear-gradient(135deg, rgba(8, 18, 33, 0.95) 0%, rgba(15, 43, 89, 0.85) 50%, rgba(8, 18, 33, 0.9) 100%)",
    accentColor: "#D4AF37",
    pattern: "diagonal-lines"
  },
  {
    src: heroImage2,
    title: "Impact Mesurable",
    subtitle: "Transformer des communautés au Tchad et en Afrique",
    gradient: "linear-gradient(135deg, rgba(15, 43, 89, 0.95) 0%, rgba(22, 52, 110, 0.85) 50%, rgba(15, 43, 89, 0.9) 100%)",
    accentColor: "#FFD700",
    pattern: "grid-dots"
  }
];

const impactStats: ImpactStat[] = [
  {
    value: "15",
    label: "Années d'excellence",
    icon: <Crown className="w-5 h-5" />,
    suffix: "+",
    color: "from-amber-500 to-yellow-500",
    trend: "↗"
  },
  {
    value: "50K",
    label: "Bénéficiaires directs",
    icon: <Users className="w-5 h-5" />,
    suffix: "+",
    color: "from-blue-500 to-cyan-400",
    trend: "↗"
  },
  {
    value: "24",
    label: "Partenariats stratégiques",
    icon: <Gem className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-400",
    trend: "↗"
  },
  {
    value: "98",
    label: "Taux de réussite",
    icon: <Sparkles className="w-5 h-5" />,
    suffix: "%",
    color: "from-purple-500 to-pink-400",
    trend: "★"
  }
];

/* =======================
   Composant Hero Premium
======================= */
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /* =======================
     Gestion du Carousel et Parallaxe
  ======================= */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 300);
  };

  const currentImage = heroImages[currentIndex];

  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#081221] via-[#0F2B59] to-[#081221]">

      {/* === Arrière-plan Parallaxe === */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(22, 52, 110, 0.2) 0%, transparent 50%)`
        }}
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5
        }}
      />

      {/* === Carousel d'Images Premium === */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x * 0.3,
              y: mousePosition.y * 0.3
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1.2,
              ease: [0.19, 1, 0.22, 1]
            }}
          >
            {/* Image de fond avec effet de profondeur */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${currentImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7) contrast(1.1)'
              }}
            />

            {/* Overlay gradient premium */}
            <div
              className="absolute inset-0"
              style={{
                background: currentImage.gradient,
                mixBlendMode: 'multiply'
              }}
            />

            {/* Texture pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: currentImage.pattern === 'diagonal-lines'
                  ? `repeating-linear-gradient(45deg, ${currentImage.accentColor} 0px, ${currentImage.accentColor} 1px, transparent 1px, transparent 10px)`
                  : `radial-gradient(${currentImage.accentColor} 1px, transparent 1px)`,
                backgroundSize: currentImage.pattern === 'diagonal-lines' ? '20px 20px' : '30px 30px'
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* === Éléments flottants décoratifs === */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />

        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64"
          style={{
            background: 'radial-gradient(circle, rgba(22, 52, 110, 0.15) 0%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />
      </div>

      {/* === Contenu Principal === */}
      <div className="relative z-40 px-6 md:px-12 lg:px-24 xl:px-36 max-w-9xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* === Colonne de Texte === */}
          <motion.div
            className="lg:w-6/12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >

            {/* Badge Premium */}
            <motion.div
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-xl border border-white/10 shadow-2xl mb-12 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.3)' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 blur-md rounded-full" />
                <Gem className="w-6 h-6 text-amber-300 relative z-10" />
              </div>
              <span className="text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 uppercase">
                Fondation d'Excellence
              </span>
              <div className="h-4 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
              <span className="text-xs font-medium text-blue-100/60">
                Depuis 2008
              </span>
            </motion.div>

            {/* Titre Principal avec effet métallique */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
              variants={fadeInUp}
            >
              <span className="block text-white/95">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Leadership
                </span>{" "}
                en
              </span>
              <span className="relative block mt-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-200">
                  Développement Humain
                </span>
                <motion.div
                  className="absolute -bottom-6 left-0 w-80 h-1"
                  initial={{ width: 0 }}
                  animate={{ width: "20rem" }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                >
                  <div className="h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent blur-sm" />
                  <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-400" />
                </motion.div>
              </span>
            </motion.h1>

            {/* Sous-titre Dynamique Premium */}
            <motion.div
              className="mb-12"
              variants={fadeInUp}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
                >
                  <span className="bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent font-medium">
                    {currentImage.title}
                  </span>
                  <span className="text-blue-100/90"> – {currentImage.subtitle}</span>
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            {/* Description Élitiste */}
            <motion.div
              className="mb-14"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-xl text-blue-100/80 font-light leading-relaxed">
                  Organisation humanitaire <span className="text-amber-300 font-medium">d'élite</span> reconnue
                  pour son impact transformateur et ses solutions innovantes en matière de développement durable.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-xl text-blue-100/80 font-light leading-relaxed">
                  Nous créons des écosystèmes résilients et autonomisons les communautés
                  à travers l'éducation, la santé et l'inclusion économique.
                </p>
              </div>
            </motion.div>

            {/* Call-to-Action Premium */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              variants={fadeInUp}
            >
              <motion.a
                href="#actions"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-[#0F2B59] via-[#16346E] to-[#0F2B59] text-white font-bold text-lg flex items-center justify-center gap-4 min-w-[280px] shadow-2xl shadow-blue-900/30 overflow-hidden"
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Background animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/30 transition-all duration-300" />

                {/* Contenu */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <HeartHandshake className="w-6 h-6 relative z-10" />
                  </div>
                  <span className="tracking-wider">Découvrir notre Excellence</span>
                  <ArrowDown className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 rounded-2xl border-2 border-white/20 hover:border-amber-400/40 text-white font-bold text-lg bg-gradient-to-r from-white/5 to-white/2 hover:from-white/8 hover:to-white/5 backdrop-blur-sm flex items-center justify-center gap-4 min-w-[280px] shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Shield className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform" />
                <span className="tracking-wider">Devenir Partenaire</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* === Colonne de Statistiques Premium === */}
          <motion.div
            className="lg:w-6/12"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Carte de statistiques avec effet 3D */}
              <motion.div
                className="relative bg-gradient-to-br from-white/6 via-white/4 to-white/8 backdrop-blur-2xl rounded-3xl p-10 border border-white/15 shadow-2xl overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                style={{
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                {/* Effet de bordure lumineuse */}
                <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-white/20 via-amber-400/10 to-white/20 -z-10" />

                {/* Header de la carte */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <Sparkles className="w-8 h-8 text-amber-300" />
                    <h3 className="text-3xl font-bold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300">
                        Impact Élitiste
                      </span>
                    </h3>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-full" />
                  <p className="text-blue-100/60 text-lg mt-4 font-light">
                    Chiffres certifiés témoignant de notre excellence opérationnelle
                  </p>
                </div>

                {/* Grille de Statistiques Premium */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {impactStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.15, duration: 0.8 }}
                      className="group"
                    >
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/4 border border-white/10 hover:border-white/20 transition-all duration-300">
                        {/* Effet de hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                        {/* Icon avec halo */}
                        <div className="relative inline-flex mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl blur-md opacity-30`} />
                          <div className={`relative p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                            {stat.icon}
                          </div>
                        </div>

                        {/* Valeur avec animation */}
                        <div className="relative">
                          <div className="text-4xl font-bold text-white flex items-end mb-2">
                            {stat.value}
                            {stat.suffix && (
                              <span className={`text-2xl ml-1 ${stat.color.includes('amber') ? 'text-amber-300' :
                                  stat.color.includes('blue') ? 'text-blue-300' :
                                    stat.color.includes('emerald') ? 'text-emerald-300' : 'text-purple-300'
                                }`}>
                                {stat.suffix}
                              </span>
                            )}
                            <span className="text-lg text-white/60 ml-2">{stat.trend}</span>
                          </div>
                          <div className="text-sm font-medium text-blue-100/70 tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Indicateurs de Performance Avancés */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  {[
                    { label: "Qualité des Programmes", value: 96, color: "from-amber-500 to-yellow-500" },
                    { label: "Transparence Financière", value: 98, color: "from-emerald-500 to-teal-400" },
                    { label: "Innovation Sociale", value: 94, color: "from-blue-500 to-cyan-400" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-100/80">{item.label}</span>
                        <span className="text-sm font-bold text-white">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ delay: 1.8 + index * 0.2, duration: 1.5, ease: "circOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Badge de certification flottant */}
              <motion.div
                className="absolute -top-6 -right-6"
                initial={{ opacity: 0, scale: 0, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 2, type: "spring" }}
              >
                <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-emerald-500/10 backdrop-blur-md border border-emerald-400/30 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md" />
                      <CheckCircle className="w-6 h-6 text-emerald-300 relative z-10" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white"></div>
                      <div className="text-xs text-emerald-300/80">Standard d'excellence</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* === Contrôles du Carousel Premium === */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className="relative group"
              aria-label={`Slide ${index + 1}`}
            >
              <motion.div
                className={`w-4 h-4 rounded-full transition-all duration-500 ${currentIndex === index
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-400'
                    : 'bg-white/20 hover:bg-white/40'
                  }`}
                whileHover={{ scale: 1.2 }}
              />

              {currentIndex === index && (
                <motion.div
                  className="absolute -inset-3"
                  layoutId="carouselIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="absolute inset-0 border border-amber-400/30 rounded-full" />
                  <div className="absolute inset-0 border border-amber-400/10 rounded-full animate-ping" />
                </motion.div>
              )}

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Slide {index + 1}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* === Indicateur de Défilement Luxe === */}
      <motion.a
        href="#apropos"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center group"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-sm font-medium tracking-widest text-blue-100/70 mb-6 group-hover:text-amber-300 transition-colors">
          Explorer notre Héritage
        </span>

        {/* Mouse scroll animation premium */}
        <div className="relative">
          <div className="w-10 h-16 rounded-2xl border-2 border-white/20 group-hover:border-amber-400/40 flex items-start justify-center pt-4 transition-all duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 rounded-full bg-gradient-to-b from-amber-400 to-yellow-400"
            />
          </div>

          {/* Effet de brillance */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.a>

      {/* === Séparateur de Section Luxueux === */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden z-30">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#081221" />
              <stop offset="50%" stopColor="#0F2B59" />
              <stop offset="100%" stopColor="#081221" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#D4AF37" floodOpacity="0.3" />
            </filter>
          </defs>
          <path
            d="M0,0 L1440,0 L1440,160 C1200,100 960,60 720,80 C480,100 240,140 0,120 L0,0 Z"
            fill="url(#premiumGradient)"
            filter="url(#shadow)"
          />
        </svg>
      </div>

      {/* === Éléments Décoratifs Élitistes === */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.1), transparent)`
          }}
        />
      </div>
    </section>
  );
}

export default Hero;