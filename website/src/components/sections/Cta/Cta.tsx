// components/sections/Cta/Cta.tsx
import Image from "next/image";
import dados from "./cta.json";

export function Cta() {
  return (
    <section className="section section-divider white cta" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">
            {dados.titulo} <span className="span">{dados.destaque}</span>
          </h2>
          <p className="section-text">{dados.texto}</p>
          <button className="btn btn-hover">{dados.botao}</button>
        </div>
        <figure className="cta-banner">
          <Image src="/assets/images/cta-banner.png" width={700} height={637} alt="Hambúrguer" className="w-100 cta-img" />
          <Image src="/assets/images/sale-shape.png" width={216} height={226} alt="até 50% off" className="abs-img scale-up-anim" />
        </figure>
      </div>
    </section>
  );
}