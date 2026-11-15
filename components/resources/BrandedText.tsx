import Image from "next/image";
import { Fragment } from "react";

/**
 * Affiche un texte en remplaçant le mot « Rushh » par le logo (icône + nom), dans une pastille discrète.
 * Les autres marques restent en texte simple. Le logo porte le texte alternatif « Rushh » : le titre garde son sens.
 */
export function BrandedText({ text }: { text: string }) {
  const parts = text.split(/(Rushh)/);
  return (
    <>
      {parts.map((part, i) =>
        part === "Rushh" ? (
          <span key={i} className="rh-logo">
            <Image src="/logo-rushh-wordmark.png" alt="Rushh" width={685} height={179} />
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
