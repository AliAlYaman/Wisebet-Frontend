// src/services/api/auth/resetPassword.ts
import api from "../../api"; // Assuming you have an api.ts file with configured Axios instance

type ResetPasswordParams = {
  email: string | null;
  token: string | null;
  password: string;
  password_confirmation: string;
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await api.post("/forgot-password", { email } , {
      headers: {
        Authorization : `Bearer ${localStorage.getItem('api_token')}`
      }
    });
    return {
      success: true,
      message: response.data.message || `Password reset link sent to ${email}`,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to send reset link",
      error: error.response?.data,
    };
  }
};

export const resetPassword = async ({
  email,
  token,
  password,
  password_confirmation,
}: ResetPasswordParams) => {
  try {
    const response = await api.post("/reset-password", {
      email,
      token,
      password,
      password_confirmation,
    });

    return {
      success: true,
      message: response.data.message || "Password reset successful",
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to reset password",
      error: error.response?.data,
    };
  }
};
