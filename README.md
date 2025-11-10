# Portfólio — Ícaro Sousa

Site pessoal e portfólio desenvolvido com Next.js, Tailwind CSS e Framer Motion para apresentações de projetos, experiências e habilidades.

Principais arquivos
- Configuração do projeto: [package.json](package.json)
- Página inicial: [`Home`](src/app/page.tsx) ([src/app/page.tsx](src/app/page.tsx))
- Projetos: [`ProjectsPage`](src/app/projects/page.tsx) ([src/app/projects/page.tsx](src/app/projects/page.tsx))
- Habilidades: [`SkillsPage`](src/app/skills/page.tsx) ([src/app/skills/page.tsx](src/app/skills/page.tsx))
- Experiências: [`ExperiencePage`](src/app/experiences/page.tsx) ([src/app/experiences/page.tsx](src/app/experiences/page.tsx))
- Navbar: [`Navbar`](src/components/Navbar.tsx) ([src/components/Navbar.tsx](src/components/Navbar.tsx))
- Layout e estilos globais: [`RootLayout`](src/app/layout.tsx) ([src/app/layout.tsx](src/app/layout.tsx)) e [src/app/globals.css](src/app/globals.css)

Stack
- Next.js 16
- React 19
- Tailwind CSS
- Framer Motion
- TypeScript

Instalação e execução (desenvolvimento)
1. Instalar dependências:
   npm install
2. Rodar em modo dev:
   npm run dev
3. Build para produção:
   npm run build
4. Iniciar servidor de produção:
   npm run start

Estrutura resumida
- src/app — pages (Home, Projects, Skills, Experiences), layout e estilos
- src/components — componentes reutilizáveis (ex.: [`Navbar`](src/components/Navbar.tsx))
- public — imagens e ícones usados no site

Observações
- Imagens e ícones estão em `public/images` e `public/icons`.
- As páginas usam animações do `framer-motion` e estilos via Tailwind; ajuste em `src/app/globals.css`.
- Verifique as rotas em `src/app` para adicionar/editar conteúdo de cada seção.

Contribuição
- Abrir PRs com melhorias visuais, correções e novos projetos.
- Manter consistência de estilo e componentes reutilizáveis.

Licença
- Projeto pessoal. Ajuste conforme necessário para distribuição.