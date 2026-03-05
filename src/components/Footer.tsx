import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUp,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Globe,
  Shield,
  FileCheck,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/Logo/suzilogo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/apropos", label: "À propos" },
    { to: "/missions", label: "Missions" },
    { to: "/domaines", label: "Domaines" },
    { to: "/partenariats", label: "Partenariats" },
    { to: "/contact", label: "Contact" },
  ];

  const socialMedia = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: MessageCircle, url: "https://wa.me/23599288650" },
    { icon: Youtube, url: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-[#0B1220] to-gray-950 text-white border-t border-white/10 overflow-hidden">

      {/* Glow background premium */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-emerald-600/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[160px] rounded-full" />

      {/* Accent line */}
      <div className="h-[3px] bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* ===== TOP BRAND BLOCK ===== */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">

          {/* Identity */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-white rounded-xl shadow-xl">
                <img src={logo} className="h-10" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  SUZI
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                    KADI
                  </span>
                </h2>
                <p className="text-sm text-gray-400">
                  Coopérative de développement humain
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Organisation engagée dans l’éducation, la santé communautaire
              et l’inclusion sociale durable au Tchad.
            </p>

            {/* Trust badges premium */}
            <div className="flex flex-wrap gap-3">
              <Badge icon={Shield} text="Structure fiable" />
              <Badge icon={FileCheck} text="Rapports publics" />
              <Badge icon={Sparkles} text="Impact mesurable" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <Title>Navigation</Title>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-400 hover:text-emerald-400 transition flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <Title>Contact direct</Title>

            <div className="space-y-4 mb-6">

              <ContactItem icon={MapPin} text="Moundou — Tchad" />
              <ContactItem icon={Phone} text="+235 99 28 86 50" />
              <ContactItem icon={Mail} text="contact@suzikadi.org" />

            </div>

            {/* Newsletter premium */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-400" />
                Lettre d'information
              </p>

              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  type="email"
                  className="flex-1 px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm focus:border-emerald-500 outline-none"
                  required
                />
                <button className="px-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ===== SOCIAL BAR ===== */}
        <div className="flex flex-wrap justify-between items-center gap-6 py-8 border-y border-white/10">

          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Globe className="w-4 h-4 text-emerald-400" />
            Réseau & communauté
          </div>

          <div className="flex gap-3">
            {socialMedia.map((S, i) => (
              <motion.a
                key={i}
                href={S.url}
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-emerald-600 transition"
              >
                <S.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} SUZIKADI — Développement humain durable
          </p>

          <div className="flex gap-5">
            <Link to="/mentions-legales" className="hover:text-emerald-400">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-emerald-400">
              Confidentialité
            </Link>
            <Link to="/cookies" className="hover:text-emerald-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top premium */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.12 }}
        className="fixed bottom-6 right-6 p-4 bg-emerald-600 rounded-full shadow-2xl shadow-emerald-600/30"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

/* ===== MINI COMPONENTS ===== */

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-emerald-400">
      {children}
    </h3>
  );
}

function Badge({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
      <Icon className="w-3.5 h-3.5 text-emerald-400" />
      {text}
    </div>
  );
}

function ContactItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <Icon className="w-4 h-4 text-emerald-400" />
      {text}
    </div>
  );
}
