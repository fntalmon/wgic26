"use client";

import PageHeader from "@/components/PageHeader";
import { FileText, ExternalLink } from "lucide-react";

const Registration = () => {
  return (
    <div>
      <PageHeader
        title="Registration"
        description="Join us for the World Green Infrastructure Congress 2026. Register now to secure your spot."
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />

      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12 sm:px-4 lg:px-0 mx-auto">
          {/* Main Registration Callout */}

          <div
            id="registration"
            className="border border-white/20 rounded-lg p-8"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Registration Platform
            </h2>
            <p className="text-white/80 leading-relaxed text-justify mb-6">
              Registration is handled through our external partner platform,
              Helice. The registration fee covers costs during the conference
              period, including lunch and coffee breaks. No travel and/or
              accommodation is covered.
            </p>
            <div className="text-center">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration?preview=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 font-medium transition-colors"
              >
                Register on Helice Platform <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Key Dates */}
          <div className="bg-monstera/20 border border-monstera/30 rounded-lg  w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
              Key Dates
            </h2>

            <div className="overflow-x-auto w-full">
              <table className="min-w-full w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-monstera/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base w-2/3">
                      Milestone
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/3">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Abstracts submission period
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      15 December 2025 – 31 March 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Notification of acceptance (Oral/Poster decision)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      &lt; 15 April 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      First draft paper/poster
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      &lt; 31 May 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Revision paper/poster due
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      &lt; 30 June 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Final paper/poster submitted
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      &lt; 31 July 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Final program
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      31 July 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5 bg-cactus/10">
                    <td className="border border-white/20 px-4 py-3 text-white font-medium text-base text-justify">
                      Early-bird registration deadline
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white font-medium text-base text-center">
                      &lt; 15 April 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Registration open
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      15 December 2025 – 30 September 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Partners and exhibitors
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      15 December 2025 – 31 April 2026
                    </td>
                  </tr>

                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                      Sponsors
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      15 December 2025 – 30 September 2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration Fees */}
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base w-full">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                Registration fees
              </h2>

              <div className="overflow-x-auto w-full">
                <table className="min-w-full w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base w-1/4">
                        Category
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/4">
                        Early-bird &lt; March
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/4">
                        Standard (+15%) &lt; September
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/4">
                        In situ (+30%)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Registration 2 days
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        400 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        460 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        520 €
                      </td>
                    </tr>

                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Register one day
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        200 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        230 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        260 €
                      </td>
                    </tr>

                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Oral Presentations
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        600 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        690 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        —
                      </td>
                    </tr>

                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Poster (A1)
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        500 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        575 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        —
                      </td>
                    </tr>

                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Students
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        150 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        173 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        195 €
                      </td>
                    </tr>

                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Companions
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        150 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        173 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        195 €
                      </td>
                    </tr>

                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                        Gala dinner
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        —
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        150 €
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Text section */}
            <div className="mt-4 text-white/80 text-justify">
              <p className="mb-3">
                A registered author is allowed to present one paper (including
                oral presentation). For the second paper, a fee of 200 € is
                required.
              </p>

              <p className="mb-3">
                Full time student (not including post doctor) must provide proof
                of full-time status (copy of valid student ID card or letter
                from affiliated institution head or program director).
              </p>

              <p className="mb-3">
                All participants will receive a certificate of attendance.
              </p>

              <p className="mb-3">
                To include the paper in the conference program and the
                conference proceedings, at least one of the authors has to
                register before the registration deadline.
              </p>

              <p className="mb-3">
                If you need an invoice, please send an email to{" "}
                <strong>
                  <a href="mailto:wgic26.economics@udl.cat">
                    wgic26.economics@udl.cat
                  </a>
                </strong>
                .
              </p>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-md p-4">
                <h3 className="font-medium text-white mb-2">
                  Cancellation and Refund
                </h3>
                <p className="text-white/70 text-justify">
                  After the bank deposit, no reimbursement is possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
