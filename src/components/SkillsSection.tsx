"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Technology = {
    src: string;
    alt: string;
};

type SkillGroup = {
    title: string;
    description: string;
    accent: string;
    technologies: Technology[];
};

const skillGroups: SkillGroup[] = [
    {
        title: "Front-end e Interfaces",
        description: "Interfaces responsivas, componentes reutilizáveis, integração com APIs e fluxos orientados às regras do produto.",
        accent: "from-accent-muted to-transparent",
        technologies: [
            { src: "/icons/skills/icons8-typescript-100.png", alt: "TypeScript" },
            { src: "/icons/skills/React.png", alt: "React" },
            { src: "/icons/skills/icons8-nextjs-100.png", alt: "Next.js" },
            { src: "/icons/skills/icons8-tailwind-css-100.png", alt: "Tailwind CSS" },
            { src: "/icons/skills/HTML5.png", alt: "HTML" },
            { src: "/icons/skills/CSS3.png", alt: "CSS" },
        ],
    },
    {
        title: "Back-end e APIs",
        description: "APIs REST, autenticação, validação de dados, regras de negócio e integração com bancos de dados.",
        accent: "from-accent-muted to-transparent",
        technologies: [
            { src: "/icons/skills/node-svgrepo-com.png", alt: "Node.js" },
            { src: "/icons/skills/icons8-nestjs-100.png", alt: "NestJS" },
            { src: "/icons/skills/icons8-java-240.png", alt: "Java" },
            { src: "/icons/skills/Spring.png", alt: "Spring Boot" },
            { src: "/icons/skills/icons8-python-240.png", alt: "Python" },
        ],
    },
    {
        title: "Bancos de Dados e Persistência",
        description: "Modelagem relacional, persistência, relacionamentos, migrations e integração com aplicações Full Stack.",
        accent: "from-accent-muted to-transparent",
        technologies: [
            { src: "/icons/skills/icons8-postgresql-240.png", alt: "PostgreSQL" },
            { src: "/icons/skills/icons8-prisma-orm-100.png", alt: "Prisma ORM" },
            { src: "/icons/skills/MySQL.png", alt: "MySQL" },
            { src: "/icons/skills/MongoDB.png", alt: "MongoDB" },
        ],
    },
    {
        title: "Testes, Qualidade e Ferramentas",
        description: "Testes automatizados, validação de APIs, versionamento, conteinerização e publicação de aplicações.",
        accent: "from-accent-muted to-transparent",
        technologies: [
            { src: "/icons/skills/icons8-git-240.png", alt: "Git" },
            { src: "/icons/skills/icons8-docker-240.png", alt: "Docker" },
            { src: "/icons/skills/icons8-jest-100.png", alt: "Jest" },
            { src: "/icons/skills/Postman.png", alt: "Postman" },
            { src: "/icons/skills/Visual Studio Code (VS Code).png", alt: "VS Code" },
            { src: "/icons/skills/linux_6124995.png", alt: "Linux" },
        ],
    },
];

