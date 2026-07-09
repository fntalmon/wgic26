"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Users,
  GraduationCap,
  FileText,
  Award,
  Clock,
  Check,
} from "lucide-react";
import { useTranslations } from "next-intl";
import RegistrationConsent from "./RegistrationConsent";

/* ───────── Colores oficiales WGIC26 ───────── */
const MONSTERA = "#234a38";
const CEMENT = "#e8e8e6";
const POTUS = "#a8e06c";

/* ───────── Countdown Banner ───────── */
function CountdownBanner() {
  const t = useTranslations("registrationPage");
  const deadline = new Date("2026-09-30T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [deadline]);

  const units = [
    { value: timeLeft.days, label: t("countdown.days") },
    { value: timeLeft.hours, label: t("countdown.hours") },
    { value: timeLeft.mins, label: t("countdown.minutes") },
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
            className="text-[11px] tracking-[0.3em] font-medium"
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
          className="text-[10px] tracking-[0.25em]"
          style={{ color: CEMENT, opacity: 0.4 }}
        >
          {t("countdown.cta")}
        </span>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: `${POTUS}15` }} />
    </motion.div>
  );
}

/* ───────── Timeline Step ───────── */
function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.12 }}
      className="flex gap-5"
    >
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 flex items-center justify-center text-sm font-light"
          style={{
            backgroundColor: `${POTUS}18`,
            color: POTUS,
            border: `1px solid ${POTUS}30`,
          }}
        >
          {number}
        </div>
        {number < 3 && (
          <div
            className="w-px flex-1 min-h-[24px] mt-2"
            style={{ backgroundColor: `${CEMENT}10` }}
          />
        )}
      </div>

      <div className="pb-6">
        <h4
          className="text-sm font-medium tracking-wide"
          style={{ color: CEMENT }}
        >
          {title}
        </h4>
        <p
          className="text-xs leading-relaxed mt-1.5 max-w-sm"
          style={{ color: CEMENT, opacity: 0.45 }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ───────── Pricing Card ───────── */
function PricingCard({
  category,
  early,
  standard,
  onsite,
  index,
  icon,
}: {
  category: string;
  early: string;
  standard: string;
  onsite: string;
  index: number;
  icon: React.ReactNode;
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
      className="relative"
    >
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 4px 40px rgba(0,0,0,0.3)`
            : `0 2px 12px rgba(0,0,0,0.15)`,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-0.5 w-full"
          style={{ backgroundColor: POTUS }}
          animate={{ opacity: hovered ? 0.8 : 0.3 }}
        />

        <div className="p-6" style={{ backgroundColor: MONSTERA }}>
          <div className="flex items-center gap-3 mb-6">
            <div style={{ color: POTUS, opacity: 0.6 }}>{icon}</div>
            <span
              className="text-xs tracking-[0.2em] font-medium"
              style={{ color: CEMENT }}
            >
              {category}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span
                className="text-[10px] tracking-[0.2em]"
                style={{ color: CEMENT, opacity: 0.4 }}
              >
                {t("feesHeaders.early")}
              </span>
              <span className="text-lg font-light" style={{ color: POTUS }}>
                {early}
              </span>
            </div>

            <div className="h-px w-full" style={{ backgroundColor: `${CEMENT}08` }} />

            <div className="flex items-baseline justify-between">
              <span
                className="text-[10px] tracking-[0.2em]"
                style={{ color: CEMENT, opacity: 0.35 }}
              >
                {t("feesHeaders.standard")}
              </span>
              <span
                className="text-sm font-light"
                style={{ color: CEMENT, opacity: 0.7 }}
              >
                {standard}
              </span>
            </div>

            {onsite !== "-" && (
              <>
                <div className="h-px w-full" style={{ backgroundColor: `${CEMENT}08` }} />
                <div className="flex items-baseline justify-between">
                  <span
                    className="text-[10px] tracking-[0.2em]"
                    style={{ color: CEMENT, opacity: 0.3 }}
                  >
                    {t("feesHeaders.onsite")}
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ color: CEMENT, opacity: 0.5 }}
                  >
                    {onsite}
                  </span>
                </div>
              </>
            )}
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
        className="w-full flex items-center justify-between py-5 text-left group"
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
      onsite: "520 EUR",
      icon: <Users size={16} />,
    },
    {
      category: t("fees.registrationOneDay"),
      early: "200 EUR",
      standard: "230 EUR",
      onsite: "260 EUR",
      icon: <Calendar size={16} />,
    },
    {
      category: t("fees.oralPresentations"),
      early: "600 EUR",
      standard: "690 EUR",
      onsite: "-",
      icon: <FileText size={16} />,
    },
    {
      category: t("fees.poster"),
      early: "500 EUR",
      standard: "575 EUR",
      onsite: "-",
      icon: <FileText size={16} />,
    },
    {
      category: t("fees.students"),
      early: "150 EUR",
      standard: "173 EUR",
      onsite: "195 EUR",
      icon: <GraduationCap size={16} />,
    },
    {
      category: t("fees.companions"),
      early: "150 EUR",
      standard: "173 EUR",
      onsite: "195 EUR",
      icon: <Users size={16} />,
    },
    {
      category: t("fees.galaDinner"),
      early: "150 EUR",
      standard: "150 EUR",
      onsite: "-",
      icon: <Award size={16} />,
    },
  ];

  const faqData = [
    { question: t("faq.cancel.question"), answer: t("faq.cancel.answer") },
    { question: t("faq.meals.question"), answer: t("faq.meals.answer") },
    { question: t("faq.invoice.question"), answer: t("faq.invoice.answer") },
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
        className="text-[10px] tracking-[0.35em] font-medium whitespace-nowrap"
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
        className="flex-shrink-0 mt-0.5"
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
        <CountdownBanner />

        {/* ── STEPS ── */}
        <div>
          <Divider label={t("steps.title")} />
          <div className="max-w-lg">
            <Step
              number={1}
              title={t("steps.step1.title")}
              description={t("steps.step1.description")}
            />
            <Step
              number={2}
              title={t("steps.step2.title")}
              description={t("steps.step2.description")}
            />
            <Step
              number={3}
              title={t("steps.step3.title")}
              description={t("steps.step3.description")}
            />
          </div>
        </div>

        {/* ── DATA PROTECTION ── */}
        <div>
          <Divider label={t("dataProtection.title")} />

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
            <RegistrationConsent
              heliceUrl="https://panel.helice.app/w/wgic26/214760/registration?preview=1"
              labels={{
                legalNoticeTitle: t("legalNoticeTitle"),
                legalNoticeIntro: t("legalNoticeIntro"),
                legalNoticeHeliceNote: t("dataProtection.heliceNote"),
                checkboxMandatory: t("checkboxMandatory"),
                checkboxOptional: t("checkboxOptional"),
                checkboxRequiredError: t("checkboxRequiredError"),
                rightsNote: t("rightsNote"),
                continueButton: t("continueButton"),
                privacyPolicy: t("privacyPolicy"),
              }}
            />
          </motion.div>
        </div>

        {/* ── PRICING ── */}
        <div>
          <Divider label={t("fees.dividerLabel")} />

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
      </div>
    </section>
  );
}
