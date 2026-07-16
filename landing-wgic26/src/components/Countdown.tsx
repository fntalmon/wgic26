"use client";
import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";

const Countdown = () => {
    const t = useTranslations("countdown");
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = useCallback(() => {
        const targetDate = new Date("2026-10-27T09:00:00");
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }, []);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <div
            id="countdown"
            className="flex text-lg sm:text-xl bg-cactus text-white w-full h-auto py-4 md:py-5 justify-center"
        >
            <div className="flex flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center">
                <div className="text-xs text-cement">{t("startingIn")}</div>
                <div className="flex gap-1">
                    {timeLeft.days}
                    <strong>d</strong>
                </div>
                <div className="flex gap-1">
                    {String(timeLeft.hours).padStart(2, "0")}
                    <strong>h</strong>
                </div>
                <div className="flex gap-1">
                    {String(timeLeft.minutes).padStart(2, "0")}
                    <strong>m</strong>
                </div>
                <div className="flex gap-1">
                    {String(timeLeft.seconds).padStart(2, "0")}
                    <strong>s</strong>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
