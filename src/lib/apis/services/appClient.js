import axios from "axios";

let headers = {};

if (typeof window !== "undefined") {
  // Code inside this block will only run in the browser environment
  const userToken = localStorage.getItem("careerXUserToken");
  if (userToken) {
    headers.Authorization = `Bearer ${userToken}`;
  }
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: headers,
});
// console.log("-------------------------->>>>>>", apiClient);

export const apiClientWithoutToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export default apiClient;
