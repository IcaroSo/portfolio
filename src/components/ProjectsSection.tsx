"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    image: string;
    link?: string;
    tags: string[];
}

export default function ProjectsSection() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-6 sm:px-10 md:px-16 lg:px-24 py-16"
        >
            <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
                Projetos
            </h2>

            <div
                className="
          grid gap-12 w-full max-w-7xl
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
        "
            >
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
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
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-300 lg:group-hover:scale-110"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-200 leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                {project.link && (
                    <div className="mt-auto">
                        <a
                            href={project.link}
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
                            Ver Repositório
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

const projects: Project[] = [
    {
        title: "Qatu Marketplace",
        description: "Desenvolvimento fullstack de um e-commerce em equipe para o ambiente de produção. Arquitetura robusta utilizando separação de contextos entre front e back, implementando conteinerização para deploy ágil e padronização de ambientes de desenvolvimento.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        tags: ["Node.js", "Express", "React", "Docker", "TailwindCSS"],
    },
    {
        title: "Fórum de Microsserviços",
        description: "Projeto distribuído construído para simular um cenário de alta disponibilidade. Arquitetado com duas APIs REST independentes integrando a um único front-end desacoplado. Garante comunicação e padronização entre domínios distintos de aplicação.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        tags: ["Java", "Spring Boot", "C#", "ASP.NET Core", "React"],
    },
    {
        title: "API Museu de Histórias",
        description: "Sistema para gestão e disponibilização de informações de acervo para museu mantido através de um projeto voluntário. Foco extremo na qualidade do software, implementando arquitetura TypeScript consistente e testes automatizados que garantem cobertura e resiliência na API REST.",
        image: "https://images.unsplash.com/photo-1565153907400-7e01a9ab25f3?auto=format&fit=crop&q=80&w=800",
        tags: ["NestJS", "TypeScript", "Jest", "TDD", "REST"],
    },
    {
        title: "Authentication API Seguro",
        description: "Solução de segurança backend focada em controle de acessos corporativos. Implementa padrões de arquitetura limpa com ASP.NET e Entity Framework, e encriptação forte de credenciais e permissões utilizando o algoritmo BCrypt mantendo rastreabilidade rigorosa de dados.",
        image: "/images/authentication.jpg",
        tags: ["C#", "ASP.NET Core", "Entity Framework", "BCrypt", "JWT"],
        link: "https://github.com/IcaroSo/AuthenticationAPI",
    },
    {
        title: "Gerenciador Web Tasks",
        description: "Plataforma de gerenciamento produtivo completa com C# e banco de dados relacional. Suporta operações de CRUD avaçadas, persistência em PostgreSQL e integra uma API bem estruturada de autenticação de usuários para isolar listas de tarefas eficientemente.",
        image: "/images/todo.jpg",
        tags: ["C#", ".NET Core", "PostgreSQL", "React", "REST"],
        link: "https://github.com/IcaroSo/ToDoApp/tree/develop",
    },
    {
        title: "UNO Online WebSockets",
        description: "Recriação do jogo clássico implementando multiplayer em tempo real. Foco central na performance e comunicação de baixíssima latência via web, utilizando fluxos controlados de WebSockets para sincronizar lógicas transacionais do jogo de forma bidirecional instântanea.",
        image: "/images/uno.jpeg",
        tags: ["Node.js", "WebSockets", "React", "Vite", "Socket.io"],
        link: "https://github.com/IcaroSo/Uno-Game",
    },
];
