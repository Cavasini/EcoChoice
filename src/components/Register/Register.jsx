import Form from "./Form";
import Logo from "/ecoLogoWhite.svg";
import Illustration from "../../assets/img/12.svg"

const Register = () => {
  return (
    <div className="registerMain">
      <div className=" register-left ">
        <img src={Logo} alt="" />
        <div className="IllusDiv">
          <img src={Illustration} alt="" className="Illus" />
        </div>
        <p className="text-light">
          Acme Inc “This library has saved me countless hours of work and helped
          me deliver stunning designs to my clients faster than ever before.”
          Sofia Davis
        </p>
      </div>
      <div className=" register-right">
        <div className="container">
          <div className="titleRegister">
            <h2>Deixa seu contato</h2>
            <p>Coloque seus dados para entrarmos em contato</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
