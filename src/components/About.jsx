import {} from "react";

import mockupHome from "/mockupHome.svg";
import mockupNotficacoes from "/mockupNotifica.svg";
import mockupFavoritos from "/mockupFav.svg";

import * as S from "./styles";

const About = () => {
  return (
    <section className="grid-container">
      <div className="section">
        <img src={mockupHome} alt="" />
        <div className="section-content">
          <h3> Página Inicial Sustentável</h3>
          <p>
            A página inicial do aplicativo é o ponto de partida para sua jornada
            de sustentabilidade, oferecendo informações e recursos para inspirar
            ações ecológicas.
          </p>
          <div className="downloadButtom_div">
            <a>Download Now</a>
          </div>
        </div>
      </div>
      <div className="section">
        <img src={mockupNotficacoes} alt="" />
        <div className="section-content">
          <h3>Notificações Eco-Amigáveis</h3>
          <p>
            Mantenha-se atualizado com notificações sobre eventos sustentáveis e
            descontos em produtos eco-friendly, tudo personalizado com base em
            seus interesses e preferências.
          </p>
          <div className="downloadButtom_div">
            <a>Download Now</a>
          </div>
        </div>
      </div>
      <div className="section">
        <img src={mockupFavoritos} alt="" />
        <div className="section-content">
          <h3>Seus Favoritos Verdes</h3>
          <p>
            Crie e gerencie sua lista de produtos e lugares favoritos,
            promovendo um estilo de vida sustentável com facilidade. Personalize
            sua lista de acordo com suas escolhas ecológicas.
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
