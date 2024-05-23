"use client";
import { commonUpdateHandler } from "@/lib/apis/services/common";
import PreviewGuid from "../../../components/PageComponents/Highlight/PreviewGuide";
import Stepper from "../../../components/PageComponents/Highlight/Stepper";
import SkillSearch from "../../../components/PageComponents/Skill/SkillSearch";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { USERRESUME } from "@/lib/apis/endpoints";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Skills() {
  const [skills, setSkills] = useState([{ id: 1, name: "", rating: 1 }]);
  const [selectedChips, setSelectedChips] = useState([]);
  const router = useRouter();
  const [saveLoading, setSaveLoading] = useState(false);

  // useEffect(() => {
  //   // Load skills from local storage on component mount
  //   const storedSkills = localStorage.getItem("skills");
  //   if (storedSkills) {
  //     setSkills(JSON.parse(storedSkills));
  //   }
  // }, []);

  useEffect(() => {
    // Load skills from local storage on component mount
    const storedSkills = localStorage.getItem("updatedSkills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

  useEffect(() => {
    // Save skills to local storage whenever it changes
    localStorage.setItem("updatedSkills", JSON.stringify(skills));
  }, [skills]);

  const handleAddSkill = () => {
    const newSkill = { id: Date.now(), name: "", rating: 1 };
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  const handleDeleteSkill = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  const handleStarClick = (newRating, skillId) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === skillId ? { ...skill, rating: newRating } : skill
      )
    );
  };

  const handleSkillNameChange = (event, skillId) => {
    const { value } = event.target;
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === skillId ? { ...skill, name: value } : skill
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedId = localStorage.getItem("_id");
    const storedFormData = localStorage.getItem("formData");

    if (!storedId) {
      console.error("Error: _id not found in local storage");
      return;
    }

    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : {};

    // Ensure all ratings are at least 1
    const updatedSkills = skills.map((skill) => ({
      name: skill.name,
      rating: Math.max(skill.rating, 1), // Ensure minimum rating is 1
    }));

    console.log("Stored ID:", storedId);
    console.log("Parsed Form Data:", parsedFormData);
    console.log("Updated Skills:", updatedSkills);

    // Save updated skills to local storage
    localStorage.setItem("updatedSkills", JSON.stringify(updatedSkills));

    try {
      const response2 = await commonUpdateHandler(
        `${USERRESUME}/${storedId}`,
        {
          skills: updatedSkills,
          ...parsedFormData,
          template: "65f5869675b548d4a6ecfbc8",
        },
        setSaveLoading
      );
      console.log("submit");

      console.log("Response from Axios request:", response2);
      toast.success("Skills are saved successfully.");
      // Update localStorage with the updated form data
      localStorage.setItem(
        "formData",
        JSON.stringify({
          ...parsedFormData,
          skills: updatedSkills,
        })
      );

      // Redirect to the highlights page
      router.push("/highlights");
    } catch (error) {
      console.error("Error updating skills:", error);
    }
  };

  const handleChipClick = (chipName) => {
    setSelectedChips((prevChips) =>
      prevChips.includes(chipName)
        ? prevChips.filter((chip) => chip !== chipName)
        : [...prevChips, chipName]
    );
  };
  return (
    <div className="grid md:grid-cols-12 ">
      <div className="md:col-span-7">
        <div className="md:w-[90%] mx-auto mt-5">
          <div className="hidden md:block">
            <Stepper
              steps={[
                { name: "Contact", active: true, href: "/" },
                { name: "Experience", active: true, href: "/workexperience" },
                { name: "Education", active: true, href: "/education" },
                { name: "Skills", active: true },
                { name: "Extras", active: false, href: "/highlights" },
                { name: "Summary", active: false, href: "/summary" },
              ]}
            />
          </div>
          <div className="flex justify-between my-8 px-1">
            <div>
              <p className="font-bold md:text-3xl font-bricolage-grotesque">
                Choose skills you want to highlight
              </p>
              <p className="text-[#A1A7C4] text-sm">
                Pick 5 skills to prove you are right for the job. You can search
                by job title.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-start cursor-pointer">
                <img src="/img2/tips.svg" className="mt-1 mr-1" />
                <p className="text-[#305EFF] font-semibold text-base">Tips</p>
              </div>
            </div>
          </div>
          <SkillSearch
            skills={skills}
            setSkills={setSkills}
            onAddSkill={handleAddSkill}
            onDeleteSkill={handleDeleteSkill}
            onStarClick={handleStarClick}
            onSkillNameChange={handleSkillNameChange}
            selectedChips={selectedChips}
            onChipClick={handleChipClick}
          />

          <div className="grid md:grid-cols-2 my-5 gap-5">
            <div>
              <button
                type="button"
                className="text-[#2950DA] font-semibold text-base text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
              >
                Preview
              </button>
            </div>
            <div>
              {/* <Link href="/highlights"> */}
              <button
                type="submit"
                className="bg-[#2950DA] text-white font-semibold text-base text-center w-full p-2 rounded-3xl border-solid border border-[#305EFF]"
                onClick={handleSubmit}
              >
                Go next
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 bg-[#f5f7ff]">
        <div className="w-full h-screen bg-[#f5f7ff]">
          <PreviewGuid />
        </div>
      </div>
    </div>
  );
}

export default Skills;