export default function SkillsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-start px-6 py-16 sm:px-12 md:px-16 lg:min-h-[100vh] lg:px-24"
        >
            <h2 id="skills" className="mb-12 w-full scroll-mt-24 text-center text-3xl font-bold text-accent sm:scroll-mt-28">
                Skills
            </h2>

            <div className="grid w-full max-w-5xl overflow-hidden rounded-lg border border-border-default bg-surface/70 shadow-2xl shadow-[0_14px_34px_var(--shadow-purple)] backdrop-blur sm:grid-cols-2">
                {skillGroups.map((group, index) => (
                    <article
                        key={group.title}
                        className={[
                            "relative min-h-[230px] border-border-default p-6 sm:p-8",
                            index < 2 ? "border-b" : "",
                            index % 2 === 0 ? "sm:border-r" : "",
                        ].join(" ")}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${group.accent}`} />
                        <div className="relative flex h-full flex-col">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>
                            </div>

                            <div className="mt-auto flex flex-wrap gap-4">
                                {group.technologies.map((tech) => (
                                    <div
                                        key={tech.alt}
                                        role="img"
                                        aria-label={tech.alt}
                                        tabIndex={0}
                                        className="group flex h-14 w-14 items-center justify-center rounded-lg border border-border-default bg-background-secondary/70 p-2 shadow-lg shadow-[0_8px_22px_var(--shadow-purple)] transition duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-surface-hover focus-visible:-translate-y-1 focus-visible:border-border-hover focus-visible:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                        title={tech.alt}
                                    >
                                        <Image
                                            src={tech.src}
                                            alt={tech.alt}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-contain transition duration-300 group-hover:scale-110 group-focus-visible:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-12 flex w-full max-w-6xl flex-col items-center justify-center px-6 text-left sm:px-12 md:px-16">
                <h2 className="mb-4 w-full text-left text-2xl font-bold text-accent">
                    Front-end e Interfaces
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                    Desenvolvo interfaces web responsivas e reutilizáveis com <strong className="text-tech">React</strong>, <strong className="text-tech">Next.js</strong> e <strong className="text-tech">TypeScript</strong>, transformando demandas e regras de negócio em componentes e fluxos claros para o usuário.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    Minha experiência inclui formulários, filtros, tabelas, calendários, modais, indicadores, estados de carregamento e tratamento de erros. Também realizo integração com APIs REST, adaptação dos dados retornados pelo Back-end e refatoração de interfaces existentes.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                    Utilizo <strong className="text-tech">Tailwind CSS</strong>, <strong className="text-tech">shadcn/ui</strong> e <strong className="text-tech">Radix UI</strong> para manter consistência visual e reutilização de componentes. <strong className="text-tech">React Query</strong> e <strong className="text-tech">Axios</strong> apoiam o controle de cache, paginação e sincronização de dados, enquanto <strong className="text-tech">React Hook Form</strong> e <strong className="text-tech">Zod</strong> são utilizados na construção e validação de formulários.
                </p>

                <h2 className="mb-4 w-full text-left text-2xl font-bold text-accent">
                    Back-end e APIs
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                    Desenvolvo APIs REST e serviços Back-end principalmente com <strong className="text-tech">Node.js</strong>, <strong className="text-tech">NestJS</strong> e <strong className="text-tech">TypeScript</strong>, trabalhando com autenticação, autorização, validação de dados, regras de negócio e integração com bancos relacionais.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    Estruturo as aplicações utilizando módulos, controllers, services, DTOs, repositories e injeção de dependência, mantendo responsabilidades bem definidas e facilitando a evolução do código.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                    Também desenvolvi projetos com <strong className="text-tech">Java</strong> e <strong className="text-tech">Spring Boot</strong>, <strong className="text-tech">C#</strong> e <strong className="text-tech">ASP.NET Core</strong>, <strong className="text-tech">Python</strong> e <strong className="text-tech">Flask</strong>, além de <strong className="text-tech">Express</strong>. Essas tecnologias representam experiências complementares à minha atuação principal com TypeScript.
                </p>

                <h2 className="mb-4 w-full text-left text-2xl font-bold text-accent">
                    Bancos de Dados e Persistência
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                    Minha principal experiência com bancos de dados está concentrada no <strong className="text-tech">PostgreSQL</strong>, utilizado em aplicações profissionais e projetos Full Stack.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    Trabalho com modelagem relacional, entidades, relacionamentos, migrations, seed e integração entre persistência e APIs. Utilizo <strong className="text-tech">Prisma ORM</strong> e <strong className="text-tech">TypeORM</strong> em aplicações com Node.js e NestJS.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                    Também tive contato com <strong className="text-tech">Entity Framework</strong>, <strong className="text-tech">MySQL</strong>, <strong className="text-tech">MongoDB</strong> e <strong className="text-tech">Redis</strong> em projetos acadêmicos, pessoais ou estudos de arquitetura.
                </p>

                <h2 className="mb-4 w-full text-left text-2xl font-bold text-accent">
                    Testes, Qualidade e Ferramentas
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                    Desenvolvo e executo testes unitários e de integração para validar regras de negócio, services, endpoints, autenticação e respostas das APIs.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    Utilizo <strong className="text-tech">Jest</strong> e <strong className="text-tech">Supertest</strong> em aplicações com Node.js e NestJS, <strong className="text-tech">PyTest</strong> em projetos acadêmicos com Python e <strong className="text-tech">Postman</strong> para validação manual de endpoints, payloads e cenários de erro.
                </p>
                <p className="text-lg leading-relaxed">
                    Trabalho com <strong className="text-tech">Git</strong>, <strong className="text-tech">GitHub</strong> e <strong className="text-tech">GitLab</strong> para versionamento e colaboração, <strong className="text-tech">Docker</strong> e <strong className="text-tech">Docker Compose</strong> para padronização de ambientes e <strong className="text-tech">Vercel</strong>, <strong className="text-tech">Render</strong> e <strong className="text-tech">Neon</strong> para publicação de aplicações. Também utilizo <strong className="text-tech">ESLint</strong> e <strong className="text-tech">Prettier</strong> para manter consistência e legibilidade no código.
                </p>
            </div>
        </motion.section>
    );
}