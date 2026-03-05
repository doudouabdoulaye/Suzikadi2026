import { motion, type Variants, type Easing } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageCircle,
  Send, Clock, Globe, Users, Sparkles,
  Shield, Zap, ArrowRight,
  Award, CheckCircle, Star
} from "lucide-react";
import { useState } from "react";

const easeInOut: Easing = [0.42, 0, 0.58, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeInOut, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gestion du formulaire
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      {/* Effets de fond */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-emerald-500/10 rounded-full"
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

      {/* HERO SECTION PREMIUM */}
      <section className="relative min-h-[40vh] pt-28 md:pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        {/* Effets de lumière */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-gradient-to-r from-emerald-900/20 via-blue-900/15 to-purple-900/15 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            {/* Badge premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent backdrop-blur-sm mb-8 group"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                SUPPORT VIP 2026
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6 tracking-tighter">
              Connectez-vous à <br />
              <span className="font-serif italic bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                l'excellence
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Votre partenaire stratégique pour le développement durable au Tchad.
              Contact direct avec notre équipe d'experts.
            </motion.p>

            {/* Metrics rapides */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { value: "< 2h", label: "Réponse moyenne", icon: <Clock size={16} /> },
                { value: "98%", label: "Satisfaction client", icon: <Star size={16} /> },
                { value: "24/7", label: "Support disponible", icon: <Zap size={16} /> },
                { value: "15+", label: "Experts dédiés", icon: <Users size={16} /> },
              ].map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ================= INFOS CONTACT PREMIUM ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* En-tête */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
                  Accès Direct
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                Contact <span className="font-serif italic text-emerald-400">Premium</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Des canaux de communication optimisés pour une collaboration efficace et rapide.
              </p>
            </div>

            {/* Grille de contacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Téléphone VIP */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-xl">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Prioritaire
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Support Direct</h3>
                  <p className="text-gray-400 text-sm mb-4">Ligne dédiée aux partenaires</p>
                  <div className="space-y-2">
                    <p className="text-2xl font-light text-white">+235 99 28 86 50</p>
                    <p className="text-sm text-gray-500">Lundi - Vendredi, 8h - 18h</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    <a href="tel:+23599288650" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Appeler maintenant
                    </a>
                  </motion.button>
                </div>
              </motion.div>

              {/* WhatsApp Business */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                      Instantané
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp Business</h3>
                  <p className="text-gray-400 text-sm mb-4">Support en temps réel</p>
                  <div className="space-y-2">
                    <p className="text-lg font-light text-white">Discuter avec notre équipe</p>
                    <p className="text-sm text-gray-500">Réponse sous 15 minutes</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-colors"
                  >
                    <a
                      href="https://wa.me/23599288650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Démarrer la conversation
                    </a>
                  </motion.button>
                </div>
              </motion.div>

              {/* Email Professionnel */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      Formel
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Officiel</h3>
                  <p className="text-gray-400 text-sm mb-4">Pour les demandes détaillées</p>
                  <div className="space-y-2">
                    <p className="text-lg font-light text-white">contact@suzikadi.org</p>
                    <p className="text-sm text-gray-500">Réponse sous 2 heures ouvrables</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-colors"
                  >
                    <a
                      href="mailto:contact@suzikadi.org"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Envoyer un email
                    </a>
                  </motion.button>
                </div>
              </motion.div>

              {/* Localisation */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-500/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      Siège
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Siège Social</h3>
                  <p className="text-gray-400 text-sm mb-4">Zone d'intervention principale</p>
                  <div className="space-y-2">
                    <p className="text-lg font-light text-white">Moundou — Tchad</p>
                    <p className="text-sm text-gray-500">Quartier Dombao • Axe ATNV</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-colors"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="w-4 h-4" />
                      Voir sur la carte
                    </div>
                  </motion.button>
                </div>
              </motion.div>

            </div>

            {/* Section certifications */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-400">Sécurité des données</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-gray-400">Support certifié</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-400">Confidentialité garantie</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= FORMULAIRE PREMIUM ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="sticky top-24">
              {/* Effet de contour */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/30 via-cyan-500/30 to-emerald-500/30 rounded-3xl blur-xl opacity-30" />

              <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/50 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* En-tête du formulaire */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Send className="w-6 h-6 text-emerald-400" />
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
                      Message Direct
                    </span>
                  </div>
                  <h2 className="text-3xl font-light mb-2">
                    Formulaire <span className="font-serif italic">Premium</span>
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Tous les champs sont traités avec confidentialité absolue.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Champ Nom */}
                  <div className="group">
                    <label className="block text-sm text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                      placeholder="Prénom & Nom"
                    />
                  </div>

                  {/* Champ Email */}
                  <div className="group">
                    <label className="block text-sm text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                      placeholder="vous@entreprise.com"
                    />
                  </div>

                  {/* Champ Sujet */}
                  <div className="group">
                    <label className="block text-sm text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Nature de votre demande *
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm appearance-none"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="partnership">Partenariat stratégique</option>
                        <option value="project">Proposition de projet</option>
                        <option value="support">Support technique</option>
                        <option value="donation">Soutien financier</option>
                        <option value="other">Autre demande</option>
                      </select>
                      <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transform rotate-90" />
                    </div>
                  </div>

                  {/* Champ Message */}
                  <div className="group">
                    <label className="block text-sm text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Votre message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  {/* Checkbox confidentialité */}
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <input
                      type="checkbox"
                      id="confidentiality"
                      required
                      className="mt-1 w-4 h-4 rounded bg-white/10 border-white/20 text-emerald-500 focus:ring-emerald-500/30 focus:ring-offset-gray-900"
                    />
                    <label htmlFor="confidentiality" className="text-sm text-gray-400">
                      J'accepte que mes informations soient traitées conformément à la politique
                      de confidentialité de SUZIKADI. Vos données ne seront jamais partagées.
                    </label>
                  </div>

                  {/* Bouton d'envoi */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative w-full py-4 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 animate-shimmer" />
                    <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-700 via-cyan-700 to-emerald-700 rounded-xl" />
                    <div className="relative flex items-center justify-center gap-3 text-lg font-semibold">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Envoyer le message</span>
                    </div>
                  </motion.button>
                </form>

                {/* Note de bas de formulaire */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>Réponse garantie sous 2 heures ouvrables</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;