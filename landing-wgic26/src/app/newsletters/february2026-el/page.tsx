import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const March2026GreekNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Φεβρουάριος 2026"
        description="Ενημερώσεις, πρώτοι επιβεβαιωμένοι ομιλητές και σημαντικές ημερομηνίες για το WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ενημερωτικό Δελτίο Φεβρουαρίου 2026
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Το 12ο{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Παγκόσμιο Συνέδριο για τις Πράσινες Υποδομές{" "}
              </a>
              θα πραγματοποιηθεί στη Βαρκελώνη και στη Lleida (Καταλονία,
              Ισπανία) από τις 27 έως τις 30 Οκτωβρίου 2026.
            </p>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Η πρόσκληση υποβολής εργασιών και έργων είναι ανοιχτή
              </h3>

              <p className="text-lg leading-relaxed">
                Με την υποστήριξη του{" "}
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  Παγκόσμιου Δικτύου Πράσινων Υποδομών (WGIN)
                </a>{" "}
                και με διοργανωτή το Πανεπιστήμιο της Λιέιδα (UdL), η εκδήλωση
                θα αποτίσει φόρο τιμής στην{" "}
                <a
                  href="https://www.barcelona.cat/capitalmundialarquitectura/en/presentation/barcelona-2026-world-capital-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  Παγκόσμια Πρωτεύουσα Αρχιτεκτονικής
                </a>{" "}
                και στο{" "}
                <a
                  href="https://consellantonigaudi.cat/programa-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Πράσινες Υποδομές και Λύσεις βασισμένες στη Φύση
              </h3>
              <ul className="list-disc list-inside mb-4 text-white">
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

            <div className="bg-gradient-to-br from-cactus/20 to-monstera/20 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Σημαντικές ημερομηνίες
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-white/60">
                    Υποβολή πρώτου σχεδίου εργασίας
                  </span>
                  <span className="font-semibold text-white">
                    31 Μαρτίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">
                    Έγκαιρη εγγραφή (έως 400 εγγραφές)
                  </span>
                  <span className="font-semibold text-white">
                    15 Απριλίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Συνεργάτες και εκθέτες</span>
                  <span className="font-semibold text-white">
                    31 Απριλίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Χορηγοί</span>
                  <span className="font-semibold text-white">
                    30 Σεπτεμβρίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-white/10 mt-2">
                  <span className="text-potus font-bold">Ημερομηνίες συνεδρίου</span>
                  <span className="font-bold text-potus">27-30 Οκτ 2026</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
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
                className="text-potus"
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
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Οι πρώτοι ομιλητές του WGIC έχουν ήδη επιβεβαιωθεί!
            </h3>
            <p className="mb-6">
              Με χαρά ανακοινώνουμε ότι οι πρώτοι ομιλητές για το WGIC 2026
              έχουν πλέον επιβεβαιωθεί, κορυφαίες φωνές που διαμορφώνουν το
              μέλλον των πόλεων, της επικράτειας, της αρχιτεκτονικής και της
              δημόσιας πολιτικής:
            </p>

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
                <p className="text-sm text-white/70">
                  Αρχιτέκτονας, ακαδημαϊκός και Μέλος του Ευρωπαϊκού
                  Κοινοβουλίου, με έργο στην αστική πολιτική, τη βιωσιμότητα και
                  το δομημένο περιβάλλον σε επίπεδο ΕΕ.
                </p>
              </div>

              <div className="bg-monstera/10 p-6 rounded-lg border border-white/5 hover:bg-monstera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Salvador Rueda
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Ιδρυτής και Διευθυντής του Ιδρύματος Αστικής και Χωρικής
                  Οικολογίας (FEUT), πρωτοπόρος της αστικής οικολογίας και
                  δημιουργός του αστικού μοντέλου «superblock».
                </p>
              </div>

              <div className="bg-sansiviera/10 p-6 rounded-lg border border-white/5 hover:bg-sansiviera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vicente Guallart
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Αρχιτέκτονας και πολεοδόμος, συνιδρυτής της Urbanitree και
                  ιδρυτής του Ινστιτούτου Προηγμένης Αρχιτεκτονικής της
                  Καταλονίας, διεθνώς αναγνωρισμένος για την έρευνα καινοτομίας
                  στον αστικό σχεδιασμό.
                </p>
              </div>

              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alberto Estévez
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Ιδρυτής και Διευθυντής του ESARQ-UIC Barcelona, αρχιτέκτονας
                  και ακαδημαϊκός γνωστός για την προώθηση της πειραματικής και
                  βιοψηφιακής αρχιτεκτονικής.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/60 italic">
              Αυτή η πρώτη ομάδα ομιλητών υπογραμμίζει τη φιλοδοξία, το βάθος
              και τη διεπιστημονική προσέγγιση του WGIC 2026, τοποθετώντας το
              ως ένα καίριο φόρουμ για τον παγκόσμιο αστικό διάλογο.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Γίνετε χορηγός
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Εγγραφείτε στο ενημερωτικό δελτίο
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default March2026GreekNewsletter;
