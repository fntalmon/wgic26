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
              Boletín de Julio de 2026 #2
            </h2>
          </div>

          {/* ¡Tu puerta de entrada al WGIC2 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              ¡Tu puerta de entrada al WGIC26 comienza aquí!
            </h3>
            <p className="text-lg leading-relaxed">La inscripción ya está abierta para el Congreso Mundial de Infraestructura Verde 2026.</p>
            <p className="text-lg leading-relaxed">Del 27 al 30 de octubre, Barcelona y Lleida recibirán a investigadores, profesionales, responsables de políticas, empresas y expertos internacionales que trabajan en la vanguardia de la infraestructura verde y las soluciones basadas en la naturaleza.</p>
            <p className="text-lg leading-relaxed">El congreso ofrecerá una oportunidad única para asistir a conferencias magistrales, sesiones científicas, talleres temáticos, visitas técnicas, exposiciones y actividades de networking con la comunidad global de infraestructura verde.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Asegura tu entrada y descubre las opciones de registro aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-1.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* WGIC26 abre la puerta a oportu */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubre más sobre la Revista de Arquitectura Viva aquí.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Patrocina WGIC26 y conéctate c */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Patrocina WGIC26 y conéctate con los líderes de la sostenibilidad urbana
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continúa construyendo un ecosistema internacional de empresas, organizaciones e instituciones comprometidas con el avance de la infraestructura verde, la sostenibilidad urbana y las soluciones basadas en la naturaleza.</p>
            <p className="text-lg leading-relaxed">Convertirse en patrocinador es una oportunidad para conectar tu marca con una audiencia global de investigadores, arquitectos, ingenieros, profesionales del paisaje, instituciones públicas, líderes de la industria y tomadores de decisiones que están moldeando el futuro de ciudades más verdes y resilientes.</p>
            <p className="text-lg leading-relaxed">Los patrocinadores y socios ganarán visibilidad durante todo el congreso y se convertirán en parte de una plataforma diseñada para fomentar la colaboración, la innovación y el impacto a largo plazo en el sector.</p>
            <p className="text-lg leading-relaxed">¿Interesado en unirte a WGIC26 como patrocinador o socio?</p>
            <p className="text-lg leading-relaxed">Contáctanos en: sponsorship@wgic26.org</p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-6.jpg"
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

export default July2026Newsletter7Spanish;
