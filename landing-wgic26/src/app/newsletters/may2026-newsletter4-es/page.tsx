import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter4Spanish = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Mayo 2026"
        description="Plazo de presentación ampliado, ponentes confirmados, Barcelona Capital Mundial de la Arquitectura 2026, y mantente conectado"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de Mayo 2026
            </h2>
          </div>

          {/* Deadline Extended */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-white/50 uppercase tracking-wider">Plazo Anterior</div>
                <div className="text-lg font-semibold text-white">30 de abril de 2026</div>
              </div>
              <div className="text-potus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-potus uppercase tracking-wider font-semibold">Nuevo Plazo</div>
                <div className="text-lg font-semibold text-potus">31 de mayo de 2026</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Se ha ampliado el plazo para la presentación de trabajos y proyectos
            </h3>
            <p className="text-lg leading-relaxed">
              Nos complace anunciar que el plazo para la presentación de trabajos y
              proyectos se ha ampliado hasta el <strong>31 de mayo de 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Investigadores, profesionales, diseñadores, responsables de políticas y
              expertos de la industria ahora tienen tiempo adicional para enviar sus
              contribuciones al Congreso Mundial de Infraestructura Verde 2026
              (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 da la bienvenida a investigaciones originales, estudios de caso y
              aplicaciones innovadoras relacionadas con la infraestructura verde y
              soluciones basadas en la naturaleza en entornos urbanos.
            </p>
            <p className="text-lg leading-relaxed">
              Todas las presentaciones pasarán por un riguroso proceso de revisión por
              pares dirigido por el Comité Científico, y los trabajos aceptados se incluirán
              en las actas oficiales del congreso.
            </p>
            <p className="text-lg leading-relaxed">
              Esta es una oportunidad para contribuir al diálogo global sobre la
              construcción de ciudades más resilientes, sostenibles y saludables.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Nuevo plazo de presentación: 31 de mayo de 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubre las pautas de presentación y accede a la plataforma aquí.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Ponentes confirmados en WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 sigue reuniendo a las principales voces internacionales que están
              dando forma al futuro de la infraestructura verde, la sostenibilidad urbana,
              la arquitectura y las soluciones basadas en la naturaleza.
            </p>
            <p className="text-lg leading-relaxed">
              Los ponentes confirmados hasta la fecha incluyen:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Marcos Ros", role: "Arquitecto, académico y miembro del Parlamento Europeo" },
                { name: "Salvador Rueda", role: "Fundador de la Fundación de Ecología Urbana y Territorial (FEUT) y creador del modelo de Supermanzanas" },
                { name: "Alberto T. Estévez", role: "Fundador de ESARQ-UIC Barcelona y pionero en arquitectura biodigital" },
                { name: "Vicente Guallart", role: "Fundador de IAAC y cofundador de Urbanitree" },
                { name: "Enric Batlle", role: "Socio fundador de Batlleiroig" },
                { name: "Wendy Y. Chen", role: "Profesora en la Universidad de Hong Kong, especializada en infraestructura verde azul urbana" },
                { name: "Dorothy Aseyo", role: "Directora Ejecutiva del Movimiento Cinturón Verde" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white">{speaker.name}</div>
                  <div className="text-sm text-white/60">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Juntos, reflejan el carácter multidisciplinario e internacional de WGIC26,
              conectando política, investigación, diseño, ecología e innovación.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Pronto se anunciarán más ponentes y actualizaciones del programa aquí.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Barcelona, Capital Mundial de la Arquitectura 2026
            </h3>
            <p className="text-lg leading-relaxed">
              En 2026, Barcelona se convertirá oficialmente en la Capital Mundial de la
              Arquitectura, reconociendo el liderazgo global de la ciudad en arquitectura,
              urbanismo y transformación urbana sostenible.
            </p>
            <p className="text-lg leading-relaxed">
              Esta designación destaca la capacidad única de Barcelona para conectar
              diseño, innovación, espacio público y responsabilidad ambiental,
              reforzando su posición como referencia internacional para las ciudades del
              futuro.
            </p>
            <p className="text-lg leading-relaxed">
              En este contexto, WGIC26 Barcelona Lleida contribuirá a la conversación
              global sobre cómo la infraestructura verde y las soluciones basadas en la
              naturaleza pueden ayudar a crear entornos urbanos más resilientes,
              habitables y saludables.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubre más sobre el programa y los detalles de inscripción aquí.
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                LinkedIn
              </a>
              y{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>{' '}
              para estar al tanto de los últimos anuncios, ponentes, actualizaciones del programa y
              hitos clave que conducen al congreso.
            </p>
            <p className="text-lg leading-relaxed">
              Únete a la conversación y sé parte de la comunidad global que está dando
              forma al futuro de la infraestructura verde y las soluciones basadas en la
              naturaleza.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Sé nuestro patrocinador
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

export default May2026Newsletter4Spanish;
