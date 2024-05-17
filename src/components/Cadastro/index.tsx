"use client";
import { useState } from "react";
import Link from "next/link";
import "./styles.css";
import { tokenService } from "@/services/tokenService";
import { useRouter } from "next/navigation";

const Cadastro = () => {
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    empresa: "",
    email: "",
    senha: "",
  });
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();
  const handleClick = () => {
    setErro("");
    setResposta("");

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            setErro(message);
          });
        } else {
          fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              senha: values.senha,
            }),
          }).then((response) => {
            const idLogin = response.text().then((message) => {
              tokenService.save(message);
              router.push("/logged");
            });
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };
  const handleChange = (event: any) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <div className="menu">
      <div></div>
      <div className="cadastro">
        <h1>Criar cadastro</h1>
        <div className="form">
          <div>
            <label htmlFor="nome">Nome</label>
            <input name="nome" onChange={handleChange} type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} type="email" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input name="senha" onChange={handleChange} type="password" />
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input name="telefone" onChange={handleChange} type="text" />
          </div>
          <div>
            <label htmlFor="empresa">Empresa</label>
            <input name="empresa" onChange={handleChange} type="text" />
          </div>
          <button onClick={handleClick} className="bg-slate-500 p-2">
            Enviar
          </button>
        </div>
        <div className="link-login">
          <Link href="/login">Já possui conta?</Link>
        </div>
        {erro && <p className="error">{erro}</p>}
        {resposta && <p className="success">{resposta}</p>}
      </div>
      <div></div>
    </div>
  );
};

export default Cadastro;
