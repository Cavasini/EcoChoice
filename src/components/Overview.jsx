import { ButtonHeader, Square } from "./styles";
import { FiBell } from "react-icons/fi";
import MockupFav from "/mockupFav.svg";

function Overview() {
  return (
    <div className="overview">
      <section className="overview_section">
        <div className="overview_textDiv">
          <div className="textDiv_square">
            <Square>
              <FiBell />
            </Square>
          </div>
          <div className="textDiv_textContent">
            <h1>1,25,000 Customers Using The Application!</h1>
            <p>
              Collaborate over projects with your team and clients optimised for
              mobile and tablet dont let slow page speeds drive our innovative
              platform empowers anyone to convert clicks oull publish your first
              landing page in minutes.
            </p>
          </div>
          <div className="textDiv_buttonDiv">
            <ButtonHeader>Get Started</ButtonHeader>
          </div>
        </div>
        <div className="overview_imgDiv">
          <img src={MockupFav} alt="" />
        </div>
      </section>
      <section></section>
    </div>
  );
}
export default Overview;
