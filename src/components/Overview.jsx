import {  ButtonHeader, Square } from "./styles";
import { FiBell } from "react-icons/fi";

function Overview() {
  return (
    <div className="overview">
      <section className="overview_textSection">
        <div>
          <div>
            <Square>
              <FiBell />
            </Square>
          </div>
          <div>
            <h1>1,25,000 Customers Using The Application!</h1>
            <p>
              Collaborate over projects with your team and clients optimised for
              mobile and tablet dont let slow page speeds drive our innovative
              platform empowers anyone to convert clicks oull publish your
              first landing page in minutes.
            </p>
          </div>
          <div><ButtonHeader >  ta </ButtonHeader></div>
        </div>
        <div></div>
      </section>
      <section></section>
    </div>
  );
}
export default Overview;
