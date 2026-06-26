"use client";

import { motion } from "framer-motion";

export default function ExperiencesSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center min-h-[80vh] px-8 sm:px-12 md:px-16 lg:px-24 py-16"
        >
            <h2 id="experiences" className="text-3xl font-bold text-blue-400 mb-12 text-center w-full scroll-mt-24 sm:scroll-mt-28">
                Trajetória
            </h2>

            {/* GRID PRINCIPAL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mb-12">

                {/* ===== COLUNA PROFISSIONAL ===== */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-left">
                        Profissional
                    </h3>

                    {professionalExperiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="
  p-6 rounded-2xl
  bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
  shadow-[0_0_15px_#4E03E0]
  text-left
  transition-all duration-300 ease-out

  /* ✅ HOVER ROXO IGUAL AO BOTÃO */
  hover:bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
  hover:shadow-[0_0_30px_#4E03E0]
  hover:scale-[1.03] 
  hover:-translate-y-2
"
                        >
                            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                            <h5 className="text-sm font-semibold text-indigo-300 mb-3">{exp.role} | {exp.period}</h5>
                            <p className="text-gray-200 leading-relaxed text-sm whitespace-pre-line">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ===== COLUNA ACADÊMICOS ===== */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-left">
                        Acadêmica
                    </h3>

                    {academicExperiences.map((exp, idx) => (
                        <div
                            key={`acad-${idx}`}
                            className="
  p-6 rounded-2xl
  bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
  shadow-[0_0_15px_#4E03E0]
  text-left
  transition-all duration-300 ease-out

  /* ✅ HOVER ROXO IGUAL AO BOTÃO */
  hover:bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
  hover:shadow-[0_0_30px_#4E03E0]
  hover:scale-[1.03] 
  hover:-translate-y-2
"
                        >
                            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                            <h5 className="text-sm font-semibold text-indigo-300 mb-3">{exp.role} | {exp.period}</h5>
                            <p className="text-gray-200 leading-relaxed text-sm whitespace-pre-line">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* ===== SESSÃO DE CERTIFICADOS (LARGURA TOTAL) ===== */}
            <div className="w-full max-w-6xl space-y-8">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-center">
                    Cursos e Certificações
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((exp, idx) => (
                        <div
                            key={`cert-${idx}`}
                            className="
  p-5 rounded-2xl
  bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
  shadow-[0_0_15px_#4E03E0]
  text-left
  transition-all duration-300 ease-out

  /* ✅ HOVER ROXO IGUAL AO BOTÃO */
  hover:bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
  hover:shadow-[0_0_30px_#4E03E0]
  hover:scale-[1.03] 
  hover:-translate-y-2
"
                        >
                            <h4 className="text-base font-bold text-white mb-1">{exp.title}</h4>
                            <h5 className="text-xs font-semibold text-indigo-300 mb-2">{exp.role} | {exp.period}</h5>
                            <p className="text-gray-200 leading-relaxed text-xs whitespace-pre-line">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

/* ===== DATA SEPARADA ===== */

const professionalExperiences = [
    {
        title: "PASS: Plataforma de Viagens Corporativas",
        role: "Desenvolvedor Front-end PJ",
        period: "Abr 2026 - Atual",
        description:
            "Atuo no desenvolvimento e na evolução de uma plataforma corporativa de viagens, contribuindo para novas funcionalidades e melhorias contínuas.\n\n• Analiso demandas e regras de negócio, transformando necessidades do produto em soluções de interface.\n• Desenvolvo aplicações com React, Next.js, TypeScript e Tailwind CSS.\n• Integro o Front-end com APIs REST, tratando carregamento, paginação, erros e sincronização de dados.\n• Refatoro componentes e fluxos para melhorar reutilização, manutenção e experiência do usuário.\n• Colaboro com a equipe na revisão de código, validação de funcionalidades e correção de inconsistências."
    },
    {
        title: "SARe: Sistema de Teleconsulta e Gestão de Enfermagem",
        role: "Desenvolvedor Full Stack Freelancer",
        period: "Mai 2026 - Jun 2026",
        description:
            "Atuei na evolução Full Stack de um sistema voltado para teleconsulta, acompanhamento de pacientes e gestão de processos de enfermagem.\n\n• Refatorei e ampliei um Front-end existente com React, Next.js, TypeScript e Tailwind CSS.\n• Desenvolvi uma API REST com NestJS, autenticação JWT, recuperação de senha e controle de acesso por perfis.\n• Modelei o PostgreSQL com Prisma ORM para avaliações, reavaliações, consultas, agendamentos e histórico de atendimento.\n• Implementei regras de negócio relacionadas aos fluxos de avaliação e reavaliação.\n• Desenvolvi testes com Jest e Supertest.\n• Configurei a publicação do Front-end na Vercel, do Back-end no Render e do banco de dados no Neon."
    },
    {
        title: "Museu de Histórias",
        role: "Desenvolvedor Back-end Voluntário",
        period: "Jan 2026 - Jun 2026",
        description:
            "Atuei no desenvolvimento e na manutenção de uma API REST para gestão e disponibilização de informações de acervo.\n\n• Analisei rotas, payloads, validações, autenticação e regras de negócio.\n• Testei endpoints e integrações utilizando Postman.\n• Executei, analisei e apoiei a manutenção de testes automatizados com Jest.\n• Investiguei inconsistências em controllers, services, DTOs e entidades.\n• Contribuí com refatorações, revisão de código, QA técnico e validação de correções."
    }
];

const academicExperiences = [
    {
        title: "Engenharia de Software",
        role: "Jala University",
        period: "Jan 2024 - Previsão Jan 2028",
        description:
            "Formação voltada ao desenvolvimento de software, arquitetura de sistemas, orientação a objetos, APIs, bancos de dados, testes, experiência do usuário e construção de aplicações em equipe.\n\nDestaque acadêmico: Dean's List — Term 1 e Term 2 de 2024 e Term 2 de 2025."
    },
    {
        title: "Análise e Desenvolvimento de Sistemas",
        role: "UNIASSELVI",
        period: "Jan 2026 - Previsão Jul 2028",
        description:
            "Formação complementar em algoritmos, estruturas de dados, orientação a objetos, bancos de dados, desenvolvimento web e análise de sistemas."
    }
];

const certificates = [
    {
        title: "JavaScript e TypeScript do Básico ao Avançado",
        role: "Udemy",
        period: "2026",
        description: "Formação em JavaScript, TypeScript, programação assíncrona, orientação a objetos, desenvolvimento web e construção de aplicações. (146h)"
    },
    {
        title: "Programa Lighthouse — Ciclo Preparatório",
        role: "Indicium",
        period: "2026",
        description: "Programa voltado a fundamentos de dados, análise de problemas, raciocínio analítico e aplicação prática de conceitos relacionados a dados. (60h)"
    },
    {
        title: "Desenvolvimento Web Completo",
        role: "Udemy",
        period: "2025",
        description: "Formação prática em desenvolvimento web, Front-end, Back-end, bancos de dados e construção de aplicações completas. (120h)"
    },
    {
        title: "Docker para Desenvolvedores",
        role: "Udemy",
        period: "2025",
        description: "Estudo de conteinerização, criação e gerenciamento de imagens, Docker Compose, Docker Swarm e fundamentos de Kubernetes. (13,5h)"
    },
    {
        title: "Java Completo",
        role: "Udemy",
        period: "2025",
        description: "Formação em Java, orientação a objetos, coleções, tratamento de exceções, persistência e desenvolvimento de projetos. (54,5h)"
    },
    {
        title: "C# Completo",
        role: "Udemy",
        period: "2025",
        description: "Formação em C#, orientação a objetos, coleções, LINQ, tratamento de exceções e desenvolvimento de aplicações. (38h)"
    },
    {
        title: "Dean's List",
        role: "Jala University",
        period: "2024 e 2025",
        description: "Reconhecimento acadêmico obtido no Term 1 e Term 2 de 2024 e no Term 2 de 2025."
    }
];