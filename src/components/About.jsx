import {} from "react";
import AboutImage from "/AboutImage.jpg";

const About = () => {
  return (
    <section className="grid-container">
      <div className="section">
          <img src="Vectary texture (2).png" alt="" className="leftImage"/>
        <div className="section-content">
          <h3>Conectividade Ecológica</h3>
          <p>
            Descubra como nossa tecnologia Bluetooth Low Energy está conectando
            sensores ambientais para coletar dados precisos e preservar
            ecossistemas valiosos em todo o mundo.
          </p>
          <div className="downloadButtom_div">
            <a>Download Now</a>
          </div>
        </div>
      </div>
      <div className="section">
          <img src="Vectary texture (1).png" alt="" className="rightImage"/>
        <div className="section-content">
          <h3>Eficiência Energética Avançada</h3>
          <p>
            Saiba como nosso projeto está impulsionando a eficiência energética,
            reduzindo o consumo de energia em dispositivos de monitoramento
            ambiental e ajudando a conservar recursos naturais.
          </p>
          <div className="downloadButtom_div">
            <a>Download Now</a>
          </div>
        </div>
      </div>
      <div className="section">
          <img src="Vectary texture (2).png" alt="" className="leftImage"/>
        <div className="section-content">
          <h3>A Revolução Sustentável</h3>
          <p>
            Explore como nossa iniciativa está liderando a revolução
            sustentável, unindo ecologia e tecnologia Bluetooth Low Energy para
            proteger o planeta e construir um futuro mais verde.
          </p>
          <div className="downloadButtom_div">
            <a>Download Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
