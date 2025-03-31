import api from "../api";
import { NavigateFunction } from "react-router-dom";

interface VerifyEmailParams {
  verificationUrl: string;
  setIsVerifying: (value: boolean) => void;
  setIsVerified: (value: boolean) => void;
  setError: (message: string) => void;
  navigate: NavigateFunction;
}

export const verifyEmail = async ({
  verificationUrl,
  setIsVerifying,
  setIsVerified,
  setError,
  navigate,
}: VerifyEmailParams): Promise<void> => {
  setIsVerifying(true);
  try {
    const response = await api.get(verificationUrl, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('api_token')}`
        }
    });

    if (response.data.success) {
      setIsVerified(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Verification failed.");
    }
  } catch (err) {
    setError("Verification failed. Please try again.");
  } finally {
    setIsVerifying(false);
  }
};
