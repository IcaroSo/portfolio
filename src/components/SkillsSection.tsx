"use client";

import { useRef, useEffect, useState, type RefObject } from "react";

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
type TechBubble = {
    src: string;
    alt: string;
};

function randomVelocity(speedMultiplier: number) {
    return {
        vx: (Math.random() * 2 - 1) * speedMultiplier,
        vy: (Math.random() * 2 - 1) * speedMultiplier,
    };
}

function randomStart(width: number, height: number, bubbleSize: number) {
    return {
        x: Math.random() * (width - bubbleSize),
        y: Math.random() * (height - bubbleSize),
    };
}

export default function SkillsSection() {
    const boundsRef = useRef<HTMLDivElement>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-start min-h-[100vh] px-8 sm:px-12 md:px-16 lg:px-24 py-16"
        >
            <h2 id="skills" className="text-3xl font-bold text-blue-400 mb-12 text-center w-full scroll-mt-24 sm:scroll-mt-28">
                Skills
            </h2>

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
                    Front-end e Interfaces
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                    Desenvolvimento de interfaces web responsivas, reutilizáveis e integradas a APIs. Trabalho com <strong className="text-indigo-400">React</strong>, <strong className="text-indigo-400">Next.js</strong> e <strong className="text-indigo-400">TypeScript</strong> na construção de componentes, formulários, filtros, tabelas, modais, estados de carregamento e fluxos orientados às regras do produto.
                </p>
                <p className="leading-relaxed text-lg mb-6">
                    Também utilizo <strong className="text-indigo-400">Tailwind CSS</strong>, <strong className="text-indigo-400">shadcn/ui</strong>, <strong className="text-indigo-400">Radix UI</strong>, <strong className="text-indigo-400">React Query</strong>, <strong className="text-indigo-400">Axios</strong>, <strong className="text-indigo-400">Zustand</strong>, <strong className="text-indigo-400">React Hook Form</strong> e <strong className="text-indigo-400">Zod</strong> para organizar a interface, controlar estados, validar dados e manter consistência visual.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-blue-500">
                    Back-end e APIs
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                    Desenvolvimento e manutenção de APIs REST, autenticação, autorização, validação de dados e implementação de regras de negócio.
                </p>
                <p className="leading-relaxed text-lg mb-6">
                    Minha atuação principal utiliza <strong className="text-indigo-400">Node.js</strong>, <strong className="text-indigo-400">NestJS</strong> e <strong className="text-indigo-400">TypeScript</strong>. Também desenvolvi projetos com <strong className="text-indigo-400">C#</strong>, <strong className="text-indigo-400">ASP.NET Core</strong>, <strong className="text-indigo-400">Java</strong>, <strong className="text-indigo-400">Spring Boot</strong> e <strong className="text-indigo-400">Express</strong>, aplicando arquitetura em camadas, injeção de dependência, DTOs, services, repositories e separação de responsabilidades.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-blue-500">
                    Bancos de Dados e Persistência
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                    Modelagem e integração de bancos relacionais com foco em <strong className="text-indigo-400">PostgreSQL</strong>, incluindo criação de entidades, relacionamentos, migrations, seed e persistência de dados.
                </p>
                <p className="leading-relaxed text-lg mb-6">
                    Possuo experiência com <strong className="text-indigo-400">Prisma ORM</strong>, <strong className="text-indigo-400">TypeORM</strong> e <strong className="text-indigo-400">Entity Framework</strong>, além de conhecimentos complementares em <strong className="text-indigo-400">MySQL</strong>, <strong className="text-indigo-400">MongoDB</strong> e <strong className="text-indigo-400">Redis</strong> em contextos acadêmicos e arquiteturas planejadas.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-blue-500">
                    Testes, Qualidade e Entrega
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                    Implementação e execução de testes unitários e de integração com <strong className="text-indigo-400">Jest</strong>, <strong className="text-indigo-400">Supertest</strong> e <strong className="text-indigo-400">PyTest</strong>, além de validação manual de APIs com <strong className="text-indigo-400">Postman</strong>.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                    Trabalho com <strong className="text-indigo-400">Git</strong>, <strong className="text-indigo-400">GitHub</strong> e <strong className="text-indigo-400">GitLab</strong> para versionamento e colaboração, <strong className="text-indigo-400">Docker</strong> e <strong className="text-indigo-400">Docker Compose</strong> para padronização de ambientes e plataformas como <strong className="text-indigo-400">Vercel</strong>, <strong className="text-indigo-400">Render</strong> e <strong className="text-indigo-400">Neon</strong> para publicação de aplicações.
                </p>
                <p className="leading-relaxed text-lg">
                    Também utilizo <strong className="text-indigo-400">ESLint</strong> e <strong className="text-indigo-400">Prettier</strong> para manter consistência, legibilidade e qualidade no código.
                </p>

            </div>        </motion.section>
    );
}

function Bubble({ tech, boundsRef }: { tech: TechBubble; boundsRef: RefObject<HTMLDivElement | null> }) {
    const controls = useAnimation();

    const speedMultiplier = 0.03;
    const sizes = { mobile: 40, tablet: 50, desktop: 60 };

    const [bubbleSize, setBubbleSize] = useState<number | null>(null);

    const velRef = useRef({ vx: 0, vy: 0 });
    const isDraggingRef = useRef(false);
    const positionRef = useRef({ x: 0, y: 0 });
    const bubbleRef = useRef<HTMLDivElement>(null);

    const getBubbleSize = () => {
        if (window.innerWidth < 640) return sizes.mobile;
        if (window.innerWidth < 1024) return sizes.tablet;
        return sizes.desktop;
    };

    // ✅ Define tamanho SOMENTE após mount
    useEffect(() => {
        const size = getBubbleSize();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBubbleSize(size);
        velRef.current = randomVelocity(speedMultiplier);

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
            ref={bubbleRef}
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

                if (!boundsRef.current || !bubbleRef.current) return;

                const bounds = boundsRef.current.getBoundingClientRect();
                const bubbleRect = bubbleRef.current.getBoundingClientRect();

                const maxX = bounds.width - bubbleSize;
                const maxY = bounds.height - bubbleSize;

                // Captura exatamente onde o elemento parou na tela em relação ao container pai
                let newX = bubbleRect.left - bounds.left;
                let newY = bubbleRect.top - bounds.top;

                // Garante que a bolha não saia da tela ao soltar
                newX = Math.max(0, Math.min(newX, maxX));
                newY = Math.max(0, Math.min(newY, maxY));

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
