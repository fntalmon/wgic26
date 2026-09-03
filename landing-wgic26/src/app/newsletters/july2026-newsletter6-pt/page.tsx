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
              Newsletter de julho de 2026
            </h2>
          </div>

          {/* Obrigado pelas suas submissões */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Obrigado pelas suas submissões: o processo de revisão começa
            </h3>
            <p className="text-lg leading-relaxed">O Call for Papers &amp; Projects do WGIC26 já foi concluído. Gostaríamos de agradecer a todos os investigadores, profissionais, designers e especialistas que partilharam o seu trabalho connosco. O Comité Científico está agora a rever cada submissão. Assim que o processo de avaliação estiver completo, cada autor será contactado diretamente e informado se o seu artigo ou projeto foi selecionado para fazer parte do WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra os próximos passos no processo de submissão e revisão aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-1.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Uma resposta global de 32 país */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra mais sobre a comunidade internacional que se reúne no WGIC26 aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Descubra o CCIB: o principal l */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Descubra o CCIB: o principal local do WGIC26
            </h3>
            <p className="text-lg leading-relaxed">De 27 a 29 de outubro, o WGIC26 terá lugar no Centro de Convenções Internacional de Barcelona (CCIB), localizado no Parc del Fòrum. Com espaços versáteis, luz natural e capacidade para eventos internacionais de grande escala, o CCIB proporcionará o cenário para palestras principais, sessões científicas, exposições e oportunidades de networking. Localizado perto da praia e bem ligado ao centro da cidade de Barcelona e ao aeroporto, oferece um ambiente ideal para acolher a comunidade global de infraestrutura verde.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Planeie a sua visita a Barcelona e descubra mais sobre o destino aqui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-7.jpg"
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
            <p className="text-lg leading-relaxed">Os nossos canais oficiais já estão ativos. Siga o WGIC26 no LinkedIn e Instagram para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e marcos importantes que antecedem o congresso. Junte-se à conversação e faça parte da comunidade global que está a moldar o futuro da infraestrutura verde e das soluções baseadas na natureza.</p>
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

export default July2026Newsletter6Portuguese;
