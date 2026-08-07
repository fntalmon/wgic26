"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, AlertCircle } from "lucide-react";
import Link from "next/link";

const CACTUS = "#1a3d2e";
const CEMENT = "#e8e8e6";
const POTUS = "#a8e06c";

interface RegistrationConsentProps {
  heliceUrl: string;
  labels: {
    legalNoticeTitle: string;
    legalNoticeIntro: string;
    legalNoticeHeliceNote: string;
    legalClauseText: string;
    checkboxMandatory: string;
    checkboxOptional: string;
    checkboxRequiredError: string;
    rightsNote: string;
    continueButton: string;
    redirectNote: string;
    privacyPolicy: string;
  };
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="relative w-10 h-5 rounded-full transition-colors duration-300 flex-shrink-0"
      style={{
        backgroundColor: checked ? `${POTUS}40` : `${CEMENT}12`,
        border: `1px solid ${checked ? POTUS : `${CEMENT}20`}`,
      }}
    >
      <motion.div
        animate={{ x: checked ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-3.5 h-3.5 rounded-full"
        style={{ backgroundColor: checked ? POTUS : `${CEMENT}40` }}
      />
    </button>
  );
}

export default function RegistrationConsent({
  heliceUrl,
  labels,
}: RegistrationConsentProps) {
  const [mandatoryConsent, setMandatoryConsent] = useState(false);
  const [optionalConsent, setOptionalConsent] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    if (!mandatoryConsent) {
      setShowError(true);
      return;
    }
    window.open(heliceUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3
          className="text-xl lg:text-2xl font-normal tracking-wide leading-tight"
          style={{
            color: CEMENT,
            fontFamily: "'Century Gothic', 'Segoe UI', sans-serif",
            textTransform: "uppercase",
          }}
        >
          {labels.legalNoticeTitle}
        </h3>
        <p
          className="text-xs leading-relaxed max-w-3xl"
          style={{ color: CEMENT, opacity: 0.5 }}
        >
          {labels.legalNoticeIntro}
        </p>
      </div>

      <div
        className="flex gap-3 p-4"
        style={{
          backgroundColor: `${POTUS}08`,
          border: `1px solid ${POTUS}15`,
        }}
      >
        <span
          className="text-[11px] leading-relaxed"
          style={{ color: CEMENT, opacity: 0.5 }}
        >
          {labels.legalClauseText}
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
          className="text-[11px] leading-relaxed"
          style={{ color: CEMENT, opacity: 0.5 }}
        >
          {labels.legalNoticeHeliceNote}
        </span>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: `${CEMENT}08` }} />

      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <Toggle
            checked={mandatoryConsent}
            onChange={(v) => {
              setMandatoryConsent(v);
              if (v) setShowError(false);
            }}
          />
          <button
            type="button"
            onClick={() => {
              setMandatoryConsent(!mandatoryConsent);
              if (!mandatoryConsent) setShowError(false);
            }}
            className="text-xs leading-relaxed text-left cursor-pointer"
            style={{ color: CEMENT, opacity: 0.6 }}
          >
            {labels.checkboxMandatory}
          </button>
        </div>

        <div className="flex items-start gap-4">
          <Toggle
            checked={optionalConsent}
            onChange={setOptionalConsent}
          />
          <button
            type="button"
            onClick={() => setOptionalConsent(!optionalConsent)}
            className="text-xs leading-relaxed text-left cursor-pointer"
            style={{ color: CEMENT, opacity: 0.5 }}
          >
            {labels.checkboxOptional}
          </button>
        </div>
      </div>

      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs px-3 py-2"
          style={{
            backgroundColor: "#f43f5e10",
            color: "#f43f5e",
            border: "1px solid #f43f5e30",
          }}
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="leading-tight">{labels.checkboxRequiredError}</span>
        </motion.div>
      )}

      <div className="h-px w-full" style={{ backgroundColor: `${CEMENT}08` }} />

      <div className="flex flex-col gap-4">
        <p
          className="text-[10px] leading-relaxed max-w-3xl"
          style={{ color: CEMENT, opacity: 0.35 }}
        >
          {labels.rightsNote}{" "}
          <Link
            href="/privacy"
            className="hover:opacity-80 transition-opacity"
            style={{
              color: POTUS,
              textDecoration: "underline",
              textDecorationColor: `${POTUS}40`,
            }}
          >
            {labels.privacyPolicy}
          </Link>
        </p>

        <p
          className="text-[11px] leading-relaxed max-w-3xl"
          style={{ color: CEMENT, opacity: 0.55 }}
        >
          {labels.redirectNote}
        </p>

        <motion.button
          type="button"
          onClick={handleContinue}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-3 py-4 px-8 text-[11px] font-medium tracking-[0.2em] transition-all duration-300 w-full cursor-pointer"
          style={{
            backgroundColor: POTUS,
            color: CACTUS,
            border: `1px solid ${POTUS}`,
          }}
        >
          {labels.continueButton}
          <ExternalLink size={13} />
        </motion.button>
      </div>
    </div>
  );
}
