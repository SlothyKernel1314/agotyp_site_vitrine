/* ============================================================
   SITE CONFIGURATION — EXAMPLE values (placeholders)
   ------------------------------------------------------------
   This file IS versioned (committed). It documents the structure
   and serves as a fallback if config.js (real, gitignored) is absent.

   For the real values:
     cp config/config.example.js config/config.js
   then fill config.js — it overrides these values and is NOT committed.
============================================================ */
window.SITE_CONFIG = Object.assign(window.SITE_CONFIG || {}, {
  // — Identity —
  name:        "Lorem Ipsum",                    // GEM name (shown everywhere)
  type:        "Groupe d'Entraide Mutuelle",     // kind / nature
  location:    "Ville (00)",                     // city (hero subtitle: "{type} à {location}")
  legalName:   "Lorem Ipsum",                    // legal name (legal notice)
  rna:         "W123456789",                     // RNA number (legal notice)
  publicationManager: "Prénom Nom",              // publication director

  // — Contact —
  email:       "contact@example.org",
  phone:       "+33 1 23 45 67 89",              // display; the tel: link strips spaces
  address: {                              // structured → display line + JSON-LD derived from it
    street:     "12 rue de l'Exemple",
    postalCode: "90000",
    city:       "Ville",
    country:    "FR",                     // ISO 3166-1 alpha-2
  },

  // — Host (legal notice) —
  host: {
    name:    "Nom de l'hébergeur",
    address: "Adresse de l'hébergeur",
    phone:   "Téléphone de l'hébergeur",
  },

  // — Meta / misc —
  metaDescription: "Le GEM Lorem Ipsum est un lieu d'entraide entre pairs, créé autour du vécu et des besoins des personnes autistes. Conçu par des autistes pour des autistes.",
  footerCredit:    "Pxelgon",                    // shown in "Fait par …"
  year:            "2026",
});
