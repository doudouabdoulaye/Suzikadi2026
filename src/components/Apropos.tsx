import { motion, type Variants } from "framer-motion";
import imageSrc from "../assets/Apropos/SUZIKADI4.jpg";
import { Users, HeartHandshake, ArrowRight, Gem, Shield, TrendingUp, Award, Globe, Sparkles } from "lucide-react";

// Animations Premium
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60, rotateY: 10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15
    } 
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, rotateY: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
      staggerChildren: 0.15
    } 
  },
};

const floatingAnimation: Variants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Apropos = () => {
  const values = [
    { 
      icon: <Gem className="w-6 h-6" />, 
      label: "Excellence Opérationnelle", 
      description: "Standards internationaux",
      color: "from-amber-400 to-yellow-400",
      bgColor: "from-amber-500/20 to-yellow-500/10"
    },
    { 
      icon: <HeartHandshake className="w-6 h-6" />, 
      label: "Impact Humain", 
      description: "Transformation durable",
      color: "from-emerald-400 to-teal-400",
      bgColor: "from-emerald-500/20 to-teal-500/10"
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      label: "Intégrité", 
      description: "Transparence totale",
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-500/20 to-cyan-500/10"
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      label: "Innovation Sociale", 
      description: "Solutions avant-gardistes",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-500/20 to-pink-500/10"
    },
  ];

  return (
    <section 
      id="apropos" 
      className="relative bg-gradient-to-b from-[#0A1625] via-[#13213F] to-[#0A1625] py-32 md:py-44 px-6 overflow-hidden"
    >
      
      {/* Background Elements Premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs Animated */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-amber-600/8 via-transparent to-blue-600/8 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/3 -right-40 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/6 via-transparent to-purple-600/6 rounded-full blur-3xl"
        />
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '600px'
        }} />
      </div>

      {/* Content Container */}
      <div className="relative max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        
        {/* Image Column Premium */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="relative order-2 lg:order-1"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24">
            <div className="absolute inset-0 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24">
            <div className="absolute inset-0 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl"></div>
          </div>

          {/* Main Image Container */}
          <motion.div
            className="relative group"
            whileHover="hover"
            variants={{
              hover: { scale: 1.02 }
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 via-transparent to-blue-600/20 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/5 to-transparent"></div>
              
              <img
                src={imageSrc}
                alt="Leadership SUZIKADI"
                className="w-full h-auto object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1625]/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent"></div>
            </div>

            {/* Floating Badge Premium */}
            <motion.div 
              className="absolute -top-6 -right-6"
              variants={floatingAnimation}
              animate="animate"
            >
              <div className="relative px-6 py-4 bg-gradient-to-br from-amber-600/30 to-yellow-600/20 backdrop-blur-xl rounded-2xl border border-amber-500/30 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-md opacity-50"></div>
                    <Award className="w-5 h-5 text-amber-300 relative z-10" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Depuis 2008</div>
                    <div className="text-xs text-amber-300/80">Héritage d'excellence</div>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Stats Cards */}
          <motion.div
            className="absolute -bottom-8 left-8 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: "15+", label: "Années", icon: <TrendingUp className="w-4 h-4" />, color: "amber" },
              { value: "50K+", label: "Vies", icon: <Users className="w-4 h-4" />, color: "blue" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.2 }}
                className="relative group"
              >
                <div className={`relative p-4 rounded-xl bg-gradient-to-br ${
                  stat.color === 'amber' 
                    ? 'from-amber-900/40 to-amber-800/20' 
                    : 'from-blue-900/40 to-blue-800/20'
                } backdrop-blur-sm border ${
                  stat.color === 'amber' 
                    ? 'border-amber-500/20' 
                    : 'border-blue-500/20'
                } shadow-lg`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${
                      stat.color === 'amber'
                        ? 'from-amber-500/30 to-yellow-500/20'
                        : 'from-blue-500/30 to-cyan-500/20'
                    }`}>
                      <div className={`${
                        stat.color === 'amber' ? 'text-amber-300' : 'text-blue-300'
                      }`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${
                        stat.color === 'amber'
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300'
                          : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'
                      }`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs ${
                        stat.color === 'amber' ? 'text-amber-300/80' : 'text-blue-300/80'
                      }`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Text Column Premium */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="order-1 lg:order-2"
        >
          {/* Section Label Premium */}
          <motion.div 
            className="flex items-center gap-4 mb-10"
            variants={fadeInRight}
          >
            <div className="relative">
              <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500"></div>
            </div>
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-white/8 to-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 uppercase">
                Notre Essence
              </span>
            </div>
          </motion.div>

          {/* Title with Gradient */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.95]"
            variants={fadeInRight}
          >
            <span className="block">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Leadership Humanitaire
              </span>
            </span>
            <span className="block mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-200">
                d'Excellence
              </span>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-2xl text-blue-100/90 mb-12 font-light leading-relaxed"
            variants={fadeInRight}
          >
            Pionniers du développement durable au Tchad, 
            nous transformons des communautés entières grâce à des solutions innovantes 
            et un engagement sans faille.
          </motion.p>

          {/* Main Description Premium */}
          <motion.div 
            className="mb-12"
            variants={fadeInRight}
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/6 via-white/4 to-white/8 backdrop-blur-xl border border-white/15 shadow-2xl mb-8">
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-500/30 rounded-tl-lg"></div>
              </div>
              <div className="relative z-10">
                <p className="text-xl text-blue-100/90 leading-relaxed font-light">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">
                    SUZIKADI
                  </span>{" "}
                  incarne l'excellence humanitaire à travers des interventions stratégiques 
                  qui redéfinissent le développement social. Notre approche systémique 
                  intègre innovation, durabilité et impact mesurable.
                </p>
              </div>
            </div>

            {/* Values Grid Premium */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  variants={fadeInRight}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div className="relative p-5 rounded-2xl bg-gradient-to-br from-white/8 to-white/4 border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${value.bgColor}`}>
                          <div className={`${value.color.replace('from-', 'text-').replace(' to-', '-')}`}>
                            {value.icon}
                          </div>
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1">{value.label}</h4>
                          <p className="text-sm text-blue-100/70">{value.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons Premium */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 mt-12"
            variants={fadeInRight}
          >
            <motion.a
              href="/apropos"
              whileHover={{ 
                scale: 1.03,
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-[#13213F] via-[#1A3262] to-[#13213F] text-white font-bold text-lg flex items-center justify-center gap-4 min-w-[260px] shadow-2xl overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/40 transition-all duration-300"></div>
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Sparkles className="w-5 h-5 relative z-10" />
                </div>
                Découvrir notre Vision
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </span>
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.03,
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 rounded-2xl border-2 border-white/20 hover:border-amber-400/40 text-white font-bold text-lg bg-gradient-to-r from-white/8 to-white/4 hover:from-white/12 hover:to-white/6 backdrop-blur-sm flex items-center justify-center gap-4 min-w-[260px] shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Globe className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
              <span>Devenir Partenaire</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aproposGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A1625" />
              <stop offset="50%" stopColor="#13213F" />
              <stop offset="100%" stopColor="#0A1625" />
            </linearGradient>
          </defs>
          <path 
            d="M0,0 L1440,0 L1440,120 C1200,80 960,60 720,80 C480,100 240,120 0,100 L0,0 Z"
            fill="url(#aproposGradient)"
            opacity="0.8"
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Apropos;