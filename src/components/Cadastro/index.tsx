"use client";
import { useState } from "react";
import Link from "next/link";
import "./styles.css";
import { tokenService } from "@/services/tokenService";
import { useRouter } from "next/navigation";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");
  const [className, setClassName] = useState("");
  const [classEmail, setClassEmail] = useState("");
  const [classSenha, setClassSenha] = useState("");
  const [classTelefone, setClassTelefone] = useState("");
  const [classEmpresa, setClassEmpresa] = useState("");
  const router = useRouter();
  const handleClick = async () => {
    setErro("");
    setResposta("");

    const response = await fetch("http://localhost:8080/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        empresa: empresa,
        nome: nome,
        senha: senha,
        telefone: telefone,
      }),
    });
    if (!response.ok) {
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
    } else {
      const response = await fetch("http://localhost:8080/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, senha: senha }),
      });
      const idLogin = await response.text();
      const token = idLogin.toString();
      tokenService.save(token);
      router.push("/logged");
    }
  };

  const nomeChange = (event: any) => {
    if (event.target.value.length < 4) {
      setClassName("valueError");
    } else {
      setClassName("valueSucess");
    }
    setNome(event.target.value);
  };
  const emailChange = (event: any) => {
    // if(event.target.value.contains("@")){
    //   setClassEmail("valueError")
    // }else{
    //   setClassEmail("valueSucess")
    // }
    setEmail(event.target.value);
  };
  const senhaChange = (event: any) => {
    // if(event.target.value.length < 4){
    //   setClassSenha("valueError")
    // }else{
    //   setClassSenha("valueSucess")
    // }
    setSenha(event.target.value);
  };
  const telefoneChange = (event: any) => {
    // if(event.target.value.length < 4){
    //   setClassTelefone("valueError")
    // }else{
    //   setClassTelefone("valueSucess")
    // }
    setTelefone(event.target.value);
  };
  const empresaChange = (event: any) => {
    // if(event.target.value.length < 4){
    //   setClassEmpresa("valueError")
    // }else{
    //   setClassEmpresa("valueSucess")
    // }
    setEmpresa(event.target.value);
  };

  return (
    <div className="menu">
      <div></div>
      <div className="cadastro">
        <h1>Criar cadastro</h1>
        <div className="form">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              onChange={nomeChange}
              type="text"
              className={className}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              onChange={emailChange}
              type="email"
              className={classEmail}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              onChange={senhaChange}
              type="password"
              className={classSenha}
            />
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              onChange={telefoneChange}
              type="text"
              className={classTelefone}
            />
          </div>
          <div>
            <label htmlFor="empresa">Empresa</label>
            <input
              id="empresa"
              onChange={empresaChange}
              type="text"
              className={classEmpresa}
            />
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
