"use client";

import { ButtonColorful } from "@/components/ui/button-colorful";

export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="brand">
          <img src="/logo-rushh.png" alt="Rushh" className="brand-logo" />
          <span>Rushh</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#benefits">Bénéfices</a></li>
          <li><a href="#why">Pourquoi Rushh ?</a></li>
          <li><a href="#how">Comment ça marche</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-cta">
          <ButtonColorful
            onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
            label="Demander une démo"
            className="!h-[38px] !rounded-xl !text-[13px] !px-5 !pl-5 !pr-2"
          />
        </div>
      </div>
    </nav>
  );
}
