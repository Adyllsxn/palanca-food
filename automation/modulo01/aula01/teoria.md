# AULA 1: O QUE É AUTOMAÇÃO?
## 1.1 - Conceito Básico

> Automação é fazer o computador executar tarefas sozinho, sem você precisar ficar clicando ou digitando o tempo todo.

Exemplo do dia a dia:

    Você tem 50 arquivos para renomear

    Fazer manualmente = clicar 1 por 1 (chato e demorado)

    Automatizar = um script faz tudo em 1 segundo

No hacking ético:

    Testar 10.000 senhas manualmente? Impossível

    Automatizar o teste = força bruta em minutos


## 1.2 - Por que um computador precisa de automação?

> Computadores são burros! Eles só fazem o que mandamos. Mas são rápidos e não se cansam.

**Automação = unir sua inteligência com a velocidade da máquina**

## 1.3 - Tipos de Automação

### Tipo 1: Automação de Sistema
- O que é: Controlar programas, processos e comandos do sistema
- Exemplo: Abrir o terminal, fechar um programa travado
- No hacking: Executar ferramentas como nmap automaticamente

```csharp
// Exemplo real que você já fez
Process.Start("xdotool", "key Super");
```

###  Tipo 2: Automação de Arquivos
- O que é: Ler, escrever, criar, mover, deletar arquivos
- Exemplo: Renomear 100 fotos de uma vez
-  No hacking: Procurar arquivos sensíveis no sistema

```csharp
// Exemplo: criar um arquivo de log
File.WriteAllText("log.txt", "Ataque iniciado...");
```

###  Tipo 3: Automação de Rede
- O que é: Enviar e receber dados pela rede
- Exemplo: Verificar se um site está online
- No hacking: Escanear portas, criar backdoors

```csharp
// Exemplo: ping em um servidor
Ping ping = new Ping();
ping.Send("google.com");
```

###  Tipo 4: Automação Web
- O que é: Interagir com sites automaticamente
- Exemplo: Preencher formulários, baixar páginas
- No hacking: Testar logins, extrair dados

```csharp
// Exemplo: baixar uma página
HttpClient client = new HttpClient();
string html = await client.GetStringAsync("https://example.com");
```