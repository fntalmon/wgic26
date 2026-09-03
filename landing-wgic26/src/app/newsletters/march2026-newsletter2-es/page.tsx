import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026Newsletter2SpanishNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Marzo 2026"
        description="Actualizaciones sobre la sección Salud y Bienestar, nuevo ponente y extensión de la fecha límite"
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
              Newsletter de Marzo 2026
            </h2>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <p className="text-lg leading-relaxed">
              El 12º{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Congreso Mundial sobre Infraestructura Verde{" "}
              </a>
              se llevará a cabo en Barcelona y Lleida (Cataluña, España) del 27
              al 30 de octubre de 2026.
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Salud y Bienestar: un tema central del WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              ¿Cómo podemos evaluar mejor el impacto del diseño biofílico en la
              salud y el bienestar humano?
            </p>
            <p className="text-lg leading-relaxed">
              ¿Qué papel pueden desempeñar iniciativas como la Prescripción
              Social Verde en la creación de ciudades más saludables?
            </p>
            <p className="text-lg leading-relaxed">
              Estas son algunas de las preguntas clave que impulsan una de las
              tres principales líneas temáticas del WGIC26 Barcelona – Lleida.
            </p>
            <p className="text-lg leading-relaxed">
              La Red Mundial de Infraestructura Verde (WGIN) ha promovido
              durante mucho tiempo la integración de la infraestructura verde en
              entornos urbanos, beneficiando tanto a las personas como al
              planeta. Sin embargo, hoy en día, sigue existiendo un desafío
              claro: fortalecer la conexión entre la naturaleza urbana y la
              salud humana.
            </p>
            <p className="text-lg leading-relaxed">
              En el WGIC26, este tema se explorará a través de una línea
              dedicada a la Salud y el Bienestar, inspirada en el último informe
              de la OMS “Soluciones basadas en la naturaleza y salud” (mayo de
              2025).
            </p>
            <p className="text-lg leading-relaxed">
              Esta línea se centrará en la integración práctica de soluciones
              basadas en la naturaleza en marcos de salud, políticas públicas y
              estrategias de planificación urbana, fomentando una colaboración
              más fuerte entre los sectores de infraestructura verde y salud.
            </p>
            <p className="text-lg leading-relaxed">
              El objetivo es avanzar en la investigación, informar políticas y
              reforzar el papel de la naturaleza urbana en la mejora de la
              calidad de vida.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Explora el programa completo del WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Nuevo ponente confirmado
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl2/photo-5.jpg"
                alt=""
                className="w-full max-w-xs mx-auto rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-cactus mb-2">
                Wendy Y. Chen
              </h4>
              <p className="text-sm text-neutral-600">
                Profesora en la HKU en infraestructura verde-azul.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                La profesora Wendy Y. Chen se especializa en infraestructura
                urbana verde azul, con un fuerte enfoque en evaluar y modelar su
                impacto en la sostenibilidad urbana y la calidad de vida.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Su investigación aborda desafíos clave en la comprensión de cómo
                se diseñan, transforman e integran los espacios verde azul en
                los sistemas urbanos, combinando perspectivas ambientales,
                económicas y sociales.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                A través de su trabajo, contribuye a avanzar en la evaluación
                cuantitativa de soluciones basadas en la naturaleza, ayudando a
                informar una planificación urbana y una formulación de políticas
                más efectivas.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                En el WGIC26, aportará valiosos conocimientos al diálogo sobre
                infraestructura verde y soluciones basadas en la naturaleza.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Fecha límite de presentación extendida
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Fecha límite anterior:</span>
                  <span className="font-semibold text-neutral-800">
                    15 de marzo de 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-cactus font-bold">
                    Nueva fecha límite:
                  </span>
                  <span className="font-bold text-cactus">30 de abril de 2026</span>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              Nos complace anunciar que se ha extendido la fecha límite para la
              presentación de trabajos y proyectos.
            </p>
            <p className="text-lg leading-relaxed">
              Investigadores, profesionales, diseñadores y responsables de
              políticas ahora tienen tiempo adicional para enviar su trabajo.
            </p>
            <p className="text-lg leading-relaxed">
              El WGIC26 da la bienvenida a investigaciones originales, estudios
              de caso y aplicaciones innovadoras en infraestructura verde y
              soluciones basadas en la naturaleza. Las presentaciones deben
              realizarse en formato de artículo corto (máximo 5 páginas, MS
              Word).
            </p>
            <p className="text-lg leading-relaxed">
              Todos los trabajos presentados pasarán por un riguroso proceso de
              revisión por pares, liderado por el Comité Científico, que
              determinará la aceptación y el formato de presentación (oral o
              póster).
            </p>
            <p className="text-lg leading-relaxed">
              Las contribuciones aceptadas se publicarán en las actas oficiales
              del WGIC26, ofreciendo visibilidad internacional dentro de la
              comunidad global de infraestructura verde.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/speakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Aprende cómo enviar correctamente tu trabajo o proyecto para el
                WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Mantente conectado con el WGIC26
            </h3>
            <p>Nuestros canales oficiales ya están activos.</p>
            <p>
              Sigue al WGIC26 en{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              y{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Instagram
              </a>{' '}
              para mantenerte al día con los últimos anuncios, ponentes,
              actualizaciones del programa y hitos clave que conducen al
              congreso.
            </p>
            <p>
              Únete a la conversación y sé parte de la comunidad global que está
              dando forma al futuro de la infraestructura verde y las soluciones
              basadas en la naturaleza.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl2/photo-6.jpg"
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
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Suscríbete al boletín
            </Link>
          </div>
        
          <NewsletterFooter language="es" light />
        </div>
        </section>
    </div>
  );
};

export default March2026Newsletter2SpanishNewsletter;
