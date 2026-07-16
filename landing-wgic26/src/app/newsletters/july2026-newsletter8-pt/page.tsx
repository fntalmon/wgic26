import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter8Portuguese = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Julho 2026 #3"
        description="Maria Buhigas junta-se ao WGIC26, a resiliência climática lidera a conversa e os bilhetes já estão disponíveis"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de julho de 2026 #3
            </h2>
          </div>

          {/* Maria Buhigas junta-se ao WGIC */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Maria Buhigas junta-se ao WGIC26!
            </h3>
            <p className="text-lg leading-relaxed">Temos o prazer de anunciar Maria Buhigas como oradora no Congresso Mundial de Infraestrutura Verde 2026 (WGIC26).</p>
            <p className="text-lg leading-relaxed">Como Arquiteta Chefe da Câmara Municipal de Barcelona, Buhigas traz uma perspetiva estratégica sobre planeamento urbano, espaço público, arquitetura e a transformação das cidades em resposta aos desafios sociais e ambientais atuais.</p>
            <p className="text-lg leading-relaxed">A sua participação é especialmente relevante num ano em que Barcelona está no centro da conversa arquitetónica global, reforçando a ligação entre inovação urbana, infraestrutura verde e a criação de cidades mais saudáveis.</p>
            <p className="text-lg leading-relaxed">No WGIC26, a sua contribuição ajudará a moldar o papel das cidades na promoção de futuros urbanos mais resilientes, inclusivos e integrados com a natureza.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Descubra os oradores confirmados aqui.
              </a>
            </p>
          </div>

          {/* O que os documentos revelam: a */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              O que os documentos revelam: a resiliência climática lidera a conversa
            </h3>
            <p className="text-lg leading-relaxed">A análise dos documentos submetidos ao WGIC26 confirma uma tendência clara: a resiliência climática é uma das principais prioridades para a comunidade internacional de infraestrutura verde.</p>
            <p className="text-lg leading-relaxed">Entre os tópicos mais recorrentes, as submissões destacam a crescente importância da gestão da água, soluções baseadas na natureza, sustentabilidade urbana, saúde e bem-estar, biodiversidade, qualidade do ar, tecnologias e design de projetos.</p>
            <p className="text-lg leading-relaxed">Mais de metade das contribuições analisadas foca nos impactos da infraestrutura verde, mostrando como investigadores e profissionais estão a trabalhar para medir, projetar e implementar soluções que respondam a desafios urbanos reais.</p>
            <p className="text-lg leading-relaxed">Esta diversidade temática reforça o WGIC26 como um ponto de encontro global para aqueles que trabalham para moldar cidades mais saudáveis, seguras e resilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Explore os principais tópicos que moldam o WGIC26 aqui.
              </a>
            </p>
          </div>

          {/* Os bilhetes já estão disponíve */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Os bilhetes já estão disponíveis: garanta o seu lugar no WGIC26
            </h3>
            <p className="text-lg leading-relaxed">As inscrições estão agora abertas para o Congresso Mundial de Infraestrutura Verde 2026.</p>
            <p className="text-lg leading-relaxed">De 27 a 30 de outubro, Barcelona e Lleida receberão investigadores, profissionais, formuladores de políticas, empresas, instituições públicas e especialistas internacionais que trabalham na vanguarda da infraestrutura verde e soluções baseadas na natureza.</p>
            <p className="text-lg leading-relaxed">O WGIC26 oferecerá uma oportunidade única para assistir a palestras principais, sessões científicas, workshops temáticos, visitas técnicas, exposições e atividades de networking com a comunidade global de infraestrutura verde.</p>
            <p className="text-lg leading-relaxed">27-29 de outubro | CCIB - Parc del Fòrum, Barcelona (Espanha)</p>
            <p className="text-lg leading-relaxed">30 de outubro | Universidade de Lleida - Lleida (Espanha)</p>
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

          {/* Mantenha-se conectado com o WG */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Mantenha-se conectado com o WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Os nossos canais oficiais já estão ativos. Siga o WGIC26 no LinkedIn e Instagram para se manter atualizado com os últimos anúncios, oradores, atualizações do programa e marcos importantes que antecedem o congresso. Junte-se à conversa e faça parte da comunidade global que está a moldar o futuro da infraestrutura verde e soluções baseadas na natureza.</p>
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

export default July2026Newsletter8Portuguese;
