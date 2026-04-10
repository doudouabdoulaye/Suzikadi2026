/* const API_URL = "https://suzikadi-backend.onrender.com";

export const getPartenaires = async () => {
  const response = await fetch(`${API_URL}/partenaires/`);
  if (!response.ok) {
    throw new Error("Erreur lors du fetch des partenaires");
  }
  return response.json();
};

export const getRealisations = async () => {
  const res = await fetch("https://suzikadi-backend.onrender.com/api/realisations/");
  return res.json();
}; */

// On définit l'URL de base une seule fois
const API_URL = "https://suzikadi-backend.onrender.com/api";

export const getPartenaires = async () => {
  // On utilise l'URL de base + le point d'entrée
  const response = await fetch(`${API_URL}/partenaires/`);
  if (!response.ok) {
    throw new Error("Erreur lors du fetch des partenaires");
  }
  return response.json();
};

export const getRealisations = async () => {
  const response = await fetch(`${API_URL}/realisations/`);
  if (!response.ok) {
    throw new Error("Erreur lors du fetch des realisations");
  }
  return response.json();
};