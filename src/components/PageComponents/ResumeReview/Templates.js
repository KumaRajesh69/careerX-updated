import React, { useState } from "react";
import ColorPicker from "./ReviewComponents/ColorPicker";

const Templates = () => {
  const [cards, setCards] = useState([
    { id: 1, color: "#E0E0E0" },
    { id: 2, color: "#E0E0E0" },
    { id: 3, color: "#E0E0E0" },
    { id: 4, color: "#E0E0E0" },
    { id: 5, color: "#E0E0E0" },
    { id: 6, color: "#E0E0E0" },
    { id: 7, color: "#E0E0E0" },
    { id: 8, color: "#E0E0E0" },
    { id: 9, color: "#E0E0E0" },
    { id: 10, color: "#E0E0E0" },
    { id: 11, color: "#E0E0E0" },
    { id: 12, color: "#E0E0E0" },
    { id: 13, color: "#E0E0E0" },
    { id: 14, color: "#E0E0E0" },
    { id: 15, color: "#E0E0E0" },
  ]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  const handleColorChange = (color) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === selectedCardId ? { ...card, color } : card
      )
    );
  };

  return (
    <div className="py-5 flex flex-col items-center justify-center bg-white">
      {/* <h1 className="text-3xl font-bold mb-4">My Resume</h1> */}
      {selectedCardId && <ColorPicker onChangeComplete={handleColorChange} />}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-4 h-96 overflow-y-scroll ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-36 w-24 border rounded shadow-md cursor-pointer"
            style={{ backgroundColor: card.color }}
            onClick={() => handleCardClick(card.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
