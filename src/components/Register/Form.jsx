import {} from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonSubmitDiv, Input } from "./style";

const schema = yup
  .object({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .email("Digite um email valido")
      .required("email inválido"),
    cel: yup
      .string()
      .matches(/^\(\d{2}\) 9\d{4}-\d{4}$/, "O número de celular não é válido")
      .required("Digite seu numero de celular"),
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
    if (e.target.name === "cel") {
      let inputPhoneNumber = e.target.value.replace(/\D/g, "");
      console.log(inputPhoneNumber);
      let formattedNumber = "";
      if (inputPhoneNumber.length <= 2) {
        formattedNumber = `(${inputPhoneNumber}`;
      } else if (inputPhoneNumber.length <= 7) {
        formattedNumber = `(${inputPhoneNumber.slice(
          0,
          2
        )}) ${inputPhoneNumber.slice(2)}`;
      } else {
        formattedNumber = `(${inputPhoneNumber.slice(
          0,
          2
        )}) ${inputPhoneNumber.slice(2, 7)}-${inputPhoneNumber.slice(7, 11)}`;
      }
      setClient({ ...client, [e.target.name]: formattedNumber });
    } else {
      setClient({ ...client, [e.target.name]: e.target.value });
    }
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
        <Input>
          <input
            {...register("name")}
            type="text"
            name="name"
            value={client.name}
            placeholder="Fulano da Silva"
            onChange={handleChange}
          />
          <span >{errors.name?.message}</span>
        </Input>

        <Input>
          <input
            {...register("email")}
            type="text"
            name="email"
            value={client.idade}
            placeholder="Exemplo@gmail.com"
            onChange={handleChange}
          />
          <span>{errors.email?.message}</span>
        </Input>

        <Input>
          <input
            {...register("cel")}
            id="phone"
            type="tel"
            name="cel"
            value={client.cel}
            placeholder="(99)  9999-999"
            onChange={handleChange}
            />
            <span>{errors.cel?.message}</span>
        </Input>

        <ButtonSubmitDiv>
        <input  type="submit" value="Cadastrar" />
        </ButtonSubmitDiv>
      </form>
    </>
  );
}
export default Form;
