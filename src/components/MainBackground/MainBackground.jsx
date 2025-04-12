import "./MainBackground.css";
import bgc1 from "../../assets/bgc1.webp";
import { Link } from "react-router-dom";

const MainBackground = () => {
  return (
    <div className="mainBackground__container">
      <div className="mainBackground__img">
        <img
          className="mainBackground__image"
          src={bgc1}
          alt="Woman receiving support during a workout"
        />
      </div>
      <div className="mainBackground__content">
        <h1 className="mainBackground__title">TRAIN WITH CONFIDENCE</h1>
        <p className="mainBackground__text">
          Our gym provides not only top-notch equipment but also a supportive
          environment to help you conquer your fitness goals with ease.
        </p>
        <div>
          <Link className="mainBackground__link" to="/contact">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBackground;
