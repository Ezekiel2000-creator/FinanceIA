import axios from 'axios';

// Créer une instance Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5650/api', // Remplacez par l'URL de votre API
});

// Ajouter un intercepteur de requête pour inclure le token
axiosInstance.interceptors.request.use(
  (config) => {
    // Obtenir le token du localStorage ou du state
    const token = localStorage.getItem('token');

    // Si le token existe, l'ajouter à l'en-tête de la requête
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exporter l'instance Axios configurée
export default axiosInstance;