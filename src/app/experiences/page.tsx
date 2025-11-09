"use client";

import Image from "next/image";

export default function ExperiencePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 sm:px-12 md:px-16 lg:px-24">

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">

        {/* ===== COLUNA ACADÊMICOS ===== */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 text-left">
            Experiencias Acadêmicos
          </h2>

          {academicExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="
                p-6 rounded-2xl
                bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
                shadow-[0_0_20px_#4E03E0]
                text-left
                transition-all duration-300 ease-out
                hover:scale-[1.03] hover:-translate-y-2
                hover:shadow-[0_0_35px_#4E03E0]
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
            Experiencias Pessoais
          </h2>

          {personalExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="
                p-6 rounded-2xl
                bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
                shadow-[0_0_20px_#4E03E0]
                text-left
                transition-all duration-300 ease-out
                hover:scale-[1.03] hover:-translate-y-2
                hover:shadow-[0_0_35px_#4E03E0]
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
    </section>
  );
}

/* ===== DATA SEPARADA ===== */

const academicExperiences = [
  {
    title: "Banco Desktop e Módulo de Transações Bancárias",
    description:
      "Aplicação bancária com JavaFX, Spring e PostgreSQL, usando arquitetura Onion. Inclui categorização de transações e automação de pagamentos recorrentes."
  },
  {
    title: "Space Invaders em C#",
    description:
      "Jogo desenvolvido com WPF e LINQ para disciplina de Programação 3, contendo lógica de colisão, animações e estrutura modular."
  },
  {
    title: "Fórum usando C#, Java e React",
    description:
      "Plataforma colaborativa com duas APIs (Java para login, C# para publicações). Integração via JWT e frontend React."
  },
  {
    title: "UNO Online – React, Node.js e WebSockets",
    description:
      "Recriação do UNO com lógica no Node.js, interface em React + Vite e multiplayer em tempo real via WebSockets."
  }
];

const personalExperiences = [
  {
    title: "API de Autenticação em C#",
    description:
      "API desenvolvida com Entity Framework, ASP.NET e BCrypt para autenticação segura e gerenciamento de permissões."
  },
  {
    title: "To-Do List em Java",
    description:
      "Aplicação de tarefas utilizando MongoDB, com foco em persistência leve e rápida."
  },
  {
    title: "Contador de Dedos (C# + Python + EMGU)",
    description:
      "Sistema que detecta dedos via câmera usando EMGU e Python, com interface em WPF."
  },
  {
    title: "Contador de Moedas em Java",
    description:
      "Aplicação que identifica moedas por cor e circunferência usando visão computacional, calculando automaticamente o valor final."
  }
];
