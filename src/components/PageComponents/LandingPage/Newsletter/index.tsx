"use client";
import SpinnerLoader from "@/components/Common/SpinnerLoader";
import React, { FormEvent, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { addNewsletter } from "../../../../lib/apis/services/newsletter";

type Props = {};

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        setEmailError("");
        setLoading(true);
        const response = await axios.post("/api/resumes", { email });
        const { isValid } = response.data;
        setIsValid(isValid);
        if (isValid) {
          const response = await addNewsletter(email);
          console.log(response);
          toast.success("Your are subscribed to our newsletter");
        } else {
          setEmailError("Please enter a valid email ID");
        }
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setEmailError(error);
      }
    } else {
      setEmailError("Please enter a valid email ID");
    }
  };

  const validateEmail = (email: string) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container mt-20 rounded-md bg-stay-updated-bg bg-cover bg-no-repeat h-60 shadow-xl">
      <div className="w-full h-full px-6 py-10  md:flex justify-between items-center md:space-x-3">
        <div className="flex-1">
          <div className="text-2xl lg:text-[50px] text-bluePrimary font-semibold  w-11/12 lg:max-w-[60vw] text-left lg:leading-[59px]">
            Stay Updated
          </div>
          <div className="text-gray-500 text">
            Join our newsletter to stay up to date on features and releases.
          </div>
        </div>
        <form
          className="flex-1 flex space-x-2 items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={email}
              onChange={handleChange}
              className={`py-2 px-4  w-full rounded-full bg-white border flex-1 h-16 outline-none text-lg ${
                emailError.trim() !== "" && "border-red-500"
              }`}
              placeholder="Enter your Email"
              required
            />
            {emailError.trim() !== "" && (
              <div className="text-red-500 text-xs mt-1 ml-3 absolute -bottom-5">
                {emailError}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-bluePrimary py-4 px-10 w-[150px] rounded-xl text-white hover:bg-lightBlue transition duration-100"
          >
            {loading ? <SpinnerLoader color="white" /> : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
