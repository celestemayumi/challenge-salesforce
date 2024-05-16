"use client";
import { useState, useEffect } from "react";
import { tokenService } from "@/services/tokenService";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logged from "@/components/Logged";
import { useRouter } from "next/navigation";
import "./styles.css/popup.css";
function AuthPageSSR(props?: any) {
  const [userNome, setUserNome] = useState(null);
  const [userEmpresa, setUserEmpresa] = useState(null);
  const [userTelefone, setUserTelefone] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [popup, setPopup] = useState("");
  const [popupView, setClassPopupView] = useState("");
  const [popupUpdate, setClassPopupUpdate] = useState("");
  const [popupDelete, setClassPopupDelete] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/users/" + String(props.token)
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
  const deslogged = () => {
    tokenService.delete();
    router.push("/login");
  };
  const setPopupClass = () => {
    setPopup("popup-wrapper");
  };
  const removePopup = () => {
    setPopup("");
    setClassPopupView("");
    setClassPopupUpdate("");
    setClassPopupDelete("");
  };
  const setPopupView = () => {
    setPopupClass();
    setClassPopupView("popup");
  };
  const setPopupUpdate = () => {
    setPopupClass();
    setClassPopupUpdate("popup");
  };
  const setPopupUpDelete = () => {
    setPopupClass();
    setClassPopupDelete("popup");
  };
  useEffect(() => {
    handleClick();
  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <main>
      <Header />
      <Logged
        name={userNome}
        view={setPopupView}
        update={setPopupUpdate}
        delete={setPopupUpDelete}
        deslogged={deslogged}
      />
      <Footer />
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
              <input id="name" type="text" />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" type="text" />
            </div>
            <div>
              <label htmlFor="empresa">Empresa</label>
              <input id="empresa" type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" className="border-2" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input id="senha" type="password" className="border-2" />
            </div>
          </div>
        </div>
        <div className={`${popupDelete ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <p>Tem certeza que deseja deletar sua conta?</p>
            <button>Sim</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthPageSSR;

export async function getServerSideProps(ctx: any) {
  try {
    const token = tokenService.get(ctx);
    console.log("cookies", token);
    return {
      props: {
        token,
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
}
