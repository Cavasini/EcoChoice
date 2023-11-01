import { Card, Square } from "../styles";
import { PiBowlFoodBold } from "react-icons/pi";
import {
  FiShoppingCart,
  FiSlack,
  FiBookOpen,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

import Title from "../Title";

export const Features = () => {
  const cardsData = [
    {
      title: "Alimentação Consciente",
      content: "Recomendações e dicas para escolhas de alimentos sustentáveis.",
      img: <PiBowlFoodBold style={{ color: "white" }} />,
    },
    {
      title: "Consumo Responsável",
      content:
        "Guias sobre como fazer compras de forma ecologicamente correta.",
      img: <FiShoppingCart style={{ color: "white" }} />,
    },
    {
      title: "Dicas Diárias",
      content:
        "Sugestões práticas para incorporar a sustentabilidade no dia a dia.",
      img: <FiSlack style={{ color: "white" }} />,
    },
    {
      title: "Educação Verde",
      content: "Conteúdo educativo para aumentar a conscientização ambiental.",
      img: <FiBookOpen style={{ color: "white" }} />,
    },
    {
      title: "Futuro Sustentável",
      content: "Planos de expansão e visão a longo prazo do EcoChoice.",
      img: <FiGlobe style={{ color: "white" }} />,
    },
    {
      title: "Comunidade Engajada",
      content: "Conexão com outros apoiadores do projeto e ação coletiva.",
      img: <FiUsers style={{ color: "white" }} />,
    },
  ];

  return (
    <div className="Features-Background">
      <section className="Features container mt-5">
        <div className="div_main">
          <Title
            title="Features"
            caption="Sua experiência fica cada vez melhor com o tempo."
            text="There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form."
          />
          <div className="">
            <div className="row">
              {cardsData.map((card, index) => (
                <section key={index} className=" col-md-4 ">
                  <Card className="Card col-md">
                    <Square>{card.img}</Square>
                    <div className="card-title mt-3 mb-3 bold">
                      <h4>{card.title}</h4>
                    </div>
                    <div className="card-content">
                      <p>{card.content}</p>
                    </div>
                  </Card>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
