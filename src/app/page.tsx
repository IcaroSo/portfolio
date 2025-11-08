import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* FOTO */}
        <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gradient-to-b from-indigo-700 to-blue-900 shadow-[0_0_25px_#4338ca] animate-float">
          {/* Nome sobre a foto */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1.5 opacity-60 rounded-md">
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
        <div className="max-w-lg text-left">
          <h1 className="text-5xl font-semibold mb-2 whitespace-nowrap">
            Olá, eu sou <span className="text-indigo-800">Ícaro Sousa</span>
          </h1>
          <h3 className="text-3xl mb-4 text-blue-500">
            Fullstack developer
          </h3>
          <p className="text-gray-300 mb-8">
            Sou desenvolvedor fullstack apaixonado por criar experiências digitais modernas,
            acessíveis e eficientes, combinando design e tecnologia.
          </p>

          {/* ÍCONES */}
          <div className="flex items-center gap-12">
  <a 
    className="ml-4 px-4 py-4 bg-indigo-500 hover:bg-indigo-900 text-white rounded-full shadow-[0_0_15px_#4E03E0] transition"
    href="https://github.com/seuusuario"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src="/icons/home/github-mark-white.png" alt="GitHub" width={32} height={32} />
  </a>
  <a
    className="ml-4 px-4 py-4 bg-indigo-500 hover:bg-indigo-900 text-white rounded-full shadow-[0_0_15px_#4E03E0] transition"
    href="https://linkedin.com/in/seuusuario"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src="/icons/home/InBug-White.png" alt="LinkedIn" width={32} height={32} />
  </a>
  <a
    className="ml-4 px-4 py-4 bg-indigo-500 hover:bg-indigo-900 text-white rounded-full shadow-[0_0_15px_#4E03E0] transition"
    href="mailto:seuemail@gmail.com"
  >
    <Image src="/icons/home/icons8-gmail-250.png" alt="E-mail" width={32} height={32} />
  </a>
</div>
        </div>
      </div>
    </section>
  );
}
