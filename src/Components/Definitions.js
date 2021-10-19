import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Definitions = (props) => {
  const [showSynonym, setShowSynonym] = useState(false);
  const [showAntonym, setShowAntonym] = useState(false);

  return (
    <div className="definitions">
      {props.definitions.map((m) => {
        return (
          <div key={m.example}>
            <div>{m.definition}</div>
            <div>{m.example}</div>
            <div className="synonymsList">
              <div
                onClick={() => {
                  setShowSynonym(!showSynonym);
                }}
              >
                Synonyms <FaChevronRight className="FaChevronRight" />
              </div>
              {m.synonyms.map((a) => {
                if (showSynonym) {
                  return <div>{a}</div>;
                }
                return <></>;
              })}
            </div>
            <div className="antonyms">
              <div
                onClick={() => {
                  setShowAntonym(!showAntonym);
                }}
              >
                Antonyms <FaChevronRight className="FaChevronRight" />
              </div>
              {m.antonyms.map((a) => {
                if (showAntonym) {
                  return <div>{a}</div>;
                }
                return <></>;
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Definitions;
