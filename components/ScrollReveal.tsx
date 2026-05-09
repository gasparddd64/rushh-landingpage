"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("section").forEach((el) => {
      el.classList.add("reveal");
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
