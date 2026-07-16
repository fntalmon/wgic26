import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter9Spanish = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Boletín - Julio 2026 #4"
        description="Las entradas Early Bird ya están a la venta, Naturbana apoya WGIC26 y las presentaciones de pósteres están abiertas hasta el 30 de septiembre"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Boletín de Julio de 2026 #4
            </h2>
          </div>

          {/* Las entradas Early Bird ya est */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Las entradas Early Bird ya están a la venta
            </h3>
            <p className="text-lg leading-relaxed">Las entradas Early Bird para WGIC26 - 12º Congreso Mundial de Infraestructura Verde están disponibles hasta el 30 de septiembre de 2026.</p>
            <p className="text-lg leading-relaxed">Ya sea que te unas como individuo, organización o equipo, WGIC26 es tu oportunidad de ser parte de la conversación global sobre infraestructura verde, soluciones basadas en la naturaleza y futuros urbanos más saludables.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Regístrate ahora aquí.
              </a>
            </p>
          </div>

          {/* Naturbana apoya WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Naturbana apoya WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nos complace anunciar que Naturbana apoya WGIC26 y se unirá a nosotros en el congreso.</p>
            <p className="text-lg leading-relaxed">Su participación es un hito muy relevante, especialmente dada su conexión con el área ministerial vinculada al alcance de WGIC26.</p>
            <p className="text-lg leading-relaxed">Este apoyo fortalece a WGIC26 como un punto de encuentro entre instituciones, profesionales, investigadores y organizaciones que trabajan para avanzar en la infraestructura verde y la resiliencia urbana.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubre todos los apoyos y socios de WGIC26 aquí.
              </a>
            </p>
          </div>

          {/* Las presentaciones de pósteres */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Las presentaciones de pósteres están abiertas hasta el 30 de septiembre
            </h3>
            <p className="text-lg leading-relaxed">Las presentaciones de pósteres permanecerán abiertas hasta el 30 de septiembre de 2026, creando una nueva oportunidad para que profesionales, investigadores, estudiantes, organizaciones y equipos de proyectos presenten su trabajo en el congreso.</p>
            <p className="text-lg leading-relaxed">Todos los pósteres enviados antes de la fecha límite tendrán la oportunidad de ser incluidos en las Actas impresas y digitales de WGIC26.</p>
            <p className="text-lg leading-relaxed">Las Actas son la publicación oficial del congreso, que reúne los trabajos y pósteres aceptados de WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Envía tu póster aquí antes del 30 de septiembre.
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

export default July2026Newsletter9Spanish;
