import {} from "react";


function Register() {
  return (
    <>
      <form action="processar_cadastro.php" method="post">
        <label type="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required />

        <label type="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label type="celular">Celular:</label>
        <input type="tel" id="celular" name="celular" required />

        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}
export default Register;
