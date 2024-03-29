"use client";
import { useState } from "react";
import "./styles.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");


  const handleClick = async () => {
    setErro("");
    setResposta("");

    const response = await fetch("http://localhost:8080/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({ email: email, empresa: empresa , nome: nome, senha: senha, telefone: telefone})
      });
      if(!response.ok){
        let message;

        try {
          message = await response.text();
        //  if(message.)
            console.log(message);
            setErro(message);
        } catch (error) {
            console.error("Erro ao ler o corpo da resposta:", error);
            message = "Erro desconhecido ao processar a resposta do servidor.";
        }
      }else{
        let message;

        try {
          message = await response.text();
        //  if(message.)
            console.log(message);
            setResposta(message);
        } catch (error) {
            console.error("Erro ao ler o corpo da resposta:", error);
            message = "Erro desconhecido ao processar a resposta do servidor.";
        }
      }
      
  };

  const nomeChange = (event: any) => {
    setNome(event.target.value);
  };
  const emailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const senhaChange = (event: any) => {
    setSenha(event.target.value);
  };
  const telefoneChange = (event: any) => {
    setTelefone(event.target.value);
  };
  const empresaChange = (event: any) => {
    setEmpresa(event.target.value);
  };

  return (
    <div className="menu">
      <div></div>
      <div className="cadastro">
        <h1>Criar cadastro</h1>
        <div>
      <label htmlFor="name">Nome</label>
      <input id = "name" onChange={nomeChange} type="text" className="border-2" />
      </div>
     <div>
      <label htmlFor="email">Email</label>
      <input id = "email" onChange={emailChange} type="text" className="border-2" />
      </div>
      <div>
      <label htmlFor="senha">Senha</label>
      <input id = "senha" onChange={senhaChange} type="password" className="border-2" />
      </div>
      <div>
      <label htmlFor="telefone">Telefone</label>
      <input id = "telefone" onChange={telefoneChange} type="text" className="border-2" />
      </div>
      <div>
      <label htmlFor="empresa">Empresa</label>
      <input id = "empresa" onChange={empresaChange} type="text" className="border-2" />
      </div>
      <button  onClick={handleClick} 
      className="bg-slate-500 p-2">
        Enviar
      </button>
      {erro && <p className="error">{erro}</p>}
      {resposta && <p className="success">{resposta}</p>}
      </div>
      <div></div>
    </div>
  );
};

export default Cadastro;