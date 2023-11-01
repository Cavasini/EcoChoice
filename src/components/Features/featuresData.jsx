import { PiBowlFoodBold } from "react-icons/pi";
import {
  FiShoppingCart,
  FiSlack,
  FiBookOpen,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

export const cardsData = [
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