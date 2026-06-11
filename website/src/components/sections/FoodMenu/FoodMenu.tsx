// components/sections/FoodMenu/FoodMenu.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import dados from "./foodMenu.json";

export function FoodMenu() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtros = ["Todos", "Pizza", "Hambúrguer", "Bebidas", "Sanduíche"];
  
  const itensFiltrados = activeFilter === "Todos"
    ? dados.itens
    : dados.itens.filter((item) => item.filtro === activeFilter);

  // Formatar valor em Kwanza
  const formatarKwanza = (valor: number) => {
    return valor.toLocaleString('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">
        <p className="section-subtitle">{dados.subtitulo}</p>
        <h2 className="h2 section-title">
          Nossas Comidas <span className="span">Deliciosas</span>
        </h2>
        <p className="section-text">{dados.texto}</p>

        <ul className="fiter-list">
          {filtros.map((filtro) => (
            <li key={filtro}>
              <button
                className={`filter-btn ${activeFilter === filtro ? "active" : ""}`}
                onClick={() => setActiveFilter(filtro)}
              >
                {filtro}
              </button>
            </li>
          ))}
        </ul>

        <ul className="food-menu-list">
          {itensFiltrados.map((item) => (
            <li key={item.id}>
              <div className="food-menu-card">
                <div className="card-banner">
                  <Image src={item.imagem} width={300} height={300} alt={item.titulo} className="w-100" />
                  <div className="badge">{item.desconto}</div>
                  <button className="btn food-menu-btn">Pedir Agora</button>
                </div>
                <div className="wrapper">
                  <p className="category">{item.categoria}</p>
                  <div className="rating-wrapper">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} size={14} />
                    ))}
                  </div>
                </div>
                <h3 className="h3 card-title">{item.titulo}</h3>
                <div className="price-wrapper">
                  <p className="price-text">Preço:</p>
                  <data className="price">{formatarKwanza(item.preco)}</data>
                  <del className="del">{formatarKwanza(item.precoOriginal)}</del>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}