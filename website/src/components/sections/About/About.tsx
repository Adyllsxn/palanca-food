// components/sections/About/About.tsx
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";
import dados from "./about.json";

export function About() {
  return (
    <section className="section section-divider gray about" id="about">
      <div className="container">
        <div className="about-banner">
          <Image
            src="/assets/images/about-banner.png"
            width={509}
            height={459}
            alt="Hambúrguer com Bebidas"
            className="w-100 about-img"
          />
          <Image
            src="/assets/images/sale-shape-red.png"
            width={216}
            height={226}
            alt="até 50% de desconto"
            className="abs-img scale-up-anim"
          />
        </div>
        <div className="about-content">
          <h2 className="h2 section-title">
            {dados.titulo} <span className="span">{dados.destaque}</span>
          </h2>
          <p className="section-text">{dados.texto}</p>
          <ul className="about-list">
            {dados.itens.map((item) => (
              <li key={item.id} className="about-item">
                <IoCheckmarkOutline size={16} />
                <span className="span">{item.texto}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-hover">{dados.botao}</button>
        </div>
      </div>
    </section>
  );
}