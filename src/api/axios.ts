import axios from "axios";

export const apiInstence = axios.create({
  baseURL: "https://dummyjson.com", // root API URL
  headers: {
    "Content-Type": "application/json",
  },
});

