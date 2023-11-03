import { Button, Square } from "./style";
import { overviewData } from "./overviewData";

function Overview() {
  return (
    <div className="overview" id="OverviewRef">
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
                  <Button>Get Started</Button>
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
                  <Button >Get Started</Button>
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
