import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter9Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Julho 2026 #4"
        description="Os bilhetes de Early Bird já estão à venda, a Naturbana apoia o WGIC26 e as submissões de posters estão abertas até 30 de setembro"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de julho de 2026 #4
            </h2>
          </div>

          {/* Os bilhetes de Early Bird já e */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Os bilhetes de Early Bird já estão à venda
            </h3>
            <p className="text-lg leading-relaxed">Os bilhetes de Early Bird para o WGIC26 - 12º Congresso Mundial de Infraestrutura Verde estão disponíveis até 30 de setembro de 2026.</p>
            <p className="text-lg leading-relaxed">Seja você um indivíduo, uma organização ou uma equipa, o WGIC26 é a sua oportunidade de fazer parte da conversa global sobre infraestrutura verde, soluções baseadas na natureza e futuros urbanos mais saudáveis.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Registe-se agora aqui.
              </a>
            </p>
          </div>

          {/* A Naturbana apoia o WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              A Naturbana apoia o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Temos o prazer de anunciar que a Naturbana apoia o WGIC26 e se juntará a nós no congresso.</p>
            <p className="text-lg leading-relaxed">A sua participação é um marco altamente relevante, especialmente dada a sua ligação à área ministerial relacionada com o âmbito do WGIC26.</p>
            <p className="text-lg leading-relaxed">Este apoio fortalece o WGIC26 como um ponto de encontro entre instituições, profissionais, investigadores e organizações que trabalham para promover a infraestrutura verde e a resiliência urbana.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra todos os apoiantes e parceiros do WGIC26 aqui.
              </a>
            </p>
          </div>

          {/* As submissões de posters estão */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              As submissões de posters estão abertas até 30 de setembro
            </h3>
            <p className="text-lg leading-relaxed">As submissões de posters permanecerão abertas até 30 de setembro de 2026, criando uma nova oportunidade para profissionais, investigadores, estudantes, organizações e equipas de projeto apresentarem o seu trabalho no congresso.</p>
            <p className="text-lg leading-relaxed">Todos os posters submetidos dentro do prazo terão a oportunidade de ser incluídos nos Anais impressos e digitais do WGIC26.</p>
            <p className="text-lg leading-relaxed">Os Anais são a publicação oficial do congresso, reunindo os artigos e posters aceites do WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Submeta o seu poster aqui antes de 30 de setembro.
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

export default July2026Newsletter9Portuguese;
