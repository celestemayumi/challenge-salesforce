'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import "./styles.css";
const router = useRouter;

interface User{
    email: string,
    empresa: string,
    nome: string,
    senha: string,
    telefone: string
}
const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();
  
const handleSubmit = async ()=> {
    setErro("");
    const response = await fetch("http://localhost:8080/users", {
        method: "get"
     });
     const data = await response.json();
    
     let userFound = false;
     data.forEach((item: any) => {
        if (item.email === email && item.senha === senha) {
          userFound = true;
        }
     });
    
     if (userFound) {
        console.log("user validado")
        // Redireciona o usuário para uma página de sucesso
        router.push('/logged');
    }
    else{
      setErro("Email ou senha incorretos")
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
    <input id = "email" onChange={emailChange} type="text" className="border-2" />
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