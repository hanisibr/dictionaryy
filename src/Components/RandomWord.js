import React, { useState, useEffect } from "react";
import "./RandomWord.css";

const RandomWord = () => {
  const [randomWord, setRandomWord] = useState([]);

  useEffect(() => {
    fetch("https://random-words-api.vercel.app/word")
      .then((result) => result.json())
      .then((data) => setRandomWord(data));
  }, []);

  return (
    <div className="wotd">
      <div className="wotd-title">#WOTD</div>
      <div className="genWord">
        {randomWord.map((r) => {
          return (
            <div>
              <div className="theWord">"{r.word}"</div>
              <div className="definition">{r.definition}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomWord;
