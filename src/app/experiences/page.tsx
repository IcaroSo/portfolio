"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-8 sm:px-12 md:px-16 lg:px-24"
    >

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">

        {/* ===== COLUNA ACADÊMICOS ===== */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 text-left">
            Experiências Acadêmicas
          </h2>

          {academicExperiences.map((exp, idx) => (
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
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-gray-100 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== COLUNA PESSOAIS ===== */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 text-left">
            Experiências Pessoais
          </h2>

          {personalExperiences.map((exp, idx) => (
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
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-gray-100 leading-relaxed">
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

const academicExperiences = [
  {
    title: "Banco Desktop e Módulo de Transações Bancárias",
    description:
      "Sistema bancário desktop com JavaFX, Spring e PostgreSQL, estruturado pela arquitetura Onion. Funcionalidades incluem categorização de transações e automação de pagamentos recorrentes, priorizando código limpo e modularidade."
  },
  {
    title: "Space Invaders em C#",
    description:
      "Jogo interativo desenvolvido com WPF e LINQ para disciplina de Programação 3. Implementa lógica de colisão, animações e estrutura modular, promovendo aprendizagem de design orientado a objetos."
  },
  {
    title: "Fórum usando C#, Java e React",
    description:
      "Plataforma web colaborativa integrando duas APIs: Java para gerenciamento de usuários e autenticação, C# para publicações. Comunicação segura via JWT e frontend moderno em React."
  },
  {
    title: "UNO Online – React, Node.js e WebSockets",
    description:
      "Recriação do clássico jogo UNO com lógica em Node.js e interface em React + Vite. Suporte a multiplayer em tempo real via WebSockets, garantindo interatividade e responsividade."
  }
];

const personalExperiences = [
  {
    title: "API de Autenticação em C#",
    description:
      "API segura desenvolvida com ASP.NET, Entity Framework e BCrypt, gerenciando usuários, autenticação e permissões, seguindo boas práticas de segurança e arquitetura REST."
  },
  {
    title: "To-Do List em Java",
    description:
      "Aplicação de gerenciamento de tarefas com persistência em MongoDB. Foco em performance, armazenamento eficiente e design orientado a objetos."
  },
  {
    title: "Contador de Dedos (C# + Python + EMGU)",
    description:
      "Sistema de visão computacional que captura imagens da câmera, detecta e conta dedos usando EMGU e Python, com interface em WPF e lógica modular."
  },
  {
    title: "Contador de Moedas em Java",
    description:
      "Aplicativo que identifica moedas por cor e circunferência utilizando visão computacional, calculando automaticamente o valor total, reforçando habilidades em Java e processamento de imagens."
  }
];
