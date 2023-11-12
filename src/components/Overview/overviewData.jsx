import { FiBell } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai"
import frame01 from "../../assets/img/Frame 49.svg";
import frame02 from "../../assets/img/Frame 50.svg"
import frame03 from "../../assets/img/Frame S02.svg"

export const overviewData = [
    {
      side: "right",
      title: " Página Inicial Sustentável",
      text: "A página inicial do aplicativo é o ponto de partida para sua jornadade sustentabilidade, oferecendo informações e recursos para inspirarações ecológicas.",
      icon: <BiWorld />,
      img: frame01 ,
    },
    {
      side: "left",
      title: "Desafios Sustentáveis Diários",
      text: "Enfrente conosco desafios ecológicos! Estabeleça metas para transformar sua vida e contribuir positivamente para um ambiente mais saudável e sustentável.",
      icon: <FiBell />,
      img: frame02,
    },
    {
      side: "right",
      title: "EcoCulinária Compartilhada",
      text: "Compartilhe suas receitas e dicas culinárias sustentáveis! Juntos, vamos criar um impacto positivo no meio ambiente através da gastronomia consciente.",
      icon: <AiOutlineStar />,
      img: frame03 ,
    },
  ];
