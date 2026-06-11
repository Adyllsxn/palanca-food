// components/sections/Blog/Blog.tsx
import Image from "next/image";
import { IoCalendarOutline, IoPersonOutline, IoArrowForward } from "react-icons/io5";
import dados from "./blog.json";

export function Blog() {
  return (
    <section className="section section-divider white blog" id="blog">
      <div className="container">
        <p className="section-subtitle">{dados.subtitulo}</p>
        <h2 className="h2 section-title">
          Isto é Tudo Sobre <span className="span">Comidas</span>
        </h2>
        <p className="section-text">{dados.texto}</p>
        <ul className="blog-list">
          {dados.posts.map((post) => (
            <li key={post.id}>
              <div className="blog-card">
                <div className="card-banner">
                  <Image src={post.imagem} width={600} height={390} alt={post.titulo} className="w-100" />
                  <div className="badge">{post.categoria}</div>
                </div>
                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <IoCalendarOutline size={16} />
                      <time className="meta-info">{post.data}</time>
                    </a>
                    <a href="#" className="card-meta-link">
                      <IoPersonOutline size={16} />
                      <p className="meta-info">{post.autor}</p>
                    </a>
                  </div>
                  <h3 className="h3">
                    <a href="#" className="card-title">{post.titulo}</a>
                  </h3>
                  <p className="card-text">{post.resumo}</p>
                  <a href="#" className="btn-link">
                    <span>Leia Mais</span>
                    <IoArrowForward size={16} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}