<div align="center">
  <img src="./docs/assets/logo.svg" alt="Chatnal Logo" width="40%" /> 
  </br> </br>
  
  [![GitHub](https://img.shields.io/badge/github-chatnal-181717?style=for-the-badge&logo=github)](https://github.com/Adyllsxn/chatnal)
  [![Demo](https://img.shields.io/badge/demo-em_breve-4c1?style=for-the-badge&logo=vercel&logoColor=white)](https://chatnal.vercel.app)
  [![Setup](https://img.shields.io/badge/setup-guide-239120?style=for-the-badge&logo=gitbook&logoColor=white)](docs/Setup.md)
  [![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## **📖 SOBRE O PROJETO**

> O **Chatnal** é uma plataforma de chat moderna que combina o melhor dos mundos: grupos públicos com sistema de aprovação e grupos privados com convites exclusivos. Inspirado no funcionamento do WhatsApp e Discord, o Chatnal oferece uma experiência completa de comunicação em tempo real.

### **✨ Funcionalidades:**
```markdown
✅ Grupos públicos com solicitação de entrada e aprovação por admin
✅ Grupos privados com geração de convites únicos
✅ Chat em tempo real com WebSockets (Socket.io / SignalR)
✅ Autenticação segura com JWT
✅ Interface responsiva (PC, tablet e smartphone)
✅ Sistema de mensagens com persistência
✅ Notificações em tempo real
✅ Histórico de conversas
```

### **🔧 Fluxo da Aplicação**
> Usuário cria conta → Descobre grupos públicos ou é convidado → Solicita entrada ou aceita convite → Admin aprova → Chat em tempo real

### **📊 Tipos de Grupo**

| Tipo | Como funciona |
|--------|-------------|
| **Público com aprovação** | Aparece na lista geral → Usuário pede entrada → Admin aprova → Usuário vira membro |
| **Privado com convite** | Não aparece na lista → Admin gera convite único → Usuário entra via link → Vira membro direto |

---

## **🛠️ TECNOLOGIAS**

| Camada | Tecnologias |
|--------|-------------|
| **Backend** | NestJS, Node.js, Socket.io, Prisma, PostgreSQL, JWT |
| **Frontend** | React, Nextjs, TailwindCSS, Zustand, Vite |
| **Tempo Real** | WebSockets, Socket.io |
| **Infra** | Docker, Git, GitHub Actions |

---


## **📸 DEMO**
<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <img src="./docs/assets/client-demo.svg" alt="Frontend FlexShoe" width="90%" />
        <br />
        <b>🎨 Loja (Cliente)</b>
        <br /><br />
        <b>🔗 Links:</b><br />
        <a href="http://localhost:5173/">🌐 Local: http://localhost:5173/</a><br />
        <a href="https://chatnal.vercel.app/">🚀 Remoto: https://chatnal.vercel.app/</a>
      </td>
    </tr>
  </table>
</div>

---

## **⚠️ STATUS DO PROJETO**
> **Nota:** Atualmente o frontend utiliza dados mockados. A integração com o backend será implementada em breve.

---

## **📄 LICENÇA**

> Este projeto está sob a licença MIT, o que significa que é de código aberto e pode ser utilizado livremente para fins académicos e comerciais, desde que mantidos os créditos.


```markdown
📚 Código aberto (open source)
✅ Livre para uso académico
🤝 Contribuições são bem-vindas
```