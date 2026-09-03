import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026Newsletter2GreekNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Μάρτιος 2026"
        description="Ενημερώσεις για τον τομέα Υγεία & Ευεξία, νέος ομιλητής και παράταση προθεσμίας"
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
              Ενημερωτικό Δελτίο Μαρτίου 2026
            </h2>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
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
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Υγεία & Ευεξία: ένα κεντρικό θέμα του WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Πώς μπορούμε να αξιολογήσουμε καλύτερα τον αντίκτυπο του
              βιοφιλικού σχεδιασμού στην ανθρώπινη υγεία και ευεξία;
            </p>
            <p className="text-lg leading-relaxed">
              Τι ρόλο μπορούν να διαδραματίσουν πρωτοβουλίες όπως η Πράσινη
              Κοινωνική Συνταγογράφηση στη διαμόρφωση πιο υγιών πόλεων;
            </p>
            <p className="text-lg leading-relaxed">
              Αυτά είναι μερικά από τα βασικά ερωτήματα που οδηγούν έναν από
              τους τρεις κύριους θεματικούς άξονες του WGIC26 Βαρκελώνη –
              Lleida.
            </p>
            <p className="text-lg leading-relaxed">
              Το World Green Infrastructure Network (WGIN) έχει εδώ και καιρό
              προωθήσει την ενσωμάτωση της πράσινης υποδομής σε αστικά
              περιβάλλοντα, προς όφελος τόσο των ανθρώπων όσο και του πλανήτη.
              Ωστόσο, σήμερα παραμένει μια σαφής πρόκληση: η ενίσχυση της
              σύνδεσης μεταξύ της αστικής φύσης και της ανθρώπινης υγείας.
            </p>
            <p className="text-lg leading-relaxed">
              Στο WGIC26, αυτό το θέμα θα διερευνηθεί μέσω ενός αφιερωμένου
              άξονα για την Υγεία & Ευεξία, εμπνευσμένου από την τελευταία
              έκθεση του ΠΟΥ «Λύσεις βασισμένες στη φύση και υγεία» (Μάιος
              2025).
            </p>
            <p className="text-lg leading-relaxed">
              Αυτός ο άξονας θα επικεντρωθεί στην πρακτική ενσωμάτωση λύσεων
              βασισμένων στη φύση σε πλαίσια υγείας, δημόσιες πολιτικές και
              στρατηγικές αστικού σχεδιασμού, ενθαρρύνοντας ισχυρότερη
              συνεργασία μεταξύ των τομέων της πράσινης υποδομής και της υγείας.
            </p>
            <p className="text-lg leading-relaxed">
              Ο στόχος είναι η προώθηση της έρευνας, η διαμόρφωση πολιτικής και
              η ενίσχυση του ρόλου της αστικής φύσης στη βελτίωση της ποιότητας
              ζωής.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Ανακαλύψτε το πλήρες πρόγραμμα του WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Νέα επιβεβαιωμένη ομιλήτρια
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl2/photo-5.jpg"
                alt=""
                className="w-full max-w-xs mx-auto rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-cactus mb-2">
                Wendy Y. Chen
              </h4>
              <p className="text-sm text-neutral-600">
                Καθηγήτρια στο HKU σε πράσινη-μπλε υποδομή.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Η Καθηγήτρια Wendy Y. Chen ειδικεύεται στην αστική πράσινη μπλε
                υποδομή, με ισχυρή εστίαση στην αξιολόγηση και μοντελοποίηση του
                αντίκτυπού της στην αστική βιωσιμότητα και την ποιότητα ζωής.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Η έρευνά της αντιμετωπίζει βασικές προκλήσεις στην κατανόηση του
                πώς σχεδιάζονται, μετασχηματίζονται και ενσωματώνονται οι
                πράσινοι μπλε χώροι στα αστικά συστήματα, συνδυάζοντας
                περιβαλλοντικές, οικονομικές και κοινωνικές προοπτικές.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Μέσω της εργασίας της, συμβάλλει στην προώθηση της ποσοτικής
                αξιολόγησης των λύσεων βασισμένων στη φύση, βοηθώντας στη
                διαμόρφωση πιο αποτελεσματικού αστικού σχεδιασμού και χάραξης
                πολιτικής.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Στο WGIC26, θα φέρει πολύτιμες γνώσεις στον διάλογο για την
                πράσινη υποδομή και τις λύσεις βασισμένες στη φύση.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Παράταση προθεσμίας υποβολής
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Προηγούμενη προθεσμία:</span>
                  <span className="font-semibold text-neutral-800">
                    15 Μαρτίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-cactus font-bold">Νέα προθεσμία:</span>
                  <span className="font-bold text-cactus">30 Απριλίου 2026</span>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              Είμαστε στην ευχάριστη θέση να ανακοινώσουμε ότι η προθεσμία της
              Πρόσκλησης Υποβολής Εργασιών & Έργων έχει παραταθεί.
            </p>
            <p className="text-lg leading-relaxed">
              Ερευνητές, επαγγελματίες, σχεδιαστές και υπεύθυνοι χάραξης
              πολιτικής έχουν πλέον επιπλέον χρόνο για να υποβάλουν τις εργασίες
              τους.
            </p>
            <p className="text-lg leading-relaxed">
              Το WGIC26 καλωσορίζει πρωτότυπη έρευνα, μελέτες περίπτωσης και
              καινοτόμες εφαρμογές στην πράσινη υποδομή και τις λύσεις
              βασισμένες στη φύση. Οι υποβολές πρέπει να παρουσιαστούν σε μορφή
              σύντομης εργασίας (μέγιστο 5 σελίδες, MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Όλες οι υποβληθείσες εργασίες θα υποβληθούν σε αυστηρή διαδικασία
              αξιολόγησης από ομοτίμους, υπό την καθοδήγηση της Επιστημονικής
              Επιτροπής, η οποία θα καθορίσει την αποδοχή και τη μορφή
              παρουσίασης (προφορική ή αφίσα).
            </p>
            <p className="text-lg leading-relaxed">
              Οι αποδεκτές συνεισφορές θα δημοσιευτούν στα επίσημα πρακτικά του
              WGIC26, προσφέροντας διεθνή ορατότητα εντός της παγκόσμιας
              κοινότητας πράσινης υποδομής.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/speakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Μάθετε πώς να υποβάλετε σωστά την εργασία ή το έργο σας για το
                WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Μείνετε συνδεδεμένοι με το WGIC26
            </h3>
            <p>Τα επίσημα κανάλια μας είναι πλέον ενεργά.</p>
            <p>
              Ακολουθήστε το WGIC26 στο{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              και{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Instagram
              </a>{' '}
              για να ενημερώνεστε με τις τελευταίες ανακοινώσεις, ομιλητές,
              ενημερώσεις προγράμματος και βασικά ορόσημα που οδηγούν στο
              συνέδριο.
            </p>
            <p>
              Συμμετάσχετε στη συζήτηση και γίνετε μέρος της παγκόσμιας
              κοινότητας που διαμορφώνει το μέλλον της πράσινης υποδομής και των
              λύσεων βασισμένων στη φύση.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl2/photo-6.jpg"
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

export default March2026Newsletter2GreekNewsletter;
