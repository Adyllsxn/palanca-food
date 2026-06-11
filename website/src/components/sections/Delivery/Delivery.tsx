// components/sections/Delivery/Delivery.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dados from "./delivery.json";

export function Delivery() {
  const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80);
  const lastScrollPos = useRef(0);
  const deliveryBoyRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (deliveryBoyRef.current) {
        const deliveryBoyTopPos = deliveryBoyRef.current.getBoundingClientRect().top;
        if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
          const activeScrollPos = window.scrollY;
          let newMove = deliveryBoyMove;
          if (lastScrollPos.current < activeScrollPos) {
            newMove += 1;
          } else {
            newMove -= 1;
          }
          setDeliveryBoyMove(newMove);
          lastScrollPos.current = activeScrollPos;
          deliveryBoyRef.current.style.transform = `translateX(${newMove}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [deliveryBoyMove]);

  return (
    <section className="section section-divider gray delivery">
      <div className="container">
        <div className="delivery-content">
          <h2 className="h2 section-title">
            {dados.titulo} <span className="span">{dados.destaque}</span> {dados.tituloFim}
          </h2>
          <p className="section-text">{dados.texto}</p>
          <button className="btn btn-hover">{dados.botao}</button>
        </div>
        <figure className="delivery-banner">
          <Image src="/assets/images/delivery-banner-bg.png" width={700} height={602} alt="nuvens" className="w-100" />
          <Image
            ref={deliveryBoyRef}
            src="/assets/images/delivery-boy.svg"
            width={1000}
            height={880}
            alt="entregador"
            className="w-100 delivery-img"
            style={{ transform: `translateX(${deliveryBoyMove}px)` }}
          />
        </figure>
      </div>
    </section>
  );
}