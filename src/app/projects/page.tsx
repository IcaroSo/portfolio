"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectsPage() {
  const count = projects.length;

  // ---- REGRAS DO USUÁRIO (tablet pra cima)
  const colsRule =
    count === 1 ? "1" :
    count === 2 ? "2" :
    count === 3 ? "3" :
    count === 4 ? "2" :
    "3";

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
        Projetos
      </h2>

      <div
        className={`
          grid gap-12 w-full max-w-7xl

          /* ✅ MOBILE SEMPRE 1 COLUNA */
          grid-cols-1

          /* ✅ TABLET PEQUENO (sm) */
          sm:grid-cols-${colsRule}

          /* ✅ TABLET MÉDIO (md) */
          md:grid-cols-${colsRule}

          /* ✅ DESKTOP (lg) */
          lg:grid-cols-${count >= 3 ? "3" : colsRule}
        `}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`
  group relative overflow-hidden rounded-2xl 
  bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
  shadow-[0_0_20px_#4E03E0]
  transition-all duration-300 ease-out
  cursor-pointer

  /* ✅ HOVER (desktop) */
  lg:hover:bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
  lg:hover:shadow-[0_0_35px_#4E03E0]
  lg:hover:scale-[1.04]
  lg:hover:-translate-y-2

  /* ✅ CLICK NO MOBILE (abre) */
  ${open ? "bg-[linear-gradient(135deg,#6C34E8,#4D20A1)] shadow-[0_0_35px_#4E03E0]" : ""}
`}
    >
      <div className="w-full h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={350}
          className={`
            object-cover w-full h-full transition-all duration-300

            /* Desktop hover */
            lg:group-hover:scale-110

            /* Mobile/tablet clique */
            ${open ? "scale-110" : "scale-100"}
          `}
        />
      </div>

      <h3 className="text-xl font-bold text-white p-4 pb-2">
        {project.title}
      </h3>

      {/* ✅ DESCRIÇÃO animada */}
      <p
        className={`
          text-gray-200 px-4 transition-all duration-300 overflow-hidden

          /* Desktop hover */
          lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-40

          /* Mobile/tablet clique */
          ${open ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
        `}
      >
        {project.description}
      </p>

      {/* ✅ BOTÃO animado */}
      <div
        className={`
          p-4 pt-2 transition-all duration-300 overflow-hidden

          /* Desktop hover */
          lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-20

          /* Mobile/tablet clique */
          ${open ? "opacity-100 max-h-20" : "opacity-0 max-h-0"}
        `}
      >
        <a
          href={project.link}
          target="_blank"
          className="
            inline-block px-4 py-2 rounded-lg
            bg-indigo-500 hover:bg-indigo-800
            text-white font-semibold
            shadow-[0_0_12px_#4E03E0]
            transition
          "
        >
          Ver mais
        </a>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "UNO Online",
    description:
      "Recriação do UNO usando React, Node.js e WebSockets para multiplayer em tempo real.",
    image: "/images/uno.jpeg",
    link: "https://github.com/IcaroSo/Uno-Game",
  },
  {
    title: "To-Do List em Java",
    description:
      "App de gerenciamento de tarefas utilizando MongoDB como banco de dados.",
    image: "/images/todo.jpg",
    link: "https://github.com/IcaroSo/ToDoApp/tree/develop",
  },
  {
    title: "Authentication API em C#",
    description:
      "API segura com ASP.NET, Entity Framework e BCrypt para gerenciamento de usuários.",
    image: "/images/authentication.jpg",
    link: "https://github.com/IcaroSo/AuthenticationAPI",
  },
  {
    title: "Portfolio",
    description:
      "API segura com ASP.NET, Entity Framework e BCrypt para gerenciamento de usuários.",
    image: "/images/portfolio.png",
    link: "https://github.com/IcaroSo/portfolio",
  },
];
