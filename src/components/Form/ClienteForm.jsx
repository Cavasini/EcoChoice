import {} from "react";
import "./form.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup
      .string()
      .email("Digite um email valido")
      .required("O Campo email obrigatório"),
    cel: yup
      .string()
      .matches(/^\(\d{2}\) 9\d{4}-\d{4}$/, "O número de celular não é válido")
      .required("O número de celular é obrigatório"),
  })
  .required();

function Form() {
  let { id } = useParams();

  const [client, setClient] = useState({
    id,
    name: "",
    email: "",
    cel: "",
  });

  let metodo = "post";
  if (id) {
    metodo = "put";
  }

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const OnSubmit = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <label type="name">Nome Completo:</label>
        <input
          {...register("name")}
          type="text"
          name="name"
          value={client.name}
          placeholder="Digite seu nome"
          onChange={handleChange}
        />
        <span className="text-danger">{errors.name?.message}</span>

        <label type="email">Email:</label>
        <input
          {...register("email")}
          type="text"
          name="email"
          value={client.idade}
          placeholder="Digite sua idade"
          onChange={handleChange}
        />
        <span>{errors.email?.message}</span>

        <label type="celular">Celular:</label>
        <input
          {...register("cel")}
          id="phone"
          type="tel"
          name="cel"
          value={client.cel}
          placeholder="Digite seu numero de celular"
          onChange={handleChange}
        />
        <span>{errors.cel?.message}</span>
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}
export default Form;
