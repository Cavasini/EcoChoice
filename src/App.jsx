import "./assets/styles/index.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import About from './components/About'
import Footer from "./components/Footer";
import Features from "./components/Features";
import Overview from "./components/Overview";
import Percent from "./components/Percent";
import Faq from "./components/Faq";

function App() {
  return (
    <main>
      <Header sectionIds={["Home", "Features", "About", "Overview"]} />
      <Hero id="Home" />
      <Features id="Features" />
      <Overview />
      <Percent />
      <Faq />
      {/* <About id="About"/> */}
      {/* <Footer/>  */}
    </main>
  );
}

export default App;
