import { FaVolumeUp } from "react-icons/fa";
import "./AudioPlayer.css";

const AudioPlayer = (props) => {
  const clickHandler = () => {
    const audio = new Audio(props.src);
    audio.preload = "true";
    console.log(audio);
    audio.play();
  };

  return (
    <div onClick={clickHandler}>
      <FaVolumeUp className="FaVolumeUp" />
    </div>
  );
};

export default AudioPlayer;
