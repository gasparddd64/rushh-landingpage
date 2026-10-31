import { appelsManques } from "./appels-manques-immobilier";
import { telesecretariat } from "./telesecretariat-humain-ou-ia";
import { qualification } from "./qualification-appels-vendeurs-acquereurs";
import { comparatif } from "./comparatif-standards-telephoniques-ia-immobilier";
import { vsFonio } from "./vs-fonio";
import { choisir } from "./choisir-standard-telephonique-ia-immobilier";
import { priseRendezVous } from "./prise-rendez-vous-ia-immobilier";
import { vsVolubilimo } from "./vs-volubilimo";
import { coutStandard } from "./cout-standard-telephonique-ia-immobilier";
import { permanenceTelephonique } from "./permanence-telephonique-agence-immobiliere";
import { appelVendeurEstimation } from "./appel-vendeur-estimation-immobiliere";
import { standardApimo } from "./standard-telephonique-ia-apimo";
import { standardWhise } from "./standard-telephonique-ia-whise";
import { vsAirAgent } from "./vs-airagent";
import { vsVokai } from "./vs-vokai";
import { rentabiliteStandard } from "./rentabilite-standard-telephonique-ia-agence-immobiliere";
import type { Article } from "./types";

export const ARTICLES: Article[] = [appelsManques, telesecretariat, qualification, comparatif, vsFonio, choisir, priseRendezVous, vsVolubilimo, coutStandard, permanenceTelephonique, appelVendeurEstimation, standardApimo, standardWhise, vsAirAgent, vsVokai, rentabiliteStandard];

export { appelsManques, telesecretariat, qualification, comparatif, vsFonio, choisir, priseRendezVous, vsVolubilimo, coutStandard, permanenceTelephonique, appelVendeurEstimation, standardApimo, standardWhise, vsAirAgent, vsVokai, rentabiliteStandard };
export * from "./types";
export * from "./categories";
