import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter4Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Maio 2026"
        description="Prazo para Submissão alargado, oradores confirmados, Barcelona Capital Mundial da Arquitetura 2026, e mantenha-se conectado"
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
              Newsletter de Maio 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Deadline Extended */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Prazo Anterior</div>
                <div className="text-lg font-semibold text-neutral-800">30 de Abril de 2026</div>
              </div>
              <div className="text-cactus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-cactus uppercase tracking-wider font-semibold">Novo Prazo</div>
                <div className="text-lg font-semibold text-cactus">31 de Maio de 2026</div>
              </div>
            </div>

            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 mb-2">
              Prazo para Submissão de Trabalhos e Projetos alargado
            </h3>
            <p className="text-lg leading-relaxed">
              Temos o prazer de anunciar que o prazo para a submissão de Trabalhos e
              Projetos foi alargado até <strong>31 de Maio de 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Investigadores, profissionais, designers, formuladores de políticas e
              especialistas da indústria agora têm mais tempo para submeter as suas
              contribuições para o Congresso Mundial de Infraestrutura Verde 2026
              (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              O WGIC26 acolhe investigação original, estudos de caso e aplicações
              inovadoras relacionadas com infraestrutura verde e soluções baseadas na
              natureza em ambientes urbanos.
            </p>
            <p className="text-lg leading-relaxed">
              Todas as submissões passarão por um rigoroso processo de revisão por
              pares liderado pelo Comité Científico, com os trabalhos aceites a serem
              incluídos nos atos oficiais do congresso.
            </p>
            <p className="text-lg leading-relaxed">
              Esta é uma oportunidade para contribuir para o diálogo global sobre como
              construir cidades mais resilientes, sustentáveis e saudáveis.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Novo prazo de submissão: 31 de Maio de 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra as diretrizes de submissão e aceda à plataforma aqui.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Oradores confirmados no WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              O WGIC26 continua a reunir vozes internacionais de destaque que moldam
              o futuro da infraestrutura verde, sustentabilidade urbana, arquitetura e
              soluções baseadas na natureza.
            </p>
            <p className="text-lg leading-relaxed">
              Os oradores confirmados até à data incluem:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-5.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-6.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-11.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Marcos Ros", role: "Arquiteto, académico e Membro do Parlamento Europeu" },
                { name: "Salvador Rueda", role: "Fundador da Fundação de Ecologia Urbana e Territorial (FEUT) e criador do modelo Superblocos" },
                { name: "Alberto T. Estévez", role: "Fundador da ESARQ-UIC Barcelona e pioneiro em arquitetura biodigital" },
                { name: "Vicente Guallart", role: "Fundador da IAAC e Co-Fundador da Urbanitree" },
                { name: "Enric Batlle", role: "Sócio Fundador da Batlleiroig" },
                { name: "Wendy Y. Chen", role: "Professora na Universidade de Hong Kong, especializada em infraestrutura verde-azul urbana" },
                { name: "Dorothy Aseyo", role: "Diretora Executiva do Movimento Cinturão Verde" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-800">{speaker.name}</div>
                  <div className="text-sm text-neutral-500">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Juntos, refletem o carácter multidisciplinar e internacional do WGIC26,
              conectando política, pesquisa, design, ecologia e inovação.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Mais oradores e atualizações do programa serão anunciados em breve aqui.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Barcelona, Capital Mundial da Arquitetura 2026
            </h3>
            <p className="text-lg leading-relaxed">
              Em 2026, Barcelona tornará-se oficialmente a Capital Mundial da
              Arquitetura, reconhecendo a liderança global da cidade em arquitetura,
              urbanismo e transformação urbana sustentável.
            </p>
            <p className="text-lg leading-relaxed">
              Esta designação destaca a capacidade única de Barcelona de conectar
              design, inovação, espaço público e responsabilidade ambiental, reforçando
              a sua posição como referência internacional para as cidades do futuro.
            </p>
            <p className="text-lg leading-relaxed">
              Neste contexto, o WGIC26 Barcelona Lleida contribuirá para a conversa
              global sobre como a infraestrutura verde e as soluções baseadas na
              natureza podem ajudar a criar ambientes urbanos mais resilientes,
              habitáveis e saudáveis.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra mais sobre o programa e detalhes de inscrição aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-12.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Stay Connected */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Mantenha-se conectado com o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Os nossos canais oficiais já estão ativos.
            </p>
            <p className="text-lg leading-relaxed">
              Siga o WGIC26 no{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              e{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Instagram
              </a>{' '}
              para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e
              marcos importantes que antecedem o congresso.
            </p>
            <p className="text-lg leading-relaxed">
              Junte-se à conversa e faça parte da comunidade global que molda o futuro
              da infraestrutura verde e das soluções baseadas na natureza.
            </p>
          </div>

          {/* CTA Buttons */}
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-13.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Seja nosso patrocinador
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Inscreva-se na newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="pt" light />
        </div>
        </section>
    </div>
  );
};

export default May2026Newsletter4Portuguese;
