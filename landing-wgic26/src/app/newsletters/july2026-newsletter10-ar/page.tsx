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
              النشرة الإخبارية ليوليو 2026 #5
            </h2>
          </div>

          {/* تذاكر الطيور المبكرة متاحة حتى */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              تذاكر الطيور المبكرة متاحة حتى 30 سبتمبر
            </h3>
            <p className="text-lg leading-relaxed">تذاكر الطيور المبكرة لـ WGIC26 متاحة الآن من خلال الموقع الرسمي للحدث.</p>
            <p className="text-lg leading-relaxed">من 27 إلى 30 أكتوبر 2026، ستستضيف برشلونة ولييدا مجتمع البنية التحتية الخضراء الدولي لمدة أربعة أيام من الكلمات الرئيسية، الجلسات العلمية، الزيارات الفنية، المعارض والتواصل.</p>
            <p className="text-lg leading-relaxed">انضم إلى الباحثين والممارسين والشركات والمؤسسات العامة وقادة الصناعة الذين يعملون على تشكيل مدن أكثر صحة وأمانًا ومرونة.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                اشترِ تذاكر الطيور المبكرة حتى 30 سبتمبر هنا.
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

          {/* استكشف برشلونة من خلال الزيارا */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                اكتشف الزيارات الفنية هنا.
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

          {/* IDAEA تدعم WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                التقِ بجميع رعاتنا وداعمينا هنا.
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

          {/* ابق على اتصال مع WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              ابق على اتصال مع WGIC26
            </h3>
            <p className="text-lg leading-relaxed">قنواتنا الرسمية أصبحت الآن حية. تابع WGIC26 على لينكد إن وإنستغرام لتبقى على اطلاع بأحدث الإعلانات، المتحدثين، تحديثات البرنامج، والمعالم الرئيسية التي تسبق المؤتمر. انضم إلى المحادثة وكن جزءاً من المجتمع العالمي الذي يشكل مستقبل البنية التحتية الخضراء والحلول المستندة إلى الطبيعة.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://panel.helice.app/w/wgic26/214760/registration"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              اشترِ تذكرتك المبكرة
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

export default July2026Newsletter10Arabic;
