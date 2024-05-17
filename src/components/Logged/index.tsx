import { useState, useEffect } from "react";
import { tokenService } from "@/services/tokenService";
import { useRouter } from "next/router";
import "./styles.css";

function Logged(props: any) {
  const [popup, setPopup] = useState("");
  const [popupView, setClassPopupView] = useState("");
  const [popupUpdate, setClassPopupUpdate] = useState("");
  const [popupDelete, setClassPopupDelete] = useState("");
  const router = useRouter();
  const [data, setData] = useState({
    nome: "",
    telefone: "",
    empresa: "",
    email: "",
    senha: "",
  });
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    empresa: "",
    email: "",
    senha: "",
  });
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const getUserInfos = async () => {
    setErro("");
    try {
      const response = await fetch(
        "http://localhost:8080/users/" + String(props.id)
      );
      const data = await response.json();
      console.log(data.nome);
      setData({
        nome: data.nome,
        telefone: data.telefone,
        empresa: data.empresa,
        email: data.email,
        senha: data.senha,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserInfos();
  }, []); // Executa apenas uma vez após a montagem do componente

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
        body: JSON.stringify(values),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            setErro(message);
          });
        } else {
          const message = response.text().then((message) => {
            setResposta(message);
            getUserInfos();
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };

  const setPopupClass = () => {
    setPopup("popup-wrapper");
  };
  const removePopup = () => {
    setErro("");
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
  const deleteUser = async () => {
    setErro("");
    const response = await fetch(
      "http://localhost:8080/users/" + String(props.id),
      {
        method: "delete",
      }
    )
      .then(() => {
        tokenService.delete();
        router.push("/login");
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };
  const deslogged = () => {
    tokenService.delete();
    router.push("/login");
  };
  return (
    <div className="logged">
      <div className="options">
        <h1>Bem vindo(a) {data.nome}</h1>
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
            <p>Nome: {data.nome}</p>
            <p>Empresa: {data.empresa}</p>
            <p>Telefone: {data.telefone} </p>
            <p>Email: {data.email}</p>
          </div>
        </div>
        <div className={`${popupUpdate ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                name="nome"
                type="text"
                onChange={handleChange}
                className="border-2"
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                name="telefone"
                type="text"
                onChange={handleChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="empresa">Empresa</label>
              <input
                name="empresa"
                type="text"
                onChange={handleChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input
                name="senha"
                type="password"
                onChange={handleChange}
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
            {erro && <p className="error">{erro}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logged;
