// components/layout/footer/Footer.tsx
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import dados from "./footer.json";

export function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-top"
        style={{ backgroundImage: "url('/assets/images/footer-illustration.png')" }}
      >
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              {dados.logo.nome}<span className="span">{dados.logo.ponto}</span>
            </a>
            <p className="footer-text">{dados.descricao}</p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoPinterest size={20} />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">{dados.contato.titulo}</p>
            </li>
            <li>
              <p className="footer-list-item">{dados.contato.telefone}</p>
            </li>
            <li>
              <p className="footer-list-item">{dados.contato.email}</p>
            </li>
            <li>
              <address className="footer-list-item">{dados.contato.endereco}</address>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">{dados.horario.titulo}</p>
            </li>
            {dados.horario.itens.map((item, index) => (
              <li key={index}>
                <p className="footer-list-item">{item}</p>
              </li>
            ))}
          </ul>

          <form action="" className="footer-form">
            <p className="footer-list-title">{dados.formulario.titulo}</p>
            <div className="input-wrapper">
              <input
                type="text"
                name="full_name"
                required
                placeholder={dados.formulario.nome}
                className="input-field"
              />
              <input
                type="email"
                name="email_address"
                required
                placeholder={dados.formulario.email}
                className="input-field"
              />
            </div>
            <div className="input-wrapper">
              <select name="total_person" className="input-field">
                {dados.formulario.pessoas.map((pessoa, index) => (
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
              placeholder={dados.formulario.mensagem}
              className="input-field"
            ></textarea>
            <button type="submit" className="btn">
              {dados.formulario.botao}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            {dados.copyright.texto}{" "}
            <a href="#" className="copyright-link">
              {dados.copyright.link}
            </a>{" "}
            {dados.copyright.direitos}
          </p>
        </div>
      </div>
    </footer>
  );
}