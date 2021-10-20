import AudioPlayer from "./AudioPlayer";
import "./Phonetics.css";

const Phonetics = (props) => {
  return (
    <div className="phonetics">
      {props.phonetics.map((p) => {
        return (
          <div key={p.audio} className="pronunciation">
            <AudioPlayer src={p.audio} />
            {p.text}
          </div>
        );
      })}
    </div>
  );
};

export default Phonetics;
