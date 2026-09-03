import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026SpanishNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Febrero 2026"
        description="Actualizaciones, primeros ponentes confirmados y fechas clave para WGIC26"
        section="newsletters"
      />

      <section className="w-full py-10 px-4">
        <div className="max-w-[640px] mx-auto bg-white text-neutral-700 shadow-2xl">
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-neutral-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/wgic26-logo.png"
              alt="WGIC26"
              className="h-14 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-cactus">
              Newsletter Febrero 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl1/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          <div className="px-6 sm:px-10 pt-8 space-y-6">
            <p className="text-lg leading-relaxed">
              El 12{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Congreso Mundial sobre Infraestructura Verde{" "}
              </a>
              se celebrarå en Barcelona y Lleida (Cataluña, España) del 27 al 30
              de Octubre de 2026.
            </p>

            <div className="pt-8 mt-2 border-t border-neutral-200 space-y-5">
              <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
                La convocatoria para la presentacion de trabajos y la
                inscripcion de proyectos esta abierta
              </h3>

              <p className="text-lg leading-relaxed">
                Promovido por la{" "}
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  {" "}
                  Red Mundial de Infraestructura Verde{" "}
                </a>{" "}
                (WGIN) y organizado por la Universidad de Lleida (UdL), esta
                ocasión celebrará la{" "}
                <a
                  href="https://www.barcelona.cat/capitalmundialarquitectura/en/presentation/barcelona-2026-world-capital-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  {" "}
                 Capital Mundial de la Arquitectura
                </a>{" "}
                 y el 
                 {" "}
                <a
                  href="https://consellantonigaudi.cat/programa-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  {" "}
                  Año de Antoni Gaudí
                </a>
                , en
                Barcelona 2026. EI programa se estructurará en dos días de
                sesiones paralelas y pósters en Barcelona.
              </p>

              <p className="text-lg leading-relaxed">
                Entre los temas clásicos (políticas, tecnologías, impactos,
                educación, etc.), se abordarán tres temas destacados.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
                Infraestructura verde y soluciones basadas en la naturaleza.
              </h3>
              <ul className="list-disc list-inside mb-4 text-neutral-800">
                <li>Para la salud y el bienestar humano</li>
                <li>En la recuperacion post conflicto/desastre</li>
                <li>Y el sur global</li>
              </ul>
              <p className="mb-4">
                El congreso incluye un årea de feria donde las empresas lideres
                mostrarån sus productos y últimas innovaciones. El tercer dia
                del congreso estará dedicado a visitas técnicas fantásticas a
                proyectos en toda Barcelona, en un formato innovador de &quot;puertas
                abiertas&quot;. Un cuarto dia opcional incluirå talleres sobre
                investigación e innovación en Lleida. Dado que el WGlC26 es un
                foro anual donde convergen investigadores, profesionales e
                industria, se pueden presentar ambos tipos de trabajos, ya sean
                investigaciones, proyectos o estudios de caso.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-semibold text-cactus mb-4">
                Recuerda las fechas clave
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">
                    Primer borrador del trabajo presentado
                  </span>
                  <span className="font-semibold text-neutral-800">
                    30 de Abril de 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">
                    Inscripcion anticipada (Hasta 400 inscripciones)
                  </span>
                  <span className="font-semibold text-neutral-800">
                    30 de Abril de 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Socios y Expositores</span>
                  <span className="font-semibold text-neutral-800">
                    30 de Abril de 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Patrocinadores</span>
                  <span className="font-semibold text-neutral-800">
                    30 de Septiembre de 2026
                  </span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-neutral-200 mt-2">
                  <span className="text-cactus font-bold">
                    Fecha del congreso
                  </span>
                  <span className="font-bold text-cactus">
                    27-30 de Octubre de 2026
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
              2026: Un año conmemorativo de Antoni Gaudí.
            </h3>
            <p>
              El Consejo para la Promoci6n y Difusi6n de la Obra de Gaudi, un
              Organo asesor del Departamento de Cultura de la Generalitat de
              Catalufia, ha impulsado la celebración del 
              
              {" "}
              <a
                href="https://web.gencat.cat/en/generalitat/accio-govern/commemoracions/2026/any-gaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                {" "}
                Año Gaudi 2026
              </a>{" "}

              , con el
              objetivo de acercar la Obra de Antoni Gaudi al público en general.
              Gaudi es uno de los arquitectos más universales de Cataluña.
            </p>
            <p>
              La iniciativa será coordinada por una comisión liderada por Núria
              Poch y Galdric Santana, e involucrará la participaci6n de los
              principales edificios de Gaudi, incluyendo el Templo Expiatorio de
              la Sagrada Familia, asi como instituciones públicas y privadas y
              expertos dedicados a la conservación, estudio y difusión de su
              legado.
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
              Los primeros ponentes del WGiC ya estan confirmados!
            </h3>
            <p className="mb-6">
              Nos complace anunciar que los primeros ponentes para el WGIC 2026
              ya estan confirmados: voces líderes que están moldeando el futuro
              de las ciudades, el territorio, lar arquitectura y la politica
              pública
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/marcosrossempere/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marcos Ros
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Arquitecto, académico y Miembro del Parlamento Europeo,
                  trabajando en politica urbana, sostenibilidad y entorno
                  construido a nivel de la UE.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vicente Guallart
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Arquitecto y urbanista, cofundador de Urbanitree y fundador
                  del Instituto de Arquitectura Avanzada de Cataluña, reconocido
                  internacionalmente por su innovación urbana basada en la
                  investigación.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alberto Estevez
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Fundador y Director de ESARQ-UIC Barcelona, arquitecto y
                  académico conocido por avanzar en la arquitectura experimental
                  y biodigital.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Salvador Rueda
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Fundador y Director de la Fundación de Ecología Urbana y
                  Terrritorial (FEUT), pionero de la ecología urbana y creador
                  del modelo urbano de &quot;supermanzana.&quot;
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-500 italic">
              Este primer grupo de ponentes subraya la ambición, profundidad y
              visión multidisciplinaria del WGIC 2026, posicionándolo como un
              foro clave para el discurso urbano global.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl1/photo-11.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Sé nuestro patrocinador
            </a>
            <Link
              href="/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Suscríbete al newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="es" light />
        </div>
        </section>
    </div>
  );
};

export default March2026SpanishNewsletter;
