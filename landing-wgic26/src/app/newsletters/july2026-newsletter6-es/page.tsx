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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Boletín de Julio de 2026
            </h2>
          </div>

          {/* Gracias por sus envíos: el pro */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Gracias por sus envíos: el proceso de revisión comienza
            </h3>
            <p className="text-lg leading-relaxed">La convocatoria de trabajos y proyectos para WGIC26 ha concluido. Nos gustaría agradecer a todos los investigadores, profesionales, diseñadores y expertos que compartieron su trabajo con nosotros. El Comité Científico está revisando cada envío. Una vez que el proceso de evaluación esté completo, cada autor será contactado directamente e informado si su trabajo o proyecto ha sido seleccionado para formar parte de WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubre los próximos pasos en el proceso de envío y revisión aquí.
              </a>
            </p>
          </div>

          {/* Una respuesta global de 32 paí */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Descubre más sobre la comunidad internacional que se reúne en WGIC26 aquí.
              </a>
            </p>
          </div>

          {/* Descubre el CCIB: el lugar pri */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Descubre el CCIB: el lugar principal para WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Del 27 al 29 de octubre, WGIC26 se llevará a cabo en el Centro de Convenciones Internacional de Barcelona (CCIB), ubicado en el Parc del Fòrum. Con espacios versátiles, luz natural y capacidad para eventos internacionales a gran escala, el CCIB proporcionará el escenario para discursos magistrales, sesiones científicas, exposiciones y oportunidades de networking. Ubicado cerca de la playa y bien conectado con el centro de la ciudad de Barcelona y el aeropuerto, ofrece un entorno ideal para dar la bienvenida a la comunidad global de infraestructura verde.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Planifica tu visita a Barcelona y descubre más sobre el destino aquí.
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

export default July2026Newsletter6Spanish;
