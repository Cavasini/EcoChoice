import { FiBell } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai"
import blob01 from "../../assets/img/frae.svg";
import frame2 from "../../assets/img/Frame 2.svg"

export const overviewData = [
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
