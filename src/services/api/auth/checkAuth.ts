import api from "../api";

export const checkAuth = async (): Promise<boolean> => {
    try {
      const token = localStorage.getItem('api_token');
      
      if (!token) return false;
      
      
      const response = await api.get('/user', {
        headers : {
            Authorization : `Bearer ${token}`
        }
      });
      return response.status === 200;
    } catch (error) {
      console.error('Authentication check failed:', error);
      return false;
    }
  };