import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter6Spanish = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Boletín - Julio 2026"
        description="Gracias por tus envíos, el proceso de revisión comienza, una respuesta global de 32 países y descubre el CCIB"
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
              Boletín de Julio de 2026
            </h2>
          </div>

          {/* Gracias por sus envíos: el pro */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Gracias por sus envíos: el proceso de revisión comienza
            </h3>
            <p className="text-lg leading-relaxed">La convocatoria de trabajos y proyectos para WGIC26 ha concluido. Nos gustaría agradecer a todos los investigadores, profesionales, diseñadores y expertos que compartieron su trabajo con nosotros. El Comité Científico está revisando cada envío. Una vez que el proceso de evaluación esté completo, cada autor será contactado directamente e informado si su trabajo o proyecto ha sido seleccionado para formar parte de WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubre los próximos pasos en el proceso de envío y revisión aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-1.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Una respuesta global de 32 paí */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Una respuesta global de 32 países
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 ha recibido trabajos y proyectos de autores que representan a 32 países de Europa, Asia, América del Norte, América del Sur y Oceanía.</p>
            <p className="text-lg leading-relaxed">Los países con el mayor número de envíos incluyen:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>España: 20</li>
              <li>Austria: 14</li>
              <li>Estados Unidos: 10</li>
              <li>Italia: 7</li>
              <li>Australia: 6</li>
              <li>Francia: 6</li>
              <li>Países Bajos: 6</li>
              <li>Alemania: 6</li>
              <li>Bélgica: 6</li>
            </ul>
            <p className="text-lg leading-relaxed">Esta diversidad geográfica refleja el alcance internacional de WGIC26 y el creciente interés global en la infraestructura verde y las soluciones basadas en la naturaleza.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubre más sobre la comunidad internacional que se reúne en WGIC26 aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Descubre el CCIB: el lugar pri */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Descubre el CCIB: el lugar principal para WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Del 27 al 29 de octubre, WGIC26 se llevará a cabo en el Centro de Convenciones Internacional de Barcelona (CCIB), ubicado en el Parc del Fòrum. Con espacios versátiles, luz natural y capacidad para eventos internacionales a gran escala, el CCIB proporcionará el escenario para discursos magistrales, sesiones científicas, exposiciones y oportunidades de networking. Ubicado cerca de la playa y bien conectado con el centro de la ciudad de Barcelona y el aeropuerto, ofrece un entorno ideal para dar la bienvenida a la comunidad global de infraestructura verde.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Planifica tu visita a Barcelona y descubre más sobre el destino aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-7.jpg"
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

export default July2026Newsletter6Spanish;
