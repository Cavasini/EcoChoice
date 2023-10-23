import {} from "react";

import Mockuo from "../assets/mockup.png"
import HeroButtons from "./HeroButtons";
const Hero = () => {
  return (
    <section className="hero_section">
      <div className="heroDiv">
      <div className="hero_textDiv">
        <h1>Conectando Ecologia com Bluetooth</h1>
        <p>
          Descubra como nossa inovação Bluetooth Low Energy está transformando a
          ecologia, conectando tecnologia e preservação ambiental para um futuro
          sustentável.
        </p>
        <div className="hero_storeApp">
          <HeroButtons/>

        </div>
      </div>
      <div className="hero_imgDiv">
        <img src={Mockuo} alt="" />
      {/* <img src={HeroImage} alt="" />
      <img src={HeroImage} alt="" /> */}
      </div>
      </div>
    </section>
  );
};
export default Hero;
