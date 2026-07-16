import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter10Arabic = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 النشرة الإخبارية - يوليو 2026 #5"
        description="تذاكر الطيور المبكرة متاحة حتى 30 سبتمبر، استكشف برشلونة من خلال الزيارات الفنية لـ WGIC26، و IDAEA تدعم WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80" dir="rtl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              النشرة الإخبارية ليوليو 2026 #5
            </h2>
          </div>

          {/* تذاكر الطيور المبكرة متاحة حتى */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              تذاكر الطيور المبكرة متاحة حتى 30 سبتمبر
            </h3>
            <p className="text-lg leading-relaxed">تذاكر الطيور المبكرة لـ WGIC26 متاحة الآن من خلال الموقع الرسمي للحدث.</p>
            <p className="text-lg leading-relaxed">من 27 إلى 30 أكتوبر 2026، ستستضيف برشلونة ولييدا مجتمع البنية التحتية الخضراء الدولي لمدة أربعة أيام من الكلمات الرئيسية، الجلسات العلمية، الزيارات الفنية، المعارض والتواصل.</p>
            <p className="text-lg leading-relaxed">انضم إلى الباحثين والممارسين والشركات والمؤسسات العامة وقادة الصناعة الذين يعملون على تشكيل مدن أكثر صحة وأمانًا ومرونة.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                اشترِ تذاكر الطيور المبكرة حتى 30 سبتمبر هنا.
              </a>
            </p>
          </div>

          {/* استكشف برشلونة من خلال الزيارا */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              استكشف برشلونة من خلال الزيارات الفنية لـ WGIC26
            </h3>
            <p className="text-lg leading-relaxed">سيحظى المشاركون في WGIC26 بفرصة زيارة بعض من أشهر الأسطح الخضراء والواجهات الخضراء في برشلونة.</p>
            <p className="text-lg leading-relaxed">ستوفر هذه الزيارات الفنية وصولاً مباشرًا إلى مشاريع البنية التحتية الخضراء في جميع أنحاء المدينة، مما يربط بين النظرية والممارسة والتحول الحضري الحقيقي.</p>
            <p className="text-lg leading-relaxed">ستكون المجموعات محدودة، مع مرشدين متخصصين في كل موقع.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                اكتشف الزيارات الفنية هنا.
              </a>
            </p>
          </div>

          {/* IDAEA تدعم WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              IDAEA تدعم WGIC26
            </h3>
            <p className="text-lg leading-relaxed">يسعدنا أن نعلن عن دعم IDAEA، معهد تقييم البيئة وبحوث المياه، لـ WGIC26.</p>
            <p className="text-lg leading-relaxed">يجلب IDAEA منظورًا علميًا قويًا حول تقييم البيئة، جودة المياه، جودة الهواء، وتأثير النشاط البشري على النظم البيئية.</p>
            <p className="text-lg leading-relaxed">يعزز دعمه الطابع متعدد التخصصات لـ WGIC26 وارتباطه بالتحديات الرئيسية مثل مرونة المناخ، إدارة المياه والبيئات الحضرية الأكثر صحة.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                التقِ بجميع رعاتنا وداعمينا هنا.
              </a>
            </p>
          </div>

          {/* ابق على اتصال مع WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              ابق على اتصال مع WGIC26
            </h3>
            <p className="text-lg leading-relaxed">قنواتنا الرسمية أصبحت الآن حية. تابع WGIC26 على لينكد إن وإنستغرام لتبقى على اطلاع بأحدث الإعلانات، المتحدثين، تحديثات البرنامج، والمعالم الرئيسية التي تسبق المؤتمر. انضم إلى المحادثة وكن جزءاً من المجتمع العالمي الذي يشكل مستقبل البنية التحتية الخضراء والحلول المستندة إلى الطبيعة.</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/registration"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              اشترِ تذكرتك المبكرة
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              اشترك في النشرة الإخبارية
            </Link>
          </div>

          <NewsletterFooter language="ar" />
        </div>
      </section>
    </div>
  );
};

export default July2026Newsletter10Arabic;
