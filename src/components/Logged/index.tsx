import { useState } from "react";
import "./styles.css";

function Logged(props: any) {
  const [popup, setPopup] = useState("");
  const [popupView, setClassPopupView] = useState("");
const [popupDelete, setClassPopupDelete] = useState("");

  const setPopupClass = () => {
    setPopup("popup-wrapper");
  };
  const removePopup = () => {
    setPopup("");
    setClassPopupView("");
    setClassPopupDelete("");
  };
  const setPopupView = () => {
    setPopupClass();
    setClassPopupView("popup");
  };
  const setPopupUpDelete = () => {
    setPopupClass();
    setClassPopupDelete("popup");
  };

  return (
    <div className="logged">
      <div className="options">
        <h1>Bem vindo(a) {props.nome}</h1>
        <button onClick={setPopupView}>Visualizar dados da conta</button>
        <button onClick={props.update}>Atualizar dados da conta</button>
        <button onClick={setPopupUpDelete}>Deletar conta</button>
        <button onClick={props.deslogged} className="sair">
          Sair
        </button>
      </div>
      <div className={`${popup ? "popup-wrapper" : "none"}`}>
        <div className={`${popupView ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <p>Nome: {props.nome}</p>
            <p>Empresa: {props.empresa}</p>
            <p>Telefone: {props.telefone} </p>
            <p>Email: {props.email}</p>
          </div>
        </div>
        <div className={`${popupDelete ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content" id="popup-delete">
            <p>Tem certeza que deseja deletar sua conta?</p>
            <button className="button-delete">Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logged;
