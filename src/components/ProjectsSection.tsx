"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
    title: string;
    category: string;
    status: string;
    description: string;
    image?: string;
    imageAlt?: string;
    repositoryUrl?: string;
    tags: string[];
    isRestricted?: boolean;
    restrictionLabel?: string;
}

const projectsPerPage = 2;

const restrictedMessage =
    "Código-fonte e detalhes técnicos não estão disponíveis publicamente devido às restrições do projeto.";

export default function ProjectsSection() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = currentPage * projectsPerPage;
    const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);
    const displayedStart = startIndex + 1;
    const displayedEnd = Math.min(startIndex + visibleProjects.length, projects.length);

    const goToPreviousPage = () => {
        setCurrentPage((page) => (page === 0 ? totalPages - 1 : page - 1));
    };

    const goToNextPage = () => {
        setCurrentPage((page) => (page === totalPages - 1 ? 0 : page + 1));
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24"
        >
            <h2 id="projects" className="mb-10 scroll-mt-24 text-center text-3xl font-bold text-accent sm:scroll-mt-28">
                Projetos
            </h2>

            <div className="w-full max-w-6xl">
                <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-center text-sm font-semibold text-muted sm:text-left">
                        {displayedStart}-{displayedEnd} de {projects.length}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={goToPreviousPage}
                            aria-label="Projetos anteriores"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-default bg-surface text-foreground shadow-[0_10px_24px_var(--shadow-purple)] transition hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>

                        <div className="flex min-w-24 items-center justify-center gap-2" aria-label="Páginas de projetos">
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <button
                                    key={pageIndex}
                                    type="button"
                                    onClick={() => setCurrentPage(pageIndex)}
                                    aria-label={`Ir para página ${pageIndex + 1} de projetos`}
                                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${currentPage === pageIndex ? "w-8 bg-accent" : "w-2.5 bg-accent-muted hover:bg-accent-hover"}`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={goToNextPage}
                            aria-label="Próximos projetos"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-default bg-surface text-foreground shadow-[0_10px_24px_var(--shadow-purple)] transition hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative -mx-4 overflow-visible px-4 py-6">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 48 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -48 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="grid w-full auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-2"
                        >
                            {visibleProjects.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="
        flex h-auto min-h-0 min-w-0 flex-col lg:h-[660px]
        group relative overflow-hidden rounded-2xl 
        border border-border-default bg-[linear-gradient(135deg,var(--surface)_0%,var(--surface-elevated)_100%)]
        shadow-[0_14px_34px_var(--shadow-purple)]
        transition-all duration-300 ease-out
        lg:hover:bg-[linear-gradient(135deg,var(--surface-hover)_0%,var(--surface-hover-elevated)_100%)]
        lg:hover:shadow-[0_18px_42px_var(--shadow-purple-strong)]
        lg:hover:scale-[1.04]
        lg:hover:-translate-y-2
      "
        >
            <div className="w-full h-48 overflow-hidden relative shrink-0">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        fill
                        className="object-cover transition-all duration-300 lg:group-hover:scale-110"
                        sizes="(max-width: 1023px) calc(100vw - 3rem), 544px"
                    />
                ) : (
                    <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top_left,var(--primary-muted),transparent_42%),linear-gradient(135deg,var(--surface),var(--surface-elevated)_52%,var(--background))] p-5">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                                {project.status}
                            </span>
                            <p className="mt-2 text-xl font-bold text-foreground">
                                {project.title}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-background/40 text-foreground border border-border-default">
                        {project.category}
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-accent-muted text-muted border border-border-default">
                        {project.status}
                    </span>
                    {project.repositoryUrl && (
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-accent-muted text-accent-hover border border-border-default">
                            Repositório público
                        </span>
                    )}
                    {project.isRestricted && (
                        <span
                            className="text-xs font-semibold px-2 py-1 rounded bg-accent-muted text-accent-hover border border-border-default"
                            title={restrictedMessage}
                        >
                            {project.restrictionLabel ?? "Projeto restrito"}
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold px-2 py-1 rounded bg-accent-muted text-accent-hover border border-border-default">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-5 flex-grow">
                    {project.description}
                </p>

                {!project.repositoryUrl && project.isRestricted && (
                    <p className="text-xs text-muted leading-relaxed mb-5 rounded-lg border border-border-default bg-background/40 px-3 py-2">
                        {restrictedMessage}
                    </p>
                )}

                {project.repositoryUrl && (
                    <div className="mt-auto">
                        <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-block px-5 py-2 rounded-lg
                                bg-accent hover:bg-accent-hover
                                text-foreground font-semibold text-sm
                                shadow-[0_10px_24px_var(--shadow-purple)]
                                transition w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
                            "
                        >
                            Ver código
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

const projects: Project[] = [
    {
        title: "PixPro",
        category: "Projeto acadêmico",
        status: "Concluído",
        description: "Plataforma de Processamento de Imagens com IA para upload, processamento e organização de imagens, com acompanhamento do status das operações em tempo real. Atuei principalmente em Back-end e Arquitetura, contribuindo para a definição da estrutura do sistema, separação de responsabilidades, integração entre componentes e organização técnica do projeto. A arquitetura foi planejada com microsserviços, comunicação assíncrona, mensageria, WebSockets, PostgreSQL, Redis, CQRS e EDA.",
        image: "/images/pixpro.png",
        imageAlt: "Imagem do projeto PixPro",
        tags: ["Microsserviços", "WebSockets", "PostgreSQL", "Redis", "Mensageria", "CQRS", "EDA"],
        isRestricted: true,
    },
    {
        title: "Chatbot de Suporte ao Cliente com IA",
        category: "Projeto acadêmico de IA",
        status: "Concluído",
        description: "Chatbot especializado em suporte ao cliente, desenvolvido com API em Flask e Flask-RESTX, interface em Streamlit e integração com Google Gemini. O projeto utiliza RAG com Chroma, histórico de conversas, validação de domínio, guardrails, avaliação de respostas e fallback local com Ollama e LLaVA. Também foram desenvolvidos testes unitários e de integração com PyTest.",
        image: "/images/Assistente.png",
        imageAlt: "Imagem do projeto Chatbot de Suporte ao Cliente com IA",
        tags: ["Python", "Flask", "Flask-RESTX", "Streamlit", "Gemini", "RAG", "Chroma", "PyTest"],
        isRestricted: true,
    },
    {
        title: "Qatu Marketplace",
        category: "Projeto acadêmico Full Stack",
        status: "Concluído",
        description: "Aplicação de e-commerce desenvolvida em equipe, com separação entre Front-end e Back-end e comunicação por API REST. O Front-end foi desenvolvido com React, Vite e Tailwind CSS, enquanto o Back-end utilizou Node.js e Express, com Docker para padronizar ambientes.",
        image: "/images/Bahiazon.png",
        imageAlt: "Imagem do projeto Qatu Marketplace",
        tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Docker", "API REST"],
        isRestricted: true,
    },
    {
        title: "Fórum de Microsserviços",
        category: "Projeto acadêmico de arquitetura distribuída",
        status: "Concluído",
        description: "Sistema acadêmico composto por duas APIs independentes, uma em Java com Spring Boot e outra em C# com ASP.NET Core, integradas a um único Front-end em React para exercitar separação de responsabilidades, contratos REST e comunicação entre serviços.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        imageAlt: "Imagem abstrata representando arquitetura distribuída",
        tags: ["Java", "Spring Boot", "C#", "ASP.NET Core", "React", "APIs REST"],
        isRestricted: true,
    },
    {
        title: "SARe",
        category: "Projeto profissional freelancer",
        status: "Concluído",
        description: "Sistema de Teleconsulta e Gestão de Enfermagem voltado à gestão de pacientes e acompanhamento de processos de enfermagem. Atuei na evolução Full Stack, refatorando um Front-end existente e desenvolvendo Back-end, banco de dados, integrações, autenticação, testes e publicação.",
        image: "/images/SARe.png",
        imageAlt: "Imagem do projeto SARe",
        tags: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "JWT", "Jest", "Supertest"],
        isRestricted: true,
        restrictionLabel: "Projeto profissional restrito",
    },
    {
        title: "Gerenciador Web de Tarefas",
        category: "Projeto Full Stack",
        status: "Concluído",
        description: "Aplicação Full Stack para organização e acompanhamento de tarefas, com autenticação e separação dos dados por usuário. Possui API REST em C# e ASP.NET Core, persistência em PostgreSQL e interface em React para operações de CRUD.",
        image: "/images/todo.webp",
        imageAlt: "Imagem do projeto Gerenciador Web de Tarefas",
        tags: ["C#", ".NET", "ASP.NET Core", "PostgreSQL", "React", "API REST", "CRUD"],
        repositoryUrl: "https://github.com/IcaroSo/ToDoApp/tree/develop",
    },
    {
        title: "UNO Online",
        category: "Aplicação em tempo real",
        status: "Concluído",
        description: "Jogo multiplayer inspirado em UNO, desenvolvido para aplicar comunicação bidirecional entre clientes e servidor. Utiliza Socket.IO e WebSockets para controlar eventos em tempo real, entrada de jogadores, estado da partida e sincronização de ações.",
        image: "/images/uno.jpeg",
        imageAlt: "Imagem do projeto UNO Online",
        tags: ["Node.js", "React", "Vite", "Socket.IO", "WebSockets", "Eventos em tempo real"],
        repositoryUrl: "https://github.com/IcaroSo/Uno-Game",
    },
    {
        title: "API de Autenticação e Controle de Acesso",
        category: "Projeto Back-end",
        status: "Concluído",
        description: "API REST desenvolvida para cadastro, autenticação e autorização de usuários. Utiliza ASP.NET Core e Entity Framework, protege credenciais com BCrypt e realiza autorização das requisições por tokens JWT, separando responsabilidades de autenticação, persistência e validação.",
        image: "/images/authentication.webp",
        imageAlt: "Imagem do projeto API de Autenticação e Controle de Acesso",
        tags: ["C#", "ASP.NET Core", "Entity Framework", "BCrypt", "JWT", "API REST"],
        repositoryUrl: "https://github.com/IcaroSo/AuthenticationAPI",
    },
];