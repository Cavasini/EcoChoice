import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Overview from "../components/Overview/Overview";
import Percent from "../components/Percent/Percent";
import Faq from "../components/Faq/Faq";

import React from 'react';


const Home = () => {

  return(
    <>
      <Hero className="HeroRef"/>
      <Features className="FeaturesRef"/>
      <Overview className="OverviewRef"/>
      <Percent />
      <Faq className="FaqRef"/>
    </>
  );
};
export default Home;
