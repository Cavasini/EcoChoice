import { Band } from "./style";

function Percent() {
  return (
    <Band>
      <div className="percent">
        <section className="percent_title">
          <h2> Compromisso Sustentável Para Um Futuro Melhor</h2>
          <p>
            EcoChoice se dedica a preservar a natureza, promovendo práticas
            sustentáveis e conscientes.
          </p>
        </section>
        <section className="percent_info mt-3">
          <div>
            <h2>100%</h2>
            <p>Satisfação</p>
          </div>
          <div>
            <h2>100%</h2>
            <p>Segurança</p>
          </div>
          <div>
            <h2>100%</h2>
            <p>Sustentável</p>
          </div>
        </section>
      </div>
    </Band>
  );
}
export default Percent;
