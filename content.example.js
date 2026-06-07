/* ============================================================
   EXAMPLE CONTENT (placeholders) — committed.
   ------------------------------------------------------------
   Documents the structure and serves as a fallback if content.js
   (real, gitignored) is absent.

   For the real content:
     cp content.example.js content.js
   then fill content.js — it overrides these values and is NOT committed.

   Note: the example images point to Unsplash for the demo;
   in production, use local images (e.g. "images/...").
============================================================ */
window.SITE_CONTENT = Object.assign(window.SITE_CONTENT || {}, {

  // — Activities (cards + image carousel) —
  activities: [
    {
      label: 'Exemple',
      name: 'Activité exemple',
      desc: "Description de l'activité en deux ou trois phrases.",
      images: [
        { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: "Description de l'image 1" },
        { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: "Description de l'image 2" },
      ],
    },
    {
      label: 'Exemple 2',
      name: 'Deuxième activité',
      desc: "Une autre activité d'exemple.",
      images: [
        { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: "Description de l'image" },
      ],
    },
  ],

  // — FAQ (accordion) —
  faqs: [
    { q: "Question d'exemple ?", a: "Réponse d'exemple." },
    { q: 'Une autre question ?', a: 'Une autre réponse.' },
  ],

  // — Documents (carousel sections; icon: 'rules' | 'report') —
  docs: [
    {
      id: 'cadre-associatif',
      title: 'Cadre associatif',
      items: [
        { title: 'Document exemple', desc: 'Description du document.', file: 'docs/exemple.pdf', icon: 'rules' },
      ],
    },
  ],

  // — Editorial texts (prose); {name} is resolved from the config —
  texts: {
    heroDesc: [
      "Première phrase de présentation du GEM {name}.",
      "Deuxième phrase : objectifs et valeurs de l'association.",
    ],
    aboutText: [
      "Présentation du {name} (premier paragraphe).",
      "Présentation (deuxième paragraphe).",
    ],
    aboutCardTitle: "Une phrase d'accroche.",
    aboutCardText: "Texte de la carte « à propos » (quelques phrases).",
    aboutSubtitle:      "[Qui sommes-nous ?]",
    activitiesSubtitle: "[Nos activités]",
    faqSubtitle:        "[Foire aux questions]",
    docsSubtitle:       "[Documentation]",
    contactLabel: "Nous rejoindre",
    contactTitle: "Venez nous rendre visite !",
    contactDesc:  "Texte d'invitation à prendre contact.",
  },

});
