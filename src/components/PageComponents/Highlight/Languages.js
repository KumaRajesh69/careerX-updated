import React, { useState } from "react";
import DefaultInput from "../../Common/Inputs/ResumeCreation/DefaultInput";
import DefaultAddButton from "../../Common/CommonComponents/DefaultAddButton";

function Languages() {
  const [languages, setLanguages] = useState([
    { id: Date.now(), name: "", level: "" },
  ]);

  const handleLanguageChange = (id, value) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) =>
        lang.id === id ? { ...lang, name: value } : lang
      )
    );
  };

  const handleLevelChange = (id, level) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) => (lang.id === id ? { ...lang, level } : lang))
    );
  };

  const handleSubmit = (e) => {
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      { id: Date.now(), name: "", level: "" },
    ]);
  };

  const handleRemoveLanguage = (id) => {
    setLanguages((prevLanguages) =>
      prevLanguages.filter((lang) => lang.id !== id)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {languages.map((language) => (
          <div key={language.id} className="grid grid-cols-2 mb-4">
            <div className="flex items-center space-x-5">
              <button
                type="button"
                onClick={() => handleRemoveLanguage(language.id)}
              >
                <img src="/img2/dlt.svg" className="h-[15px]" alt="Delete" />
              </button>
              <div className="flex-grow">
                <DefaultInput
                  placeholder="Language"
                  value={language.name}
                  onChange={(value) => handleLanguageChange(language.id, value)}
                />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Expert"
                  name={`level-${language.id}`}
                  checked={language.level === "Expert"}
                  onChange={() => handleLevelChange(language.id, "Expert")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
                />
                <label className="ms-2 text-xs font-normal text-[#40566D]">
                  Expert
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Intermediate"
                  name={`level-${language.id}`}
                  checked={language.level === "Intermediate"}
                  onChange={() =>
                    handleLevelChange(language.id, "Intermediate")
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
                />
                <label className="ms-2 text-xs font-normal text-[#40566D]">
                  Intermediate
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Beginner"
                  name={`level-${language.id}`}
                  checked={language.level === "Beginner"}
                  onChange={() => handleLevelChange(language.id, "Beginner")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
                />
                <label className="ms-2 text-xs font-normal text-[#40566D]">
                  Beginner
                </label>
              </div>
            </div>
          </div>
        ))}
        <DefaultAddButton buttonName="Add another language" type="submit" />
      </form>
    </div>
  );
}

export default Languages;
