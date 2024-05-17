import { useState, useEffect } from "react";
import { tokenService } from "@/services/tokenService";
import { useRouter } from "next/router";
import "./styles.css";

function Logged(props: any) {
  const [popup, setPopup] = useState("");
  const [popupView, setClassPopupView] = useState("");
  const [popupUpdate, setClassPopupUpdate] = useState("");
  const [popupDelete, setClassPopupDelete] = useState("");
  const [userNome, setUserNome] = useState(null);
  const [userEmpresa, setUserEmpresa] = useState(null);
  const [userTelefone, setUserTelefone] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const userUpdate = async () => {
    setErro("");
    setResposta("");

    const response = await fetch(
      "http://localhost:8080/users/" + String(props.id),
      {
        method: "put",
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
      }
    );
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
    getUserInfos();
  };

  const getUserInfos = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/users/" + String(props.id)
      );
      const data = await response.json();
      console.log(data.nome);
      setUserNome(data.nome);
      setUserEmpresa(data.empresa);
      setUserTelefone(data.telefone);
      setUserEmail(data.email);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserInfos();
  }, []); // Executa apenas uma vez após a montagem do componente

  const setPopupClass = () => {
    setPopup("popup-wrapper");
  };
  const removePopup = () => {
    setPopup("");
    setClassPopupView("");
    setClassPopupUpdate("");
    setClassPopupDelete("");
  };
  const setPopupUpdate = () => {
    setPopupClass();
    setClassPopupUpdate("popup");
  };
  const setPopupView = () => {
    setPopupClass();
    setClassPopupView("popup");
  };
  const setPopupUpDelete = () => {
    setPopupClass();
    setClassPopupDelete("popup");
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
  const deleteUser = async () => {
    const response = await fetch(
      "http://localhost:8080/users/" + String(props.id),
      {
        method: "delete",
      }
    );
    tokenService.delete();
    router.push("/login");
  };
  const deslogged = () => {
    tokenService.delete();
    router.push("/login");
  };
  return (
    <div className="logged">
      <div className="options">
        <h1>Bem vindo(a) {userNome}</h1>
        <button onClick={setPopupView}>Visualizar dados da conta</button>
        <button onClick={setPopupUpdate}>Atualizar dados da conta</button>
        <button onClick={setPopupUpDelete}>Deletar conta</button>
        <button onClick={deslogged} className="sair">
          Sair
        </button>
      </div>
      <div className={`${popup ? "popup-wrapper" : "none"}`}>
        <div className={`${popupView ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <p>Nome: {userNome}</p>
            <p>Empresa: {userEmpresa}</p>
            <p>Telefone: {userTelefone} </p>
            <p>Email: {userEmail}</p>
          </div>
        </div>
        <div className={`${popupUpdate ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                onChange={nomeChange}
                className="border-2"
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                type="text"
                onChange={telefoneChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="empresa">Empresa</label>
              <input
                id="empresa"
                type="text"
                onChange={empresaChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                onChange={emailChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                onChange={senhaChange}
                className="border-2"
              />
            </div>
            <div className="div-button-update">
              <button className="button-update" onClick={userUpdate}>
                Enviar
              </button>
            </div>
            {erro && <p className="error">{erro}</p>}
            {resposta && <p className="success">{resposta}</p>}
          </div>
        </div>
        <div className={`${popupDelete ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content" id="popup-delete">
            <p>Tem certeza que deseja deletar sua conta?</p>
            <button className="button-delete" onClick={deleteUser}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logged;
