import {} from "react";
import AppStore from '/app-store-dark.svg'
import GooglePlay from '/google-play-dark.svg'
import HeroImage from '/Hero.svg'

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_textDiv">
        <h1>Conectando Ecologia com Bluetooth</h1>
        <p>
        Descubra como nossa inovação Bluetooth Low Energy está transformando a ecologia, conectando tecnologia e preservação ambiental para um futuro sustentável.
        </p>
      <div className="hero_storeApp">
      <img src={AppStore} alt="" />
      <img src={GooglePlay} alt="" />
      </div>
      </div>
      <img src={HeroImage} alt="" />

    </section>
  );
};
export default Hero;
