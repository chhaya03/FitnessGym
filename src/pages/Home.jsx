import React from "react";
import MainBackground from "../components/MainBackground/MainBackground";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Fitness from "../components/Fitness2/Fitness2";
import FixedBg from "../components/FixedBg/FixedBg";
import NewProducts from "../components/NewProducts/NewProducts";
import Counter from "../components/Counter/Counter";
import Team from "../components/Team/Team";
import FixedBg2 from "../components/FixedBg2/FixedBg2";
import Pricing from "../components/Pricing/Pricing";
import CallBack from "../components/CallBack/CallBack";
import LogoSlider from "../components/LogoSlider/LogoSlider";

const Home = () => {
  return (
    <AnimatedPage>
      <MainBackground />
      <Fitness />
      <FixedBg />
      <NewProducts />
      <Counter />
      <Team />
      <FixedBg2 />
      <Pricing />
      <CallBack />
    </AnimatedPage>
  );
};

export default Home;
