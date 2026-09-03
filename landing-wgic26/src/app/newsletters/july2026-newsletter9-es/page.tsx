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
              Boletín de Julio de 2026 #4
            </h2>
          </div>

          {/* Las entradas Early Bird ya est */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Las entradas Early Bird ya están a la venta
            </h3>
            <p className="text-lg leading-relaxed">Las entradas Early Bird para WGIC26 - 12º Congreso Mundial de Infraestructura Verde están disponibles hasta el 30 de septiembre de 2026.</p>
            <p className="text-lg leading-relaxed">Ya sea que te unas como individuo, organización o equipo, WGIC26 es tu oportunidad de ser parte de la conversación global sobre infraestructura verde, soluciones basadas en la naturaleza y futuros urbanos más saludables.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Regístrate ahora aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Naturbana apoya WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubre todos los apoyos y socios de WGIC26 aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Las presentaciones de pósteres */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Envía tu póster aquí antes del 30 de septiembre.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-7.jpg"
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

export default July2026Newsletter9Spanish;
