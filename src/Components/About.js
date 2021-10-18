import Footer from "./Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="navbar"></div>
      <div className="about_us">
        About One Dictionary
        <div className="about_content">
          <p>
            For only 3 days, no food, no sleep, One Dictionary has been
            Besquare’s leading provider of language information. Each day, our
            award-winning website offer guidance to fifty-ish besquare visitors.{" "}
          </p>
          <p>
            One Dictionary services are backed by small team of beginner
            dictionary editors and writers in Besquare.
          </p>
          <p>
            Thanks for expanding your ‘wor<span>l</span>d’ us.
          </p>
        </div>
      </div>
      <div className="contributors">
        Contributors
        <div className="profile_img"></div>
        <div className="profile_name"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
