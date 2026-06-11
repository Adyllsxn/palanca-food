// components/sections/Promo/Promo.tsx
import Image from "next/image";
import dados from "./promo.json";

export function Promo() {
  return (
    <section className="section section-divider white promo">
      <div className="container">
        <ul className="promo-list has-scrollbar">
          {dados.itens.map((item) => (
            <li key={item.id} className="promo-item">
              <div className="promo-card">
                <div className="card-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="25" fill="#ff9d2d" />
                  </svg>
                </div>
                <h3 className="h3 card-title">{item.titulo}</h3>
                <p className="card-text">{item.descricao}</p>
                <Image
                  src={item.imagem}
                  width={300}
                  height={300}
                  alt={item.titulo}
                  className="w-100 card-banner"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}