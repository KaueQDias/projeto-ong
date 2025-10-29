# 💻 Projeto ONG Vidas - Plataforma Web (Front-End)

![Status do Projeto](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

Este projeto é uma plataforma web front-end completa e responsiva para a "ONG Vidas", desenvolvido como um desafio acadêmico completo, simulando todas as etapas de um produto real, desde a estruturação semântica até a otimização para produção.

---

### 🔗 Navegação
- [1. Sobre o Projeto](#1-sobre-o-projeto)
- [2. Funcionalidades Principais](#2-funcionalidades-principais)
- [3. Tecnologias Utilizadas](#3-tecnologias-utilizadas)
- [4. Estrutura do Projeto](#4-estrutura-do-projeto)
- [5. Como Executar](#5-como-executar)
- [6. Práticas de Acessibilidade (WCAG 2.1)](#6-práticas-de-acessibilidade-wcag-21)
- [7. Práticas de Versionamento (Git)](#7-práticas-de-versionamento-git)
- [8. Otimização para Produção](#8-otimização-para-produção)
- [9. Autor](#9-autor)

---

### 1. Sobre o Projeto

O terceiro setor brasileiro enfrenta limitações técnicas que impedem o desenvolvimento de plataformas digitais profissionais. Este projeto teve como objetivo desenvolver uma plataforma web completa que permita a ONGs gerenciar atividades, divulgar projetos, captar recursos e engajar voluntários, aplicando de forma integrada conceitos de HTML5, CSS3 avançado e JavaScript (ES6+).

### 2. Funcionalidades Principais

* **Single Page Application (SPA):** Navegação fluida sem recarregamento da página, utilizando `fetch` e `history.pushState`.
* **Design System Modular:** Interface consistente baseada em Variáveis CSS para cores, fontes e espaçamentos.
* **Modo Escuro Acessível:** Toggle de tema (claro/escuro) com persistência via `localStorage`, respeitando taxas de contraste WCAG.
* **Templates JavaScript:** Geração dinâmica de conteúdo (ex: cards de projetos) a partir de um "banco de dados" em JS, separando dados da visualização.
* **Validação de Formulário Avançada:** Verificação de consistência de dados em tempo real (on-blur) e no envio (on-submit), com feedback visual claro para o usuário.
* **Responsividade (Mobile-First):** Layout 100% adaptável para desktops, tablets e smartphones, usando um sistema de 12 colunas customizado (baseado em Flexbox) e 5 breakpoints.
* **Navegação Complexa:** Menu principal com dropdown e menu hambúrguer interativo para dispositivos móveis.

### 3. Tecnologias Utilizadas

* **HTML5:** Estruturação semântica (`<header>`, `<main>`, `<article>`, `<nav>`).
* **CSS3 (Avançado):**
    * Variáveis CSS (Design System)
    * Flexbox e CSS Grid (Layout)
    * Media Queries (Responsividade)
    * Animações e Transições
* **JavaScript (ES6+):**
    * Manipulação do DOM
    * Módulos ES6 (`import`/`export`)
    * Programação Assíncrona (`fetch`, `async/await`)
    * Eventos (`click`, `submit`, `popstate`)
    * Web Storage (`localStorage`)
* **Ferramentas:**
    * **Git & GitHub:** Controle de versão (GitFlow) e hospedagem.
    * **Font Awesome:** Ícones.

### 4. Estrutura do Projeto

A estrutura de pastas foi organizada para modularidade e escalabilidade:

/projeto-ong/ | |-- index.html (Página inicial) |-- projetos.html (Página de projetos) |-- cadastro.html (Página de cadastro) | |-- /assets/ | |-- /images/ (Imagens otimizadas) | |-- /css/ | |-- style.css (Arquivo principal que importa os módulos) | |-- /modules/ | |-- _variables.css (Design System: cores, fontes, espaços) | |-- _base.css (Reset e estilos base) | |-- _layout.css (Grid de 12 colunas, header, footer) | |-- _components.css (Botões, Cards, Forms, Alerts, Nav) | |-- _responsive.css (Media queries e breakpoints) | |-- /js/ |-- main.js (Arquivo de entrada, inicializa os módulos) |-- /data/ | |-- projects.js (Dados dos projetos) |-- /modules/ |-- navigation.js (Lógica do menu hambúrguer e dropdown) |-- spa.js (Lógica da Single Page Application) |-- templating.js (Funções de renderização de templates) |-- validation.js (Lógica de validação de formulário) |-- theme.js (Lógica do Modo Escuro) | |-- README.md (Esta documentação)


### 5. Como Executar

O projeto é 100% front-end e não requer um servidor.

1.  Clone o repositório:
    ```sh
    git clone [https://github.com/KaueQDias/projeto-ong.git](https://github.com/KaueQDias/projeto-ong.git)
    ```
2.  Navegue até a pasta:
    ```sh
    cd projeto-ong
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

### 6. Práticas de Acessibilidade (WCAG 2.1)

A acessibilidade foi um pilar central deste projeto:

* **Contraste de Cor:** Todas as combinações de texto e fundo (em modo claro e escuro) atendem ao nível AA (mínimo 4.5:1).
* **Navegação por Teclado:** Todo o site é navegável usando a tecla `Tab`. Elementos interativos (links, botões, inputs) possuem estados de `:focus` visíveis e claros.
* **Semântica:** O uso correto de tags HTML (`<main>`, `<nav>`, `<button>`, `aria-label`) garante a compatibilidade com leitores de tela.
* **Formulários Acessíveis:** Todos os campos de formulário estão associados a uma `<label>`, e os erros de validação são comunicados visualmente.

### 7. Práticas de Versionamento (Git)

O repositório (simulado) segue práticas profissionais de versionamento:

* **GitFlow:** Utilizamos um fluxo de trabalho baseado no GitFlow:
    * `main`: Contém o código de produção (releases estáveis).
    * `develop`: Branch principal de desenvolvimento, onde as *features* são integradas.
    * `feature/nome-da-feature`: Branches temporárias para novas funcionalidades (ex: `feature/modo-escuro`).
* **Commits Semânticos:** O histórico de commits segue o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para clareza:
    * `feat:` (Nova funcionalidade)
    * `fix:` (Correção de bug)
    * `docs:` (Mudanças na documentação)
    * `style:` (Ajustes de CSS)
    * `refactor:` (Refatoração de código)
    * `chore:` (Tarefas de build, config, etc.)
* **Releases:** O versionamento do projeto segue o [SemVer](https://semver.org/) (v1.0.0, v1.1.0, etc.), com *tags* e *releases* criadas no GitHub para marcar versões de produção.

### 8. Otimização para Produção

Embora este repositório contenha o código-fonte de desenvolvimento, o processo para *deploy* em produção envolveria:

* **Minificação:** Redução do tamanho dos arquivos `style.css` e `main.js` (e seus módulos) para um único arquivo minificado (`.min.css`, `.min.js`), removendo espaços em branco e comentários.
* **Compressão de Imagens:** Todas as imagens na pasta `/assets/images/` seriam otimizadas (ex: via TinyPNG ou ImageOptim) para reduzir o tempo de carregamento sem perda de qualidade perceptível.

### 9. Autor

Projeto desenvolvido por **Kauê Quinello Dias** como parte do desafio final da disciplina de Front-End.
