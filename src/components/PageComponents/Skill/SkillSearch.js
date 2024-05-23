"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

const chips = [
  { id: 1, name: "Figma" },
  { id: 2, name: "UI designer" },
  { id: 3, name: "Usability testing" },
  { id: 4, name: "UX management" },
  { id: 5, name: "Collaborator" },
  { id: 6, name: "Sprint master" },
];

function SkillSearch({
  skills,
  onAddSkill,
  onDeleteSkill,
  onStarClick,
  onSkillNameChange,
  setSkills,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedChips, setSelectedChips] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    updateSelectedChips();
  }, [skills]);

  useEffect(() => {
    // Load skills from local storage on component mount
    const storedSkills = localStorage.getItem("updatedSkills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

  const handleChipClick = (chip) => {
    // Check if there's a focused input
    // if (inputRef.current) {
    //   const inputIndex = skills.findIndex(
    //     (skill) => skill.id.toString() === inputRef.current.id
    //   );
    if (inputRef.current) {
      const inputIndex = skills.findIndex(
        (skill) => skill && skill.id.toString() === inputRef.current.id
      );

      if (inputIndex !== -1) {
        const newSkills = [...skills];
        newSkills[inputIndex].name = chip.name;
        setSkills(newSkills);
        inputRef.current.value = chip.name;
      }
    } else {
      const skillExists = skills.some((skill) => skill.name === chip.name);

      if (!skillExists) {
        const newSkill = { id: Date.now(), name: chip.name, rating: 1 };
        setSkills((prevSkills) => [...prevSkills, newSkill]);
      }
    }

    // Add the chip to the selected chips list
    setSelectedChips((prevSelected) => [...prevSelected, chip.id]);
  };

  const updateSelectedChips = () => {
    setSelectedChips((prevSelected) =>
      prevSelected.filter((chipId) =>
        skills.some(
          (skill) =>
            chips.find((chip) => chip.id === chipId)?.name === skill.name
        )
      )
    );
  };

  return (
    <div>
      <p className="text-sm font-semibold">Search skills by job titles</p>
      <div className="w-full flex space-x-4 my-5">
        <div className="flex-1 border-[#D9E1EC] rounded">
          <input
            className="w-full h-12 border rounded-md p-2 focus:ring-0 outline-none border-inputborderBlue text-[#10002E]"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button className="px-6 py-3 text-white bg-bluePrimary rounded-3xl pr-6">
          Search
        </button>
      </div>
      <div>
        <p className="text-[#A1A7C4] text-sm">Search results</p>
        <div className="flex flex-wrap gap-3 my-5">
          {chips.map((item) => (
            <button
              key={item.id}
              className={`inline-block border rounded-[40px] px-5 py-3 text-[#192739] transition-colors duration-300 ${
                selectedChips.includes(item.id)
                  ? "bg-[#305eff] text-white"
                  : "hover:text-[#305eff] hover:bg-[#305eff17] hover:border-[#305eff]"
              }`}
              onClick={() => handleChipClick(item)}
            >
              <div className="flex space-x-2">
                <img src="/img2/bladd.svg" alt={item.name} />
                <p>{item.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#FBFBFB] p-5 rounded-xl border-[#D9E1EC] border-2 my-10">
        <p>Selected skills for your resume</p>
        {skills.map((skill) => (
          <div key={skill.id} className="flex space-x-5 items-center my-8">
            <img
              src="/img2/dlt.svg"
              alt="delete icon"
              className="cursor-pointer"
              onClick={() => onDeleteSkill(skill.id)}
            />
            <input
              ref={(el) => {
                if (el && el.value === skill.name) {
                  inputRef.current = el;
                }
              }}
              className="w-full h-16 border rounded-md p-2 focus:ring-0 outline-none border-inputborderBlue text-[#10002E]"
              placeholder="Skill name"
              id={skill.id.toString()}
              value={skill.name}
              onChange={(event) => onSkillNameChange(event, skill.id)}
            />
            <div className="w-28">
              <div className="flex items-center">
                <ReactStars
                  count={5}
                  onChange={(newRating) => onStarClick(newRating, skill.id)}
                  size={20}
                  color={""}
                  activeColor={"#2950DA"}
                  emptyIcon={<img src="/img2/emptystar.svg" />}
                  fullIcon={<img src="/img2/activestar.svg" />}
                  value={skill.rating}
                />
              </div>
            </div>
          </div>
        ))}
        <div>
          <button
            className="flex space-x-2 items-center text-bluePrimary font-semibold"
            onClick={onAddSkill}
            disabled={
              skills.length > 0 && skills[skills.length - 1].name.trim() === ""
            }
          >
            <img src="/img2/addbut.svg" alt="Add skill" />
            <p>Add a skill</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillSearch;
