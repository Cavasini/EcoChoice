import { Card, Square } from "./styles";
import {PiBowlFoodBold} from "react-icons/pi"
import {
  FiShoppingCart,
  FiSlack,
  FiBookOpen,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

export const Features = () => {
  const cardsData = [
    {
      title: "Alimentação Consciente",
      content:
        "Recomendações e dicas para escolhas de alimentos sustentáveis.",
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
      content:
        "Conteúdo educativo para aumentar a conscientização ambiental.",
      img: <FiBookOpen style={{ color: "white" }} />,
    },
    {
      title: "Futuro Sustentável",
      content:
        "Planos de expansão e visão a longo prazo do EcoChoice.",
      img: <FiGlobe style={{ color: "white" }} />,
    },
    {
      title: "Comunidade Engajada",
      content:
        "Conexão com outros apoiadores do projeto e ação coletiva.",
      img: <FiUsers style={{ color: "white"}} />,
    },
  ];

  return (
    <section className="Features">
      <div className="div_main">
        <div className="Title_Features">
          <div>
            <h3>Features</h3>
            <h2>Sua experiência fica cada vez melhor com o tempo.</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="Features_Cards">
          {cardsData.map((card, index) => (
            <section key={index}>
              <Card className="Card">
                <Square>{card.img}</Square>
                <div className="card-title">
                  <h3>{card.title}</h3>
                </div>
                <div className="card-content">
                  <p>{card.content}</p>
                </div>
              </Card>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
