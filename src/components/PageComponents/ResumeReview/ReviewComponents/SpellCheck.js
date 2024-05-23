import React, { useState } from "react";

const SpellCheck = () => {
  //   const [showSuggestions, setShowSuggestions] = useState(false);
  //   const [suggestions, setSuggestions] = useState([
  //     "posting",
  //     "positioning",
  //     "posture",
  //   ]);
  //   const [spellErrors, setSpellErrors] = useState(["positiv"]);
  //   const [selectedError, setSelectedError] = useState(null);

  //   const handleSpellCheckClick = (error) => {
  //     setSelectedError(error);
  //     setShowSuggestions(true);
  //   };

  //   const handleIgnore = () => {
  //     setShowSuggestions(false);
  //   };

  //   const handleIgnoreAll = () => {
  //     setShowSuggestions(false);
  //     setSpellErrors([]);
  //   };

  //   const handleAddToDictionary = () => {
  //     setShowSuggestions(false);
  //   };

  return (
    // <div className="max-w-sm mx-auto p-4 border rounded shadow-lg">
    //   <div className="flex justify-between items-center mb-4">
    //     <div className="flex items-center">
    //       <svg
    //         className="w-6 h-6 mr-2 text-gray-700"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4h1a1 1 0 000 2h10a1 1 0 000-2h-2z"
    //         />
    //       </svg>
    //       {/* <span className="text-lg font-semibold">Spell check</span> */}
    //     </div>
    //     <span className="bg-red-500 text-white text-sm rounded-full px-2 py-1">
    //       3
    //     </span>
    //   </div>

    //   {spellErrors.map((error, index) => (
    //     <div key={index} className="mb-2">
    //       <span
    //         className="text-red-500 cursor-pointer"
    //         onClick={() => handleSpellCheckClick(error)}
    //       >
    //         ... very <span className="font-bold">{error}</span> outlook
    //         towards...
    //       </span>
    //     </div>
    //   ))}

    //   {showSuggestions && (
    //     <div className="absolute bg-white border rounded shadow-lg p-4 mt-2">
    //       <div className="mb-2">
    //         {suggestions.map((suggestion, index) => (
    //           <div key={index} className="cursor-pointer hover:bg-gray-100 p-2">
    //             {suggestion}
    //           </div>
    //         ))}
    //       </div>
    //       <div className="flex justify-between">
    //         <button className="text-blue-500" onClick={handleIgnore}>
    //           Ignore
    //         </button>
    //         <button className="text-blue-500" onClick={handleIgnoreAll}>
    //           Ignore all
    //         </button>
    //         <button className="text-blue-500" onClick={handleAddToDictionary}>
    //           Add to dictionary
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="text-black">Spell Check</div>
  );
};

export default SpellCheck;
