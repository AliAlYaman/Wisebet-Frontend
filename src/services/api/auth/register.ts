import api from "../api";

interface RegisterData {
  user_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const register = async (data: RegisterData) => {
  try {

    const response = await api.post("/register", data);
    localStorage.setItem("api_token", response.data.token);
    console.log("Registration successful:", response.data);
  
    return response;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export const googleRegister = async (credential: string): Promise<void> => {
  const response = await api.post('/auth/google', { token: credential });

  if (response.data.token) {
    localStorage.setItem('api_token', response.data.token);
  } else {
    throw new Error('Google sign up failed');
  }
};