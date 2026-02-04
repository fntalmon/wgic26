"use client"

import PageHeader from "@/components/PageHeader";
import { FileText } from "lucide-react";
import Script from "next/script";

const Registration = () => {
  return (
    <div>
      <PageHeader
        title="Registration"
        description=""
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12">

          {/* Key Dates */}
          <div className="bg-monstera/20 border border-monstera/30 rounded-lg p-6">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Key Dates</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-monstera/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base">Milestone</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Abstracts submission period</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">15 December 2025 – 31 March 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Notification of acceptance (Oral/Poster decision)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">&lt; 15 April 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">First draft paper/poster</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">&lt; 31 May 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Revision paper/poster due</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">&lt; 30 June 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Final paper/poster submitted</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">&lt; 31 July 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Final program</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">31 July 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5 bg-cactus/10">
                    <td className="border border-white/20 px-4 py-3 text-white font-medium text-base">Early-bird registration deadline</td>
                    <td className="border border-white/20 px-4 py-3 text-white font-medium text-base text-center">&lt; 15 April 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Registration open</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">15 December 2025 – 30 September 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Partners and exhibitors</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">15 December 2025 – 31 April 2026</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Sponsors</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">15 December 2025 – 30 September 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="registration" className="bg-cactus/20 border border-cactus/30 rounded-lg p-6 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white">Registration (to attend)</h2>
              <p className="mt-2 text-white/80 leading-relaxed">
                Please click the link to register. To register for WGIC26, enter and fill in the data in the registration submission application at the link below.
              </p>
              <p className="mt-3 text-white/70">
                The registration system will open soon. Registration fee covers the costs during the conference period, including lunch and coffee breaks. No travel and/or accommodation is covered. Tickets for the Congress Gala Dinner, Technical Visits (3rd Day) and Research & Innovation day (4th Day, Lleida) are sold separately.
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

          {/* Embedded Registration Form */}
          <div className="w-full bg-white rounded-lg overflow-hidden">
            <iframe 
              id="frame214760" 
              style={{ width: '1px', minWidth: '100%', minHeight: '800px', border: '0px' }} 
              sandbox="allow-scripts allow-forms allow-popups allow-modals allow-same-origin" 
              src="https://panel.helice.app/w/wgic26/214760/registration?preview=1"
            ></iframe>
            <Script 
              src="https://panel.helice.app/land/assets/plugins/iFrameResizer/js/iframeResizer.min.js" 
              strategy="afterInteractive"
              onLoad={() => {
                const interval = setInterval(() => {
                  // @ts-expect-error -- iFrameResizer is injected by external script at runtime
                  if (window.iFrameResize) {
                    // @ts-expect-error -- global from external library, no TS types available
                    window.iFrameResize({ log: false, checkOrigin: false }, "#frame214760");
                    clearInterval(interval);
                  }
                }, 100);
              }}
            />
          </div>

          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
            <div>
              <h3 className="text-xl font-medium text-white uppercase mb-3">Registration fees</h3>
              <p className="text-white/60 text-sm mb-4">VAT included</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base">Category</th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Early-bird &lt; 15 Apr 2026</th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Standard (+15%)</th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Onsite (+30%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Oral Presentation</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">700 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">805 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">—</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Poster (own DIN A1 size)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">600 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">690 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">—</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Full registration (2-day attendant)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">550 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">635 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">715 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Day registration (1-day attendant)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">150 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">175 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">195 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Students</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">300 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">350 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">390 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Accompanying persons</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">120 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">140 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">160 €</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Conference dinner (50%)</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">60 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">70 €</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">80 €</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-white/60 text-xs mt-3 italic">25% discount available for Scientific Committee members.</p>

              </div>
            </div>

            <div className="mt-4 text-white/80">
              <p className="mb-3">A registered author is allowed to present one paper (including oral presentation). For the second paper, a fee of 200 € is required.</p>
              <p className="mb-3">Full time student (not including post doctor) must provide proof of full-time status (copy of valid student ID card or letter from affiliated institution head or program director).</p>
              <p className="mb-3">All participants will receive a certificate of attendance.</p>
              <p className="mb-3">To include the paper in the conference program and the conference proceedings, at least one of the authors has to register before the registration deadline.</p>
              <p className="mb-3">If you need an invoice, please send an email to <strong>wgic26.economics@udl.cat</strong>.</p>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-md p-4">
                <h3 className="font-medium text-white">Cancellation and Refund</h3>
                <p className="mt-3">After the bank deposit, no reimbursement is possible.</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;


