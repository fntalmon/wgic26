import PageHeader from "@/components/PageHeader";
import { FileText } from "lucide-react";

const Speakers = () => {
  return (
    <div>
      <PageHeader
        title="Registration"
        description="Description coming soon"
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12">

          <div id="registration" className="bg-cactus/20 border border-cactus/30 rounded-lg p-6 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white">Registration (to attend)</h2>
              <p className="mt-2 text-white/80 leading-relaxed">
                Please click the link to register. To register for WGIC26, enter and fill in the data in the registration submission application at the link below.
              </p>
              <p className="mt-3 text-white/70">
                The registration system will open on <strong>xxxxxx 2025</strong>. Registration fee covers the costs during the conference period, including lunch and coffee breaks. No travel and/or accommodation is covered. Tickets for the Congress Gala Dinner, Technical Visits (3rd Day) and Research & Innovation day (4th Day, Lleida) are sold separately.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-yellow-600 text-black px-4 py-2 font-medium">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v3H3V7zm0 5h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z"/></svg>
                Register now
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white">Registration Form (link)</a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
            <div>
              <h3 className="text-xl font-medium text-white uppercase mb-3">Registration fees (VAT included)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Category</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Early-bird &lt; 31 Mar 2026</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Standard (&lt; 30 Sep 2026)</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">In situ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Registration 2 days (Attendants)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">550 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">633 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">715 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Register one day</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">400 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">460 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">520 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Students</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">300 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">345 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">390 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Authors (Oral presentations)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">700 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">805 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">—</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Authors (Poster presentation)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">600 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">690 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">—</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Companions</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">200 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">230 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">260 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">Gala dinner</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">180 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">180 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">180 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 text-white/80">
              <p className="mb-3">A registered author is allowed to present one paper (including oral presentation). For the second paper, a fee of 200 € is required.</p>
              <p className="mb-3">Full time student (not including post doctor) must provide proof of full-time status (copy of valid student ID card or letter from affiliated institution head or program director).</p>
              <p className="mb-3">All participants will receive a certificate of attendance.</p>
              <p className="mb-3">To include the paper in the conference program and the conference proceedings, at least one of the authors has to register before the registration deadline. If you need an invoice, please send an email to <strong>xxxxxxxxxxxxxx</strong>.</p>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-md p-4">
                <h3 className="font-medium text-white">Cancellation and Refund</h3>
                <p className="mt-3">Option A: After the bank deposit, no reimbursement is possible.</p>
                <p className="mt-2">Option B: Cancellations received by secretariat in writing will be accepted. Refund with remittance charge deducted will be processed after the conference. The refund policy is as follows:</p>
                <ul className="list-disc list-inside mt-3 text-white/80">
                  <li>Before 15th September 2026 — &gt; 75% refund</li>
                  <li>After 15th September 2026 — No refund</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
