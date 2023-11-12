import { Input, ButtonSubmitDiv } from "./style";
import { useRef } from "react";

const LoginForm = () => {
  const user = useRef();
  const password = useRef();

  const handleSubmit = () => {
    if (user.current.value === "admin" && password.current.value === "12345") {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem("userData", "admin");
      sessionStorage.setItem("senhaData", token);
    } else {
      alert("usuário e senha inválidos !!!");
    }
  };

  return (
    <div className="LoginMain">
      <form onSubmit={handleSubmit}>
        <Input>
          <div>
            <label htmlFor="">Username</label>
          </div>
          <input
            type="text"
            ref={user}
            id="username"
            name="username"
            required
          />
        </Input>
        <Input>
          <div>
            <label htmlFor="">Senha</label>
          </div>
          <input
            type="password"
            ref={password}
            id="password"
            name="password"
            required
          />
        </Input>
        <ButtonSubmitDiv>
          <input type="submit" value="Login" />
        </ButtonSubmitDiv>
      </form>
    </div>
  );
};
export default LoginForm;
