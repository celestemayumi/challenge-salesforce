import "./styles.css";
import "../../../public/Logo.png";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setOpenSubMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenSubMenu(null);
  };
  return (
    <>
      <header>
        <div className="cloud">
          <Image className="logo-sfc" src="/Logo.png" width={280} height={10} alt="Logo" />
          <div className="login">
            <i className="fas fa-globe config"></i>
            <Link href="/login">
              <button className="login-bar">
                <p>Login</p>
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>
          </div>
        </div>
      </header>
      <nav className="nav">
      <ul className="">
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter('produtos')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/">Produtos</Link>
          {openSubMenu === 'produtos' && (
            <ul className="absolute flex-col mt-1 z-10 bg-[#0483d7]  text-white">
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/produtos/produto1">Produto 1</Link></li>
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/produtos/produto2">Produto 2</Link></li>
              <li className="bg-[#0483d7] flex items-center w-28 h-14 "><Link href="/produtos/produto3">Produto 3</Link></li>
            </ul>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter('industrias')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/">Industrias</Link>
          {openSubMenu === 'industrias' && (
            <ul className="absolute flex-col mt-1 z-10 bg-[#0483d7]  text-white">
              <li className="bg-[#0483d7] flex items-center w-32 h-14"><Link href="/industrias/industria1">Indústria 1</Link></li>
              <li className="bg-[#0483d7] flex items-center w-32 h-14"><Link href="/industrias/industria2">Indústria 2</Link></li>
              <li className="bg-[#0483d7] flex items-center w-32 h-14"><Link href="/industrias/industria3">Indústria 3</Link></li>
            </ul>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter('suporte')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/">Suporte</Link>
          {openSubMenu === 'suporte' && (
            <ul className="absolute flex-col mt-1 z-10 bg-[#0483d7]  text-white">
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/suporte/faq">FAQ</Link></li>
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/suporte/contato">Contato</Link></li>
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/suporte/tutoriais">Tutoriais</Link></li>
            </ul>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter('empresa')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/">Empresa</Link>
          {openSubMenu === 'empresa' && (
            <ul className="absolute flex-col mt-1 z-10 bg-[#0483d7]  text-white">
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/empresa/sobre">Sobre Nós</Link></li>
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/empresa/carreiras">Carreiras</Link></li>
              <li className="bg-[#0483d7] flex items-center w-28 h-14"><Link href="/empresa/contato">Contato</Link></li>
            </ul>
          )}
        </li>
      </ul>
      <button className="menu-icon"/>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="p-2 rounded"
        />
        <button type="submit" className="">
          <i className="fas fa-search mr-2"></i>
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
