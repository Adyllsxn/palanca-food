// components/layout/header/header.ts

export interface MenuItem {
  id: number;
  nome: string;
  link: string;
}

export interface HeaderData {
  logo: {
    nome: string;
    ponto: string;
  };
  menu: MenuItem[];
  botaoReserva: string;
  search: {
    placeholder: string;
  };
}

export const headerData: HeaderData = {
  logo: {
    nome: "Foodie",
    ponto: "."
  },
  menu: [
    { id: 1, nome: "Início", link: "#home" },
    { id: 2, nome: "Sobre Nós", link: "#about" },
    { id: 3, nome: "Cardápio", link: "#food-menu" },
    { id: 4, nome: "Blog", link: "#blog" },
    { id: 5, nome: "Contato", link: "#contato" }
  ],
  botaoReserva: "Reservar",
  search: {
    placeholder: "Digite sua busca..."
  }
};