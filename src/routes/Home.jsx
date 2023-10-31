import Hero from "../components/Hero";
import Features from "../components/Features";
import Overview from "../components/Overview";
import Percent from "../components/Percent";
import Faq from "../components/Faq";

const Home = () => {
  return(
    <>
      <Hero id="Home" />
      <Features id="Features" />
      <Overview />
      <Percent />
      <Faq />
    </>
  );
};
export default Home;
