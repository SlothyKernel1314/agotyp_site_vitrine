/* ============================================================
   CONTENU D'EXEMPLE (placeholders) — commité.
   ------------------------------------------------------------
   Documente la structure et sert de repli si content.js
   (réel, gitignoré) est absent.

   Pour le vrai contenu :
     cp content.example.js content.js
   puis remplir content.js — qui écrase ces valeurs et n'est PAS commité.

   Note : les images d'exemple pointent vers Unsplash pour la démo ;
   en production, utilise des images locales (ex. "images/...").
============================================================ */
window.SITE_CONTENT = Object.assign(window.SITE_CONTENT || {}, {

  // — Activités (cartes + carrousel d'images) —
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

  // — FAQ (accordéon) —
  faqs: [
    { q: "Question d'exemple ?", a: "Réponse d'exemple." },
    { q: 'Une autre question ?', a: 'Une autre réponse.' },
  ],

  // — Documents (sections en carrousel ; icon: 'rules' | 'report') —
  docs: [
    {
      id: 'cadre-associatif',
      title: 'Cadre associatif',
      items: [
        { title: 'Document exemple', desc: 'Description du document.', file: 'docs/exemple.pdf', icon: 'rules' },
      ],
    },
  ],

  // — Textes éditoriaux (prose) ; {name} est résolu depuis la config —
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
