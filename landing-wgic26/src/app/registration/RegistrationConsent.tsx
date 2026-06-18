"use client";

import { useState } from "react";
import { ExternalLink, AlertCircle } from "lucide-react";
import Link from "next/link";

interface RegistrationConsentProps {
  heliceUrl: string;
  labels: {
    legalNoticeTitle: string;
    legalNoticeIntro: string;
    legalNoticeHeliceNote: string;
    checkboxMandatory: string;
    checkboxOptional: string;
    checkboxRequiredError: string;
    rightsNote: string;
    continueButton: string;
    privacyPolicy: string;
  };
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
    <div className="border border-white/20 rounded-lg p-6 md:p-8 flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-white">
        {labels.legalNoticeTitle}
      </h3>
      <p className="text-white/80 leading-relaxed text-sm">
        {labels.legalNoticeIntro}
      </p>

      <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-md p-4 text-sm text-yellow-200">
        {labels.legalNoticeHeliceNote}
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex items-start gap-3 text-sm text-white/80 cursor-pointer">
          <input
            type="checkbox"
            checked={mandatoryConsent}
            onChange={(e) => {
              setMandatoryConsent(e.target.checked);
              if (e.target.checked) setShowError(false);
            }}
            className="mt-0.5 h-4 w-4 rounded border-white/40 text-cactus focus:ring-cactus"
          />
          <span className="leading-snug">{labels.checkboxMandatory}</span>
        </label>

        <label className="flex items-start gap-3 text-sm text-white/80 cursor-pointer">
          <input
            type="checkbox"
            checked={optionalConsent}
            onChange={(e) => setOptionalConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-white/40 text-cactus focus:ring-cactus"
          />
          <span className="leading-snug">{labels.checkboxOptional}</span>
        </label>
      </div>

      {showError && (
        <div className="inline-flex items-center gap-2 text-sm bg-red-50 text-red-800 border border-red-200 px-3 py-2 rounded-md">
          <AlertCircle className="w-4 h-4" />
          <span className="leading-tight">{labels.checkboxRequiredError}</span>
        </div>
      )}

      <p className="text-white/60 text-xs leading-relaxed">
        {labels.rightsNote}{" "}
        <Link href="/privacy" className="text-potus hover:underline">
          {labels.privacyPolicy}
        </Link>
      </p>

      <button
        type="button"
        onClick={handleContinue}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 font-medium transition-colors w-full sm:w-auto"
      >
        {labels.continueButton} <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}
