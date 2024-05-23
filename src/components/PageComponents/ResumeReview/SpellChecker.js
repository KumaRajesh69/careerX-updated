import React, { useState, useEffect } from "react";

function SpellChecker() {
  const [suggestions, setSuggestions] = useState([]);

  //   useEffect(() => {
  //     const SpellChecker = require("simple-spellchecker");
  //     SpellChecker.getDictionary("en-US", function (err, dictionary) {
  //       if (!err) {
  //         const wordToCheck = "maisonn";
  //         const misspelled = !dictionary.spellCheck(wordToCheck);
  //         if (misspelled) {
  //           const suggestions = dictionary.getSuggestions(wordToCheck);
  //           setSuggestions(suggestions);
  //         }
  //       }
  //     });
  //   }, []); // Run this effect only once on component mount

  return (
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">
        Hello
      </h1>
    </div>
  );
}

export default SpellChecker;
