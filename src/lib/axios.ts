import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL_API || "https://restcountries.com/v3.1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
