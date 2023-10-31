import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Overview from "../components/Overview/Overview";
import Percent from "../components/Percent/Percent";
import Faq from "../components/Faq/Faq";

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
