# Agoratypique — Site vitrine

Site vitrine du **GEM Agoratypique**, géré par l'**association Agoratypique**.
Un Groupe d'Entraide Mutuelle (GEM) est un lieu d'entraide entre pairs, créé
autour du vécu et des besoins des personnes autistes. **Conçu par des autistes,
pour des autistes.**

---

> ## 🎨 À l'origine de ce projet : **Pxelgon**
>
> Ce site a été **imaginé, conçu et développé à l'origine par Pxelgon**,
> membre de l'association, graphiste et game artist. C'est elle qui a créé
> l'identité visuelle, les mascottes et la première version complète du site.
>
> **SlothyKernel1314** a rejoint le projet, **aux côtés de Pxelgon**,
> uniquement pour en assurer le **maintien** (mise aux normes, refactorisation,
> déploiement). Le cœur du projet, sa conception et son âme, restent ceux de Pxelgon.

---

## À propos

Le GEM Agoratypique a pour objectif de **rompre l'isolement**, de **favoriser le
lien social** et de permettre à chacun de trouver sa place, dans un cadre
sécurisant, bienveillant et respectueux des singularités.

Ce dépôt contient le site vitrine de l'association : présentation du GEM, de ses
activités, foire aux questions, documentation et informations de contact.

## 🛠️ Technologies

- **HTML5, CSS3, JavaScript (vanilla)** — aucun framework, **aucune étape de build**, aucune dépendance npm.
- Police **Lexend auto-hébergée** (fichiers `.woff2` locaux + `@font-face`) — aucune requête externe (respect du RGPD).
- CSS modulaire dans `css/`, JavaScript en **modules ES** dans `js/`.
- Contenu et configuration **séparés du code** (dossier `config/`, voir ci-dessous) et **injectés dynamiquement** côté client.
- **Accessibilité** soignée : navigation clavier, attributs ARIA, lien
  d'évitement, contrastes, `prefers-reduced-motion` et alternatives textuelles.

## 📁 Structure du projet

```
agotyp_site_vitrine/
├── index.html              # Page principale (one-page)
├── legal.html              # Mentions légales
├── favicon.ico
├── css/                    # Styles (liés dans l'ordre de la cascade)
│   ├── fonts.css · base.css · navigation.css · layout.css
│   └── components.css · sections.css · legal.css · responsive.css
├── js/                     # Scripts (modules ES)
│   ├── main.js             # Point d'entrée
│   ├── config-populate.js  # Injection de la config dans le DOM
│   ├── data.js · utils.js · carousel.js
│   └── activities.js · faq.js · docs.js · ui.js
├── config/                 # Données & configuration (voir ci-dessous)
│   ├── config.example.js   # Modèle identité/contact/légal (versionné)
│   └── content.example.js  # Modèle activités/FAQ/docs/textes (versionné)
├── fonts/                  # Lexend (.woff2) + licence OFL
├── images/                 # Logo + mascottes
├── docs/                   # PDF de l'association (NON versionné)
├── LICENSE                 # Licence du code (MIT)
└── ASSETS-LICENSE.md       # Licence des ressources visuelles & de la marque
```

## 🚀 Installation & lancement (local)

> Le site est statique (pas de build), mais il charge des **modules ES** : il doit
> être **servi via HTTP**. L'ouvrir en `file://` (double-clic) **ne fonctionne pas**.

**1. Configuration & contenu** — les vraies données ne sont pas versionnées ;
on les crée à partir des modèles :

```bash
cp config/config.example.js  config/config.js     # identité, contact, mentions légales
cp config/content.example.js config/content.js    # activités, FAQ, documents, textes
```

Puis éditer `config/config.js` et `config/content.js` avec les vraies valeurs.

**2. Documents** — déposer les PDF de l'association dans `docs/` (dossier non
versionné), selon les chemins déclarés dans `config/content.js`.

**3. Servir le site** — par exemple :

```bash
# Python 3
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Ou via l'extension **Live Server** de VS Code.

## ♿ Accessibilité

Le public du site étant en grande partie composé de personnes autistes,
l'accessibilité est une priorité de conception : structure sémantique,
navigation au clavier, repères ARIA, et lisibilité (police Lexend, contrastes).

## 📄 Licence

- **Code source** (HTML, CSS, JS) : sous licence **MIT** — voir [`LICENSE`](LICENSE).
- **Ressources visuelles et marque** (logo, mascottes, nom « Agoratypique ») :
  **tous droits réservés** — voir [`ASSETS-LICENSE.md`](ASSETS-LICENSE.md).

## 👥 Auteurs & crédits

- **Pxelgon** — conception, identité visuelle, mascottes et **développement
  initial** du site.
- **SlothyKernel1314** — maintien du projet (code), aux côtés de Pxelgon.

Maintenance assurée conjointement par **Pxelgon** et **SlothyKernel1314**.
