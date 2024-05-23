"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultInput from "../Common/Inputs/ResumeCreation/DefaultInput";
import ImageUpload from "../Common/Inputs/ResumeCreation/ImageUpload";
import { useRouter } from "next/navigation";
import { USERRESUME } from "@/lib/apis/endpoints";
import { commonPostHandler } from "../../lib/apis/services/common";
import { toast } from "react-toastify";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [errorText, setErrorText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("green"); // Default color
  const [saveLoading, setSaveLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    if (firstName.trim() === "") {
      setError("First Name");
      setErrorText("Please enter your first name.");
      return false;
    } else if (surName.trim() === "") {
      setError("SurName");
      setErrorText("Please enter your last name.");
      return false;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(firstName)) {
      setError("First Name");
      setErrorText("Special Characters are not allowed.");
      return false;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(surName)) {
      setError("SurName");
      setErrorText("Special Characters are not allowed.");
      return false;
    } else if (firstName.trim().length > 40) {
      setError("Firs tName");
      setErrorText(
        "First  name should be less than or equal to 40 characters."
      );
      return false;
    } else if (surName.trim().length > 25) {
      setError("SurName");
      setErrorText("Last name should be less than or equal to 25 characters.");
      return false;
    } else if (phoneNumber.trim() === "" || phoneNumber.length !== 10) {
      setError("Phone Number");
      setErrorText("Please enter a valid phone number.");
      return false;
    } else if (!validateEmail(email)) {
      setError("Email");
      setErrorText("Please enter a valid email address.");
      return false;
      // } else if (!validateLinkedInURL(linkedin)) {
      //   setError("LinkedIn URL");
      //   setErrorText("Please enter a valid LinkedIn URL.");
      //   return false;
      // } else if (!validateWebsiteURL(website)) {
      //   setError("Website");
      //   setErrorText("Please enter a valid website URL.");
      //   return false;
    } else {
      setError("");
      setErrorText("");
    }
    return true;
  };

  // const validateLinkedInURL = (url) => {
  //   const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?\s*$/;
  //   return regex.test(url);
  // };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const validateWebsiteURL = (url) => {
  //   const regex =
  //     /^(https?:\/\/)?[a-zA-Z0-9]+([-._~:/?#[\]@!$&'()*+,;=])*(\.[a-zA-Z]{2,})?(:\d{1,5})?(\/[^\s]*)?$/;
  //   return regex.test(url);
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     router.push("/workexperience");
  //   }
  // };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response2 = await commonPostHandler(
          USERRESUME,
          {
            personalDetails: {
              firstName,
              surName: surName,
              city,
              phone: phoneNumber,
              email,
              avatar: selectedImage,
              // avatar: selectedImage ? selectedImage : "",
              linkedinProfile: linkedin,
            },
            template: "65f5869675b548d4a6ecfbc8",
          },
          setSaveLoading
        );
        console.log("Response from Axios request:", response2);

        localStorage.setItem("_id", response2?.data._id);
        toast.success("Personal information saved successfully.");
        router.push("/workexperience");
      } catch (error) {
        console.error("There was a problem with your Axios request:", error);
        setSnackbarMessage("Failed to submit form. Please try again.");
        setSnackbarColor("red");
        setSnackbarOpen(true);
      }
    }
  };

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    // Load form data from localStorage when component mounts
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData && formData.personalDetails) {
      setFirstName(formData.personalDetails.firstName || "");
      setSurName(formData.personalDetails.surName || "");
      setPhoneNumber(formData.personalDetails.phone || "");
      setEmail(formData.personalDetails.email || "");
      setCity(formData.personalDetails.city || "");
      setCountry(formData.personalDetails.country || "");
      setLinkedin(formData.personalDetails.linkedinProfile || "");
      setWebsite(formData.personalDetails.website || "");
      setSelectedImage(formData.personalDetails.avatar || null);
    }
  }, []);

  return (
    <form onSubmit={submitHandler} className="mx-auto mt-5">
      <div className="flex md:space-x-10 space-x-5 w-full">
        <ImageUpload onImageChange={handleImageChange} />

        <div className="flex-1 grid md:grid-cols-2 gap-5">
          <DefaultInput
            label="First Name"
            placeholder="Jhon Doe"
            type="text"
            value={firstName}
            onChange={setFirstName}
            error={error}
            errorText={errorText}
          />
          <DefaultInput
            label="SurName"
            placeholder="Doe"
            type="text"
            value={surName}
            onChange={setSurName}
            error={error}
            errorText={errorText}
          />
          <DefaultInput
            label="Phone Number"
            placeholder="0000000000"
            type="phoneNumber"
            value={phoneNumber}
            onChange={setPhoneNumber}
            error={error}
            errorText={errorText}
          />{" "}
          <DefaultInput
            label="Email"
            placeholder="johndoe@cx.com"
            type="email"
            value={email}
            onChange={setEmail}
            error={error}
            errorText={errorText}
          />
        </div>
      </div>
      <div className="grid grid-cols-2  gap-5 md:mt-8 mt-5">
        <DefaultInput
          label="City"
          placeholder="Bengaluru"
          type="text"
          value={city}
          onChange={setCity}
          error={error}
          errorText={errorText}
        />
        <DefaultInput
          label="Country"
          placeholder="India"
          type="text"
          value={country}
          onChange={setCountry}
          error={error}
          errorText={errorText}
        />
        <DefaultInput
          label="LinkedIn URL"
          placeholder="in/johndoe"
          type="text"
          value={linkedin}
          onChange={setLinkedin}
          error={error}
          errorText={errorText}
        />
        <DefaultInput
          label="Website"
          placeholder="in/johndoe"
          type="link"
          value={website}
          onChange={setWebsite}
          error={error}
          errorText={errorText}
        />
      </div>
      <div className="">
        <div className="w-full mt-8 border-b-2 pb-10">
          <button
            type="submit"
            className="text-[#2950DA] font-semibold text-base bg-[#305EFF14] text-center w-full p-2 rounded-3xl border-dashed border border-[#305EFF]"
          >
            <span className="font-semibold text-lg">+</span> Add custom field
          </button>
        </div>
        <div className="grid md:grid-cols-2 my-5 gap-5">
          <div>
            <button
              type="button"
              className="text-[#2950DA] font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
            >
              Preview
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#2950DA] text-white font-semibold text-base  text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
            >
              Go next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
