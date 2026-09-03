import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter5Spanish = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Mayo 2026"
        description="Última semana para enviar tu trabajo, nueva ponente confirmada Dorothy Aseyo, patrocinadores y mantente conectado"
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
              Newsletter de Mayo 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl5/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Call for Papers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Última semana para enviar tu trabajo a WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              La Convocatoria de Trabajos y Proyectos para el Congreso Mundial de
              Infraestructura Verde 2026 (WGIC26) está entrando en su última semana.
            </p>
            <p className="text-lg leading-relaxed">
              Investigadores, profesionales, diseñadores, responsables de políticas y
              expertos de la industria están invitados a enviar sus contribuciones sobre
              infraestructura verde y soluciones basadas en la naturaleza antes de la
              fecha límite oficial.
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 da la bienvenida a investigaciones originales, estudios de caso y
              aplicaciones innovadoras en formato de trabajo corto (máximo 5 páginas,
              MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Todas las presentaciones pasarán por un riguroso proceso de revisión por
              pares, y los trabajos aceptados se publicarán en las actas oficiales del
              congreso. Las contribuciones seleccionadas también serán consideradas
              para Ediciones Especiales en Silvicultura Urbana y Verde Urbano (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Fecha límite final: 31 de mayo de 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubre las pautas de presentación y accede a la plataforma aquí.
              </a>
            </p>
          </div>

          {/* Confirmed Speaker */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Nueva ponente confirmada: Dorothy Aseyo
            </h3>
            <p className="text-lg leading-relaxed">
              Dorothy Aseyo trabaja en conservación ambiental, empoderamiento
              comunitario, medios de vida sostenibles y resiliencia climática,
              promoviendo soluciones basadas en la naturaleza y acciones de base para
              construir sociedades más resilientes e inclusivas.
            </p>
            <p className="text-lg leading-relaxed">
              Como Directora Ejecutiva del Movimiento Cinturón Verde, fundado por la
              laureada con el Premio Nobel de la Paz Wangari Maathai, su trabajo
              contribuye a avanzar en el diálogo global sobre sostenibilidad, justicia
              ambiental y transformación liderada por la comunidad.
            </p>
            <p className="text-lg leading-relaxed">
              En WGIC26, aportará valiosas ideas a la discusión sobre cómo la
              infraestructura verde puede apoyar comunidades más saludables y
              resilientes en todo el mundo.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Pronto se anunciarán más ponentes y actualizaciones del programa aquí.
              </a>
            </p>
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/photo-5.jpg"
                alt=""
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Sponsors */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Únete a WGIC26 como patrocinador
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 sigue creciendo gracias al apoyo de organizaciones líderes
              comprometidas con el futuro de la infraestructura verde y las soluciones
              basadas en la naturaleza.
            </p>
            <p className="text-lg leading-relaxed">
              Estamos orgullosos de contar con el apoyo de empresas y organizaciones
              como:
            </p>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/sponsors-strip.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Hunter",
                "Sempergreen",
                "ZinCo",
                "JardínMóvil",
                "Eixverd",
                "Verdtical",
                "Greenroofs",
                "ASESCUVE",
                "PRONATUR",
              ].map((sponsor) => (
                <div key={sponsor} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center">
                  <div className="font-semibold text-neutral-800">{sponsor}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Conviértete en parte de una plataforma internacional que conecta
              investigadores, responsables de políticas, arquitectos, ingenieros, líderes
              de la industria e innovadores de todo el mundo.
            </p>
            <p className="text-lg leading-relaxed">
              Para oportunidades de patrocinio e información sobre asociaciones,
              contacta{" "}
              <a href="mailto:sponsorship@wgic26.org" className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera">
                sponsorship@wgic26.org
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Mantente conectado con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Nuestros canales oficiales ya están activos.
            </p>
            <p className="text-lg leading-relaxed">
              Sigue a WGIC26 en{" "}
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
              para estar al día con los últimos anuncios, ponentes, actualizaciones del programa y
              hitos clave que conducen al congreso.
            </p>
            <p className="text-lg leading-relaxed">
              Únete a la conversación y sé parte de la comunidad global que está dando
              forma al futuro de la infraestructura verde y las soluciones basadas en la
              naturaleza.
            </p>
          </div>

          {/* CTA Buttons */}
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl5/photo-11.jpg"
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
              Suscríbete al newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="es" light />
        </div>
        </section>
    </div>
  );
};

export default May2026Newsletter5Spanish;
