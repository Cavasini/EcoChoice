import "./assets/index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Overview from "./components/Overview/Overview";
import Percent from "./components/Percent/Percent";
import Faq from "./components/Faq/Faq";

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

const App = () => {
  return (
    <main>
      <Header HeaderIds={HeaderIds} />
      <Hero  />
      <Features />
      <Overview/>
      <Percent />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
