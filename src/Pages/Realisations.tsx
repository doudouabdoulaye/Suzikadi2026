import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Users,
  BookOpen,
  Stethoscope,
  Leaf,
  Globe,
  ChevronRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight as NextIcon,
} from "lucide-react";

export default function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [realisations, setRealisations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const BASE_URL = "http://127.0.0.1:8000";

  const getImageUrl = (path: string) => {
    if (!path) return "";
    return path.startsWith("http") ? path : `${BASE_URL}${path}`;
  };

  useEffect(() => {
    fetch(`${BASE_URL}/realisations/`)
      .then((res) => res.json())
      .then((data) => {
        setRealisations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // AUTO SLIDER
  useEffect(() => {
    if (!selectedProject?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  const nextSlide = () => {
    if (!selectedProject?.images) return;
    setCurrentSlide((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!selectedProject?.images) return;
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const categories = [
    { id: "tous", label: "Toutes", icon: Globe },
    { id: "education", label: "Éducation", icon: BookOpen },
    { id: "sante", label: "Santé", icon: Stethoscope },
    { id: "environnement", label: "Environnement", icon: Leaf },
    { id: "social", label: "Social", icon: Users },
  ];

  const filtered =
    selectedCategory === "tous"
      ? realisations
      : realisations.filter((r) => r.category === selectedCategory);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">

      {/* ================= DETAIL VIEW ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
          >
            {/* HEADER */}
            <div className="max-w-6xl mx-auto px-6 pt-10">

              <button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentSlide(0);
                }}
                className="mb-8 flex items-center gap-2 text-gray-600 hover:text-black transition"
              >
                <ArrowLeft size={18} />
                Retour
              </button>

              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-xl">

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={getImageUrl(
                      selectedProject.images[currentSlide].image
                    )}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>

                {/* NAVIGATION */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur p-3 rounded-full shadow hover:bg-white"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur p-3 rounded-full shadow hover:bg-white"
                >
                  <NextIcon size={20} />
                </button>
              </div>

              {/* MINIATURES */}
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {selectedProject.images.map((img: any, index: number) => (
                  <img
                    key={img.id}
                    src={getImageUrl(img.image)}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-20 w-28 object-cover rounded-xl cursor-pointer transition ${
                      currentSlide === index
                        ? "ring-4 ring-amber-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>

              {/* TITLE + INFO */}
              <div className="mt-14 grid md:grid-cols-3 gap-14">

                <div className="md:col-span-2">
                  <h2 className="text-4xl font-bold mb-6">
                    {selectedProject.title}
                  </h2>

                  <p className="flex items-center gap-2 text-gray-500 mb-6">
                    <MapPin size={16} />
                    {selectedProject.location}
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-3xl shadow-lg h-fit">
                  <h4 className="text-xl font-bold mb-4">
                    Impact
                  </h4>
                  <p className="text-lg">
                    {selectedProject.impact}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= LIST VIEW ================= */}
      {!selectedProject && (
        <>
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold mb-4">
              Nos <span className="text-amber-600">Réalisations</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Découvrez nos projets impactant des milliers de vies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                    selectedCategory === cat.id
                      ? "bg-amber-600 text-white shadow"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
                onClick={() => setSelectedProject(r)}
              >
                {r.images?.length > 0 && (
                  <div className="h-56 overflow-hidden">
                    <img
                      src={getImageUrl(r.images[0].image)}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      alt={r.title}
                    />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">
                    {r.title}
                  </h3>

                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={14} />
                    {r.location}
                  </p>

                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {r.description}
                  </p>

                  <div className="mt-4 text-amber-600 flex items-center gap-1 text-sm font-semibold">
                    Découvrir <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}