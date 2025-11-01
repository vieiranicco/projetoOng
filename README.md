# 🚀 Projeto Unit - Plataforma de Gestão para ONGs

Este repositório contém o código-fonte *front-end* do **Projeto Unit**, uma plataforma web desenvolvida como projeto acadêmico. A solução simula um sistema completo para conectar ONGs, voluntários e doadores, com foco na criação de interfaces de usuário (UI) modernas, responsivas e funcionais, baseadas em protótipos de alta fidelidade (Figma).

---

## 📖 Índice

- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Instalação e Execução](#-instalação-e-execução)
- [Screenshots das Telas](#-screenshots-das-telas)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 📝 Visão Geral do Projeto

O objetivo central deste projeto é traduzir um design complexo e multifacetado, originalmente criado no Figma, em um website estático funcional, utilizando apenas as tecnologias fundamentais do *front-end*: **HTML5, CSS3 e JavaScript (ES6+)**.

O projeto abrange a criação de várias páginas-chave, desde a *landing page* pública até painéis de controle de usuário (dashboards) privados, demonstrando competência no uso de layouts flexíveis, manipulação do DOM e integração de bibliotecas de terceiros.

---

## ✨ Funcionalidades Implementadas

### 1. Páginas Públicas

- **Homepage (`index.html`):**
  - Secção "Hero" com *call-to-action*.
  - Carrossel de "Causas" (integrado com Swiper.js).
  - Secção "Missão, Visão e Valores" em layout de 3 colunas.
  - Lista de "Últimas Notícias" em *cards*.
  - Formulário de Contato em duas colunas.
  - Carrossel de "Empresas Parceiras" com *autoplay* contínuo.
  - Secção de Newsletter com design gráfico customizado.
- **Página "Quem Somos":** Página estática com formatação semântica.
- **Página "Projetos":** Layout de listagem com paginação.
- **Página "Detalhe do Projeto":** Layout de artigo com *sidebar*.

### 2. Páginas de Autenticação

- **Login (`login.html`):** Layout *split-screen* (50/50) com imagem gráfica e formulário.
- **Cadastro (`cadastro.html`):** Layout similar com formulário validado e termos de uso.

### 3. Painéis (Dashboards)

- **Painel do Voluntário:**
  - Sidebar fixa e *cards* de estatísticas.
- **Painel do Administrador:**
  - Múltiplos *cards* e widget de “Últimos Doadores”.
- **Componente de Calendário (JavaScript):**
  - Geração dinâmica via `main.js` com destaque do dia atual.

---

## 💻 Tecnologias Utilizadas

- **HTML5:** Tags semânticas para estruturação.
- **CSS3:**
  - Flexbox e Grid para layout responsivo.
  - Transições e efeitos *hover*.
- **JavaScript (ES6+):**
  - Manipulação do DOM e lógica de calendário.
  - Integração com Swiper.js.
- **Bibliotecas:**
  - Swiper.js (carrosséis)
  - Google Fonts (Sora)
- **Ferramentas:**
  - Figma (protótipo)
  - VS Code + Live Server

---

## 📂 Estrutura de Arquivos

```bash
/projeto-ong/
│
├── index.html
├── quem-somos.html
├── projetos.html
├── projeto-detalhe.html
├── login.html
├── cadastro.html
├── dashboard-voluntario.html
├── dashboard-admin.html
├── blog.html
├── blog-post.html
│
├── style.css
├── main.js
│
├── /images/
│   ├── Vector.png
│   ├── user.png
│   └── ...
└── /screenshots/
    ├── Desktop - 1.jpg
    ├── image_8cc806.png
    ├── image_8e99df.png
    └── image_8efc31.png
```

---

## 🛠️ Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone [Repositório GitHub](https://github.com/vieiranicco/projetoOng)
   ```
2. **Entre na pasta:**
   ```bash
   cd projeto-ong
   ```
3. **Abra com Live Server (VS Code):**
   - Clique com o botão direito em `index.html` → **"Open with Live Server"**
   - O site será aberto em `http://127.0.0.1:5500`

---

## 📸 Screenshots das Telas

| **Homepage** | **Sobre** |
| ![Homepage](screenShots\screenshot_homepage.png) | ![Sobre](screenShots\screenshot_sobre.png) |
| **Blog** | **Post** |
| ![Blog](screenShots\screenshot_blog.png) | ![Post Blog](screenShots\screenshot_postBlog.png) |
| **Projetos** | **Projeto-Tech** |
| ![Projetos](screenShots\screenshot_projetos.png) | ![Projeto-Tech](screenShots\screenshot_projetoTech.png) |
| **Login** | **Cadastro** |
| ![Login](screenShots\screenshot_login.png) | ![Cadastro](screenShots\screenshot_cadastro.png) |
| **Dashboard Voluntario** | **Dashboard Admin** |
| ![Dashboard Voluntario](screenShots\screenshot_dashboardVoluntario.png) | ![Dashboard Admin](screenShots\screenshot_dashboardAdmin.png) |

---

## 🤝 Contribuição

1. Faça um **Fork**.
2. Crie uma **branch**: `git checkout -b feature/nova-feature`
3. Faça **commit**: `git commit -m 'Adiciona nova feature'`
4. **Push**: `git push origin feature/nova-feature`
5. Abra um **Pull Request**.

---

## 📜 Licença

Distribuído sob a licença **MIT**.

---

## 👨‍💻 Autor

Desenvolvido por **Nicollas Vieira**  
Parte da avaliação acadêmica da disciplina **Desenvolvimento Front-End** na **Universidade Cruzeiro do Sul**.

- **LinkedIn:** [Link-LinkedIn](https://www.linkedin.com/in/nicollas-guimaraes-vieira/)
- **GitHub:** [Link-GitHub](https://github.com/vieiranicco)
