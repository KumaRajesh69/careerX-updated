import axios from "axios";
import { apiClientWithoutToken } from "./appClient";
import { toast } from "react-toastify";
import { AUTH_URL, REGISTER_URL } from "../endpoints";

export const loginHandler = async (email, password, setLoading) => {
  try {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
      role: 3,
      strategy: "local",
      deviceType: 1,
      deviceId: "sdfgt3453",
    };
    console.log(process.env.NEXT_PUBLIC_API_URL);

    const response = await apiClientWithoutToken.post(AUTH_URL, payload);
    console.log(response.data);
    setLoading(false);
    return response.data;
  } catch (error) {
    toast.error(
      error?.response?.data?.message
        ? error?.response?.data?.message
        : "Something went wrong"
    );
    setLoading(false);
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};

export const registerApiHandler = async (
  email,
  password,
  name,
  phone,
  setLoading
) => {
  try {
    setLoading(true);
    const payload = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      role: 3,
      deviceType: 1,
      deviceId: "1234ygf56",
    };
    const response = await apiClientWithoutToken.post(REGISTER_URL, payload);
    console.log(response.data);
    setLoading(false);
    return response.data;
  } catch (error) {
    toast.error(
      error?.response?.data?.message
        ? error?.response?.data?.message
        : "Something went wrong"
    );
    setLoading(false);
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};
