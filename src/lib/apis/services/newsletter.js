import axios from "axios";
import { apiClientWithoutToken } from "./appClient";
import { toast } from "react-toastify";
import { NEWSLETTER } from "../endpoints";

export const addNewsletter = async (email) => {
  try {
    const payload = {
      email: email,
    };
    const response = await apiClientWithoutToken.post(NEWSLETTER, payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(
    //   error?.response?.data?.message
    //     ? error?.response?.data?.message
    //     : "Something went wrong"
    // );
    // toast.error(
    //   error?.response?.data?.message
    //     ? error?.response?.data?.message
    //     : "Something went wrong"
    // );
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};
