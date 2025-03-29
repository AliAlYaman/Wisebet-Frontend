import api from "./api";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await api.post("/login", data);
    const token = response.data.token;

    console.log("Login successful:", response.data);
    localStorage.setItem("token", token);

    return response;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
