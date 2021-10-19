import AudioPlayer from "./AudioPlayer";
const Phonetics = (props) => {
  return (
    <div className="phonetics">
      {props.phonetics.map((p) => {
        return (
          <div key={p.audio}>
            <p>{p.text}</p>
            <AudioPlayer src={p.audio} />
          </div>
        );
      })}
    </div>
  );
};

export default Phonetics;
