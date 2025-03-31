import api from "../api";

export const twoFactorQR = async () => {
  try {

    const response = await api.get("/user/two-factor-qr-code", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('api_token')}`
        }
    });
    console.log(response.data);

    return response;
  } catch (error: any) {
    console.error("QR code failed:", error.response?.data || error.message);
    throw error;
  }
};


export const enable2FA = async () => {
  try {
    const response = await api.post("user/two-factor-authentication", {},{
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
    const response = await api.delete("user/two-factor-authentication", {
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


export const verify2FA = async (code : any) => {
  try {
    const response = await api.post("/two-factor-challenge",  code , {
        headers : {
            Authorization: `Bearer ${localStorage.getItem('api_token')}`
        }
    }
    );

    console.log(response.data);

    return response;
  } catch (error: any) {
    console.error("Enable 2FA failed:", error.response?.data || error.message);
    throw error;
  }
};
