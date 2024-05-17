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
  const handleClick = async () => {
    setErro("");
    setResposta("");

    const response = await fetch("http://localhost:8080/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      let message;

      try {
        message = await response.text();
        console.log(message);
        setErro(message);
      } catch (error) {
        console.error("Erro ao ler o corpo da resposta:", error);
        message = "Erro desconhecido ao processar a resposta do servidor.";
      }
    } else {
      const response = await fetch("http://localhost:8080/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email, senha: values.senha }),
      });
      const idLogin = await response.text();
      const token = idLogin.toString();
      tokenService.save(token);
      router.push("/logged");
    }
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
