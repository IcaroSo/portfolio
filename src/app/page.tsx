"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SkillsSection from "@/components/SkillsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-24">
      <motion.section
        id="home"
        initial={{ opacity: 0, y: -40 }}   // começa acima e invisível
        animate={{ opacity: 1, y: 0 }}     // desce até o lugar
        transition={{ duration: 1.4, ease: "easeOut" }} // bem devagar
        className="flex flex-col items-center justify-center min-h-[80vh] text-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 scroll-mt-24 sm:scroll-mt-28"
      >
        {/* flex-column até telas grandes */}
        <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row lg:justify-start lg:gap-16 lg:px-16">

          {/* FOTO */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-[linear-gradient(180deg,var(--primary-active)_0%,var(--surface)_100%)] shadow-[0_0_25px_var(--shadow-purple-strong)] animate-float">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-background px-4 py-1.5 opacity-70 ">
              <h2
                className="text-sm text-foreground font-bold tracking-wider drop-shadow-[0_0_6px_var(--text-glow)]"
                style={{ fontFamily: "var(--font-minecraft)" }}
              >
                Icru
              </h2>
            </div>

            <Image
              src="/images/icaro.png"
              alt="Foto de Ícaro Sousa"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* TEXTO */}
          <div className="mt-10 w-full max-w-2xl text-left lg:mt-0">
            <h1 className="text-3xl sm:text-3xl font-semibold mb-2 whitespace-nowrap">
              Olá, eu sou <span className="text-accent text-4xl sm:text-4xl">Ícaro Sousa</span>
            </h1>
            <h3 className="text-2xl sm:text-2xl mb-4 text-accent">
              Desenvolvedor Full Stack
            </h3>
            <div className="text-muted mb-8 text-base sm:text-lg space-y-2">
              <p>
                Desenvolvo aplicações web, interfaces e APIs, atuando entre Front-end e Back-end conforme as necessidades de cada produto.
              </p>
              <p>
                Sou estudante de Engenharia de Software e desenvolvo software desde 2024, combinando formação técnica, projetos acadêmicos, trabalhos freelancers e atuação profissional em aplicações reais e sistemas em produção.
              </p>
              <p>
                Minha atuação está concentrada em <strong className="text-tech">React</strong>, <strong className="text-tech">Next.js</strong>, <strong className="text-tech">TypeScript</strong>, <strong className="text-tech">Node.js</strong>, <strong className="text-tech">NestJS</strong> e <strong className="text-tech">PostgreSQL</strong>. Também possuo experiência com <strong className="text-tech">C#</strong>, <strong className="text-tech">ASP.NET Core</strong>, <strong className="text-tech">Java</strong>, <strong className="text-tech">Spring Boot</strong>, <strong className="text-tech">Docker</strong> e desenvolvimento de APIs REST.
              </p>
              <p>
                Trabalho desde a análise de demandas e regras de negócio até a implementação, integração, testes, refatoração e publicação das aplicações, buscando manter o código organizado, testável e fácil de evoluir.
              </p>
            </div>

            {/* ÍCONES */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <a
                className="px-4 py-4 text-foreground rounded-full border border-border-default transition
                          shadow-[0_10px_24px_var(--shadow-purple)]
                          bg-surface
                          hover:border-border-hover
                          hover:bg-surface-hover
                          hover:-translate-y-0.5"
                href="/ICARO_DE_SOUSA_RODRIGUES_CV.pdf"
                download="Icaro_Sousa_CV.pdf"
                title="Baixar Currículo"
              >
                <Image src="/icons/home/icons8-download-100.png" alt="Download CV" width={32} height={32} />
              </a>

              <a
                className="px-4 py-4 text-foreground rounded-full border border-border-default transition
                          shadow-[0_10px_24px_var(--shadow-purple)]
                          bg-surface
                          hover:border-border-hover
                          hover:bg-surface-hover
                          hover:-translate-y-0.5"
                href="https://github.com/IcaroSo"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Image src="/icons/home/github-mark-white.png" alt="GitHub" width={32} height={32} />
              </a>

              <a
                className="px-4 py-4 text-foreground rounded-full border border-border-default transition
                          shadow-[0_10px_24px_var(--shadow-purple)]
                          bg-surface
                          hover:border-border-hover
                          hover:bg-surface-hover
                          hover:-translate-y-0.5"
                href="https://linkedin.com/in/icrusousa"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Image src="/icons/home/InBug-White.png" alt="LinkedIn" width={32} height={32} />
              </a>

              <a
                className="px-4 py-4 text-foreground rounded-full border border-border-default transition
                          shadow-[0_10px_24px_var(--shadow-purple)]
                          bg-surface
                          hover:border-border-hover
                          hover:bg-surface-hover
                          hover:-translate-y-0.5"
                href="mailto:icarosa20rs@gmail.com"
                title="Enviar E-mail"
              >
                <Image src="/icons/home/icons8-gmail-250.png" alt="E-mail" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <hr className="border-border-default w-1/3 mx-auto" />
      <SkillsSection />
      <hr className="border-border-default w-1/3 mx-auto" />
      <ExperiencesSection />
      <hr className="border-border-default w-1/3 mx-auto" />
      <ProjectsSection />
    </div>
  );
}
