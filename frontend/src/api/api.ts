import axios from "axios";

const API_CALL = "http://192.168.1.100:8000/api";

const api = axios.create({
  baseURL: API_CALL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFeeHistory = async () => {
  const { data } = await api.get(`${API_CALL}/latestFees`);

  return data;
};
