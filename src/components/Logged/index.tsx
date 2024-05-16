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

  const handleClick = async () => {
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
    handleClick();
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
        <h1>
          Bem vindo(a) {userNome}
        </h1>
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
              <input id="name" type="text" className="border-2" />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" type="text" className="border-2" />
            </div>
            <div>
              <label htmlFor="empresa">Empresa</label>
              <input id="empresa" type="text" className="border-2" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" className="border-2" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input id="senha" type="password" className="border-2" />
            </div>
            <div className="div-button-update">
              <button className="button-update">Enviar</button>
            </div>
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
