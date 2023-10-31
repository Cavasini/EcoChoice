import FaqAccordion from "./Accordion";
import Title from "./Title";
import styled from "styled-components";

const FAQ = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2% auto 2%;
`;

function Faq() {
  const faqInfo = [
    {
      question: "O que é o projeto EcoChoice?",
      answer:
        "O projeto EcoChoice é dedicado a promover um estilo de vida menos nocivo ao meio ambiente, focando na conscientização e implementação de práticas sustentáveis nas escolhas diárias das pessoas. Inicialmente, estamos nos concentrando na área de alimentação, mas temos planos de expansão para diversas escolhas na vida das pessoas.",
    },
    {
      question: "Qual é o principal objetivo do projeto EcoChoice?",
      answer:
        "Nosso principal objetivo é capacitar os consumidores a fazer escolhas mais conscientes e sustentáveis em sua vida diária, com ênfase na alimentação. Queremos promover um estilo de vida que seja benéfico para o meio ambiente e alinhado com os valores pessoais dos consumidores.",
    },
    {
      question: "Onde o projeto EcoChoice está instalado?",
      answer:
        "Inicialmente, o projeto EcoChoice está implementado em mercados. Neles, indicamos em qual setor estão os alimentos sustentáveis por meio de recomendações baseadas nos dados coletados das preferências do usuário. Futuramente, planejamos expandir para diversos tipos de comércio.",
    },
    {
      question:
        "Como o projeto planeja expandir para outras áreas da vida das pessoas?",
      answer:
        "A expansão para outras áreas da vida das pessoas está no planejamento do projeto. Estamos considerando parcerias com diferentes tipos de comércio e a coleta de dados de preferências dos usuários para fornecer recomendações sustentáveis em diferentes contextos.",
    },
    {
      question:
        "O projeto EcoChoice está disponível globalmente ou tem localizações específicas?",
      answer:
        "O projeto pode ser implementado globalmente, mas atualmente temos instalações em mercados e planejamos expandir para outras localizações no futuro.",
    },
  ];

  return (
    <FAQ className="container">
      <Title title="Faq" caption="Perguntas Comuns - Encontre Respostas Rápidas" text="Encontre respostas instantâneas para suas dúvidas mais comuns em nossa seção de Soluções Rápidas. Simplificamos o acesso às informações que você precisa" className='row'/>
      <FaqAccordion faqItems={faqInfo} className='row'/>
    </FAQ>
  );
}
export default Faq;
