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
        className="flex flex-col items-center justify-center min-h-[80vh] text-center px-8 sm:px-12 md:px-16 lg:px-24 scroll-mt-24 sm:scroll-mt-28"
      >
        {/* flex-column até telas grandes */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">

          {/* FOTO */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-gradient-to-b from-indigo-700 to-blue-900 shadow-[0_0_25px_#4338ca] animate-float">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1.5 opacity-60 ">
              <h2
                className="text-sm text-white font-bold tracking-wider drop-shadow-[0_0_6px_#ffffff]"
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
          <div className="max-w-lg text-left mt-10 lg:mt-0">
            <h1 className="text-3xl sm:text-3xl font-semibold mb-2 whitespace-nowrap">
              Olá, eu sou <span className="text-indigo-800 text-4xl sm:text-4xl">Ícaro Sousa</span>
            </h1>
            <h3 className="text-2xl sm:text-2xl mb-4 text-blue-500">
              Desenvolvedor Full Stack
            </h3>
            <div className="text-gray-300 mb-8 text-base sm:text-lg space-y-2">
              <p>
                Desenvolvo aplicações web, interfaces e APIs, atuando entre Front-end e Back-end conforme as necessidades de cada produto.
              </p>
              <p>
                Sou estudante de Engenharia de Software e reúno cerca de três anos de experiência prática em desenvolvimento, combinando atuação profissional, projetos freelancers e projetos acadêmicos. Minha trajetória inclui sistemas corporativos, regras de negócio, integrações, autenticação, bancos de dados, testes e publicação de aplicações.
              </p>
              <p>
                Trabalho principalmente com <strong className="text-indigo-400">React</strong>, <strong className="text-indigo-400">Next.js</strong>, <strong className="text-indigo-400">TypeScript</strong>, <strong className="text-indigo-400">Node.js</strong>, <strong className="text-indigo-400">NestJS</strong> e <strong className="text-indigo-400">PostgreSQL</strong>. Também possuo experiência prática com <strong className="text-indigo-400">C#</strong>, <strong className="text-indigo-400">ASP.NET Core</strong>, <strong className="text-indigo-400">Java</strong>, <strong className="text-indigo-400">Spring Boot</strong>, <strong className="text-indigo-400">Docker</strong> e desenvolvimento de APIs REST.
              </p>
              <p>
                Busco construir soluções organizadas, testáveis e fáceis de manter, aplicando componentização, separação de responsabilidades, orientação a objetos e princípios SOLID de acordo com as necessidades de cada projeto.
              </p>
            </div>

            {/* ÍCONES */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <a
                className="px-4 py-4 text-white rounded-full transition
                          shadow-[0_0_15px_#4E03E0]
                          bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                          hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]
                          hover:scale-110"
                href="/ICARO_DE_SOUSA_RODRIGUES_CV.pdf"
                download="Icaro_Sousa_CV.pdf"
                title="Baixar Currículo"
              >
                <Image src="/icons/home/icons8-download-100.png" alt="Download CV" width={32} height={32} />
              </a>

              <a
                className="px-4 py-4 text-white rounded-full transition
                          shadow-[0_0_15px_#4E03E0]
                          bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                          hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]
                          hover:scale-110"
                href="https://github.com/IcaroSo"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Image src="/icons/home/github-mark-white.png" alt="GitHub" width={32} height={32} />
              </a>

              <a
                className="px-4 py-4 text-white rounded-full transition
                          shadow-[0_0_15px_#4E03E0]
                          bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                          hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]
                          hover:scale-110"
                href="https://linkedin.com/in/icrusousa"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Image src="/icons/home/InBug-White.png" alt="LinkedIn" width={32} height={32} />
              </a>

              <a
                className="px-4 py-4 text-white rounded-full transition
                          shadow-[0_0_15px_#4E03E0]
                          bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                          hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]
                          hover:scale-110"
                href="mailto:icarosa20rs@gmail.com"
                title="Enviar E-mail"
              >
                <Image src="/icons/home/icons8-gmail-250.png" alt="E-mail" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <hr className="border-indigo-900/50 w-1/3 mx-auto" />
      <SkillsSection />
      <hr className="border-indigo-900/50 w-1/3 mx-auto" />
      <ExperiencesSection />
      <hr className="border-indigo-900/50 w-1/3 mx-auto" />
      <ProjectsSection />
    </div>
  );
}
