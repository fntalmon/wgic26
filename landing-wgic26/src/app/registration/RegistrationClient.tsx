"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  GraduationCap,
  FileText,
  Award,
  Clock,
  Check,
  ExternalLink,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

/* ───────── Colores oficiales WGIC26 ───────── */
const MONSTERA = "#234a38";
const CACTUS = "#1a3d2e";
const CEMENT = "#e8e8e6";
const POTUS = "#a8e06c";
const EARLY_BIRD_DEADLINE = new Date("2026-09-30T23:59:59Z").getTime();

/* ───────── Configuración ─────────
   EARLY_BIRD_ACTIVE: poner a `false` cuando termine el early bird
   (30 sept 2026). Desaparecen la etiqueta -15% y las referencias
   "early bird" de las tarjetas sin tocar nada más. */
const EARLY_BIRD_ACTIVE = Date.now() < EARLY_BIRD_DEADLINE;
const HELICE_URL = "https://panel.helice.app/w/wgic26/214760/registration";

function openHelice() {
  window.open(HELICE_URL, "_blank", "noopener,noreferrer");
}

/* ───────── Countdown Banner ───────── */
function CountdownBanner() {
  const t = useTranslations("registrationPage");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, EARLY_BIRD_DEADLINE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: t("countdown.days") },
    { value: timeLeft.hours, label: t("countdown.hours") },
    { value: timeLeft.mins, label: t("countdown.minutes") },
    { value: timeLeft.secs, label: "SEC" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden"
      style={{ backgroundColor: MONSTERA, border: `1px solid ${POTUS}25` }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 lg:p-10">
        <div className="flex items-center gap-4">
          <Clock size={20} style={{ color: POTUS, opacity: 0.7 }} />
          <span
            className="text-xs tracking-[0.3em] font-medium"
            style={{ color: CEMENT, opacity: 0.6 }}
          >
            {t("countdown.title")}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-center gap-6">
              <div className="text-center">
                <div
                  className="text-3xl lg:text-4xl font-light leading-none tabular-nums"
                  style={{ color: POTUS }}
                >
                  {String(u.value).padStart(2, "0")}
                </div>
                <div
                  className="text-[9px] tracking-[0.3em] mt-1.5"
                  style={{ color: CEMENT, opacity: 0.35 }}
                >
                  {u.label}
                </div>
              </div>
              {i < units.length - 1 && (
                <div
                  className="text-xl font-light -mt-4"
                  style={{ color: CEMENT, opacity: 0.15 }}
                >
                  :
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="hidden lg:block w-px h-10"
          style={{ backgroundColor: `${CEMENT}12` }}
        />

        <span
          className="text-xs tracking-[0.25em]"
          style={{ color: CEMENT, opacity: 0.4 }}
        >
          {t("countdown.cta")}
        </span>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: `${POTUS}15` }} />
    </motion.div>
  );
}

