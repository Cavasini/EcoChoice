import { ButtonHeader, Square } from "./styles";
import { FiBell } from "react-icons/fi";
import MockupFav from "/mockupFav.svg";
import blob01 from "../assets/frae.svg";

function Overview() {
  const overviewData = [
    {
      side: "right",
      title: "1,25,000 Customers Using The Application!",
      text: "Collaborate over projects with your team and clients optimised for mobile and tablet dont let slow page speeds drive our innovative platform empowers anyone to convert clicks oull publish your first landing page in minutes.",
      icon: <FiBell />,
      img: { blob01 },
    },
    {
      side: "left",
      title: "1,25,000 Customers Using The Application!",
      text: "Collaborate over projects with your team and clients optimised for mobile and tablet dont let slow page speeds drive our innovative platform empowers anyone to convert clicks oull publish your first landing page in minutes.",
      icon: <FiBell />,
      img: { blob01 },
    },
    {
      side: "right",
      title: "1,25,000 Customers Using The Application!",
      text: "Collaborate over projects with your team and clients optimised for mobile and tablet dont let slow page speeds drive our innovative platform empowers anyone to convert clicks oull publish your first landing page in minutes.",
      icon: <FiBell />,
      img: { blob01 },
    },
  ];

  console.log(blob01);
  return (
    <div className="overview">
      {overviewData.map((data, index) => (
        <div key={index}>
          {data.side === "right" ? (
            <section className="overview_section">
              <div className="overview_textDiv">
                <div className="textDiv_square">
                  <Square>{data.icon}</Square>
                </div>
                <div className="textDiv_textContent">
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                </div>
                <div className="textDiv_buttonDiv">
                  <ButtonHeader>Get Started</ButtonHeader>
                </div>
              </div>
              <div className="overview_imgDivRight">
                <img src={data.img.blob01} alt="" className="mockup" />
              </div>
            </section>
          ) : (
            <section className="overview_section">
              <div className="overview_imgDivLeft">
                <img src={data.img.blob01} alt="" className="mockup" />
              </div>
              <div className="overview_textDiv">
                <div className="textDiv_square">
                  <Square>{data.icon}</Square>
                </div>
                <div className="textDiv_textContent">
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                </div>
                <div className="textDiv_buttonDiv">
                  <ButtonHeader>Get Started</ButtonHeader>
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
