import "./PartOfSpeech.css";

const PartOfSpeech = (props) => {
  return (
    <div className="speech-container">
      {props.partOfSpeech.map((p) => (
        <div key={p} className="partOfSpeech">
          {p}
        </div>
      ))}
    </div>
  );
};

export default PartOfSpeech;
