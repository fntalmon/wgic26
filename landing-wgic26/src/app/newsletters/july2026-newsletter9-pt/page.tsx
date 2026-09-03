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
              Newsletter de julho de 2026 #4
            </h2>
          </div>

          {/* Os bilhetes de Early Bird já e */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Os bilhetes de Early Bird já estão à venda
            </h3>
            <p className="text-lg leading-relaxed">Os bilhetes de Early Bird para o WGIC26 - 12º Congresso Mundial de Infraestrutura Verde estão disponíveis até 30 de setembro de 2026.</p>
            <p className="text-lg leading-relaxed">Seja você um indivíduo, uma organização ou uma equipa, o WGIC26 é a sua oportunidade de fazer parte da conversa global sobre infraestrutura verde, soluções baseadas na natureza e futuros urbanos mais saudáveis.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Registe-se agora aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* A Naturbana apoia o WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra todos os apoiantes e parceiros do WGIC26 aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* As submissões de posters estão */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Submeta o seu poster aqui antes de 30 de setembro.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-7.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Mantenha-se conectado com o WG */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Mantenha-se conectado com o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Os nossos canais oficiais já estão ativos. Siga o WGIC26 no LinkedIn e Instagram para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e marcos importantes que antecedem o congresso. Junte-se à conversação e faça parte da comunidade global que está a moldar o futuro da infraestrutura verde e soluções baseadas na natureza.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://panel.helice.app/w/wgic26/214760/registration"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Compre o seu bilhete antecipado
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

export default July2026Newsletter9Portuguese;
