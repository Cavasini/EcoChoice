import FaqAccordion from "./Accordion";
import Title from "../Title";
import { FAQ } from "./style";
import { faqInfo } from "./faqData";

function Faq() {

  return (
    <FAQ className="container">
      <Title title="Faq" caption="Perguntas Comuns - Encontre Respostas Rápidas" text="Encontre respostas instantâneas para suas dúvidas mais comuns em nossa seção de Soluções Rápidas. Simplificamos o acesso às informações que você precisa" className='row'/>
      <FaqAccordion faqItems={faqInfo} className='row'/>
    </FAQ>
  );
}
export default Faq;
