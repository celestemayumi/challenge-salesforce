"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { tokenService } from "@/services/tokenService";
import Link from "next/link";
import User from "./interfaces";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    setErro("");
    const response = await fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, senha: senha }),
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
      const idLogin = await response.text();
      const token = idLogin.toString();
      tokenService.save(token);
      router.push("/logged");
    }
  };

  const emailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const senhaChange = (event: any) => {
    setSenha(event.target.value);
  };

  return (
    <div className="menu">
      <div></div>
      <div className="login-component">
        <h1>Realizar Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={emailChange}
            type="email"
            className="border-2"
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            onChange={senhaChange}
            type="password"
            className="border-2"
          />
        </div>

        <button onClick={handleSubmit} className="bg-slate-500 p-2">
          Enviar
        </button>
        <div className="link-cadastro">
          <Link href="/cadastro">Ainda não possui conta?</Link>
        </div>
        {erro && <p className="error">{erro}</p>}
      </div>
      <div></div>
    </div>
  );
};

export default Login;
