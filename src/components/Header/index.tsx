import "./styles.css";
import "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="cloud">
          <Image className="logo-sfc" src="/Logo.png" width={280} height={10} alt="Logo" />
          <div className="login">
            <i className="fas fa-globe config"></i>
            <button className="login-bar">
              <p>Login</p>
              <i className="fa-solid fa-user"></i>
            </button>
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">Produtos</Link>
          </li>
          <li>
            <Link href="/">Industrias</Link>
          </li>
          <li>
            <Link href="/">Suporte</Link>
          </li>
          <li>
            <Link href="/">Empresa</Link>
          </li>
        </ul>
        <button className="menu-icon"/>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar..." />
          <button type="submit">
            <i className="fas fa-search mr-5"></i>
          </button>
        </div>
      </nav>
      <div className="acessibility">
        <p>MENU DE ACESSIBILIDADE</p>
        <i className="fas fa-universal-access"></i>
      </div>
    </>
  );
};

export default Header;
