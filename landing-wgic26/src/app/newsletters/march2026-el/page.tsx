import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const March2026GreekNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - March 2026 (Greek)"
        description="Paste the Greek version of the March 2026 newsletter here"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              March 2026 Newsletter
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              [PASTE GREEK INTRODUCTION HERE]
            </p>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                [PASTE SECTION TITLE HERE]
              </h3>

              <p className="text-lg leading-relaxed">
                [PASTE FIRST GREEK PARAGRAPH HERE]
              </p>

              <p className="text-lg leading-relaxed">
                [PASTE SECOND GREEK PARAGRAPH HERE]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                [PASTE LEFT COLUMN TITLE HERE]
              </h3>
              <ul className="list-disc list-inside mb-4 text-white">
                <li>[PASTE ITEM 1 HERE]</li>
                <li>[PASTE ITEM 2 HERE]</li>
                <li>[PASTE ITEM 3 HERE]</li>
              </ul>
              <p className="mb-4">[PASTE LEFT COLUMN PARAGRAPH HERE]</p>
            </div>

            <div className="bg-gradient-to-br from-cactus/20 to-monstera/20 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                [PASTE DATES TITLE HERE]
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-white/60">[LABEL 1]</span>
                  <span className="font-semibold text-white">[DATE 1]</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">[LABEL 2]</span>
                  <span className="font-semibold text-white">[DATE 2]</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">[LABEL 3]</span>
                  <span className="font-semibold text-white">[DATE 3]</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">[LABEL 4]</span>
                  <span className="font-semibold text-white">[DATE 4]</span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-white/10 mt-2">
                  <span className="text-potus font-bold">[FINAL LABEL]</span>
                  <span className="font-bold text-potus">[FINAL DATE]</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              [PASTE MIDDLE SECTION TITLE HERE]
            </h3>
            <p>[PASTE FIRST PARAGRAPH OF THIS SECTION HERE]</p>
            <p>[PASTE SECOND PARAGRAPH OF THIS SECTION HERE]</p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              [PASTE SPEAKERS SECTION TITLE HERE]
            </h3>
            <p className="mb-6">[PASTE SPEAKERS INTRO HERE]</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/marcosrossempere/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marcos Ros
                  </a>
                </h4>
                <p className="text-sm text-white/70">[PASTE DESCRIPTION 1 HERE]</p>
              </div>

              <div className="bg-monstera/10 p-6 rounded-lg border border-white/5 hover:bg-monstera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vicente Guallart
                  </a>
                </h4>
                <p className="text-sm text-white/70">[PASTE DESCRIPTION 2 HERE]</p>
              </div>

              <div className="bg-sansiviera/10 p-6 rounded-lg border border-white/5 hover:bg-sansiviera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alberto Estevez
                  </a>
                </h4>
                <p className="text-sm text-white/70">[PASTE DESCRIPTION 3 HERE]</p>
              </div>

              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Salvador Rueda
                  </a>
                </h4>
                <p className="text-sm text-white/70">[PASTE DESCRIPTION 4 HERE]</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/60 italic">
              [PASTE SPEAKERS CLOSING TEXT HERE]
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              [PASTE CTA 1 HERE]
            </a>
            <Link
              href="/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              [PASTE CTA 2 HERE]
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default March2026GreekNewsletter;