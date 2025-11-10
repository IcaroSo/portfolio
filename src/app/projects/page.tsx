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
        className="
          grid gap-12 w-full max-w-7xl
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-2
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
        group relative overflow-hidden rounded-2xl 
        bg-gradient-to-br from-[#4E03E0] to-[#2A027A]
        shadow-[0_0_20px_#4E03E0]
        transition-all duration-300 ease-out
        cursor-pointer
        lg:hover:bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
        lg:hover:shadow-[0_0_35px_#4E03E0]
        lg:hover:scale-[1.04]
        lg:hover:-translate-y-2
      "
    >
      <div className="w-full h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={350}
          className="object-cover w-full h-full transition-all duration-300 lg:group-hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-bold text-white p-4 pb-2">{project.title}</h3>

      <p className="
        text-gray-200 px-4 transition-all duration-300 overflow-hidden
        lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-40
      ">
        {project.description}
      </p>

      <div className="
        p-4 pt-2 transition-all duration-300 overflow-hidden
        lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-20
      ">
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
      "Recriação do clássico jogo UNO com multiplayer em tempo real, usando React para interface interativa, Node.js para lógica de jogo e WebSockets para comunicação eficiente entre jogadores.",
    image: "/images/uno.jpeg",
    link: "https://github.com/IcaroSo/Uno-Game",
  },
  {
    title: "To-Do List em Java",
    description:
      "Aplicação de gerenciamento de tarefas com persistência em MongoDB, focada em performance, organização de dados e experiência do usuário, utilizando boas práticas de programação orientada a objetos.",
    image: "/images/todo.jpg",
    link: "https://github.com/IcaroSo/ToDoApp/tree/develop",
  },
  {
    title: "Authentication API em C#",
    description:
      "API segura e escalável construída com ASP.NET, Entity Framework e BCrypt, permitindo autenticação, gerenciamento de usuários e permissões com foco em segurança e arquitetura limpa.",
    image: "/images/authentication.jpg",
    link: "https://github.com/IcaroSo/AuthenticationAPI",
  },
  {
    title: "Portfolio Pessoal",
    description:
      "Portfolio moderno e responsivo desenvolvido para apresentar projetos, habilidades e informações de contato, destacando competências em React, Tailwind CSS e design centrado no usuário.",
    image: "/images/portfolio.png",
    link: "https://github.com/IcaroSo/portfolio",
  },
];
