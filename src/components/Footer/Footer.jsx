import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importe os ícones que você deseja usar
import EcoChoiceLogo from "/ecoLogoWhite.svg"
const Footer = () => {
  return (
    <footer className=" text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="logo">
              <img src={EcoChoiceLogo} alt="Logo do site" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a href="#" className="text-light">
                <FaFacebook />
              </a>
              <a href="#" className="text-light">
                <FaTwitter />
              </a>
              <a href="#" className="text-light">
                <FaInstagram />
              </a>
              <a href="#" className="text-light">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
