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
              Newsletter de julho de 2026 #5
            </h2>
          </div>

          {/* Bilhetes Early Bird disponívei */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Bilhetes Early Bird disponíveis até 30 de setembro
            </h3>
            <p className="text-lg leading-relaxed">Os bilhetes Early Bird para o WGIC26 já estão disponíveis através do site oficial do evento.</p>
            <p className="text-lg leading-relaxed">De 27 a 30 de outubro de 2026, Barcelona e Lleida receberão a comunidade internacional de infraestrutura verde para quatro dias de palestras, sessões científicas, visitas técnicas, exposições e networking.</p>
            <p className="text-lg leading-relaxed">Junte-se a investigadores, profissionais, empresas, instituições públicas e líderes da indústria que trabalham para moldar cidades mais saudáveis, seguras e resilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Compre os seus bilhetes Early Bird até 30 de setembro aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/collage.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Explore Barcelona através das  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra as visitas técnicas aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-10.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* IDAEA apoia o WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Conheça todos os nossos patrocinadores e apoiantes aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-11.jpg"
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

export default July2026Newsletter10Portuguese;
