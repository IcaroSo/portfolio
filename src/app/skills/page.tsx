export default function SkillsPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">

        {/* Lado Esquerdo (somente animação futuramente) */}
        <div className="flex-1 flex items-center justify-center h-full">
          {/* sua animação entra aqui */}
        </div>

        {/* Lado Direito (Skills + Tools) */}
        <div className="flex-1 text-left">
          
          {/* Skills */}
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Skills</h2>
          <p className="leading-relaxed text-lg mb-8">
            Foco no desenvolvimento <strong className="text-blue-400">backend</strong>, com experiência em <strong className="text-blue-400">Java</strong>, <strong className="text-blue-400">C#</strong> e <strong className="text-blue-400">Node.js</strong>,
            criando APIs e serviços robustos com <strong className="text-blue-400">Spring Boot</strong> e <strong className="text-blue-400">.NET</strong>.
            <br /><br />
            Trabalho com bancos de dados <strong className="text-blue-400">PostgreSQL</strong>, <strong className="text-blue-400">MySQL</strong> e <strong className="text-blue-400">MongoDB</strong>, construindo soluções escaláveis
            e bem estruturadas.
            <br /><br />
            Atualmente estou aprimorando minhas habilidades no <strong className="text-blue-400">frontend</strong> com <strong className="text-blue-400">React.js</strong>, além de experiência prévia
            com <strong className="text-blue-400">JavaFX</strong> e <strong className="text-blue-400">WPF</strong>.
          </p>

          {/* Tools */}
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Tools <span className="text-2xl font-bold mb-4 text-white"> & </span> Workflow</h2>
          <p className="leading-relaxed text-lg">
            Domino <strong className="text-blue-400">Docker</strong> e <strong className="text-blue-400">Docker Compose</strong> para containerização e padronização de ambientes,
            desenvolvendo principalmente em <strong className="text-blue-400">Linux</strong>.
            <br /><br />
            Utilizo <strong className="text-blue-400">Git</strong>, <strong className="text-blue-400">GitHub</strong> e <strong className="text-blue-400">GitLab</strong> para versionamento e colaboração.
            <br /><br />
            Trabalho com metodologias ágeis, especialmente <strong className="text-blue-400">Scrum</strong>, garantindo entregas contínuas e bem organizadas.
          </p>

        </div>

      </div>
    </section>
  );
}
