import React from "react";
import fitness from "../../assets/fitness.webp";
import "./Fitness.css";

const Fitness2 = () => {
  return (
    <section className="about container">
      <div className="about__container container">
        <div className="about__img-container">
          <img
            className="about__img"
            src={fitness}
            alt="Man performing exercises in a modern fitness center"
          />
        </div>
        <div className="about__content ">
          <h3 className="about__title">
            Discover the Power of Fitness...
            <span className="about__span">
              {" "}
              TRANSFORM YOUR BODY AND MIND WITH US!{" "}
            </span>
          </h3>
          <p className="about__text">
            At FitnessGym, we believe fitness is not just about workouts – it’s
            a way of life. From state-of-the-art equipment to a team of
            professional trainers, we provide a supportive environment to help
            you achieve your goals. Join our community and experience a
            lifestyle change that promotes health, strength, and well-being
            every day!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fitness2;
