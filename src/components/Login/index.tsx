"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { tokenService } from "@/services/tokenService";
import Link from "next/link";
import "./styles.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    const token = tokenService.get();
    if (token) {
      router.push("/logged");
    }
  }, []);

  const handleSubmit = async () => {
    setErro("");
    const response = await fetch("http://localhost:8080/login", {
      method: "post",
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
          const idLogin = response.text().then((message) => {
            tokenService.save(message);
            router.push("/logged");
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
      <div className="login-component">
        <h1>Realizar Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            className="border-2"
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            name="senha"
            onChange={handleChange}
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
