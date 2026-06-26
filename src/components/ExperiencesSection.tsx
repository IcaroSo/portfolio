"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Experience = {
    title: string;
    role: string;
    period: string;
    description: string;
};
export default function ExperiencesSection() {
    const [currentProfessionalIndex, setCurrentProfessionalIndex] = useState(0);
    const currentProfessional = professionalExperiences[currentProfessionalIndex] ?? professionalExperiences[0];

    const goToPreviousExperience = () => {
        setCurrentProfessionalIndex((index) =>
            index === 0 ? professionalExperiences.length - 1 : index - 1
        );
    };

    const goToNextExperience = () => {
        setCurrentProfessionalIndex((index) =>
            index === professionalExperiences.length - 1 ? 0 : index + 1
        );
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center px-8 py-14 sm:px-12 sm:py-16 md:px-16 lg:px-24"
        >
            <h2 id="experiences" className="mb-8 w-full scroll-mt-24 text-center text-3xl font-bold text-accent sm:scroll-mt-28">
                Trajetória
            </h2>

            <div className="w-full max-w-6xl space-y-10">
                <div className="space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-left text-2xl font-bold text-accent-hover">
                            Profissional
                        </h3>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={goToPreviousExperience}
                                aria-label="Experiência profissional anterior"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-surface text-foreground shadow-[0_10px_24px_var(--shadow-purple)] transition hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>

                            <div className="flex min-w-24 items-center justify-center gap-2" aria-label="Experiências profissionais">
                                {professionalExperiences.map((exp, index) => (
                                    <button
                                        key={exp.title}
                                        type="button"
                                        onClick={() => setCurrentProfessionalIndex(index)}
                                        aria-label={`Mostrar experiência profissional ${index + 1}`}
                                        className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${currentProfessionalIndex === index ? "w-8 bg-accent" : "w-2.5 bg-accent-muted hover:bg-accent-hover"}`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={goToNextExperience}
                                aria-label="Próxima experiência profissional"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-surface text-foreground shadow-[0_10px_24px_var(--shadow-purple)] transition hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-visible">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={currentProfessional.title}
                                initial={{ opacity: 0, x: 32 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -32 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <ExperienceCard exp={currentProfessional} className="min-h-[330px]" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="space-y-5">
                    <h3 className="text-left text-2xl font-bold text-accent-hover">
                        Acadêmica
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {academicExperiences.map((exp) => (
                            <ExperienceCard key={exp.title} exp={exp} className="h-full" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 w-full max-w-6xl space-y-8">
                <h3 className="mb-4 text-center text-2xl font-bold text-accent-hover">
                    Cursos e Certificações
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((exp) => (
                        <ExperienceCard key={exp.title} exp={exp} compact />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function ExperienceCard({ exp, compact = false, className = "" }: { exp: Experience; compact?: boolean; className?: string }) {
    return (
        <div
            className={`
  ${compact ? "p-5" : "p-6"} rounded-2xl
  border border-border-default bg-[linear-gradient(135deg,var(--surface)_0%,var(--surface-elevated)_100%)]
  shadow-[0_14px_34px_var(--shadow-purple)]
  text-left
  transition-all duration-300 ease-out
  hover:bg-[linear-gradient(135deg,var(--surface-hover)_0%,var(--surface-hover-elevated)_100%)]
  hover:shadow-[0_18px_42px_var(--shadow-purple-strong)]
  hover:scale-[1.02]
  hover:-translate-y-1
  ${className}
`}
        >
            <h4 className={`${compact ? "text-base" : "text-xl"} mb-1 font-bold text-foreground`}>{exp.title}</h4>
            <h5 className={`${compact ? "text-xs" : "text-sm"} mb-3 font-semibold text-accent-hover`}>{exp.role} | {exp.period}</h5>
            <p className={`${compact ? "text-xs" : "text-sm"} whitespace-pre-line leading-relaxed text-muted`}>
                {exp.description}
            </p>
        </div>
    );
}
/* ===== DATA SEPARADA ===== */

const professionalExperiences: Experience[] = [
    {
        title: "PASS: Plataforma de Viagens Corporativas",
        role: "Desenvolvedor Front-end PJ",
        period: "Abr 2026 – Atual",
        description:
            "Atuo no desenvolvimento e na evolução de uma plataforma corporativa de viagens, contribuindo para novas funcionalidades e melhorias contínuas.\n\n• Analiso demandas e regras de negócio, transformando necessidades do produto em soluções de interface.\n• Desenvolvo interfaces com React, Next.js, TypeScript e Tailwind CSS.\n• Integro o Front-end com APIs REST, tratando carregamento, paginação, erros e sincronização de dados.\n• Refatoro componentes e fluxos para melhorar reutilização, manutenção e experiência do usuário.\n• Colaboro com a equipe na revisão de código, validação de funcionalidades e correção de inconsistências."
    },
    {
        title: "SARe: Sistema de Teleconsulta e Gestão de Enfermagem",
        role: "Desenvolvedor Full Stack Freelancer",
        period: "Mai 2026 – Jun 2026",
        description:
            "Atuei na evolução Full Stack de um sistema voltado para teleconsulta, acompanhamento de pacientes e gestão de processos de enfermagem.\n\n• Refatorei e ampliei um Front-end existente com React, Next.js, TypeScript e Tailwind CSS.\n• Desenvolvi uma API REST com NestJS, autenticação JWT, recuperação de senha e controle de acesso por perfis.\n• Modelei o PostgreSQL com Prisma ORM para avaliações, reavaliações, consultas, agendamentos e histórico de atendimento.\n• Implementei regras de negócio relacionadas aos fluxos de avaliação e reavaliação.\n• Desenvolvi testes unitários e de integração com Jest e Supertest.\n• Configurei a publicação do Front-end na Vercel, do Back-end no Render e do banco de dados no Neon."
    },
    {
        title: "Museu de Histórias",
        role: "Desenvolvedor Back-end Voluntário",
        period: "Jan 2026 – Jun 2026",
        description:
            "Atuei no desenvolvimento e na manutenção de uma API REST para gestão e disponibilização de informações de acervo.\n\n• Analisei rotas, payloads, validações, autenticação e regras de negócio.\n• Testei endpoints e integrações utilizando Postman.\n• Executei, analisei e apoiei a manutenção de testes automatizados com Jest.\n• Investiguei inconsistências em controllers, services, DTOs e entidades.\n• Contribuí com refatorações e revisão de código, apoiando a validação das correções e a prevenção de regressões."
    }
];

const academicExperiences: Experience[] = [
    {
        title: "Engenharia de Software",
        role: "Jala University",
        period: "Jan 2024 – Previsão Jan 2028",
        description:
            "Formação voltada ao desenvolvimento de software, arquitetura de sistemas, orientação a objetos, APIs, bancos de dados, testes, experiência do usuário e construção de aplicações em equipe.\n\nDestaque acadêmico: Dean's List — Term 1 e Term 2 de 2024 e Term 2 de 2025."
    },
    {
        title: "Análise e Desenvolvimento de Sistemas",
        role: "UNIASSELVI",
        period: "Jan 2026 – Previsão Jul 2028",
        description:
            "Formação complementar em algoritmos, estruturas de dados, orientação a objetos, bancos de dados, desenvolvimento web e análise de sistemas."
    }
];

const certificates: Experience[] = [
    {
        title: "JavaScript e TypeScript do Básico ao Avançado",
        role: "Udemy",
        period: "2026",
        description: "Formação em JavaScript, TypeScript, programação assíncrona, orientação a objetos, desenvolvimento web e construção de aplicações. (146 h)"
    },
    {
        title: "Programa Lighthouse — Ciclo Preparatório",
        role: "Indicium",
        period: "2026",
        description: "Programa voltado a fundamentos de dados, análise de problemas, raciocínio analítico e aplicação prática de conceitos relacionados a dados. (60 h)"
    },
    {
        title: "Desenvolvimento Web Completo",
        role: "Udemy",
        period: "2025",
        description: "Formação prática em desenvolvimento web, Front-end, Back-end, bancos de dados e construção de aplicações completas. (120 h)"
    },
    {
        title: "Docker para Desenvolvedores",
        role: "Udemy",
        period: "2025",
        description: "Estudo de conteinerização, criação e gerenciamento de imagens, Docker Compose, Docker Swarm e fundamentos de Kubernetes. (13,5 h)"
    },
    {
        title: "Java Completo",
        role: "Udemy",
        period: "2025",
        description: "Formação em Java, orientação a objetos, coleções, tratamento de exceções, persistência e desenvolvimento de projetos. (54,5 h)"
    },
    {
        title: "C# Completo",
        role: "Udemy",
        period: "2025",
        description: "Formação em C#, orientação a objetos, coleções, LINQ, tratamento de exceções e desenvolvimento de aplicações. (38 h)"
    }
];
