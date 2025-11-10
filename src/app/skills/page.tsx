"use client";

import { useRef, useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

const techBubbles = [
  { src: "/icons/skills/CSS3.png", alt: "Css" },
  { src: "/icons/skills/HTML5.png", alt: "Html" },
  { src: "/icons/skills/icons8-c-sharp-logo-240.png", alt: "C#" },
  { src: "/icons/skills/icons8-docker-240.png", alt: "Docker" },
  { src: "/icons/skills/icons8-git-240.png", alt: "Git" },
  { src: "/icons/skills/icons8-intellij-idea-240.png", alt: "Intellij" },
  { src: "/icons/skills/icons8-java-240.png", alt: "Java" },
  { src: "/icons/skills/icons8-javascript-240.png", alt: "Javascript" },
  { src: "/icons/skills/icons8-postgresql-240.png", alt: "Postgres" },
  { src: "/icons/skills/icons8-python-240.png", alt: "Python" },
  { src: "/icons/skills/linux_6124995.png", alt: "Linux" },
  { src: "/icons/skills/MongoDB.png", alt: "MongoDB" },
  { src: "/icons/skills/MySQL.png", alt: "MySQL" },
  { src: "/icons/skills/NET.png", alt: ".Net" },
  { src: "/icons/skills/node-svgrepo-com.png", alt: "Node.js" },
  { src: "/icons/skills/Postman.png", alt: "Postman" },
  { src: "/icons/skills/React.png", alt: "React.js" },
  { src: "/icons/skills/Spring.png", alt: "Spring boot" },
  { src: "/icons/skills/Visual Studio Code (VS Code).png", alt: "VS Code" },
  { src: "/icons/skills/Visual Studio.png", alt: "Visual Studio" },
  { src: "/icons/skills/Rider.png", alt: "Rider" },
];

function randomStart(width: number, height: number, bubbleSize: number) {
  return {
    x: Math.random() * (width - bubbleSize),
    y: Math.random() * (height - bubbleSize),
  };
}

export default function SkillsPage() {
  const boundsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-start min-h-[100vh] px-8 sm:px-12 md:px-16 lg:px-24 py-12"
    >
      {/* Área das bolhas */}
      <div
        ref={boundsRef}
        className="relative w-full min-h-[50vh] sm:min-h-[33vh] md:min-h-[35vh] lg:min-h-[38vh] xl:min-h-[40vh]"

      >
        {techBubbles.map((tech, index) => (
          <Bubble key={index} tech={tech} boundsRef={boundsRef} />
        ))}
      </div>

      {/* Descrição abaixo das bolhas */}
      <div className="flex flex-col items-center justify-center max-w-6xl px-6 sm:px-12 md:px-16 mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Backend & Desenvolvimento
        </h2>
        <p className="leading-relaxed text-lg mb-6">
          Especialista em criar APIs{" "}
          <strong className="text-indigo-400">robustas</strong> e{" "}
          <strong className="text-indigo-400">escaláveis</strong> usando{" "}
          <strong className="text-indigo-400">Java</strong>,{" "}
          <strong className="text-indigo-400">C#</strong> e{" "}
          <strong className="text-indigo-400">Node.js</strong>. Experiência
          prática com frameworks{" "}
          <strong className="text-indigo-400">Spring Boot</strong> e{" "}
          <strong className="text-indigo-400">.NET</strong>, garantindo
          desempenho, segurança e manutenção de alto nível.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Frontend & Desenvolvimento
        </h2>
        <p className="leading-relaxed text-lg mb-6">
          Atualmente aprimorando habilidades em{" "}
          <strong className="text-indigo-400">React.js</strong>,{" "}
          <strong className="text-indigo-400">JavaScript</strong>,{" "}
          <strong className="text-indigo-400">HTML</strong>,{" "}
          <strong className="text-indigo-400">CSS</strong> e{" "}
          <strong className="text-indigo-400">Tailwind CSS</strong> para criar
          interfaces modernas, responsivas e centradas no usuário.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-blue-500">Banco de Dados</h2>
        <p className="leading-relaxed text-lg mb-6">
          Gerencio e otimizo dados em{" "}
          <strong className="text-indigo-400">PostgreSQL</strong>,{" "}
          <strong className="text-indigo-400">MySQL</strong> e{" "}
          <strong className="text-indigo-400">MongoDB</strong>, criando soluções
          persistentes e eficientes para aplicações críticas.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Ferramentas & Workflow
        </h2>
        <p className="leading-relaxed text-lg">
          Experiência sólida com <strong className="text-indigo-400">Docker</strong>,{" "}
          <strong className="text-indigo-400">Docker Compose</strong> e
          versionamento de código com <strong className="text-indigo-400">Git</strong>,{" "}
          <strong className="text-indigo-400">GitHub</strong> e{" "}
          <strong className="text-indigo-400">GitLab</strong>. Atuação em equipes
          ágeis aplicando <strong className="text-indigo-400">Scrum</strong> para
          entregar soluções rápidas e de alta qualidade.
        </p>
      </div>
    </motion.section>
  );
}

