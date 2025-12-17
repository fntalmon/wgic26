import PageHeader from "@/components/PageHeader";
import { FileText } from "lucide-react";

const Speakers = () => {
  return (
    <div>
      <PageHeader
        title="Speakers"
        description="Meet the leading voices in green infrastructure. WGIC 2026 will feature top international experts, innovators, and visionaries shaping the future of sustainable cities."
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12">

          <div id="paper-submission" className="bg-cactus/20 border border-cactus/30 rounded-lg p-6 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white">Submit your paper by 31st March 2026!</h2>
              <p className="mt-2 text-white/80 leading-relaxed">
                Thank you for your interest in participating in World Green Infrastructure Congress 2026 Barcelona – Lleida (WGIC 2026). To submit a paper, enter and fill in the data in the paper submission application at the link below.
              </p>
              <p className="mt-3 text-white/70">
                The 12th World Green Infrastructure Congress will be held in Barcelona at the International Barcelona Convention Centre, from 27th to 30th October 2026. WGIC 2026 welcomes original research, case studies and innovative applications in short paper format (maximum 5 pages), in MS Word format.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-yellow-600 text-black px-4 py-2 font-medium">Go to submission form</a>
              <a href="https://docs.google.com/document/d/1nBiY7bukcqV-QS2cnsJVv3K8gvPwzIwa/export?format=docx" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white">Download paper template</a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
            <p>
              WGIC026 warmly welcomes submissions of original research, case studies, and innovative applications, in short paper format (maximum 5 pages), in MS Word format. The limitation to 5 pages helps reduce similarity for papers later recommended for publication in special issues of journals.
            </p>
            <p>
              All submitted papers undergo a rigorous peer-review process. The scientific committee decides acceptance and whether the presentation is oral or poster. Accepted papers will be published in the conference proceedings of WGIC2026.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-md p-4">
              <h3 className="font-medium text-white">Steps for paper submission</h3>
              <ol className="mt-3 list-decimal list-inside text-white/80 space-y-2">
                <li><a href="https://docs.google.com/document/d/1nBiY7bukcqV-QS2cnsJVv3K8gvPwzIwa/export?format=docx" className="text-potus underline">Download</a> the paper template.</li>
                <li>Read the instructions carefully.</li>
                <li>Select a main topic where your work fits.</li>
                <li>Prepare the paper (max 5 pages).</li>
                <li>Submit your paper in .doc format before <strong>31 March 2026</strong> (<a href="#" className="text-potus underline">submission form</a>).</li>
                <li>You will receive a decision and R1 revision before <strong>15 April 2026</strong>.</li>
                <li>Return revised paper (R1) before <strong>31 May 2026</strong> and R2 before <strong>30 June 2026</strong>.</li>
                <li>Return the final paper before <strong>30 July 2026</strong>.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white uppercase mb-3">Typologies of presentation</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Typology</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Session Length</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Oral presentation</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">15 min (including questions)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">Use the MS PowerPoint presentation template (<a className="text-potus underline" href="#">link</a>).</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Poster presentation</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">Mounted during conference</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">A0-sized paper (841 × 1189 mm) portrait. Use the single-slide poster template (<a className="text-potus underline" href="#">link</a>).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-6 text-white/70">
              To submit a paper, enter and fill in the data in the paper submission application at this <a href="#" className="text-potus underline">link</a>.
            </p>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Speakers;
