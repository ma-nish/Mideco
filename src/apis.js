import axios from "axios";

const api = "https://appsinvodevlopment.com/mideco_app/public/api";

export const signup = async (payload) => {
  try {
    const { data, status } = await axios.post(api + "/register", payload);

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

export const login = async (payload) => {
  try {
    const { data, status } = await axios.post(api + "/login", payload);

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

export const socialLogin = async (payload) => {
  try {
    const { data, status } = await axios.post(api + "/social_login", payload);

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.error("Error:", err);
  }
};
