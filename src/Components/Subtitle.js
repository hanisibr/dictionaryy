import "./Subtitle.css";
import animate from "animate.css";

const Subtitle = () => {
  return (
    <div className="subtitle">
      <div className="main-title animate__animated animate__wobble">
        ONE
        <br />
        Dictionary
      </div>
      <div className="sub-title animate__animated animate__bounceIn">
        At your fingertips
      </div>
    </div>
  );
};

export default Subtitle;
