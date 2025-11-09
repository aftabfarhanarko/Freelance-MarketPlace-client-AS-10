import axios from "axios";

const insert = axios.create({
  baseURL: "http://localhost:4000/",
});

export const useAxiosData = () => {
  return insert;
};
