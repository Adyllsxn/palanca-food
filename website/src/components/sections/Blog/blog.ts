// components/sections/Blog/blog.ts

export interface BlogPost {
  id: number;
  imagem: string;
  categoria: string;
  data: string;
  autor: string;
  titulo: string;
  resumo: string;
}

export interface BlogData {
  subtitulo: string;
  texto: string;
  posts: BlogPost[];
}

export const blogData: BlogData = {
  subtitulo: "Últimas Postagens do Blog",
  texto: "Comida é qualquer substância consumida para fornecer suporte nutricional a um organismo.",
  posts: [
    {
      id: 1,
      imagem: "/assets/images/blog-1.jpg",
      categoria: "Pizza",
      data: "01 Jan 2026",
      autor: "João Silva",
      titulo: "O que você acha das receitas de pizza com queijo?",
      resumo: "Especialistas financeiros apoiam ou ajudam você a descobrir de que maneira você pode aumentar seus fundos..."
    },
    {
      id: 2,
      imagem: "/assets/images/blog-2.jpg",
      categoria: "Hambúrguer",
      data: "01 Jan 2026",
      autor: "João Silva",
      titulo: "Fazendo tiras de frango com novos ingredientes deliciosos",
      resumo: "Especialistas financeiros apoiam ou ajudam você a descobrir de que maneira você pode aumentar seus fundos..."
    },
    {
      id: 3,
      imagem: "/assets/images/blog-3.jpg",
      categoria: "Frango",
      data: "01 Jan 2026",
      autor: "João Silva",
      titulo: "Massa inovadora Hot Chessyraw faz o criador se destacar",
      resumo: "Especialistas financeiros apoiam ou ajudam você a descobrir de que maneira você pode aumentar seus fundos..."
    }
  ]
};