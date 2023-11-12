import LoginForm from "./LoginForm";
import Logo from "/ecoLogoWhite.svg";

const Login = () => {
  return (
    <div className="loginDiv">
      <div className="LoginTitle">
        <img src={Logo} alt="" />
      </div>
        <LoginForm />
    </div>
  );
};

export default Login;
