"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimateOnView() {
    const pathname = usePathname();

    useEffect(() => {
        const selector = ".fade-up, .reveal-hero";
        const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
        if (!els.length) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        el.classList.add("in-view");
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        els.forEach((el) => {
            if (!el.classList.contains("in-view")) {
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
