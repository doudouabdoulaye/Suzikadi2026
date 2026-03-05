import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, HeartHandshake, Globe, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo/suzilogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/apropos", label: "À propos" },
    { to: "/missions", label: "Missions" },
    { to: "/domaines", label: "Expertises" },
    { to: "/partenariats", label: "Partenariats" },
    { to: "/realisations", label: "Réalisations" },
    { to: "/contact", label: "Contact" },
  ];

  const languages = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ===== Bande Supérieure - Bleu Nuit & Or Raffiné ===== */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="hidden lg:block bg-gradient-to-r from-[#0A1931] via-[#0F3460] to-[#162447] text-white/95 text-xs uppercase tracking-[0.15em] font-medium border-b border-amber-500/20"
      >
        <div className="max-w-8xl mx-auto px-12 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-normal">+235 63 20 03 18</span>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-normal">association.suzikadi@gmail.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-medium">Tchad • cooperative</span>
            </div>
            <span className="h-4 w-px bg-amber-500/40"></span>
            <div className="flex gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="px-3 py-1 text-[10px] uppercase tracking-wider hover:bg-amber-600/30 rounded-lg transition-all duration-300 border border-amber-500/20 hover:border-amber-400/50 hover:text-amber-200"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Navbar Principale avec effet de scroll ===== */}
      <motion.div
        initial={false}
        animate={{
          backdropFilter: scrolled ? "blur(15px)" : "blur(0px)",
          backgroundColor: scrolled 
            ? "rgba(255, 255, 255, 0.97)" 
            : "rgba(255, 255, 255, 1)",
          boxShadow: scrolled 
            ? "0 10px 35px rgba(10, 25, 49, 0.12)" 
            : "0 2px 25px rgba(10, 25, 49, 0.08)",
          borderBottomWidth: scrolled ? "1px" : "0px",
          borderColor: "rgba(251, 191, 36, 0.15)",
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Effet de lumière sur la bordure */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
        
        <nav className="max-w-8xl mx-auto flex items-center justify-between px-8 lg:px-12 py-3 lg:py-4">
          
          {/* === Logo avec effet de réflexion === */}
          <Link to="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              {/* Effet de halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Container du logo */}
              <div className="relative p-2.5 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-[0_10px_40px_rgba(251,191,36,0.2)] border border-amber-200/60">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/30 to-transparent rounded-xl"></div>
                <img 
                  src={logo} 
                  alt="SUZIKADI Foundation" 
                  className="h-12 w-auto object-contain relative z-10"
                />
              </div>
              
              {/* Point lumineux */}
              <div className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full blur-sm"></div>
            </motion.div>
            
            {/* Texte du logo */}
            <div className="flex flex-col">
              <motion.h1 
                className="text-2xl font-light tracking-tight text-[#0A1931] leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                SUZI<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700">KADI</span>
              </motion.h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0F3460]/80 font-semibold mt-0.5">
                Human Development Foundation
              </p>
              <div className="h-0.5 w-16 bg-gradient-to-r from-amber-600 to-[#0F3460] rounded-full mt-1.5"></div>
            </div>
          </Link>

          {/* === Menu Desktop avec animations raffinées === */}
          <div className="hidden lg:flex items-center gap-10 text-[13px] uppercase tracking-[0.2em] font-bold">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative py-2.5 px-1 transition-all duration-500 group
                  ${isActive 
                    ? "text-[#0F3460]" 
                    : "text-[#0A1931]/80 hover:text-[#0F3460]"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative inline-block">
                      {label}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-amber-600 to-yellow-600 transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-amber-50/40 to-blue-50/30 rounded-lg -z-10 border border-amber-200/50"
                        transition={{ type: "spring", bounce: 0.2 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* === CTA & Bouton de don uniquement === */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/soutenir"
              className="relative overflow-hidden group bg-gradient-to-r from-[#0A1931] via-[#0F3460] to-[#162447] px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{
                boxShadow: "0 6px 25px rgba(10, 25, 49, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
              }}
            >
              {/* Animation de fond */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-700"></div>
              
              {/* Effet de brillance */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <span className="relative z-10 flex items-center gap-2.5 text-white group-hover:text-[#0A1931] transition-colors duration-300 text-xs font-bold uppercase tracking-widest">
                <HeartHandshake className="w-4 h-4" />
                Faire un don
              </span>
              
              {/* Bordure animée */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/60 rounded-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* === Mobile Button Premium === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-3 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-amber-100"
          >
            {/* Effet de fond animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-blue-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X className="w-6 h-6 text-[#0A1931] absolute inset-0" />
              ) : (
                <Menu className="w-6 h-6 text-[#0A1931] absolute inset-0" />
              )}
            </div>
            
            {/* Point d'indication */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full border-2 border-white"></div>
          </button>
        </nav>
      </motion.div>

      {/* === Menu Mobile Fullscreen avec design luxueux === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-[#0A1931] via-[#0F3460] to-[#162447] z-[9999] lg:hidden"
          >
            {/* Arrière-plan avec motif */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.25) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative h-full flex flex-col p-8">
              {/* Header Mobile */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="p-3 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20"
                  >
                    <img src={logo} alt="SUZIKADI" className="h-10 w-auto" />
                  </motion.div>
                  <div>
                    <span className="text-2xl font-bold text-white tracking-widest block">
                      SUZI<span className="text-amber-400">KADI</span>
                    </span>
                    <span className="text-xs text-amber-300/90 tracking-wider block mt-1">
                      Fondation pour le Développement Humain
                    </span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-gradient-to-br from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-amber-400/50"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Navigation Mobile */}
              <div className="space-y-1 flex-1 overflow-y-auto">
                {navLinks.map(({ to, label }, index) => (
                  <motion.div
                    key={to}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link 
                      to={to} 
                      onClick={() => setIsOpen(false)}
                      className="block py-6 px-6 text-2xl font-light text-white/90 hover:text-white hover:bg-gradient-to-r from-white/10 to-transparent rounded-2xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 hover:pl-8 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/30 to-blue-500/20 flex items-center justify-center group-hover:from-amber-500/40 group-hover:to-blue-500/30 transition-all">
                          <div className="w-2 h-2 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full"></div>
                        </div>
                        {label}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Mobile */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 space-y-4"
              >
                <Link
                  to="/soutenir"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white font-bold py-5 rounded-2xl text-center uppercase tracking-widest text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  style={{
                    boxShadow: "0 10px 40px rgba(245, 158, 11, 0.4)"
                  }}
                >
                  <HeartHandshake className="w-5 h-5 inline-block mr-3 mb-1 group-hover:scale-110 transition-transform" />
                  Faire un don
                </Link>
                
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-4 text-center text-white font-medium bg-gradient-to-br from-amber-600/30 to-amber-700/20 rounded-xl hover:from-amber-600/40 hover:to-amber-700/30 transition-all duration-300 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}