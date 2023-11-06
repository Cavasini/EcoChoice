import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Overview from "../components/Overview/Overview";
import Percent from "../components/Percent/Percent";
import Faq from "../components/Faq/Faq";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HeaderIds =[
  {
    name: "Home",
    ref:"HeroRef"
  },
  {
    name: "Features",
    ref: "FeaturesRef"
  },
  {
    name:'Overview',
    ref: "OverviewRef"
  },
  {
    name:"FAQ",
    ref:"FaqRef"
  }
]

const Home = () => {
  return (
    <main>
      <Header HeaderIds={HeaderIds} />
      <Hero className="HeroRef" />
      <Features className="FeaturesRef" />
      <Overview className="OverviewRef" />
      <Percent />
      <Faq className="FaqRef" />
      <Footer />
    </main>
  );
};
export default Home;
