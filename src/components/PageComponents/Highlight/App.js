import React, { useState } from "react";

const InputField = ({ onSave, onDelete }) => {
  const [newMessage, setNewMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave(newMessage);
    setNewMessage("");
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="my-4">
      {isEditing ? (
        <div className="flex">
          <input
            type="text"
            className="border border-gray-300 p-1 rounded mr-2"
            placeholder="Enter your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-1 rounded"
          onClick={() => setIsEditing(true)}
        >
          Add New
        </button>
      )}
      {newMessage && (
        <div className="flex items-center mt-2">
          <span className="mr-2">{newMessage}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSave = (message) => {
    setMessages([...messages, message]);
  };

  const handleDelete = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div className="container mx-auto p-4">
      {messages.map((message, index) => (
        <InputField
          key={index}
          onSave={handleSave}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <InputField onSave={handleSave} onDelete={() => {}} />
    </div>
  );
};

export default App;
