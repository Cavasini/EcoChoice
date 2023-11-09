import Form from "./Form";
import Logo from "/ecoLogoWhite.svg";

const Register = () => {
  return (
    <div className="registerMain">
      <div className=" register-left ">
        <img src={Logo} alt="" />
        <p className="text-light">
          Acme Inc “This library has saved me countless hours of work and helped
          me deliver stunning designs to my clients faster than ever before.”
          Sofia Davis
        </p>
      </div>
      <div className=" register-right">
        <div className="container">
          <div className="titleRegister">
            <h2>Create an account</h2>
            <p>Enter your email below to create your account</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
