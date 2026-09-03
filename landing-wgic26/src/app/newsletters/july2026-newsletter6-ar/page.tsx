import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter6Arabic = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 النشرة الإخبارية - يوليو 2026"
        description="شكراً لتقديماتكم، تبدأ عملية المراجعة، استجابة عالمية من 32 دولة، واكتشف CCIB"
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
              النشرة الإخبارية ليوليو 2026
            </h2>
          </div>

          {/* شكراً لتقديماتكم: تبدأ عملية ا */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              شكراً لتقديماتكم: تبدأ عملية المراجعة
            </h3>
            <p className="text-lg leading-relaxed">لقد انتهت دعوة الأوراق والمشاريع لـ WGIC26. نود أن نشكر جميع الباحثين والممارسين والمصممين والمحترفين الذين شاركوا أعمالهم معنا.</p>
            <p className="text-lg leading-relaxed">تقوم اللجنة العلمية الآن بمراجعة كل تقديم. بمجرد اكتمال عملية التقييم، سيتم الاتصال بكل مؤلف مباشرة وإبلاغه ما إذا كانت ورقته أو مشروعه قد تم اختياره ليكون جزءًا من WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                اكتشف الخطوات التالية في عملية التقديم والمراجعة هنا.
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

          {/* استجابة عالمية من 32 دولة */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              استجابة عالمية من 32 دولة
            </h3>
            <p className="text-lg leading-relaxed">تلقت WGIC26 أوراقًا ومشاريع من مؤلفين يمثلون 32 دولة من أوروبا وآسيا وأمريكا الشمالية وأمريكا الجنوبية وأوقيانوسيا.</p>
            <p className="text-lg leading-relaxed">تشمل الدول التي لديها أكبر عدد من التقديمات:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>إسبانيا: 20</li>
              <li>النمسا: 14</li>
              <li>الولايات المتحدة: 10</li>
              <li>إيطاليا: 7</li>
              <li>أستراليا: 6</li>
              <li>فرنسا: 6</li>
              <li>هولندا: 6</li>
              <li>ألمانيا: 6</li>
              <li>بلجيكا: 6</li>
            </ul>
            <p className="text-lg leading-relaxed">تعكس هذا التنوع الجغرافي مدى انتشار WGIC26 والاهتمام العالمي المتزايد بالبنية التحتية الخضراء والحلول المستندة إلى الطبيعة.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                اكتشف المزيد عن المجتمع الدولي الذي يجتمع في WGIC26 هنا.
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

          {/* اكتشف CCIB: المكان الرئيسي لـ  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              اكتشف CCIB: المكان الرئيسي لـ WGIC26
            </h3>
            <p className="text-lg leading-relaxed">من 27 إلى 29 أكتوبر، ستقام WGIC26 في مركز مؤتمرات برشلونة الدولي (CCIB)، الواقع في بارك ديل فوريوم. مع مساحات متعددة الاستخدامات، وضوء طبيعي، وسعة لاستضافة أحداث دولية كبيرة، سيقدم CCIB الإعداد لخطابات رئيسية، وجلسات علمية، ومعارض، وفرص للتواصل. يقع بالقرب من الشاطئ ومتصلًا جيدًا بمركز مدينة برشلونة ومطارها، مما يوفر بيئة مثالية لاستقبال مجتمع البنية التحتية الخضراء العالمي.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                خطط لزيارتك إلى برشلونة واكتشف المزيد عن الوجهة هنا.
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

          {/* ابق على اتصال مع WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              ابق على اتصال مع WGIC26
            </h3>
            <p className="text-lg leading-relaxed">قنواتنا الرسمية الآن حية. تابع WGIC26 على لينكد إن وإنستغرام لتبقى على اطلاع بأحدث الإعلانات، والمتحدثين، وتحديثات البرنامج، والمعالم الرئيسية التي تسبق المؤتمر. انضم إلى المحادثة وكن جزءًا من المجتمع العالمي الذي يشكل مستقبل البنية التحتية الخضراء والحلول المستندة إلى الطبيعة.</p>
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

export default July2026Newsletter6Arabic;
