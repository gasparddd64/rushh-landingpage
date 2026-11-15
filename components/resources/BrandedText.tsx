import Image from "next/image";
import { Fragment } from "react";

/** Marques concurrentes citées dans les titres de comparaison : elles restent en texte, en gris. */
const OTHERS = ["Fonio", "Joe AI", "Volubilimo", "AirAgent", "VOKAI"];
const SPLIT = new RegExp(`(Rushh|${OTHERS.join("|")})`);

/**
 * Affiche un texte en remplaçant le mot « Rushh » par le logo (icône + nom), posé directement dans la ligne.
 * Les marques concurrentes restent en texte simple, en gris : Rushh ressort. Le logo porte le texte alternatif « Rushh ».
 */
export function BrandedText({ text }: { text: string }) {
  return (
    <>
      {text.replace(/ ([:?!;])/g, "\u00a0$1").split(SPLIT).map((part, i) =>
        part === "Rushh" ? (
          <Image key={i} className="rh-logo" src="/logo-rushh-wordmark.png" alt="Rushh" width={685} height={179} />
        ) : OTHERS.includes(part) ? (
          <span key={i} className="rh-other">{part}</span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