function Bubble({ tech, boundsRef }: any) {
  const controls = useAnimation();

  const speedMultiplier = 0.03;
  const sizes = { mobile: 40, tablet: 50, desktop: 60 };

  const [bubbleSize, setBubbleSize] = useState<number | null>(null);

  const velRef = useRef({
    vx: (Math.random() * 2 - 1) * speedMultiplier,
    vy: (Math.random() * 2 - 1) * speedMultiplier,
  });
  const isDraggingRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });

  const getBubbleSize = () => {
    if (window.innerWidth < 640) return sizes.mobile;
    if (window.innerWidth < 1024) return sizes.tablet;
    return sizes.desktop;
  };

  // ✅ Define tamanho SOMENTE após mount
  useEffect(() => {
    const size = getBubbleSize();
    setBubbleSize(size);

    const handleResize = () => {
      const newSize = getBubbleSize();
      setBubbleSize(newSize);

      if (!boundsRef.current) return;
      const bounds = boundsRef.current.getBoundingClientRect();

      positionRef.current.x = Math.min(positionRef.current.x, bounds.width - newSize);
      positionRef.current.y = Math.min(positionRef.current.y, bounds.height - newSize);

      controls.set(positionRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Só inicia posição depois de ter tamanho
  useEffect(() => {
    if (!boundsRef.current || bubbleSize === null) return;

    const rect = boundsRef.current.getBoundingClientRect();
    positionRef.current = randomStart(rect.width, rect.height, bubbleSize);
    controls.set(positionRef.current);
  }, [boundsRef, controls, bubbleSize]);

  // ✅ Só anima depois que o tamanho estiver definido
  useEffect(() => {
    if (bubbleSize === null) return;

    let frameId: number;

    const animateBubble = () => {
      if (!boundsRef.current) {
        frameId = requestAnimationFrame(animateBubble);
        return;
      }

      if (!isDraggingRef.current) {
        const bounds = boundsRef.current.getBoundingClientRect();
        let { x, y } = positionRef.current;

        x += velRef.current.vx;
        y += velRef.current.vy;

        const maxX = bounds.width - bubbleSize;
        const maxY = bounds.height - bubbleSize;

        if (x < 0 || x > maxX) velRef.current.vx *= -1;
        if (y < 0 || y > maxY) velRef.current.vy *= -1;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        positionRef.current = { x, y };

        controls.start({
          x,
          y,
          transition: { duration: 0.05, ease: "linear" }
        });
      }

      frameId = requestAnimationFrame(animateBubble);
    };

    animateBubble();
    return () => cancelAnimationFrame(frameId);
  }, [bubbleSize]);

  if (bubbleSize === null) return null; // ✅ evita bolhas minúsculas no mount

  return (
    <motion.div
      className="absolute rounded-full shadow-[0_0_10px_rgba(78,3,224,0.6)] flex items-center justify-center cursor-grab active:cursor-grabbing"
      style={{
        width: bubbleSize,
        height: bubbleSize,
        background: "linear-gradient(135deg, #4E03E0, #2A027A)"
      }}
      drag
      dragConstraints={boundsRef}
      animate={controls}
      onDragStart={() => { isDraggingRef.current = true; }}
      onDragEnd={(_, info) => {
        isDraggingRef.current = false;
        const bounds = boundsRef.current!.getBoundingClientRect();
        const newX = info.point.x - bounds.left - bubbleSize / 2;
        const newY = info.point.y - bounds.top - bubbleSize / 2;

        positionRef.current = { x: newX, y: newY };
        controls.set({ x: newX, y: newY });

        velRef.current.vx = (info.velocity.x / 2000) || (Math.random() * 0.05 - 0.025);
        velRef.current.vy = (info.velocity.y / 2000) || (Math.random() * 0.05 - 0.025);
      }}
    >
      <img
        src={tech.src}
        alt={tech.alt}
        className="object-contain select-none pointer-events-none"
        style={{
          width: bubbleSize * 0.66,
          height: bubbleSize * 0.66
        }}
      />
    </motion.div>
  );
}

