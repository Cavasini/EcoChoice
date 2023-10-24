import { Link } from "react-router-dom";
import { ButtonHeader } from "./styles";
import LogoWhite from "/ecoLogoWhite.svg";
import LogoGreen from "/ecoLogoGreen.svg";
import { useState } from "react";

const Header = ({ sectionIds }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styleDeafult = {
    backgroundColor: "transparent",
    color: "white",
    padding: "10px",
  };

  const [HeaderStyle, setHeaderStyle] = useState(styleDeafult);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setHeaderStyle({
        backgroundColor: "transparent",
        color: "white",
        padding: "10px",
      });
    } else {
      setHeaderStyle({
        backgroundColor: "white",
        color: "#3E7E3E",
        padding: "5px",
        boxShadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.05)",
      });
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <header style={HeaderStyle}>
        <section className="headerSection">
          <div className="LogoDiv">
            {window.scrollY === 0 ? (
              <img src={LogoWhite} alt="" />
            ) : (
              <img src={LogoGreen} alt="" />
            )}
          </div>
          <div className="PagesDiv">
            <ul>
              {sectionIds.map((sectionId) => (
                <li key={sectionId}>
                    <a
                      style={{ color: HeaderStyle.color }}
                    >
                      {sectionId}
                    </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ButtonDiv">
            {window.scrollY === 0 ? (
              <Link to={"/register"}>
                <ButtonHeader primary={true}>Login</ButtonHeader>
              </Link>
            ) : (
              <Link to={"/register"}>
                <ButtonHeader>Login</ButtonHeader>
              </Link>
            )}
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
