import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter10Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Julho 2026 #5"
        description="Bilhetes Early Bird disponíveis até 30 de setembro, explore Barcelona através das Visitas Técnicas do WGIC26, e o IDAEA apoia o WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de julho de 2026 #5
            </h2>
          </div>

          {/* Bilhetes Early Bird disponívei */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Bilhetes Early Bird disponíveis até 30 de setembro
            </h3>
            <p className="text-lg leading-relaxed">Os bilhetes Early Bird para o WGIC26 já estão disponíveis através do site oficial do evento.</p>
            <p className="text-lg leading-relaxed">De 27 a 30 de outubro de 2026, Barcelona e Lleida receberão a comunidade internacional de infraestrutura verde para quatro dias de palestras, sessões científicas, visitas técnicas, exposições e networking.</p>
            <p className="text-lg leading-relaxed">Junte-se a investigadores, profissionais, empresas, instituições públicas e líderes da indústria que trabalham para moldar cidades mais saudáveis, seguras e resilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Compre os seus bilhetes Early Bird até 30 de setembro aqui.
              </a>
            </p>
          </div>

          {/* Explore Barcelona através das  */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Explore Barcelona através das Visitas Técnicas do WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Os participantes do WGIC26 terão a oportunidade de visitar alguns dos telhados verdes e fachadas verdes mais emblemáticos de Barcelona.</p>
            <p className="text-lg leading-relaxed">Estas visitas técnicas oferecerão acesso direto a projetos de infraestrutura verde pela cidade, conectando teoria, prática e verdadeira transformação urbana.</p>
            <p className="text-lg leading-relaxed">Os grupos serão limitados, com guias especializados em cada local.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra as visitas técnicas aqui.
              </a>
            </p>
          </div>

          {/* IDAEA apoia o WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              IDAEA apoia o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Temos o prazer de anunciar o apoio do IDAEA, o Instituto de Avaliação Ambiental e Pesquisa em Água, ao WGIC26.</p>
            <p className="text-lg leading-relaxed">O IDAEA traz uma forte perspectiva científica sobre avaliação ambiental, qualidade da água, qualidade do ar e o impacto da atividade humana nos ecossistemas.</p>
            <p className="text-lg leading-relaxed">O seu apoio reforça o caráter interdisciplinar do WGIC26 e a sua conexão com desafios-chave como resiliência climática, gestão da água e ambientes urbanos mais saudáveis.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Conheça todos os nossos patrocinadores e apoiantes aqui.
              </a>
            </p>
          </div>

          {/* Mantenha-se conectado com o WG */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Mantenha-se conectado com o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Os nossos canais oficiais já estão ativos. Siga o WGIC26 no LinkedIn e Instagram para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e marcos importantes que antecedem o congresso. Junte-se à conversação e faça parte da comunidade global que está a moldar o futuro da infraestrutura verde e soluções baseadas na natureza.</p>
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

export default July2026Newsletter10Portuguese;
