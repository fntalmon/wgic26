import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter10Spanish = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Boletín - Julio 2026 #5"
        description="Entradas Early Bird disponibles hasta el 30 de septiembre, explora Barcelona a través de las Visitas Técnicas de WGIC26, e IDAEA apoya WGIC26"
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
              Boletín de Julio de 2026 #5
            </h2>
          </div>

          {/* Las entradas Early Bird están  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Las entradas Early Bird están disponibles hasta el 30 de septiembre
            </h3>
            <p className="text-lg leading-relaxed">Las entradas Early Bird para WGIC26 ya están disponibles a través del sitio web oficial del evento.</p>
            <p className="text-lg leading-relaxed">Del 27 al 30 de octubre de 2026, Barcelona y Lleida darán la bienvenida a la comunidad internacional de infraestructura verde durante cuatro días de conferencias, sesiones científicas, visitas técnicas, exposiciones y networking.</p>
            <p className="text-lg leading-relaxed">Únete a investigadores, profesionales, empresas, instituciones públicas y líderes de la industria que trabajan para dar forma a ciudades más saludables, seguras y resilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Compra tus entradas Early Bird hasta el 30 de septiembre aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/collage.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Explora Barcelona a través de  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Explora Barcelona a través de las Visitas Técnicas de WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Los participantes de WGIC26 tendrán la oportunidad de visitar algunos de los techos verdes y fachadas verdes más emblemáticos de Barcelona.</p>
            <p className="text-lg leading-relaxed">Estas visitas técnicas ofrecerán acceso directo a proyectos de infraestructura verde en toda la ciudad, conectando teoría, práctica y transformación urbana real.</p>
            <p className="text-lg leading-relaxed">Los grupos serán limitados, con guías especializados en cada ubicación.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubre las visitas técnicas aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-10.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* IDAEA apoya WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              IDAEA apoya WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nos complace anunciar el apoyo de IDAEA, el Instituto de Evaluación Ambiental y de Investigación del Agua, para WGIC26.</p>
            <p className="text-lg leading-relaxed">IDAEA aporta una sólida perspectiva científica sobre la evaluación ambiental, la calidad del agua, la calidad del aire y el impacto de la actividad humana en los ecosistemas.</p>
            <p className="text-lg leading-relaxed">Su apoyo refuerza el carácter interdisciplinario de WGIC26 y su conexión con desafíos clave como la resiliencia climática, la gestión del agua y entornos urbanos más saludables.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Conoce a todos nuestros patrocinadores y colaboradores aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-11.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Mantente conectado con WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Mantente conectado con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nuestros canales oficiales ya están activos. Sigue a WGIC26 en LinkedIn e Instagram para mantenerte al día con los últimos anuncios, oradores, actualizaciones del programa y hitos clave que conducen al congreso. Únete a la conversación y sé parte de la comunidad global que está dando forma al futuro de la infraestructura verde y las soluciones basadas en la naturaleza.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://panel.helice.app/w/wgic26/214760/registration"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Compra tu entrada anticipada
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

export default July2026Newsletter10Spanish;
