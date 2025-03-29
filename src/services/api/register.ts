import api from "./api";

interface RegisterData {
  user_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const register = async (data: RegisterData) => {
  try {
    const response = await api.post("/register", data);
    const token = response.data.token;
    console.log("Registration successful:", response.data);
    localStorage.setItem("token", token);
    return response;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};
