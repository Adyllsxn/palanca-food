// components/layout/footer/footer.ts

export interface FooterData {
  logo: {
    nome: string;
    ponto: string;
  };
  descricao: string;
  contato: {
    titulo: string;
    telefone: string;
    email: string;
    endereco: string;
  };
  horario: {
    titulo: string;
    itens: string[];
  };
  formulario: {
    titulo: string;
    nome: string;
    email: string;
    pessoas: string[];
    mensagem: string;
    botao: string;
  };
  copyright: {
    texto: string;
    link: string;
    direitos: string;
  };
}

export const footerData: FooterData = {
  logo: {
    nome: "Foodie",
    ponto: "."
  },
  descricao: "O melhor hambúrguer de Luanda! Sabor, qualidade e tradição que trazem a verdadeira experiência gastronômica para você e sua família.",
  contato: {
    titulo: "Informações de Contato",
    telefone: "+244 923 456 789",
    email: "contato@foodie.ao",
    endereco: "Rua Rainha Ginga, 123, Talatona, Luanda/Angola"
  },
  horario: {
    titulo: "Horário de Funcionamento",
    itens: [
      "Segunda a Sexta: 11:00 - 23:00",
      "Sábado: 12:00 - 00:00",
      "Domingo: 12:00 - 22:00"
    ]
  },
  formulario: {
    titulo: "Reserve uma Mesa",
    nome: "Seu Nome",
    email: "Seu Email",
    pessoas: ["1 Pessoa", "2 Pessoas", "3 Pessoas", "4 Pessoas", "5+ Pessoas"],
    mensagem: "Mensagem",
    botao: "Reservar Mesa"
  },
  copyright: {
    texto: "©",
    link: "Foodie",
    direitos: "Todos os direitos reservados."
  }
};