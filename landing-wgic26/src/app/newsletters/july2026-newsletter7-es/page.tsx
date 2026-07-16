import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter7Spanish = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Boletín - Julio 2026 #2"
        description="La inscripción ya está abierta, oportunidades de publicación científica, patrocina WGIC26 y mantente conectado"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Boletín de Julio de 2026 #2
            </h2>
          </div>

          {/* ¡Tu puerta de entrada al WGIC2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              ¡Tu puerta de entrada al WGIC26 comienza aquí!
            </h3>
            <p className="text-lg leading-relaxed">La inscripción ya está abierta para el Congreso Mundial de Infraestructura Verde 2026.</p>
            <p className="text-lg leading-relaxed">Del 27 al 30 de octubre, Barcelona y Lleida recibirán a investigadores, profesionales, responsables de políticas, empresas y expertos internacionales que trabajan en la vanguardia de la infraestructura verde y las soluciones basadas en la naturaleza.</p>
            <p className="text-lg leading-relaxed">El congreso ofrecerá una oportunidad única para asistir a conferencias magistrales, sesiones científicas, talleres temáticos, visitas técnicas, exposiciones y actividades de networking con la comunidad global de infraestructura verde.</p>
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

          {/* WGIC26 abre la puerta a oportu */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              WGIC26 abre la puerta a oportunidades de publicación científica
            </h3>
            <p className="text-lg leading-relaxed">Los autores cuyos trabajos hayan sido aceptados para presentación en WGIC26 tendrán la oportunidad de ganar mayor visibilidad a través de publicaciones científicas líderes en el campo.</p>
            <p className="text-lg leading-relaxed">Entre estas oportunidades, las contribuciones seleccionadas pueden ser consideradas para publicación acelerada en un Número Especial de la Revista de Arquitectura Viva (JLIV), la revista revisada por pares de la Fundación de Infraestructura Verde (GIF), afiliada a Techos Verdes para Ciudades Saludables (GRHC).</p>
            <p className="text-lg leading-relaxed">JLIV es escrita, revisada y editada por profesionales de la arquitectura viva y comparte investigaciones originales, aplicaciones educativas, perspectivas académicas, recursos y discusiones críticas relacionadas con el sector de la arquitectura viva.</p>
            <p className="text-lg leading-relaxed">Esta oportunidad refuerza el compromiso de WGIC26 de apoyar la investigación de alta calidad y ayudar a los autores aceptados a extender el impacto de su trabajo más allá del congreso.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubre más sobre la Revista de Arquitectura Viva aquí.
              </a>
            </p>
          </div>

          {/* Patrocina WGIC26 y conéctate c */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Patrocina WGIC26 y conéctate con los líderes de la sostenibilidad urbana
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continúa construyendo un ecosistema internacional de empresas, organizaciones e instituciones comprometidas con el avance de la infraestructura verde, la sostenibilidad urbana y las soluciones basadas en la naturaleza.</p>
            <p className="text-lg leading-relaxed">Convertirse en patrocinador es una oportunidad para conectar tu marca con una audiencia global de investigadores, arquitectos, ingenieros, profesionales del paisaje, instituciones públicas, líderes de la industria y tomadores de decisiones que están moldeando el futuro de ciudades más verdes y resilientes.</p>
            <p className="text-lg leading-relaxed">Los patrocinadores y socios ganarán visibilidad durante todo el congreso y se convertirán en parte de una plataforma diseñada para fomentar la colaboración, la innovación y el impacto a largo plazo en el sector.</p>
            <p className="text-lg leading-relaxed">¿Interesado en unirte a WGIC26 como patrocinador o socio?</p>
            <p className="text-lg leading-relaxed">Contáctanos en: sponsorship@wgic26.org</p>
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

export default July2026Newsletter7Spanish;
