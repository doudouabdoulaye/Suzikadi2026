const API_URL = "http://127.0.0.1:8000";

export const getPartenaires = async () => {
  const response = await fetch(`${API_URL}/partenaires/`);
  if (!response.ok) {
    throw new Error("Erreur lors du fetch des partenaires");
  }
  return response.json();
};

export const getRealisations = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/realisations/");
  return res.json();
};