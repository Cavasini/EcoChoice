import { useState } from "react";
import Mockuo from "../../assets/img/mockup.png";
import HeroButtons from "./HeroButtons";



const Hero = () => {
  return (
    <section className="hero_section" >
      <div className="heroDiv container ">
        <div className="row">
          <div className="hero_textDiv col-md-6">
            <h1 className="fs-1">Conectando Ecologia com Bluetooth</h1>
            <p>
              Descubra como nossa inovação Bluetooth Low Energy está
              transformando a ecologia, conectando tecnologia e preservação
              ambiental para um futuro sustentável.
            </p>
            <div className="hero_storeApp mt-1">
              <HeroButtons />
            </div>
          </div>
          <div className="hero_imgDiv col-md-6">
            <img src={Mockuo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
