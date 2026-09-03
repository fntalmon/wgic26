import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026GreekNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Φεβρουάριος 2026"
        description="Ενημερώσεις, πρώτοι επιβεβαιωμένοι ομιλητές και σημαντικές ημερομηνίες για το WGIC26"
        section="newsletters"
      />

      <section className="w-full py-10 px-4">
        <div className="max-w-[640px] mx-auto bg-white text-neutral-700 shadow-2xl">
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-neutral-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/wgic26-logo.png"
              alt="WGIC26"
              className="h-14 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-cactus">
              Ενημερωτικό Δελτίο Φεβρουαρίου 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl1/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          <div className="px-6 sm:px-10 pt-8 space-y-6">
            <p className="text-lg leading-relaxed">
              Το 12ο{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Παγκόσμιο Συνέδριο για τις Πράσινες Υποδομές{" "}
              </a>
              θα πραγματοποιηθεί στη Βαρκελώνη και στη Lleida (Καταλονία,
              Ισπανία) από τις 27 έως τις 30 Οκτωβρίου 2026.
            </p>

            <div className="pt-8 mt-2 border-t border-neutral-200 space-y-5">
              <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
                Η πρόσκληση υποβολής εργασιών και έργων είναι ανοιχτή
              </h3>

              <p className="text-lg leading-relaxed">
                Με την υποστήριξη του{" "}
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  Παγκόσμιου Δικτύου Πράσινων Υποδομών (WGIN)
                </a>{" "}
                και με διοργανωτή το Πανεπιστήμιο της Λιέιδα (UdL), η εκδήλωση
                θα αποτίσει φόρο τιμής στην{" "}
                <a
                  href="https://www.barcelona.cat/capitalmundialarquitectura/en/presentation/barcelona-2026-world-capital-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  Παγκόσμια Πρωτεύουσα Αρχιτεκτονικής
                </a>{" "}
                και στο{" "}
                <a
                  href="https://consellantonigaudi.cat/programa-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  Έτος Αντόνι Γκαουντί – Βαρκελώνη 2026
                </a>
                .
              </p>

              <p className="text-lg leading-relaxed">
                Το πρόγραμμα θα διαρθρωθεί σε δύο ημέρες παράλληλων συνεδριών,
                παρουσιάσεων και posters στη Βαρκελώνη. Πέρα από τα
                καθιερωμένα θεματικά πεδία (πολιτικές, τεχνολογίες, επιπτώσεις,
                εκπαίδευση κ.λπ.), θα εξεταστούν τρεις κύριοι θεματικοί άξονες.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
                Πράσινες Υποδομές και Λύσεις βασισμένες στη Φύση
              </h3>
              <ul className="list-disc list-inside mb-4 text-neutral-800">
                <li>Για την ανθρώπινη υγεία και ευημερία</li>
                <li>Σε περιόδους μεταπολεμικής / μετακαταστροφικής ανάκαμψης</li>
                <li>Και στον Παγκόσμιο Νότο</li>
              </ul>
              <p className="mb-4">
                Το συνέδριο θα περιλαμβάνει εκθεσιακό χώρο, όπου κορυφαίες
                εταιρείες θα παρουσιάσουν τα προϊόντα και τις πλέον πρόσφατες
                καινοτομίες τους. Η τρίτη ημέρα του συνεδρίου θα είναι
                αφιερωμένη σε επιλεγμένες τεχνικές επισκέψεις σε έργα σε
                ολόκληρη τη Βαρκελώνη, στο πλαίσιο ενός καινοτόμου σχήματος
                «ανοιχτών θυρών». Μια προαιρετική τέταρτη ημέρα θα περιλαμβάνει
                εργαστήρια για την έρευνα και την καινοτομία στη Λιέιδα.
                Δεδομένου ότι το WGIC26 είναι ένα ετήσιο φόρουμ στο οποίο
                συναντώνται ερευνητές, επαγγελματίες και εκπρόσωποι της
                βιομηχανίας, είναι δυνατή η υποβολή και των δύο τύπων εργασιών,
                που αφορούν είτε έρευνα είτε έργα ή μελέτες περίπτωσης.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-semibold text-cactus mb-4">
                Σημαντικές ημερομηνίες
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">
                    Υποβολή πρώτου σχεδίου εργασίας
                  </span>
                  <span className="font-semibold text-neutral-800">
                    31 Μαρτίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">
                    Έγκαιρη εγγραφή (έως 400 εγγραφές)
                  </span>
                  <span className="font-semibold text-neutral-800">
                    15 Απριλίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Συνεργάτες και εκθέτες</span>
                  <span className="font-semibold text-neutral-800">
                    31 Απριλίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Χορηγοί</span>
                  <span className="font-semibold text-neutral-800">
                    30 Σεπτεμβρίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-neutral-200 mt-2">
                  <span className="text-cactus font-bold">Ημερομηνίες συνεδρίου</span>
                  <span className="font-bold text-cactus">27-30 Οκτ 2026</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
              2026: έτος αφιερωμένο στη μνήμη του Αντόνι Γκαουντί
            </h3>
            <p>
              Το Συμβούλιο για την Προώθηση και Διάδοση του Έργου του Γκαουντί,
              συμβουλευτικό όργανο του Τμήματος Πολιτισμού της Generalitat de
              Catalunya, έχει αναλάβει την προώθηση του εορτασμού του{" "}
              <a
                href="https://web.gencat.cat/en/generalitat/accio-govern/commemoracions/2026/any-gaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Έτους Γκαουντί 2026
              </a>
              , με στόχο να φέρει το έργο του Αντόνι Γκαουντί πιο κοντά στο ευρύ
              κοινό. Ο Γκαουντί είναι ένας από τους πιο οικουμενικούς
              αρχιτέκτονες της Καταλονίας.
            </p>
            <p>
              Η πρωτοβουλία θα συντονιστεί από επιτροπή υπό την ηγεσία της
              Νούρια Ποτς και του Γκαλντρικ Σαντάνα και θα περιλαμβάνει τη
              συμμετοχή των σημαντικότερων κτηρίων του Γκαουντί,
              συμπεριλαμβανομένου του Εξιλαστήριου Ναού της Αγίας Οικογένειας
              (Sagrada Família), καθώς και δημόσιων και ιδιωτικών φορέων και
              ειδικών αφιερωμένων στη διατήρηση, τη μελέτη και τη διάδοση της
              κληρονομιάς του.
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
              Οι πρώτοι ομιλητές του WGIC έχουν ήδη επιβεβαιωθεί!
            </h3>
            <p className="mb-6">
              Με χαρά ανακοινώνουμε ότι οι πρώτοι ομιλητές για το WGIC 2026
              έχουν πλέον επιβεβαιωθεί, κορυφαίες φωνές που διαμορφώνουν το
              μέλλον των πόλεων, της επικράτειας, της αρχιτεκτονικής και της
              δημόσιας πολιτικής:
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/marcosrossempere/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marcos Ros
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Αρχιτέκτονας, ακαδημαϊκός και Μέλος του Ευρωπαϊκού
                  Κοινοβουλίου, με έργο στην αστική πολιτική, τη βιωσιμότητα και
                  το δομημένο περιβάλλον σε επίπεδο ΕΕ.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Salvador Rueda
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Ιδρυτής και Διευθυντής του Ιδρύματος Αστικής και Χωρικής
                  Οικολογίας (FEUT), πρωτοπόρος της αστικής οικολογίας και
                  δημιουργός του αστικού μοντέλου «superblock».
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vicente Guallart
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Αρχιτέκτονας και πολεοδόμος, συνιδρυτής της Urbanitree και
                  ιδρυτής του Ινστιτούτου Προηγμένης Αρχιτεκτονικής της
                  Καταλονίας, διεθνώς αναγνωρισμένος για την έρευνα καινοτομίας
                  στον αστικό σχεδιασμό.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alberto Estévez
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Ιδρυτής και Διευθυντής του ESARQ-UIC Barcelona, αρχιτέκτονας
                  και ακαδημαϊκός γνωστός για την προώθηση της πειραματικής και
                  βιοψηφιακής αρχιτεκτονικής.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-500 italic">
              Αυτή η πρώτη ομάδα ομιλητών υπογραμμίζει τη φιλοδοξία, το βάθος
              και τη διεπιστημονική προσέγγιση του WGIC 2026, τοποθετώντας το
              ως ένα καίριο φόρουμ για τον παγκόσμιο αστικό διάλογο.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl1/photo-11.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Γίνετε χορηγός
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Εγγραφείτε στο ενημερωτικό δελτίο
            </Link>
          </div>
        
          <NewsletterFooter language="el" light />
        </div>
        </section>
    </div>
  );
};

export default March2026GreekNewsletter;
