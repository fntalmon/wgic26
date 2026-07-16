import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter8Spanish = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Boletín - Julio 2026 #3"
        description="Maria Buhigas se une a WGIC26, la resiliencia climática lidera la conversación y las entradas ya están disponibles"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Boletín de Julio de 2026 #3
            </h2>
          </div>

          {/* ¡Maria Buhigas se une a WGIC26 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              ¡Maria Buhigas se une a WGIC26!
            </h3>
            <p className="text-lg leading-relaxed">Nos complace anunciar a Maria Buhigas como ponente en el Congreso Mundial de Infraestructura Verde 2026 (WGIC26).</p>
            <p className="text-lg leading-relaxed">Como Arquitecta Jefe del Ayuntamiento de Barcelona, Buhigas aporta una perspectiva estratégica sobre la planificación urbana, el espacio público, la arquitectura y la transformación de las ciudades en respuesta a los desafíos sociales y ambientales actuales.</p>
            <p className="text-lg leading-relaxed">Su participación es especialmente relevante en un año en el que Barcelona se encuentra en el centro de la conversación arquitectónica global, reforzando la conexión entre la innovación urbana, la infraestructura verde y la creación de ciudades más saludables.</p>
            <p className="text-lg leading-relaxed">En WGIC26, su contribución ayudará a enmarcar el papel de las ciudades en la promoción de futuros urbanos más resilientes, inclusivos e integrados con la naturaleza.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubre los ponentes confirmados aquí.
              </a>
            </p>
          </div>

          {/* Lo que revelan los documentos: */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Lo que revelan los documentos: la resiliencia climática lidera la conversación
            </h3>
            <p className="text-lg leading-relaxed">El análisis de los documentos presentados a WGIC26 confirma una tendencia clara: la resiliencia climática es una de las principales prioridades para la comunidad internacional de infraestructura verde.</p>
            <p className="text-lg leading-relaxed">Entre los temas más recurrentes, las presentaciones destacan la creciente importancia de la gestión del agua, las soluciones basadas en la naturaleza, la sostenibilidad urbana, la salud y el bienestar, la biodiversidad, la calidad del aire, las tecnologías y el diseño de proyectos.</p>
            <p className="text-lg leading-relaxed">Más de la mitad de las contribuciones analizadas se centran en los impactos de la infraestructura verde, mostrando cómo investigadores y profesionales están trabajando para medir, diseñar e implementar soluciones que respondan a los desafíos urbanos reales.</p>
            <p className="text-lg leading-relaxed">Esta diversidad temática refuerza a WGIC26 como un punto de encuentro global para quienes trabajan para dar forma a ciudades más saludables, seguras y resilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Explora los temas principales que dan forma a WGIC26 aquí.
              </a>
            </p>
          </div>

          {/* Las entradas ya están disponib */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Las entradas ya están disponibles: asegura tu lugar en WGIC26
            </h3>
            <p className="text-lg leading-relaxed">La inscripción ya está abierta para el Congreso Mundial de Infraestructura Verde 2026.</p>
            <p className="text-lg leading-relaxed">Del 27 al 30 de octubre, Barcelona y Lleida recibirán a investigadores, profesionales, responsables de políticas, empresas, instituciones públicas y expertos internacionales que trabajan en la vanguardia de la infraestructura verde y las soluciones basadas en la naturaleza.</p>
            <p className="text-lg leading-relaxed">WGIC26 ofrecerá una oportunidad única para asistir a conferencias magistrales, sesiones científicas, talleres temáticos, visitas técnicas, exposiciones y actividades de networking con la comunidad global de infraestructura verde.</p>
            <p className="text-lg leading-relaxed">27-29 de octubre | CCIB - Parc del Fòrum, Barcelona (España)</p>
            <p className="text-lg leading-relaxed">30 de octubre | Universitat de Lleida - Lleida (España)</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Asegura tu entrada y descubre las opciones de registro aquí.
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

export default July2026Newsletter8Spanish;
