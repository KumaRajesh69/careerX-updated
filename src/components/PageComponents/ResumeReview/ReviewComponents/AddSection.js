import React, { useState } from "react";

const AddSection = () => {
  //   const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  const menuItems = [
    "Papers & Publications",
    "Achievements",
    "Certificates",
    "Hobbies",
    "Awards",
    "Languages",
  ];

  const handleAddClick = (item) => {
    // Handle the add action
    console.log(`Add ${item}`);
  };

  return (
    <div className="w-full mx-auto">
      {/* <div className=""> */}
      {/* <button
          className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-t-md "
          onClick={toggleMenu}
        >
          <svg
            className={`w-5 h-5 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}

      {/* {isOpen && ( */}
      <div className=" ">
        <ul className="text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-2 hover:text-bluePrimary"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>{item}</span>
              {hoveredItem === item && (
                <button
                  className="text-bluePrimary font-semibold "
                  onClick={() => handleAddClick(item)}
                >
                  Add
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* )} */}
      {/* </div> */}
    </div>
  );
};

export default AddSection;
