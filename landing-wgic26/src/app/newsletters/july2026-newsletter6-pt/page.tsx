import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter6Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Julho 2026"
        description="Obrigado pelas suas submissões, o processo de revisão começa, uma resposta global de 32 países e descubra o CCIB"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de julho de 2026
            </h2>
          </div>

          {/* Obrigado pelas suas submissões */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Obrigado pelas suas submissões: o processo de revisão começa
            </h3>
            <p className="text-lg leading-relaxed">O Call for Papers &amp; Projects do WGIC26 já foi concluído. Gostaríamos de agradecer a todos os investigadores, profissionais, designers e especialistas que partilharam o seu trabalho connosco. O Comité Científico está agora a rever cada submissão. Assim que o processo de avaliação estiver completo, cada autor será contactado diretamente e informado se o seu artigo ou projeto foi selecionado para fazer parte do WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra os próximos passos no processo de submissão e revisão aqui.
              </a>
            </p>
          </div>

          {/* Uma resposta global de 32 país */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Uma resposta global de 32 países
            </h3>
            <p className="text-lg leading-relaxed">O WGIC26 recebeu artigos e projetos de autores representando 32 países da Europa, Ásia, América do Norte, América do Sul e Oceânia.</p>
            <p className="text-lg leading-relaxed">Os países com o maior número de submissões incluem:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>Espanha: 20</li>
              <li>Áustria: 14</li>
              <li>Estados Unidos: 10</li>
              <li>Itália: 7</li>
              <li>Austrália: 6</li>
              <li>França: 6</li>
              <li>Países Baixos: 6</li>
              <li>Alemanha: 6</li>
              <li>Bélgica: 6</li>
            </ul>
            <p className="text-lg leading-relaxed">Esta diversidade geográfica reflete o alcance internacional do WGIC26 e o crescente interesse global em infraestrutura verde e soluções baseadas na natureza.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra mais sobre a comunidade internacional que se reúne no WGIC26 aqui.
              </a>
            </p>
          </div>

          {/* Descubra o CCIB: o principal l */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Descubra o CCIB: o principal local do WGIC26
            </h3>
            <p className="text-lg leading-relaxed">De 27 a 29 de outubro, o WGIC26 terá lugar no Centro de Convenções Internacional de Barcelona (CCIB), localizado no Parc del Fòrum. Com espaços versáteis, luz natural e capacidade para eventos internacionais de grande escala, o CCIB proporcionará o cenário para palestras principais, sessões científicas, exposições e oportunidades de networking. Localizado perto da praia e bem ligado ao centro da cidade de Barcelona e ao aeroporto, oferece um ambiente ideal para acolher a comunidade global de infraestrutura verde.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Planeie a sua visita a Barcelona e descubra mais sobre o destino aqui.
              </a>
            </p>
          </div>

          {/* Mantenha-se conectado com o WG */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Mantenha-se conectado com o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Os nossos canais oficiais já estão ativos. Siga o WGIC26 no LinkedIn e Instagram para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e marcos importantes que antecedem o congresso. Junte-se à conversação e faça parte da comunidade global que está a moldar o futuro da infraestrutura verde e das soluções baseadas na natureza.</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/registration"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Compre o seu bilhete antecipado
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Inscreva-se na newsletter
            </Link>
          </div>

          <NewsletterFooter language="pt" />
        </div>
      </section>
    </div>
  );
};

export default July2026Newsletter6Portuguese;
