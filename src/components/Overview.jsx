import { ButtonHeader, Square } from "./styles";
import { FiBell } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai"
import blob01 from "../assets/frae.svg";
import frame2 from "../assets/Frame 2.svg"

function Overview() {
  const overviewData = [
    {
      side: "right",
      title: " Página Inicial Sustentável",
      text: "A página inicial do aplicativo é o ponto de partida para sua jornadade sustentabilidade, oferecendo informações e recursos para inspirarações ecológicas.",
      icon: <BiWorld />,
      img: blob01 ,
    },
    {
      side: "left",
      title: "Notificações Eco-Amigáveis",
      text: "Mantenha-se atualizado com notificações sobre eventos sustentáveis edescontos em produtos eco-friendly, tudo personalizado com base emseus interesses e preferências.",
      icon: <FiBell />,
      img: frame2,
    },
    {
      side: "right",
      title: "Seus Favoritos Verdes",
      text: "Crie e gerencie sua lista de produtos e lugares favoritos, promovendo um estilo de vida sustentável com facilidade. Personalizesua lista de acordo com suas escolhas ecológicas.",
      icon: <AiOutlineStar />,
      img: blob01 ,
    },
  ];

  return (
    <div className="overview">
      {overviewData.map((data, index) => (
        <div key={index} className="container">
          {data.side === "right" ? (
            <section className="OSR overview_section row">
              <div className="overview_textDiv col-md-6">
                <div className="textDiv_square">
                  <Square>{data.icon}</Square>
                </div>
                <div className="textDiv_textContent mt-3">
                  <h2 >{data.title}</h2>
                  <p>{data.text}</p>
                </div>
                <div className="textDiv_buttonDiv">
                  <ButtonHeader>Get Started</ButtonHeader>
                </div>
              </div>
              <div className="overview_imgDivRight col-md-6">
                <img src={data.img} alt="" className="mockup" />
              </div>
            </section>
          ) : (
            <section className="OSL overview_section row">
              <div className="overview_imgDivLeft col-md-6">
                <img src={data.img} alt="" className="mockup" />
              </div>
              <div className="overview_textDiv col-md-6">
                <div className="textDiv_square">
                  <Square>{data.icon}</Square>
                </div>
                <div className="textDiv_textContent mt-3 ">
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                </div>
                <div className="textDiv_buttonDiv">
                  <ButtonHeader >Get Started</ButtonHeader>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </div>
  );
}
export default Overview;
