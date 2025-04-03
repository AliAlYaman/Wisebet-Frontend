import api from "../api";

export const enable2FA = async () => {
  try {
    const response = await api.post("/enable-2fa", {},{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('api_token')}`
        }
    });
    console.log(response.data);

    return response;
  } catch (error: any) {
    console.error("Enable 2FA failed:", error.response?.data || error.message);
    throw error;
  }
};


export const disable2FA = async () => {
  try {
    const response = await api.delete("/user/two-factor-authentication", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('api_token')}`
        }
    });
    console.log(response.data);

    return response;
  } catch (error: any) {
    console.error("Enable 2FA failed:", error.response?.data || error.message);
    throw error;
  }
};


export const verify2FA = async (code : string) => {
  try {
    const response = await api.post("/verify-2fa",  {code} ,{
      headers: {
          Authorization: `Bearer ${localStorage.getItem('api_token')}`
      }
  });

    console.log(response.data);

    return response;
  } catch (error: any) {
    console.error("Enable 2FA failed:", error.response?.data || error.message);
    throw error;
  }
};
