'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import User from "./interfaces";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();
  
const handleSubmit = async ()=> {
    setErro("");
    const response = await fetch("http://localhost:8080/users", {
        method: "get"
     });
     const data = await response.json();
    console.log(data);
     const user = data.find((item: User) => item.email === email && item.senha === senha);
    console.log(user);
    if (user) {
      console.log("Usuário validado");
      router.push('/logged');
    } else {
      setErro("Email ou senha incorretos");
    }

 };

  const emailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const senhaChange = (event: any) => {
    setSenha(event.target.value);
  };


  return(
    <div className="menu">
    <div></div>
    <div className="cadastro">
      <h1>Realizar Login</h1>
   <div>
    <label htmlFor="email">Email</label>
    <input id = "email" onChange={emailChange} type="email" className="border-2" />
    </div>
    <div>
    <label htmlFor="senha">Senha</label>
    <input id = "senha" onChange={senhaChange} type="password" className="border-2" />
    </div>

    <button 
    onClick={handleSubmit} 
    className="bg-slate-500 p-2">
      Enviar
    </button>
    {erro && <p className="error">{erro}</p>}
    </div>
    <div></div>
  </div>
  )
}

export default Login;