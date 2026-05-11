import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const May2026Newsletter4Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Maio 2026"
        description="Prazo para Submissão alargado, oradores confirmados, Barcelona Capital Mundial da Arquitetura 2026, e mantenha-se conectado"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de Maio 2026
            </h2>
          </div>

          {/* Deadline Extended */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-white/50 uppercase tracking-wider">Prazo Anterior</div>
                <div className="text-lg font-semibold text-white">30 de Abril de 2026</div>
              </div>
              <div className="text-potus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-potus uppercase tracking-wider font-semibold">Novo Prazo</div>
                <div className="text-lg font-semibold text-potus">31 de Maio de 2026</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Descubra as diretrizes de submissão e aceda à plataforma aqui.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                <div key={speaker.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white">{speaker.name}</div>
                  <div className="text-sm text-white/60">{speaker.role}</div>
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
                className="text-potus"
              >
                Mais oradores e atualizações do programa serão anunciados em breve aqui.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra mais sobre o programa e detalhes de inscrição aqui.
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://web.facebook.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Facebook
              </a>{" "}
              e{" "}
              <a
                href="https://x.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Twitter
              </a>{" "}
              para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e
              marcos importantes que antecedem o congresso.
            </p>
            <p className="text-lg leading-relaxed">
              Junte-se à conversa e faça parte da comunidade global que molda o futuro
              da infraestrutura verde e das soluções baseadas na natureza.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Seja nosso patrocinador
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Inscreva-se na newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default May2026Newsletter4Portuguese;
