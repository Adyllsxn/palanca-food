// components/layout/footer/Footer.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { footerData } from "./footer";

export function Footer() {
  const [anoAtual] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div
        className="footer-top"
        style={{ backgroundImage: "url('/assets/images/footer-illustration.png')" }}
      >
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              {footerData.logo.nome}<span className="span">{footerData.logo.ponto}</span>
            </a>
            <p className="footer-text">{footerData.descricao}</p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link" aria-label="Facebook">
                  <IoLogoFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Twitter">
                  <IoLogoTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Instagram">
                  <IoLogoInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="WhatsApp">
                  <IoLogoWhatsapp size={20} />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">{footerData.contato.titulo}</p>
            </li>
            <li className="footer-list-item">
              <IoCallOutline size={16} />
              <span>{footerData.contato.telefone}</span>
            </li>
            <li className="footer-list-item">
              <IoMailOutline size={16} />
              <span>{footerData.contato.email}</span>
            </li>
            <li className="footer-list-item">
              <IoLocationOutline size={16} />
              <address>{footerData.contato.endereco}</address>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">{footerData.horario.titulo}</p>
            </li>
            {footerData.horario.itens.map((item, index) => (
              <li key={index} className="footer-list-item">
                <IoTimeOutline size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <form action="" className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <p className="footer-list-title">{footerData.formulario.titulo}</p>
            <div className="input-wrapper">
              <input
                type="text"
                name="full_name"
                required
                placeholder={footerData.formulario.nome}
                className="input-field"
              />
              <input
                type="email"
                name="email_address"
                required
                placeholder={footerData.formulario.email}
                className="input-field"
              />
            </div>
            <div className="input-wrapper">
              <select name="total_person" className="input-field">
                {footerData.formulario.pessoas.map((pessoa, index) => (
                  <option key={index} value={pessoa}>
                    {pessoa}
                  </option>
                ))}
              </select>
              <input
                type="date"
                name="booking_date"
                className="input-field"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder={footerData.formulario.mensagem}
              className="input-field"
            ></textarea>
            <button type="submit" className="btn">
              {footerData.formulario.botao}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            {footerData.copyright.texto} {anoAtual}{" "}
            <a href="#" className="copyright-link">
              {footerData.copyright.link}
            </a>{" "}
            {footerData.copyright.direitos}
          </p>
        </div>
      </div>
    </footer>
  );
}