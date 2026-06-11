// components/sections/Banner/banner.ts

export interface BannerItem {
  id: number;
  tamanho: string;
  imagem: string;
  altura: number;
  subtitulo?: string; // opcional, pois nem todos têm
  titulo: string;
  texto: string;
  botao: string;
}

export interface BannerData {
  itens: BannerItem[];
}

export const bannerData: BannerData = {
  itens: [
    {
      id: 1,
      tamanho: "banner-lg",
      imagem: "/assets/images/banner-1.jpg",
      altura: 450,
      subtitulo: "50% Off Agora!",
      titulo: "Desconto para Hambúrgueres Deliciosos!",
      texto: "Oferta de 50% apenas esta semana",
      botao: "Pedir Agora"
    },
    {
      id: 2,
      tamanho: "banner-sm",
      imagem: "/assets/images/banner-2.jpg",
      altura: 465,
      titulo: "Pizza Deliciosa",
      texto: "50% off Agora",
      botao: "Pedir Agora"
    },
    {
      id: 3,
      tamanho: "banner-sm",
      imagem: "/assets/images/banner-3.jpg",
      altura: 465,
      titulo: "Hambúrgueres Americanos",
      texto: "50% off Agora",
      botao: "Pedir Agora"
    },
    {
      id: 4,
      tamanho: "banner-md",
      imagem: "/assets/images/banner-4.jpg",
      altura: 220,
      titulo: "Pizza Saborosa",
      texto: "Oferta de 50% apenas esta semana",
      botao: "Pedir Agora"
    }
  ]
};