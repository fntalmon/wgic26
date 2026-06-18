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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ενημερωτικό Δελτίο Μαρτίου 2026
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
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">
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
                className="text-potus"
              >
                Ανακαλύψτε το πλήρες πρόγραμμα του WGIC26.
              </a>
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Νέα επιβεβαιωμένη ομιλήτρια
            </h3>
            <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
              <h4 className="text-lg font-bold text-potus mb-2">
                Wendy Y. Chen
              </h4>
              <p className="text-sm text-white/70">
                Καθηγήτρια στο HKU σε πράσινη-μπλε υποδομή.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Η Καθηγήτρια Wendy Y. Chen ειδικεύεται στην αστική πράσινη μπλε
                υποδομή, με ισχυρή εστίαση στην αξιολόγηση και μοντελοποίηση του
                αντίκτυπού της στην αστική βιωσιμότητα και την ποιότητα ζωής.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Η έρευνά της αντιμετωπίζει βασικές προκλήσεις στην κατανόηση του
                πώς σχεδιάζονται, μετασχηματίζονται και ενσωματώνονται οι
                πράσινοι μπλε χώροι στα αστικά συστήματα, συνδυάζοντας
                περιβαλλοντικές, οικονομικές και κοινωνικές προοπτικές.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Μέσω της εργασίας της, συμβάλλει στην προώθηση της ποσοτικής
                αξιολόγησης των λύσεων βασισμένων στη φύση, βοηθώντας στη
                διαμόρφωση πιο αποτελεσματικού αστικού σχεδιασμού και χάραξης
                πολιτικής.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Στο WGIC26, θα φέρει πολύτιμες γνώσεις στον διάλογο για την
                πράσινη υποδομή και τις λύσεις βασισμένες στη φύση.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              Παράταση προθεσμίας υποβολής
            </h3>
            <div className="bg-gradient-to-br from-cactus/20 to-monstera/20 p-6 rounded-lg border border-white/10">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Προηγούμενη προθεσμία:</span>
                  <span className="font-semibold text-white">
                    15 Μαρτίου 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-potus font-bold">Νέα προθεσμία:</span>
                  <span className="font-bold text-potus">30 Απριλίου 2026</span>
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
                className="text-potus"
              >
                Μάθετε πώς να υποβάλετε σωστά την εργασία ή το έργο σας για το
                WGIC26.
              </a>
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              Μείνετε συνδεδεμένοι με το WGIC26
            </h3>
            <p>Τα επίσημα κανάλια μας είναι πλέον ενεργά.</p>
            <p>
              Ακολουθήστε το WGIC26 στο{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://web.facebook.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Facebook
              </a>
              , και{" "}
              <a
                href="https://x.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Twitter
              </a>{" "}
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
        
          <NewsletterFooter language="el" />
        </div>
        </section>
    </div>
  );
};

export default March2026Newsletter2GreekNewsletter;
