import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter7Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Julho 2026 #2"
        description="As inscrições estão abertas, oportunidades de publicação científica, patrocine o WGIC26 e mantenha-se conectado"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de julho de 2026 #2
            </h2>
          </div>

          {/* A sua porta de entrada para o  */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              A sua porta de entrada para o WGIC26 começa aqui!
            </h3>
            <p className="text-lg leading-relaxed">As inscrições estão agora abertas para o Congresso Mundial de Infraestrutura Verde 2026.</p>
            <p className="text-lg leading-relaxed">De 27 a 30 de outubro, Barcelona e Lleida receberão investigadores, profissionais, formuladores de políticas, empresas e especialistas internacionais que trabalham na vanguarda da infraestrutura verde e soluções baseadas na natureza.</p>
            <p className="text-lg leading-relaxed">O congresso oferecerá uma oportunidade única de assistir a palestras principais, sessões científicas, workshops temáticos, visitas técnicas, exposições e atividades de networking com a comunidade global de infraestrutura verde.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Garanta o seu bilhete e descubra as opções de inscrição aqui.
              </a>
            </p>
          </div>

          {/* O WGIC26 abre a porta a oportu */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              O WGIC26 abre a porta a oportunidades de publicação científica
            </h3>
            <p className="text-lg leading-relaxed">Os autores cujos artigos foram aceites para apresentação no WGIC26 terão a oportunidade de ganhar maior visibilidade através de publicações científicas de destaque na área.</p>
            <p className="text-lg leading-relaxed">Entre estas oportunidades, contribuições selecionadas poderão ser consideradas para publicação acelerada em uma Edição Especial do Journal of Living Architecture (JLIV), a revista revisada por pares da Green Infrastructure Foundation (GIF), afiliada à Green Roofs for Healthy Cities (GRHC).</p>
            <p className="text-lg leading-relaxed">O JLIV é escrito, revisado e editado por profissionais de arquitetura viva e compartilha pesquisas originais, aplicações educacionais, perspetivas académicas, recursos e discussões críticas relacionadas com o setor de arquitetura viva.</p>
            <p className="text-lg leading-relaxed">Esta oportunidade reforça o compromisso do WGIC26 em apoiar pesquisas de alta qualidade e ajudar os autores aceites a ampliar o impacto do seu trabalho além do congresso.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra mais sobre o Journal of Living Architecture aqui.
              </a>
            </p>
          </div>

          {/* Patrocine o WGIC26 e conecte-s */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Patrocine o WGIC26 e conecte-se com os líderes da sustentabilidade urbana
            </h3>
            <p className="text-lg leading-relaxed">O WGIC26 continua a construir um ecossistema internacional de empresas, organizações e instituições comprometidas com o avanço da infraestrutura verde, sustentabilidade urbana e soluções baseadas na natureza.</p>
            <p className="text-lg leading-relaxed">Tornar-se patrocinador é uma oportunidade de conectar a sua marca com um público global de investigadores, arquitetos, engenheiros, profissionais de paisagismo, instituições públicas, líderes da indústria e tomadores de decisão que estão a moldar o futuro de cidades mais verdes e resilientes.</p>
            <p className="text-lg leading-relaxed">Os patrocinadores e parceiros ganharão visibilidade durante todo o congresso e farão parte de uma plataforma projetada para fomentar a colaboração, inovação e impacto a longo prazo no setor.</p>
            <p className="text-lg leading-relaxed">Interessado em juntar-se ao WGIC26 como patrocinador ou parceiro?</p>
            <p className="text-lg leading-relaxed">Contacte-nos em: sponsorship@wgic26.org</p>
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

export default July2026Newsletter7Portuguese;
