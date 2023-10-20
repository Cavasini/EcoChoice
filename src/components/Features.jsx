import { Card } from "./styles";
import {
  FiClock,
  FiMap,
  FiSlack,
  FiRefreshCcw,
  FiSmartphone,
  FiCheckCircle,
} from "react-icons/fi";

export const Features = () => {
  const cardsData = [
    {
      title: "Eco Desperta",
      content:
        "O aplicativo Eco Despertar é sua ferramenta diária para escolhas mais sustentáveis. Comece hoje a acordar para um mundo mais verde!",
      img: <FiClock style={{ color: "white" }} />,
    },
    {
      title: "Eco Jornada",
      content:
        " Participe da Eco Jornada e descubra maneiras simples de tornar sua rotina diária mais ecológica. Siga o caminho da sustentabilidade!",
      img: <FiMap style={{ color: "white" }} />,
    },
    {
      title: "Vida Verde",
      content:
        "Com o Vida Verde, sua jornada em direção a um estilo de vida mais sustentável fica mais fácil. Faça escolhas verdes a cada passo!",
      img: <FiSlack style={{ color: "white" }} />,
    },
    {
      title: "Consciente Eco",
      content:
        "O Consciente Eco é o seu companheiro na conscientização e na implementação de práticas sustentáveis. Seja parte da mudança",
      img: <FiRefreshCcw style={{ color: "white" }} />,
    },
    {
      title: "Sustent App",
      content:
        "Sustent App é o aplicativo essencial para tornar suas escolhas cotidianas amigáveis ao meio ambiente. Comece a sustentabilidade na palma da sua mão!",
      img: <FiSmartphone style={{ color: "white" }} />,
    },
    {
      title: "Verde Certo",
      content:
        "Com o Verde Certo, você está no caminho certo para um estilo de vida mais ecológico. Faça a escolha certa, faça a escolha verde!",
      img: <FiCheckCircle style={{ color: "white", size: "200px" }} />,
    },
  ];

  return (
    <section className="Features">
      <div className="div_main">
        <div className="Title_Features">
          <div>
            <h3>Features</h3>
            <h2>Your Experience Gets Better And Better Over Time.</h2>
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
                <div className="card-svg">{card.img}</div>
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