/* ───────── Botón principal de registro (directo a Helice) ───────── */
function RegisterButton({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <motion.button
      type="button"
      onClick={openHelice}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 font-medium tracking-[0.2em] transition-all duration-300 cursor-pointer ${
        large ? "py-4 px-10 text-xs" : "py-3 px-6 text-xs"
      }`}
      style={{
        backgroundColor: POTUS,
        color: CACTUS,
        border: `1px solid ${POTUS}`,
      }}
    >
      {label}
      <ExternalLink size={large ? 15 : 13} />
    </motion.button>
  );
}

/* ───────── Pricing Card ───────── */
function PricingCard({
  category,
  early,
  standard,
  note,
  highlight = false,
  index,
}: {
  category: string;
  early: string;
  standard: string;
  note?: string;
  highlight?: boolean;
  index: number;
}) {
  const t = useTranslations("registrationPage");
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col"
      style={
        highlight
          ? { outline: `1px solid ${POTUS}`, outlineOffset: "0px" }
          : { border: `1px solid ${CEMENT}10` }
      }
    >
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 4px 40px rgba(0,0,0,0.3)`
            : `0 2px 12px rgba(0,0,0,0.15)`,
        }}
        transition={{ duration: 0.3 }}
        className="flex flex-col flex-1"
      >
        <div className="p-6 flex flex-col flex-1" style={{ backgroundColor: MONSTERA }}>
          <div className="flex items-start justify-between gap-3 mb-4">
            <span
              className="text-xs tracking-[0.2em] font-medium uppercase"
              style={{ color: highlight ? POTUS : CEMENT }}
            >
              {category}
            </span>
            {EARLY_BIRD_ACTIVE && (
              <span
                className="text-[9px] tracking-[0.15em] font-bold uppercase px-2 py-1 whitespace-nowrap"
                style={{ backgroundColor: POTUS, color: CACTUS }}
              >
                {t("earlyBirdTag")}
              </span>
            )}
          </div>

          <div className="mb-1">
            <span className="text-3xl font-light" style={{ color: POTUS }}>
              {early}
            </span>
          </div>
          <div
            className="text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: CEMENT, opacity: 0.45 }}
          >
            {EARLY_BIRD_ACTIVE
              ? t("earlyBirdUntil")
              : t("feesHeaders.standard")}
          </div>

          <div
            className="text-xs mb-4"
            style={{ color: CEMENT, opacity: 0.55 }}
          >
            {standard}
          </div>

          {note && (
            <div
              className="text-xs mb-4"
              style={{ color: POTUS, opacity: 0.85 }}
            >
              {note}
            </div>
          )}

          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={openHelice}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 cursor-pointer hover:brightness-110"
              style={
                highlight
                  ? { backgroundColor: POTUS, color: CACTUS }
                  : {
                      backgroundColor: "transparent",
                      color: POTUS,
                      border: `1px solid ${POTUS}60`,
                    }
              }
            >
              {t("feesSelect")}
              <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────── FAQ Item ───────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${CEMENT}08` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span
          className="text-sm tracking-wide font-medium transition-opacity duration-300"
          style={{ color: CEMENT, opacity: open ? 1 : 0.7 }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: POTUS, opacity: open ? 1 : 0.4 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-xs leading-relaxed max-w-2xl"
              style={{ color: CEMENT, opacity: 0.45 }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────── Data Protection: desplegable (la aceptación va después, en Helice) ───────── */
function DataProtectionAccordion() {
  const t = useTranslations("registrationPage");
  const tLegal = useTranslations("legalPages");
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: MONSTERA,
        border: `1px solid ${CEMENT}10`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer"
      >
        <span
          className="text-sm tracking-wide font-medium"
          style={{ color: CEMENT, opacity: open ? 1 : 0.7 }}
        >
          {t("legalNoticeTitle")}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-light"
          style={{ color: POTUS, opacity: open ? 1 : 0.5 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-8 flex flex-col gap-5">
              <p
                className="text-xs leading-relaxed max-w-3xl"
                style={{ color: CEMENT, opacity: 0.5 }}
              >
                {t("legalNoticeIntro")}
              </p>

              <div
                className="flex gap-3 p-4"
                style={{
                  backgroundColor: `${POTUS}08`,
                  border: `1px solid ${POTUS}15`,
                }}
              >
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: CEMENT, opacity: 0.5 }}
                >
                  {tLegal("legalClauseText")}
                </span>
              </div>

              <div
                className="flex gap-3 p-4"
                style={{
                  backgroundColor: `${POTUS}08`,
                  border: `1px solid ${POTUS}15`,
                }}
              >
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: CEMENT, opacity: 0.5 }}
                >
                  {t("dataProtection.heliceNote")}
                </span>
              </div>

              <p
                className="text-xs leading-relaxed max-w-3xl"
                style={{ color: CEMENT, opacity: 0.35 }}
              >
                {t("rightsNote")}{" "}
                <Link
                  href="/privacy"
                  className="hover:opacity-80 transition-opacity"
                  style={{
                    color: POTUS,
                    textDecoration: "underline",
                    textDecorationColor: `${POTUS}40`,
                  }}
                >
                  {t("privacyPolicy")}
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   COMPONENTE PRINCIPAL
   ═══════════════════════════════════════ */
export default function RegistrationClient() {
  const t = useTranslations("registrationPage");

  const pricingData = [
    {
      category: t("fees.registrationTwoDays"),
      early: "400 EUR",
      standard: "460 EUR",
      note: t("bestValue"),
      highlight: true,
    },
    {
      category: t("fees.registrationOneDay"),
      early: "200 EUR",
      standard: "230 EUR",
    },
    {
      category: t("fees.oralPresentations"),
      early: "600 EUR",
      standard: "690 EUR",
      note: t("congressIncluded"),
    },
    {
      category: t("fees.poster"),
      early: "500 EUR",
      standard: "575 EUR",
      note: t("congressIncluded"),
    },
    {
      category: t("fees.students"),
      early: "150 EUR",
      standard: "173 EUR",
      note: t("proofEnrolment"),
    },
    {
      category: t("fees.companions"),
      early: "150 EUR",
      standard: "173 EUR",
    },
    {
      category: t("fees.galaDinner"),
      early: "150 EUR",
      standard: "150 EUR",
      note: t("galaAddon"),
    },
  ];

  const faqData = [
    { question: t("faq.included.question"), answer: t("faq.included.answer") },
    { question: t("faq.meals.question"), answer: t("faq.meals.answer") },
    { question: t("faq.cancel.question"), answer: t("faq.cancel.answer") },
    { question: t("faq.invoice.question"), answer: t("faq.invoice.answer") },
    {
      question: t("faq.presenting.question"),
      answer: t("faq.presenting.answer"),
    },
  ];

  const notesData = [
    { key: "author", icon: <FileText size={14} /> },
    { key: "student", icon: <GraduationCap size={14} /> },
    { key: "certificate", icon: <Award size={14} /> },
    { key: "proceedings", icon: <Check size={14} /> },
  ];

  const Divider = ({ label }: { label: string }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 mb-12"
    >
      <span
        className="text-xs tracking-[0.35em] font-medium whitespace-nowrap"
        style={{ color: CEMENT, opacity: 0.35 }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: `${CEMENT}08` }} />
    </motion.div>
  );

  const InfoNote = ({
    children,
    icon,
  }: {
    children: React.ReactNode;
    icon: React.ReactNode;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex gap-4 py-4"
      style={{ borderBottom: `1px solid ${CEMENT}08` }}
    >
      <div
        className="shrink-0 mt-0.5"
        style={{ color: POTUS, opacity: 0.5 }}
      >
        {icon}
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: CEMENT, opacity: 0.5 }}
      >
        {children}
      </p>
    </motion.div>
  );

  return (
    <section className="w-full justify-start text-xs">
      <div className="w-full max-w-6xl px-6 py-12 lg:py-20 flex flex-col gap-16 lg:gap-24 sm:px-4 lg:px-0 mx-auto">
        {/* ── COUNTDOWN ── */}
        {EARLY_BIRD_ACTIVE && <CountdownBanner />}

        {/* ── PRIMERA ENTRADA: REGISTRO DIRECTO ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 flex flex-col items-center text-center gap-6"
            style={{
              backgroundColor: MONSTERA,
              border: `1px solid ${CEMENT}10`,
            }}
          >
            <h2
              className="text-xl lg:text-2xl font-normal tracking-wide uppercase"
              style={{ color: CEMENT }}
            >
              {t("platformTitle")}
            </h2>
            <p
              className="text-sm leading-relaxed max-w-2xl"
              style={{ color: CEMENT, opacity: 0.55 }}
            >
              {t("platformDescription")}
            </p>
            <RegisterButton label={t("platformButton")} large />
            <p
              className="text-xs leading-relaxed max-w-2xl"
              style={{ color: CEMENT, opacity: 0.4 }}
            >
              {t("redirectNote")}
            </p>
          </motion.div>
        </div>

        {/* ── SEGUNDA ENTRADA: TARIFAS CON SELECT ── */}
        <div>
          <Divider label={t("fees.dividerLabel")} />

          <div className="mb-10 flex flex-col gap-3">
            <h3
              className="text-2xl lg:text-3xl font-light"
              style={{ color: CEMENT }}
            >
              {t("chooseOption")}
            </h3>
            <p
              className="text-sm leading-relaxed max-w-3xl"
              style={{ color: CEMENT, opacity: 0.5 }}
            >
              {t("feesIncludeNote")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pricingData.map((item, i) => (
              <PricingCard key={item.category} {...item} index={i} />
            ))}
          </div>

          <div className="mt-10" style={{ borderTop: `1px solid ${CEMENT}08` }}>
            {notesData.map((note) => (
              <InfoNote key={note.key} icon={note.icon}>
                {t(`notes.${note.key}`)}
              </InfoNote>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div>
          <Divider label={t("faq.dividerLabel")} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10"
            style={{
              backgroundColor: MONSTERA,
              border: `1px solid ${CEMENT}10`,
            }}
          >
            {faqData.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>

        {/* ── CTA FINAL "READY?" ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 flex flex-col items-center text-center gap-5"
            style={{
              backgroundColor: MONSTERA,
              border: `1px solid ${CEMENT}10`,
            }}
          >
            <h2
              className="text-2xl lg:text-3xl font-light"
              style={{ color: CEMENT }}
            >
              {t("readyTitle")}
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ color: CEMENT, opacity: 0.55 }}
            >
              {t("readyText")}
            </p>
            <RegisterButton label={t("readyButton")} large />
            <p
              className="text-xs tracking-wide"
              style={{ color: CEMENT, opacity: 0.4 }}
            >
              {t("readyNote")}
            </p>
          </motion.div>
        </div>

        {/* ── PROTECCIÓN DE DATOS (desplegable; la aceptación se hace en Helice) ── */}
        <DataProtectionAccordion />
      </div>
    </section>
  );
}
