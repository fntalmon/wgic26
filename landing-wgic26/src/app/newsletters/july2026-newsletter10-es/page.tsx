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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Boletín de Julio de 2026 #5
            </h2>
          </div>

          {/* Las entradas Early Bird están  */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Las entradas Early Bird están disponibles hasta el 30 de septiembre
            </h3>
            <p className="text-lg leading-relaxed">Las entradas Early Bird para WGIC26 ya están disponibles a través del sitio web oficial del evento.</p>
            <p className="text-lg leading-relaxed">Del 27 al 30 de octubre de 2026, Barcelona y Lleida darán la bienvenida a la comunidad internacional de infraestructura verde durante cuatro días de conferencias, sesiones científicas, visitas técnicas, exposiciones y networking.</p>
            <p className="text-lg leading-relaxed">Únete a investigadores, profesionales, empresas, instituciones públicas y líderes de la industria que trabajan para dar forma a ciudades más saludables, seguras y resilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Compra tus entradas Early Bird hasta el 30 de septiembre aquí.
              </a>
            </p>
          </div>

          {/* Explora Barcelona a través de  */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Descubre las visitas técnicas aquí.
              </a>
            </p>
          </div>

          {/* IDAEA apoya WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Conoce a todos nuestros patrocinadores y colaboradores aquí.
              </a>
            </p>
          </div>

          {/* Mantente conectado con WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Mantente conectado con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nuestros canales oficiales ya están activos. Sigue a WGIC26 en LinkedIn e Instagram para mantenerte al día con los últimos anuncios, oradores, actualizaciones del programa y hitos clave que conducen al congreso. Únete a la conversación y sé parte de la comunidad global que está dando forma al futuro de la infraestructura verde y las soluciones basadas en la naturaleza.</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/registration"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Compra tu entrada anticipada
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Suscríbete al newsletter
            </Link>
          </div>

          <NewsletterFooter language="es" />
        </div>
      </section>
    </div>
  );
};

export default July2026Newsletter10Spanish;
