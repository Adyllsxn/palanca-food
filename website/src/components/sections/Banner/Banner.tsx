// components/sections/Banner/Banner.tsx
import Image from "next/image";
import dados from "./banner.json";

export function Banner() {
  return (
    <section className="section section-divider gray banner">
      <div className="container">
        <ul className="banner-list">
          {dados.itens.map((item) => (
            <li key={item.id} className={`banner-item ${item.tamanho}`}>
              <div className="banner-card">
                <Image src={item.imagem} width={550} height={item.altura} alt={item.titulo} className="banner-img" />
                <div className="banner-item-content">
                  {item.subtitulo && <p className="banner-subtitle">{item.subtitulo}</p>}
                  <h3 className="banner-title">{item.titulo}</h3>
                  <p className="banner-text">{item.texto}</p>
                  <button className="btn">{item.botao}</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}