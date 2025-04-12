import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import Team from "../components/Team/Team";
import FixedBg from "../components/FixedBg/FixedBg";
import Message from "../components/Message/Message";

const About = () => {
  return (
    <>
      <Hero title="ABOUT" cName="hero__img" />
      <AboutUs />
      <Team />
      <FixedBg
        cName="fixed__secondary"
        text="Welcome To FitnessGym…"
        title="… Your ultimate partner for achieving fitness goals"
      />
      <Message />
    </>
  );
};

export default About;
