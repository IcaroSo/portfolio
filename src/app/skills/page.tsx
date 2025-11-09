"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const techBubbles = [
  { src: "/logos/java.png", alt: "Java" },
  { src: "/logos/csharp.png", alt: "C#" },
  { src: "/logos/node.png", alt: "Node.js" },
  { src: "/logos/spring.png", alt: "Spring Boot" },
  { src: "/logos/dotnet.png", alt: ".NET" },
  { src: "/logos/postgres.png", alt: "PostgreSQL" }
];

export default function SkillsPage() {
  const boundsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">

        {/* Lado Esquerdo */}
        <div className="flex-1 relative h-[450px] sm:h-[520px]" ref={boundsRef}>
          {techBubbles.map((tech, index) => (
            <motion.div
              key={index}
              className="absolute w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={boundsRef}
              initial={{
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150
              }}
              animate={{
                x: [
                  Math.random() * 300 - 150,
                  Math.random() * -300 + 150,
                  Math.random() * 300 - 150
                ],
                y: [
                  Math.random() * 300 - 150,
                  Math.random() * -300 + 150,
                  Math.random() * 300 - 150
                ]
              }}
              transition={{
                duration: 18 + Math.random() * 10, // 18 a 28 segundos (bem suave)
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            >
              <img src={tech.src} alt={tech.alt} className="w-14 h-14 object-contain" />
            </motion.div>
          ))}
        </div>

        {/* Lado Direito */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Skills</h2>
          <p className="leading-relaxed text-lg mb-8">
            Foco no desenvolvimento <strong className="text-blue-400">backend</strong>, com experiência em <strong className="text-blue-400">Java</strong>, <strong className="text-blue-400">C#</strong> e <strong className="text-blue-400">Node.js</strong>,
            criando APIs e serviços robustos com <strong className="text-blue-400">Spring Boot</strong> e <strong className="text-blue-400">.NET</strong>.
            <br /><br />
            Trabalho com bancos de dados <strong className="text-blue-400">PostgreSQL</strong>, <strong className="text-blue-400">MySQL</strong> e <strong className="text-blue-400">MongoDB</strong>.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Tools <span className="text-white">&</span> Workflow
          </h2>
          <p className="leading-relaxed text-lg">
            Domino <strong className="text-blue-400">Docker</strong> e <strong className="text-blue-400">Docker Compose</strong>,
            trabalho com <strong className="text-blue-400">Git</strong>, <strong className="text-blue-400">GitHub</strong> e <strong className="text-blue-400">GitLab</strong>,
            e aplico metodologias ágeis <strong className="text-blue-400">Scrum</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
