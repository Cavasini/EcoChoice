import {} from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Register() {
  let { id } = useParams();

  const [client, setClient] = useState({
    id,
    name: "",
    cel: "",
  });

  let metodo = "post";
  if (id) {
    metodo = "put";
  }

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/clients/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    }).then(() => {
      window.location = "/";
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/clients/${id}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setClient(data);
        });
    }
  }, [id]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label type="nome">Nome Completo:</label>
        <input
          type="text"
          name="name"
          value={client.nome}
          placeholder="Digite seu nome"
          onChange={handleChange}
          required
        />

        <label type="email">Email:</label>
        <input
          type="text"
          name="email"
          value={client.idade}
          placeholder="Digite sua idade"
          onChange={handleChange}
        />

        <label type="celular">Celular:</label>
        <input type="tel" name="cel" value={client.cel} placeholder="Digite seu numero de celular" onChange={handleChange} required/>

        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}
export default Register;
