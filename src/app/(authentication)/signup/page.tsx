"use client";
import DefaultInput from "@/components/Common/Inputs/DefaultInput";
import Image from "next/image";
import React, { useState } from "react";
import { registerApiHandler } from "../../../lib/apis/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SpinnerLoader from "@/components/Common/SpinnerLoader";

type Props = {};

const SignUpPage = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const router = useRouter();

  const registerHandler = async (e: any) => {
    e.preventDefault();
    if ((await valiadteForm()) === true) {
      const response = await registerApiHandler(
        email,
        password,
        name,
        phone,
        setLoading
      );
      console.log(response);
      localStorage.setItem("careerxUserToken", response.accessToken);
      localStorage.setItem("careerxUser", JSON.stringify(response.user));
      toast.success("Registration successfull!");
      router.push("/dashboard");
    }
  };
  const validateEmail = (email: string) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const valiadteForm = async () => {
    if (name.trim() === "") {
      setNameError("Please enter name");
      return false;
    } else if (phone.trim() === "") {
      setNameError("");
      setPhoneError("Please enter phone number");
      return false;
    } else if (phone.length !== 10) {
      setNameError("");
      setPhoneError("Please enter a valid phone number");
      return false;
    } else if (!validateEmail(email)) {
      setNameError("");
      setPhoneError("");
      setEmailError("Please enter a valid email address");
    } else if (password.trim() === "") {
      setNameError("");
      setPhoneError("");
      setEmailError("");
      setPasswordError("Please enter password ");
    } else if (password.length < 6) {
      setNameError("");
      setPhoneError("");
      setEmailError("");
      setPasswordError("Password should be of atleast 6 characters! ");
    } else {
      return true;
    }
  };

  return (
    <div className="container grid md:grid-cols-10 p-2">
      <div className="col-span-4 py-10">
        <div className="w-full max-w-xs mx-auto">
          <div className="text-3xl text-bluePrimary font-medium text-center">
            Get Started with your Account
          </div>
          <div className="max-w-xs w-full mt-5 space-y-4">
            <button className="w-full p-2 bg-bluePrimary text-white rounded-md">
              Sign Up with Google
            </button>
            <button className="w-full p-2 bg-[#2867B2] text-white rounded-md">
              Sign Up with LinkedIn
            </button>
          </div>

          <div className="my-5 flex items-center max-w-xs">
            <div className="h-px border flex-1"></div>
            <div className="text-sm  mx-4">Or Sign up with your Email</div>
            <div className="h-px border flex-1"></div>
          </div>

          <form className="max-w-xs">
            <div>
              <DefaultInput
                label="Name"
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              {nameError.trim() !== "" && (
                <div className="text-red-500 text-xs mt-1 ">{nameError}</div>
              )}
            </div>
            <div>
              <DefaultInput
                label="Phone Number"
                type="Number"
                value={phone}
                onChange={(e: any) => {
                  if (e.target.value.length === 11) {
                    return;
                  } else {
                    setPhone(e.target.value);
                  }
                }}
              />
              {phoneError.trim() !== "" && (
                <div className="text-red-500 text-xs mt-1 ">{phoneError}</div>
              )}
            </div>
            <div>
              <DefaultInput
                label="Email Address"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              {emailError.trim() !== "" && (
                <div className="text-red-500 text-xs mt-1 ">{emailError}</div>
              )}
            </div>
            <div>
              <DefaultInput
                label="Password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              {passwordError.trim() !== "" && (
                <div className="text-red-500 text-xs mt-1 ">
                  {passwordError}
                </div>
              )}
            </div>
            <div className="max-w-xs w-full mt-5 space-y-4">
              <button
                onClick={(e: any) => registerHandler(e)}
                type="submit"
                className="w-full p-2 bg-bluePrimary text-white rounded-md"
              >
                {loading ? <SpinnerLoader color="white" /> : "Sign Up"}
              </button>
              <div className="my-5 flex items-center max-w-xs">
                <div className="h-px border flex-1"></div>
                <div className="text-sm  mx-4">Or </div>
                <div className="h-px border flex-1"></div>
              </div>
            </div>
          </form>
          <div className="text-center mt-5">
            <div className="text-sm text-gray-500">
              {"Already have an account? "}
              <a href="/signup" className="text-bluePrimary font-semibold">
                Login Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 bg-bluePrimary flex justify-center items-center text-white">
        <div className="max-w-sm w-full mx-auto ">
          <div className="w-full flex justify-end">
            <Image
              src={"/loginVector1.svg"}
              alt=""
              width={"100"}
              height={"70"}
              className="h-12 mb-3"
            />
          </div>
          <div className="w-full flex justify-start">
            <Image
              src={"/quote-left.svg"}
              alt=""
              width={"100"}
              height={"70"}
              className="w-10"
            />
          </div>
          <div className="text-white text-lg my-3 leading-9">
            This platform is one of the best companies I have dealt with in
            Indonesia. They’re always happy to help, and i wouldn’t hesitate to
            recommend them.
          </div>

          <div>
            <div>Daniel Anderson</div>
            <div className="font-semibold">Software Engineer at Amazon</div>
          </div>
          <div className="w-full flex justify-end">
            <Image
              src={"/loginVector2.svg"}
              alt=""
              width={"100"}
              height={"70"}
              className="h-12 mb-3"
            />
          </div>
          <div className="w-full flex justify-start">
            <Image
              src={"/loginVector3.svg"}
              alt=""
              width={"100"}
              height={"70"}
              className="h-12 mb-3 -ml-7"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SignUpPage;
