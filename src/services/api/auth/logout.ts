import api from "../api";

export const logout = async () => {
    try {
        const response = await api.post(
            `/logout`, {},
      
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('api_token')}`
              },
            }
          );
      localStorage.removeItem('api_token');
      console.log("Success", response.data)
      return response.data;
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };