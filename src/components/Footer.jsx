import {} from "react";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer_section01">
          <h1>Eco Choise</h1>
          <div>
          <img src="app-store-footer.svg" alt="" />
          <img src="google-play-footer.svg" alt="" />
          </div>
        </div>
        <div className="footer_section02">
          <ul className="ul_main">
            <li>
              <h5>Navigation</h5>
              <ul>
                <li>About Eco Choise</li>
                <li>EcoChoise For IOS</li>
                <li>EcoChoise For Android</li>
                <li>Privacy policy</li>
              </ul>
            </li>
            <li>
              <h5>Contact</h5>
              <ul>
                <li>Help center</li>
                <li>Support</li>
                <li>Send E-mail</li>
              </ul>
            </li>
            <li>
              <h5>Follow us</h5>
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Github</li>
              </ul>
            </li>
          </ul>
          <p>
            @2023 Eco Choise. All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
