// import { Link } from "react-router-dom";
// import { ButtonHeader } from "./styles";
import LogoWhite from "/ecoLogoWhite.svg";
import LogoGreen from "/ecoLogoGreen.svg";
import { useState } from "react";

const Header = ({HeaderIds}) => {

   const scrollToSection = (sectionId) => {
     let section = ''
     section = document.getElementById(sectionId)
     if (section) {
    section.scrollIntoView({ behavior: 'smooth',block: 'start' });
    }
  }

  const styleDeafult = {
    backgroundColor: "transparent",
    color: "white",
    padding: "10px",
  };

  const [HeaderStyle, setHeaderStyle] = useState(styleDeafult);

  const [dropdown, setDropdown] = useState({});

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setHeaderStyle({
        backgroundColor: "transparent",
        color: "white",
        padding: "10px",
        top: true,
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

  const handleMouserHover = () => {
    setDropdown({
      backgroundColor: window.scrollY === 0 ? "white" : "#212529",
      color: window.scrollY === 0 ? "#3E7E3E" : "white",
    });
  };

  const handleMouseOut = () => {
    setDropdown({
      backgroundColor: "#3E7E3E",
      color: "white",
    });
  };

  return (
    <>
      <header style={HeaderStyle} className="py-0">
        <div className="headerSection">
          <div className="LogoDiv">
            {window.scrollY === 0 ? (
              <img src={LogoWhite} alt="" />
            ) : (
              <img src={LogoGreen} alt="" />
            )}
          </div>
          <div className="PagesDiv align-self-center ">
            <ul className="mt-3">
              {HeaderIds.map((Id,index) => (
                <li key={index}>
                  <a
                    style={{ color: HeaderStyle.color }}
                    onClick={()=> scrollToSection(Id.ref)}
                  >
                    {Id.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ButtonDiv">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  border: `1px solid ${HeaderStyle.color}`,
                  backgroundColor: dropdown.backgroundColor,
                  color: dropdown.color,
                }}
                onMouseEnter={handleMouserHover}
                onMouseLeave={handleMouseOut}
              >
                Menu
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="http://localhost:5000">
                    Apis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
