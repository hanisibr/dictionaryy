import React, { useState, useEffect } from "react";

const RandomWord = () => {
  const [randomWord, setRandomWord] = useState([]);

  useEffect(() => {
    fetch("https://random-words-api.vercel.app/word")
      .then((result) => result.json())
      .then((data) => setRandomWord(data));
  }, []);

  /* useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((result) => result.json())
      .then((data) => setRandomWord(data));
  }, []); */

  return (
    <div>
      {randomWord.map((r) => {
        return (
          <div>
            {r.word} {r.definition} {r.pronunciation}
          </div>
        );
      })}
    </div>
  );
};

export default RandomWord;
