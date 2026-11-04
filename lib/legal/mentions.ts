import type { LegalDoc } from "./types";

export const MENTIONS: LegalDoc = {
  "path": "/mentions-legales",
  "metaTitle": "Mentions légales | Rushh",
  "metaDescription": "Mentions légales du site rushh.fr : éditeur, directeur de la publication et hébergeur.",
  "eyebrow": "Légal",
  "title": "Mentions légales",
  "updated": "",
  "sections": [
    {
      "id": "editeur",
      "num": 1,
      "title": "Éditeur du site",
      "blocks": [
        {
          "t": "p",
          "text": "Le site internet [https://www.rushh.fr](https://www.rushh.fr) est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le nom commercial Rushh."
        },
        {
          "t": "dl",
          "items": [
            [
              "SIREN",
              "937 698 983"
            ],
            [
              "SIRET",
              "937 698 983 00023"
            ],
            [
              "Immatriculation",
              "RCS de Bayonne"
            ],
            [
              "Adresse",
              "13 Rue du Brise Lames, 64600 Anglet, France"
            ],
            [
              "Email",
              "[hello@rushh.fr](mailto:hello@rushh.fr)"
            ],
            [
              "Téléphone",
              "[+33 6 71 80 37 11](tel:+33671803711)"
            ]
          ]
        }
      ]
    },
    {
      "id": "directeur",
      "num": 2,
      "title": "Directeur de la publication",
      "blocks": [
        {
          "t": "p",
          "text": "Le directeur de la publication est Gaspard David."
        }
      ]
    },
    {
      "id": "hebergement",
      "num": 3,
      "title": "Hébergement du site",
      "blocks": [
        {
          "t": "p",
          "text": "Le site internet [https://www.rushh.fr](https://www.rushh.fr) est hébergé par :"
        },
        {
          "t": "strong",
          "text": "Vercel Inc."
        },
        {
          "t": "dl",
          "items": [
            [
              "Adresse",
              "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis"
            ],
            [
              "Téléphone",
              "+1 559 288 7060"
            ],
            [
              "Région d'exécution configurée",
              "Paris, France (cdg1)"
            ],
            [
              "Site internet",
              "[https://vercel.com](https://vercel.com)"
            ]
          ]
        }
      ]
    }
  ]
};
