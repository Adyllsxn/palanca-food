## AULA 2: COMO O C# SE COMUNICA COM O SISTEMA

### 2.1 - Teoria: O que é um Processo?

Antes de automatizar, você precisa entender como o computador organiza as coisas.

**Imagine um escritório:**

| No escritório | No computador |
|---------------|---------------|
| O prédio | O sistema operacional (Linux) |
| Uma empresa dentro do prédio | Um **Processo** |
| Funcionários da empresa | **Threads** (tarefas) |
| Documentos que a empresa usa | **Memória** |

**Definição oficial:**
> Um processo é um programa em execução. Cada programa aberto (terminal, navegador, jogo) é um processo diferente.

**Exemplo no seu Parrot OS agora:**
```bash
# Roda no terminal para ver os processos
ps aux
```

> Você vai ver algo como:

```bash
USER       PID  %CPU %MEM COMMAND
adyllsxn   123   0.5  1.2  brave
adyllsxn   456   0.1  0.5  terminal
adyllsxn   789   0.0  0.3  code
```
- PID = Número de identidade do processo
- COMMAND = Nome do programa

### 2.2 - Como o C# controla processos?
Lembra do código que você usou?
```csharp
Process.Start("whoami");
``` 

O que acontece por trás:
```text

1. Seu programa C# pede: "Sistema, execute 'whoami'"
2. Sistema operacional cria um NOVO processo
3. O comando 'whoami' roda
4. O processo termina
5. Volta para seu programa C#
```


Desenho:
```text

[Seu Script C#] ---pedido---> [Sistema Operacional]
                                      |
                                      v
                              [CRIA NOVO PROCESSO]
                                      |
                                      v
                              [Executa whoami]
                                      |
                                      v
                              [Mostra resultado]
                                      |
                                      v
                              [Processo morre]
```

### 2.3 - Processos: Pai e Filho

Quando seu programa cria outro programa, eles têm uma relação:
```text
Conceito	         Significado
 Processo Pai	       Seu programa C# que iniciou a ação
 Processo Filho	       O comando que você mandou executar
```

```csharp
// Seu programa (PAI) cria o whoami (FILHO)
Process.Start("whoami");
```

> Importante: Se seu programa pai morrer, os filhos continuam rodando! (Salvo se você configurar o contrário)

### 2.4 - Três formas de executar comandos
Forma 1: Só executar (fogo e esquece)
```csharp
Process.Start("firefox");
```
- Abre o Firefox e segue a vida
- Seu programa não espera o Firefox fechar

Forma 2: Executar e esperar
```csharp
Process process = Process.Start("firefox");
process.WaitForExit();  // Espera o usuário fechar o Firefox
Console.WriteLine("Firefox foi fechado!");
```

Forma 3: Executar e capturar resultado
```csharp
ProcessStartInfo info = new ProcessStartInfo
{
    FileName = "ls",
    Arguments = "-la",
    RedirectStandardOutput = true,  // CAPTURA a saída
    UseShellExecute = false
};

Process process = Process.Start(info);
string resultado = process.StandardOutput.ReadToEnd();
Console.WriteLine(resultado);
```

### 2.5 - Analogia para entender

Forma 1 (fogo e esquece):
 >Você pede para um amigo comprar pizza e continua jogando videogame. Não espera ele voltar.

Forma 2 (esperar):
 > Você pede pizza e fica olhando pela janela até o entregador chegar.

Forma 3 (capturar):
 >Você pede pizza, anota o sabor, o preço, o tempo de entrega e guarda essa informação.

### 2.6 - No seu Parrot OS: comandos úteis para testar
```text
Comando	            O que faz
whoami	            Mostra seu usuário
pwd	                Mostra onde você está
hostname	        Nome do computador
date	            Data e hora
uptime	            Quanto tempo o PC está ligado
who	                Quem está logado
```

Teste no C#:
```csharp
using System.Diagnostics;

string[] comandos = { "whoami", "hostname", "date" };

foreach(string cmd in comandos)
{
    Console.Write($"{cmd}: ");
    
    ProcessStartInfo info = new ProcessStartInfo
    {
        FileName = cmd,
        RedirectStandardOutput = true,
        UseShellExecute = false
    };
    
    Process p = Process.Start(info);
    string resultado = p.StandardOutput.ReadToEnd();
    p.WaitForExit();
    
    Console.WriteLine(resultado);
}
```