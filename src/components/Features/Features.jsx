import { Card, Square } from "./style";
import Title from "../Title";
import { cardsData } from "./featuresData";


const Features = () => {
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
