import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { getPartenaires } from "../services/api";
import { 
  Plus, 
  Maximize2, 
  ShieldCheck, 
  Compass,
  Link
} from "lucide-react";

interface Partenaire {
  id: number;
  nom: string;
  logo: string;
  description: string;
  site_web?: string;
}

export default function GalerieUltraPremium() {
  const [partenaires, setPartenaires] = useState<Partenaire[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPartenaires().then(setPartenaires).finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 py-16 md:py-32 px-4 md:px-6">
      
      {/* --- AMBIANCE LUMINEUSE --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-500/5 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        
        {/* --- HEADER ÉDITORIAL --- */}
        <header className="mb-16 md:mb-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 border-b border-white/5 pb-10 md:pb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-emerald-400 mb-6 md:mb-8"
            >
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em]">Écosystème Global</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-9xl font-extralight tracking-tighter leading-[1.1] md:leading-[0.85]"
            >
              Partenaires <br />
              <span className="font-serif italic text-emerald-500">D'Influence</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block text-right max-w-xs space-y-4"
          >
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Standard d'excellence 2026</p>
            <p className="text-gray-400 font-light leading-relaxed">
              Une convergence de visions pour redéfinir les frontières de l'impact humain.
            </p>
          </motion.div>
        </header>

        {/* --- GRILLE DE GALERIE --- */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
          </div>
        ) : (
          <LayoutGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {partenaires.map((p) => (
                <PartnerArtCard 
                  key={p.id} 
                  p={p} 
                  isActive={selectedId === p.id}
                  onClick={() => setSelectedId(selectedId === p.id ? null : p.id)}
                />
              ))}
            </div>
          </LayoutGroup>
        )}
      </div>
    </div>
  );
}

function PartnerArtCard({ p, isActive, onClick }: any) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative cursor-pointer group rounded-2xl md:rounded-3xl overflow-hidden border transition-all duration-700 ${
        isActive 
        ? "bg-white/5 border-emerald-500/40 shadow-2xl" 
        : "bg-[#0A0A0A] border-white/5 hover:border-white/20"
      }`}
    >
      <div className="p-6 md:p-12">
        {/* Section Image Agrandie */}
        <div className="flex justify-center items-center h-40 md:h-64 mb-8 md:mb-12 relative">
          <motion.div 
            layout
            className={`transition-all duration-700 ${isActive ? 'scale-110 md:scale-125' : 'scale-100 group-hover:scale-110'}`}
          >
            <img 
              src={p.logo} 
              alt={p.nom} 
              className={`max-h-24 md:max-h-40 w-auto object-contain transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale opacity-50 group-hover:opacity-100'}`} 
            />
          </motion.div>
          
          {!isActive && (
            <div className="absolute bottom-0 right-0 p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} className="text-emerald-500 md:w-4 md:h-4" />
            </div>
          )}
        </div>

        {/* Info de base */}
        <div className="flex items-center justify-between border-t border-white/5 pt-6 md:pt-8">
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-2xl md:text-4xl font-light tracking-tight">{p.nom}</h3>
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500">Alliance Certifiée</span>
            </div>
          </div>
          
          <motion.div 
            animate={{ rotate: isActive ? 45 : 0 }}
            className={`p-3 md:p-4 rounded-full border transition-all duration-500 ${isActive ? 'bg-emerald-500 border-transparent' : 'border-white/10'}`}
          >
            <Plus size={18} className={isActive ? 'text-black' : 'text-white'} />
          </motion.div>
        </div>

        {/* Révélation de la Description */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 md:mt-12 space-y-6 md:space-y-8 overflow-hidden"
            >
              <p className="text-lg md:text-2xl font-light text-gray-300 leading-snug">
                {p.description}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 md:pt-8 border-t border-white/5">
                <div className="flex gap-8 md:gap-12">
                  <Stat label="Impact" value="Global" />
                  <Stat label="Secteur" value="Innovation" />
                </div>

                {p.site_web && (
                  <motion.a
                    href={p.site_web}
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-emerald-400 transition-colors w-full md:w-auto"
                  >
                    Site Officiel <Link size={14} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col gap-0.5 md:gap-1">
      <span className="text-[8px] md:text-[10px] text-gray-600 uppercase tracking-widest font-bold">{label}</span>
      <span className="text-xs md:text-sm font-medium">{value}</span>
    </div>
  );
}