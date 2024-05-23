import axios from "axios";
import apiClient from "./appClient";
import { toast } from "react-toastify";

export const commonPostHandler = async (url, payload, setLoading) => {
  try {
    // console.log("jskjhak");
    setLoading(true);
    let headers = {};

    // Check if running in the browser environment and localStorage is available
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("careerxUserToken")
    ) {
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("careerxUserToken")}`,
      };
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      payload,
      {
        headers: headers,
      }
    );
    console.log(response);
    setLoading(false);
    return response;
  } catch (error) {
    console.log(error);
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

export const commonUpdateHandler = async (url, payload, setLoading) => {
  try {
    console.log("update called");
    setLoading(true);
    let headers = {};

    // Check if running in the browser environment and localStorage is available
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("careerxUserToken")
    ) {
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("careerxUserToken")}`,
      };
    }

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      payload,
      {
        headers: headers,
      }
    );
    console.log(response);
    setLoading(false);
    return response;
  } catch (error) {
    console.log(error);
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
