import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter4Arabic = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 النشرة الإخبارية - مايو 2026"
        description="تم تمديد موعد تقديم الأوراق والمشاريع، المتحدثون المؤكدون، برشلونة عاصمة العالم للعمارة 2026، وابقَ على تواصل"
        section="newsletters"
      />

      <section className="w-full py-10 px-4">
        <div className="max-w-[640px] mx-auto bg-white text-neutral-700 shadow-2xl" dir="rtl">
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-neutral-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/wgic26-logo.png"
              alt="WGIC26"
              className="h-14 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-cactus">
              النشرة الإخبارية لمايو 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Deadline Extended */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <div className="flex items-center gap-4 mb-4 flex-row-reverse">
              <div className="text-center">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">الموعد النهائي السابق</div>
                <div className="text-lg font-semibold text-neutral-800">30 أبريل 2026</div>
              </div>
              <div className="text-cactus text-2xl">←</div>
              <div className="text-center">
                <div className="text-xs text-cactus uppercase tracking-wider font-semibold">الموعد النهائي الجديد</div>
                <div className="text-lg font-semibold text-cactus">31 مايو 2026</div>
              </div>
            </div>

            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 mb-2">
              تم تمديد موعد تقديم الأوراق والمشاريع
            </h3>
            <p className="text-lg leading-relaxed">
              يسعدنا أن نعلن أنه تم تمديد موعد تقديم الأوراق والمشاريع حتى <strong>31 مايو 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              يتوفر الآن للباحثين والمهنيين والمصممين وصانعي السياسات وخبراء الصناعة
              مزيد من الوقت لتقديم مساهماتهم إلى المؤتمر العالمي للبنية التحتية الخضراء 2026 (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              يرحب WGIC26 بالأبحاث الأصلية ودراسات الحالة والتطبيقات المبتكرة
              المتعلقة بالبنية التحتية الخضراء والحلول القائمة على الطبيعة في البيئات الحضرية.
            </p>
            <p className="text-lg leading-relaxed">
              ستخضع جميع المشاركات لعملية مراجعة صارمة من قبل النظراء يقودها
              اللجنة العلمية، وستُدرج الأوراق المقبولة في وقائع المؤتمر الرسمية.
            </p>
            <p className="text-lg leading-relaxed">
              هذه فرصة للمساهمة في الحوار العالمي حول بناء مدن أكثر مرونة واستدامة وصحة.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>الموعد النهائي الجديد للتقديم: 31 مايو 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                اكتشف إرشادات التقديم وادخل إلى المنصة هنا.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              المتحدثون المؤكدون في WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              يواصل WGIC26 جمع أصوات دولية رائدة تشكل
              مستقبل البنية التحتية الخضراء والاستدامة الحضرية والعمارة والحلول القائمة على الطبيعة.
            </p>
            <p className="text-lg leading-relaxed">
              يشمل المتحدثون المؤكدون حتى الآن:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-5.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-6.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-11.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Marcos Ros", role: "مهندس معماري وأكاديمي وعضو في البرلمان الأوروبي" },
                { name: "Salvador Rueda", role: "مؤسس مؤسسة علم البيئة الحضري والإقليمي (FEUT) ومنشئ نموذج المربعات السوبر" },
                { name: "Alberto T. Estévez", role: "مؤسس ESARQ-UIC برشلونة ورائد في العمارة البيولوجية الرقمية" },
                { name: "Vicente Guallart", role: "مؤسس IAAC والشريك المؤسس لـ Urbanitree" },
                { name: "Enric Batlle", role: "الشريك المؤسس لـ Batlleiroig" },
                { name: "Wendy Y. Chen", role: "أستاذة في جامعة هونغ كونغ، متخصصة في البنية التحتية الخضراء-الزرقاء الحضرية" },
                { name: "Dorothy Aseyo", role: "المديرة التنفيذية لحركة الحزام الأخضر" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-800">{speaker.name}</div>
                  <div className="text-sm text-neutral-500">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              معاً، يعكسون الطابع متعدد التخصصات والدولي لـ WGIC26،
              يربطون السياسة والبحث والتصميم والبيولوجيا والابتكار.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                سيتم الإعلان عن المزيد من المتحدثين وتحديثات البرنامج قريباً هنا.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              برشلونة، عاصمة العالم للعمارة 2026
            </h3>
            <p className="text-lg leading-relaxed">
              في عام 2026، ستصبح برشلونة رسمياً عاصمة العالم للعمارة،
              معترفاً بالقيادة العالمية للمدينة في العمارة والتخطيط الحضري والتحول الحضري المستدام.
            </p>
            <p className="text-lg leading-relaxed">
              يسلط هذا التعيين الضوء على القدرة الفريدة لبرشلونة على ربط
              التصميم والابتكار والفضاء العام والمسؤولية البيئية، مما يعزز
              مكانتها كمرجع دولي لمدن المستقبل.
            </p>
            <p className="text-lg leading-relaxed">
              في هذا السياق، سيساهم WGIC26 برشلونة - لاريدا في المحادثة
              العالمية حول كيف يمكن للبنية التحتية الخضراء والحلول القائمة على الطبيعة
              أن تساعد في خلق بيئات حضرية أكثر مرونة وقابلية للعيش وصحة.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                اكتشف المزيد عن البرنامج وتفاصيل التسجيل هنا.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-12.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Stay Connected */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              ابقَ على تواصل مع WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              قنواتنا الرسمية تعمل الآن.
            </p>
            <p className="text-lg leading-relaxed">
              تابع WGIC26 على{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              و{" "}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Instagram
              </a>{' '}
              للبقاء على اطلاع بأحدث الإعلانات والمتحدثين وتحديثات البرنامج
              والمعالم الرئيسية التي تسبق المؤتمر.
            </p>
            <p className="text-lg leading-relaxed">
              انضم إلى المحادثة وكن جزءاً من المجتمع العالمي الذي يشكل
              مستقبل البنية التحتية الخضراء والحلول القائمة على الطبيعة.
            </p>
          </div>

          {/* CTA Buttons */}
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-13.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              كن راعينا
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              اشترك في النشرة الإخبارية
            </Link>
          </div>
        
          <NewsletterFooter language="ar" light />
        </div>
        </section>
    </div>
  );
};

export default May2026Newsletter4Arabic;
