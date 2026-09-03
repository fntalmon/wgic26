import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter5Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Maio 2026"
        description="Última semana para submeter o seu artigo, nova palestrante confirmada Dorothy Aseyo, patrocinadores e mantenha-se conectado"
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
              src="/newsletters/img/nl5/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Call for Papers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Última semana para submeter o seu artigo ao WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              O Chamado para Artigos e Projetos para o Congresso Mundial de
              Infraestrutura Verde 2026 (WGIC26) está a entrar na sua última semana.
            </p>
            <p className="text-lg leading-relaxed">
              Pesquisadores, profissionais, designers, formuladores de políticas e
              especialistas da indústria estão convidados a submeter as suas
              contribuições sobre infraestrutura verde e soluções baseadas na natureza
              antes do prazo oficial.
            </p>
            <p className="text-lg leading-relaxed">
              O WGIC26 aceita pesquisas originais, estudos de caso e aplicações
              inovadoras em formato de artigo curto (máximo de 5 páginas, MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Todas as submissões passarão por um rigoroso processo de revisão por
              pares, e os artigos aceites serão publicados nos anais oficiais do
              congresso. Contribuições selecionadas também serão consideradas para
              Edições Especiais em Silvicultura Urbana e Verde Urbano (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Prazo final: 31 de maio de 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Descubra as diretrizes de submissão e acesse a plataforma aqui.
              </a>
            </p>
          </div>

          {/* Confirmed Speaker */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Nova palestrante confirmada: Dorothy Aseyo
            </h3>
            <p className="text-lg leading-relaxed">
              Dorothy Aseyo trabalha na conservação ambiental, empoderamento
              comunitário, meios de subsistência sustentáveis e resiliência climática,
              promovendo soluções baseadas na natureza e ação comunitária para
              construir sociedades mais resilientes e inclusivas.
            </p>
            <p className="text-lg leading-relaxed">
              Como Diretora Executiva do Movimento Cinturão Verde, fundado pela
              laureada com o Prêmio Nobel da Paz Wangari Maathai, seu trabalho
              contribui para avançar o diálogo global sobre sustentabilidade, justiça
              ambiental e transformação liderada pela comunidade.
            </p>
            <p className="text-lg leading-relaxed">
              No WGIC26, ela trará insights valiosos para a discussão sobre como a
              infraestrutura verde pode apoiar comunidades mais saudáveis e resilientes
              em todo o mundo.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Mais palestrantes e atualizações do programa serão anunciados em breve aqui.
              </a>
            </p>
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/photo-5.jpg"
                alt=""
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Sponsors */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Junte-se ao WGIC26 como patrocinador
            </h3>
            <p className="text-lg leading-relaxed">
              O WGIC26 continua a crescer graças ao apoio de organizações líderes
              comprometidas com o futuro da infraestrutura verde e soluções baseadas
              na natureza.
            </p>
            <p className="text-lg leading-relaxed">
              Estamos orgulhosos de contar com o apoio de empresas e organizações
              como:
            </p>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/sponsors-strip.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Hunter",
                "Sempergreen",
                "ZinCo",
                "JardínMóvil",
                "Eixverd",
                "Verdtical",
                "Greenroofs",
                "ASESCUVE",
                "PRONATUR",
              ].map((sponsor) => (
                <div key={sponsor} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center">
                  <div className="font-semibold text-neutral-800">{sponsor}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Torne-se parte de uma plataforma internacional que conecta
              pesquisadores, formuladores de políticas, arquitetos, engenheiros, líderes
              da indústria e inovadores de todo o mundo.
            </p>
            <p className="text-lg leading-relaxed">
              Para oportunidades de patrocínio e informações sobre parcerias, entre em
              contato{" "}
              <a href="mailto:sponsorship@wgic26.org" className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera">
                sponsorship@wgic26.org
              </a>
            </p>
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
              para se manter atualizado com os últimos anúncios, palestrantes, atualizações do
              programa e marcos importantes que antecedem o congresso.
            </p>
            <p className="text-lg leading-relaxed">
              Participe da conversa e faça parte da comunidade global que está
              moldando o futuro da infraestrutura verde e soluções baseadas na
              natureza.
            </p>
          </div>

          {/* CTA Buttons */}
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl5/photo-11.jpg"
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

export default May2026Newsletter5Portuguese;
