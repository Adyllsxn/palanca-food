// components/sections/Depoimentos/Depoimentos.tsx
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import dados from "./depoimentos.json";

export function Depoimentos() {
  return (
    <section className="section section-divider white testi">
      <div className="container">
        <p className="section-subtitle">{dados.subtitulo}</p>
        <h2 className="h2 section-title">
          Avaliações dos <span className="span">Nossos Clientes</span>
        </h2>
        <p className="section-text">{dados.texto}</p>
        <ul className="testi-list has-scrollbar">
          {dados.itens.map((item) => (
            <li key={item.id} className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <Image src={item.avatar} width={80} height={80} alt={item.nome} />
                  </figure>
                  <div>
                    <h3 className="h4 testi-name">{item.nome}</h3>
                    <p className="testi-title">{item.cargo}</p>
                  </div>
                </div>
                <blockquote className="testi-text">"{item.depoimento}"</blockquote>
                <div className="rating-wrapper">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} size={14} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}