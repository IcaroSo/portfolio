"use client";

import Image from "next/image";
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
                    <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-left border-b border-indigo-900/50 pb-2">
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
                    <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-left border-b border-indigo-900/50 pb-2">
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
            <div className="w-full max-w-6xl space-y-8 mt-4">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-center border-b border-indigo-900/50 pb-2">
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
        title: "Projeto Voluntário (Museu de Histórias)",
        role: "Desenvolvedor Backend",
        period: "Jan 2026 - Atual",
        description:
            "Atuação como desenvolvedor backend na construção e manutenção de sistema para gestão e disponibilização de informações do museu.\n\n• Desenvolvimento de APIs REST utilizando NestJS e TypeScript.\n• Implementação de testes automatizados com Jest, garantindo maior confiabilidade e manutenção do sistema."
    }
];

const academicExperiences = [
    {
        title: "Engenharia de Software",
        role: "Jala University",
        period: "Jan 2024 - Jan 2028",
        description:
            "Destaque Acadêmico: Dean’s List — Term 1 e Term 2 (2024), Term 2 (2025).\n\nPrincipais conteúdos: C#, Java, JavaScript/TypeScript, Spring Boot, .NET Core, Node.js, React e NestJS."
    },
    {
        title: "Análise e Desenvolvimento de Sistemas",
        role: "UNIASSELVI",
        period: "Jan 2026 - Jul 2028",
        description:
            "Principais conteúdos: Algoritmos, POO, Estrutura de Dados, Arquitetura de Sistemas, Desenvolvimento Fullstack e construção de APIs REST."
    }
];

const certificates = [
    {
        title: "C# Completo",
        role: "Udemy",
        period: "2025",
        description: "Programação Orientada a Objetos + Projetos (38h)"
    },
    {
        title: "Java Completo",
        role: "Udemy",
        period: "2025",
        description: "Programação Orientada a Objetos + Projetos (54.5h)"
    },
    {
        title: "Docker para Desenvolvedores",
        role: "Udemy",
        period: "2025",
        description: "Docker Swarm e Kubernetes (13.5h)"
    }
];
