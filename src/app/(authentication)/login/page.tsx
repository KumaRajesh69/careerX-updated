"use client";
import DefaultInput from "@/components/Common/Inputs/DefaultInput";
import Image from "next/image";
import React, { useState } from "react";
import { loginHandler } from "../../../lib/apis/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import SpinnerLoader from "@/components/Common/SpinnerLoader";

type Props = {};

const LoginPage = (props: Props) => {
  const [tab, setTab] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");

  const router = useRouter();

  const passwordLoginHandler = async (e: any) => {
    e.preventDefault();
    if (email.trim() === "") {
      setEmailError("Please enter a valid Email ID");
    } else if (password.trim() === "") {
      setPasswordError("Please enter password ");
    } else if (password.length < 6) {
      setPasswordError("Password should be of atleast 6 characters! ");
    } else {
      setEmailError("");
      setPasswordError("");
      const response = await loginHandler(email, password, setLoading);
      console.log(response);
      localStorage.setItem("careerxUserToken", response.accessToken);
      localStorage.setItem("careerxUser", JSON.stringify(response.user));
      toast.success("Login successfull!");
      router.push("/dashboard");
    }
  };

  const loginwithPassword = async (status: number) => {
    if (validateEmail(email)) {
      try {
        setEmailError("");
        setLoading(true);
        const response = await axios.post("/api/resumes", { email });
        const { isValid } = response.data;
        setIsValid(isValid);
        if (isValid) {
          setTab(status);
        } else {
          setEmailError("Please enter a valid email ID");
        }
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setEmailError(error);
      }
    } else if (email.trim() === "") {
      setLoading(false);
      setEmailError("Please enter a valid email ID");
    } else {
      setLoading(false);
      setEmailError("Please enter a valid email ID");
    }
  };

  const validateEmail = (email: string) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container grid md:grid-cols-10 p-2">
      <div className="col-span-4 py-10">
        <div className="w-full max-w-xs mx-auto">
          <div className="text-3xl text-bluePrimary font-medium">
            Welcome Back.
          </div>
          <div className="max-w-xs w-full mt-5 space-y-4">
            <button className="w-full p-2 bg-bluePrimary text-white rounded-md">
              Login with google
            </button>
            <button className="w-full p-2 bg-[#2867B2] text-white rounded-md">
              Login with google
            </button>
          </div>

          <div className="my-5 flex items-center max-w-xs">
            <div className="h-px border flex-1"></div>
            <div className="text-sm  mx-4">Or Login with your Email</div>
            <div className="h-px border flex-1"></div>
          </div>

          <form className="max-w-xs" onSubmit={(e: any) => e.preventDefault()}>
            <div className=" ">
              <DefaultInput
                label="Email"
                type="text"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              {emailError.trim() !== "" && (
                <div className="text-red-500 text-xs mt-1">{emailError}</div>
              )}
            </div>
            {tab === 0 ? (
              <div className="max-w-xs w-full mt-5 space-y-4">
                <button
                  type="button"
                  onClick={() => loginwithPassword(1)}
                  className="w-full p-2 bg-bluePrimary text-white rounded-md"
                >
                  {loading ? (
                    <SpinnerLoader color="white" />
                  ) : (
                    "Login with password"
                  )}
                </button>
                <div className="my-5 flex items-center max-w-xs">
                  <div className="h-px border flex-1"></div>
                  <div className="text-sm  mx-4">Or </div>
                  <div className="h-px border flex-1"></div>
                </div>
                <button
                  type="button"
                  onClick={() => setTab(2)}
                  className="w-full p-2 bg-bluePrimary text-white rounded-md"
                >
                  Login with OTP
                </button>
              </div>
            ) : tab === 1 ? (
              <div>
                <div>
                  <DefaultInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                  {passwordError.trim() !== "" && (
                    <div className="text-red-500 text-xs mt-1">
                      {passwordError}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  onClick={(e) => passwordLoginHandler(e)}
                  className="w-full p-2 bg-bluePrimary text-white rounded-md mt-3"
                >
                  {loading ? <SpinnerLoader color="white" /> : "Login"}
                </button>

                <div
                  className="w-full text-center text-lightBlue text-sm mt-2"
                  onClick={() => setTab(2)}
                >
                  Login with OTP
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </form>
          <div className="text-center mt-5">
            <div className="text-sm text-gray-500">
              {"Don't have an account? "}
              <a href="/signup" className="text-bluePrimary font-semibold">
                Sign up Now
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
      </div>
    </div>
  );
};

export default LoginPage;
