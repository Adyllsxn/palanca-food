// components/layout/header/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import dados from "./header.json";

export function Header() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchActive) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
    return () => document.body.classList.remove("active");
  }, [isSearchActive]);

  const handleNavbarToggle = () => setIsNavbarActive(!isNavbarActive);
  const handleNavLinkClick = () => setIsNavbarActive(false);
  const handleSearchToggle = () => setIsSearchActive(!isSearchActive);

  return (
    <>
      <header ref={headerRef} className={`header ${isHeaderActive ? "active" : ""}`}>
        <div className="container">
          <h1>
            <a href="#" className="logo">
              {dados.logo.nome}<span className="span">{dados.logo.ponto}</span>
            </a>
          </h1>

          <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
            <ul className="navbar-list">
              {dados.menu.map((item) => (
                <li key={item.id} className="nav-item">
                  <a href={item.link} className="navbar-link" onClick={handleNavLinkClick}>
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Buscar" onClick={handleSearchToggle}>
              <IoSearchOutline size={20} />
            </button>
            <button className="btn btn-hover">{dados.botaoReserva}</button>
            <button
              className={`nav-toggle-btn ${isNavbarActive ? "active" : ""}`}
              aria-label="Menu"
              onClick={handleNavbarToggle}
            >
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Box */}
      <div className={`search-container ${isSearchActive ? "active" : ""}`}>
        <div className="search-box">
          <input
            type="search"
            name="search"
            aria-label="Pesquisar"
            placeholder={dados.search.placeholder}
            className="search-input"
          />
          <button className="search-submit" aria-label="Enviar busca">
            <IoSearchOutline size={40} />
          </button>
        </div>
        <button className="search-close-btn" aria-label="Fechar busca" onClick={handleSearchToggle}></button>
      </div>
    </>
  );
}