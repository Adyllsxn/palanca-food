// components/sections/Hero/Hero.tsx
"use client";

import Image from "next/image";
import dados from "./hero.json";

export function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">{dados.subtitulo}</p>
          <h2 className="h1 hero-title">{dados.titulo}</h2>
          <p className="hero-text">{dados.texto}</p>
          <button className="btn">{dados.botao}</button>
        </div>
        <figure className="hero-banner">
          <Image
            src="/assets/images/hero-banner-bg.png"
            width={820}
            height={716}
            alt=""
            className="w-100 hero-img-bg"
            aria-hidden="true"
          />
          <Image
            src="/assets/images/hero-banner.png"
            width={700}
            height={637}
            alt={dados.imagemAlt}
            className="w-100 hero-img"
          />
        </figure>
      </div>
    </section>
  );
}