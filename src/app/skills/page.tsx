"use client";

import { useRef, useEffect } from "react";
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
  { src: "/icons/skills/Visual Studio Code (VS Code).png", alt: "Visual Studio Code" },
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
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 w-full max-w-6xl">

        <div ref={boundsRef} className="flex-1 relative h-[450px] sm:h-[520px]">
          {techBubbles.map((tech, index) => (
            <Bubble key={index} tech={tech} boundsRef={boundsRef} />
          ))}
        </div>

        <div className="flex-1 text-left mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Skills</h2>
          <p className="leading-relaxed text-lg mb-8">
            Foco no desenvolvimento <strong className="text-blue-400">backend</strong> com experiência em
            <strong className="text-blue-400"> Java</strong>, <strong className="text-blue-400">C#</strong> e
            <strong className="text-blue-400"> Node.js</strong>, criando APIs robustas com
            <strong className="text-blue-400"> Spring Boot</strong> e <strong className="text-blue-400">.NET</strong>.
            <br /><br />
            Trabalho com bancos de dados
            <strong className="text-blue-400"> PostgreSQL</strong>,
            <strong className="text-blue-400"> MySQL</strong> e
            <strong className="text-blue-400"> MongoDB</strong>.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Tools <span className="text-white">&</span> Workflow
          </h2>
          <p className="leading-relaxed text-lg">
            Domino <strong className="text-blue-400">Docker</strong> e <strong className="text-blue-400">Docker Compose</strong>.
            Trabalho com <strong className="text-blue-400">Git</strong>, <strong className="text-blue-400">GitHub</strong> e
            <strong className="text-blue-400">GitLab</strong>, aplicando metodologias ágeis como
            <strong className="text-blue-400"> Scrum</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}

function Bubble({ tech, boundsRef }: any) {
  const controls = useAnimation();
  const bubbleSize = 80;
  const speedMultiplier = 0.03; // Velocidade mais lenta

  const velRef = useRef({
    vx: (Math.random() * 2 - 1) * speedMultiplier,
    vy: (Math.random() * 2 - 1) * speedMultiplier,
  });

  const isDraggingRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });

  // Inicializa posição
  useEffect(() => {
    if (!boundsRef.current) return;
    const rect = boundsRef.current.getBoundingClientRect();
    const startPos = randomStart(rect.width, rect.height, bubbleSize);
    positionRef.current = startPos;
    controls.set(startPos);
  }, [boundsRef, controls]);

  // Movimento contínuo com requestAnimationFrame
  useEffect(() => {
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
        controls.start({ x, y, transition: { duration: 0.05, ease: "linear" } });
      }

      frameId = requestAnimationFrame(animateBubble);
    };

    animateBubble();

    return () => cancelAnimationFrame(frameId);
  }, [boundsRef, controls]);

  return (
    <motion.div
      className="absolute w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing"
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

        // Velocidade suave e lenta após soltar
        velRef.current.vx = (info.velocity.x / 2000) || (Math.random() * 0.05 - 0.025);
        velRef.current.vy = (info.velocity.y / 2000) || (Math.random() * 0.05 - 0.025);
      }}
    >
      <img src={tech.src} alt={tech.alt} className="w-14 h-14 object-contain" />
    </motion.div>
  );
}
