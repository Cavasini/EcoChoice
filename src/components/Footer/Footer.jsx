import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importe os ícones das redes sociais que deseja usar

const Footer = () => {
  return (
    <footer className="text-light">
      <div className="container">
        <div className="row">
          <div className="Info">
            <h2>Escolha a Natureza, escolha o Futuro.</h2>
            <p> Aqui, acreditamos que cada escolha conta, e é por meio dessas escolhas que moldamos um futuro mais verde e sustentável. Junte-se a nós nessa jornada e faça sua EcoChoice hoje. </p>
            <div className="info-a ">
              <a href="https://github.com/Cavasini/EcoChoice">👀 Code</a>
              <a href="https://github.com/Cavasini">👋 Contact</a>
            </div>
          </div>
          <div className="SM">
            <img src="/ecoLogoWhite.svg" alt="" />
            <p>@ 2023 EcoChoice. All Rights Reserved.</p>
            <div className="socialMedia">
              <a href=""><FaFacebook style={{ color: "white" }}/></a>
              <a href=""><FaTwitter style={{ color: "white" }}/></a>
              <a href=""><FaInstagram style={{ color: "white",  }}/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
