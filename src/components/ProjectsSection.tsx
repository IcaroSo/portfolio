"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const restrictedMessage =
    "Código-fonte e detalhes técnicos não estão disponíveis publicamente devido às restrições do projeto.";

export default function ProjectsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-6 sm:px-10 md:px-16 lg:px-24 py-16"
        >
            <h2 id="projects" className="text-3xl font-bold text-blue-400 mb-12 text-center scroll-mt-24 sm:scroll-mt-28">
                Projetos
            </h2>

            <div
                className="
          grid gap-10 w-full max-w-6xl
          grid-cols-1
          md:grid-cols-2
        "
            >
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </motion.section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="
        flex flex-col
        group relative overflow-hidden rounded-2xl 
        bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
        shadow-[0_0_20px_#4E03E0]
        transition-all duration-300 ease-out
        lg:hover:bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
        lg:hover:shadow-[0_0_35px_#4E03E0]
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
                    />
                ) : (
                    <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top_left,#6C34E8,transparent_38%),linear-gradient(135deg,#1a0648,#2A027A_48%,#04001b)] p-5">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                                {project.status}
                            </span>
                            <p className="mt-2 text-xl font-bold text-white">
                                {project.title}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-black/20 text-indigo-100 border border-indigo-300/30">
                        {project.category}
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-950/60 text-indigo-200 border border-indigo-700/50">
                        {project.status}
                    </span>
                    {project.repositoryUrl && (
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
                            Repositório público
                        </span>
                    )}
                    {project.isRestricted && (
                        <span
                            className="text-xs font-semibold px-2 py-1 rounded bg-indigo-900/50 text-indigo-300 border border-indigo-700/50"
                            title={restrictedMessage}
                        >
                            {project.restrictionLabel ?? "Projeto restrito"}
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold px-2 py-1 rounded bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-200 leading-relaxed mb-5 flex-grow">
                    {project.description}
                </p>

                {!project.repositoryUrl && project.isRestricted && (
                    <p className="text-xs text-indigo-100/90 leading-relaxed mb-5 rounded-lg border border-indigo-700/50 bg-black/20 px-3 py-2">
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
                                bg-indigo-500 hover:bg-indigo-600
                                text-white font-semibold text-sm
                                shadow-[0_0_12px_#4E03E0]
                                transition w-full text-center
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
        description: "Plataforma de Processamento de Imagens com IA para upload, processamento e organização de imagens, com acompanhamento do status das operações em tempo real. Atuei principalmente em Back-end e Arquitetura, contribuindo para a estrutura, separação de responsabilidades e organização técnica do projeto.",
        tags: ["Microsserviços", "WebSockets", "PostgreSQL", "Redis", "Mensageria", "CQRS", "EDA"],
        isRestricted: true,
    },
    {
        title: "Chatbot de Suporte ao Cliente com IA",
        category: "Projeto acadêmico de IA",
        status: "Concluído",
        description: "Chatbot especializado em suporte ao cliente, com API Flask e Flask-RESTX, interface Streamlit, Google Gemini, RAG com Chroma, histórico de conversas, validação de domínio, guardrails, avaliação de respostas e fallback local com Ollama e LLaVA.",
        tags: ["Python", "Flask", "Flask-RESTX", "Streamlit", "Gemini", "RAG", "Chroma", "PyTest"],
        isRestricted: true,
    },
    {
        title: "Qatu Marketplace",
        category: "Projeto acadêmico Full Stack",
        status: "Concluído",
        description: "Aplicação de e-commerce desenvolvida em equipe, com separação entre Front-end e Back-end e comunicação por API REST. O Front-end foi desenvolvido com React, Vite e Tailwind CSS, enquanto o Back-end utilizou Node.js e Express, com Docker para padronizar ambientes.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        imageAlt: "Imagem abstrata representando e-commerce",
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
        tags: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "JWT", "Jest", "Supertest"],
        isRestricted: true,
        restrictionLabel: "Projeto profissional restrito",
    },
    {
        title: "Gerenciador Web de Tarefas",
        category: "Projeto Full Stack",
        status: "Concluído",
        description: "Aplicação Full Stack para organização e acompanhamento de tarefas, com autenticação e separação dos dados por usuário. Possui API REST em C# e ASP.NET Core, persistência em PostgreSQL e interface em React para operações de CRUD.",
        image: "/images/todo.jpg",
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
        description: "API desenvolvida para cadastro, autenticação e autorização de usuários. Utiliza ASP.NET Core e Entity Framework, protege credenciais com BCrypt e realiza autorização das requisições por tokens JWT, separando responsabilidades de autenticação, persistência e validação.",
        image: "/images/authentication.jpg",
        imageAlt: "Imagem do projeto API de Autenticação e Controle de Acesso",
        tags: ["C#", "ASP.NET Core", "Entity Framework", "BCrypt", "JWT", "API REST"],
        repositoryUrl: "https://github.com/IcaroSo/AuthenticationAPI",
    },
];