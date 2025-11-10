"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}   // começa acima e invisível
      animate={{ opacity: 1, y: 0 }}     // desce até o lugar
      transition={{ duration: 1.4, ease: "easeOut" }} // bem devagar
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-8 sm:px-12 md:px-16 lg:px-24"
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
            Fullstack developer
          </h3>
          <div className="text-gray-300 mb-8 text-base sm:text-lg space-y-2">
  <p>
    Desenvolvedor <strong className="text-indigo-400">Fullstack</strong> apaixonado por criar soluções digitais <strong className="text-indigo-400">escaláveis</strong> e de <strong className="text-indigo-400">alto desempenho</strong>.
  </p>
  <p>
    Experiência prática em <strong className="text-indigo-400">Java</strong>, <strong className="text-indigo-400">C#</strong>, <strong className="text-indigo-400">Spring Boot</strong>, <strong className="text-indigo-400">.NET</strong>, <strong className="text-indigo-400">JavaScript</strong> e <strong className="text-indigo-400">Node.js</strong>, com atuação em aplicações <strong className="text-indigo-400">desktop</strong> e plataformas <strong className="text-indigo-400">web integradas</strong>.
  </p>
  <p>
    Sempre focado em <strong className="text-indigo-400">qualidade de código</strong>, <strong className="text-indigo-400">boas práticas de engenharia</strong> e <strong className="text-indigo-400">experiências eficientes para o usuário</strong>.
  </p>
  <p>
    Busco contribuir com <strong className="text-indigo-400">projetos desafiadores</strong> enquanto continuo evoluindo minhas <strong className="text-indigo-400">habilidades técnicas</strong>.
  </p>
</div>


          {/* ÍCONES */}
          <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
            <a
              className="px-4 py-4 text-white rounded-full transition
                         shadow-[0_0_15px_#4E03E0]
                         bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                         hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]"
              href="https://github.com/IcaroSo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/home/github-mark-white.png" alt="GitHub" width={32} height={32} />
            </a>

            <a
              className="px-4 py-4 text-white rounded-full transition
                         shadow-[0_0_15px_#4E03E0]
                         bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                         hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]"
              href="https://linkedin.com/in/icrusousa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/home/InBug-White.png" alt="LinkedIn" width={32} height={32} />
            </a>

            <a
              className="px-4 py-4 text-white rounded-full transition
                         shadow-[0_0_15px_#4E03E0]
                         bg-[linear-gradient(135deg,#6C34E8,#4D20A1)]
                         hover:bg-[linear-gradient(135deg,#4E03E0,#2A027A)]"
              href="mailto:icarosa20rs@gmail.com"
            >
              <Image src="/icons/home/icons8-gmail-250.png" alt="E-mail" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
