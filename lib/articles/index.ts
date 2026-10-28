import { appelsManques } from "./appels-manques-immobilier";
import { telesecretariat } from "./telesecretariat-humain-ou-ia";
import { qualification } from "./qualification-appels-vendeurs-acquereurs";
import type { Article } from "./types";

export const ARTICLES: Article[] = [appelsManques, telesecretariat, qualification];

export { appelsManques, telesecretariat, qualification };
export * from "./types";
