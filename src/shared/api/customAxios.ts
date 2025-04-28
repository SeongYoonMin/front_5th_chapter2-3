import axios from "axios"

export const customAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});