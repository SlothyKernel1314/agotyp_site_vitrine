/* ============================================================
   CONFIGURATION DU SITE — valeurs d'EXEMPLE (placeholders)
   ------------------------------------------------------------
   Ce fichier EST versionné (commité). Il documente la structure
   et sert de repli si config.js (réel, gitignoré) est absent.

   Pour les vraies valeurs :
     cp config.example.js config.js
   puis remplir config.js — qui écrase ces valeurs et n'est PAS commité.
============================================================ */
window.SITE_CONFIG = Object.assign(window.SITE_CONFIG || {}, {
  // — Identité —
  name:        "Lorem Ipsum",                    // nom du GEM (affiché partout)
  type:        "Groupe d'Entraide Mutuelle",     // nature
  location:    "Ville (00)",                     // ville (sous-titre hero : « {type} à {location} »)
  legalName:   "Lorem Ipsum",                    // nom légal (mentions légales)
  rna:         "W123456789",                     // n° RNA (mentions légales)
  publicationManager: "Prénom Nom",              // responsable de la publication

  // — Contact —
  email:       "contact@example.org",
  phone:       "+33 1 23 45 67 89",              // affichage ; le lien tel: retire les espaces
  addressLine: "12 rue de l'Exemple, 90000 Ville",
  hoursDays:   "Lun – Sam",
  hoursTime:   "10h – 18h",

  // — Hébergeur (mentions légales) —
  host: {
    name:    "Nom de l'hébergeur",
    address: "Adresse de l'hébergeur",
    phone:   "Téléphone de l'hébergeur",
  },

  // — Méta / divers —
  metaDescription: "Le GEM Lorem Ipsum est un lieu d'entraide entre pairs, créé autour du vécu et des besoins des personnes autistes. Conçu par des autistes pour des autistes.",
  footerCredit:    "Pxelgon",                    // « Fait par … »
  year:            "2026",
});
