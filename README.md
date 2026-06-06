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

- **HTML5, CSS3, JavaScript (vanilla)** — aucun framework, aucune dépendance.
- Police [Lexend](https://fonts.google.com/specimen/Lexend) via Google Fonts.
- Contenu (activités, FAQ, documents) **généré dynamiquement** côté client
  depuis des données structurées dans `main.js`.
- **Accessibilité** soignée : navigation clavier, attributs ARIA, lien
  d'évitement, contrastes et alternatives textuelles.

## 📁 Structure du projet

```
agotyp_site_vitrine/
├── index.html          # Page principale (one-page)
├── style.css           # Styles
├── main.js             # Scripts (rendu des contenus, carrousels, FAQ…)
├── favicon.ico         # Icône du site
├── AGORA_LOGO_RGB.svg  # Logo
├── images/             # Mascottes et illustrations
│   ├── Mascotte_bonjour.png
│   ├── Mascotte_joueur.png
│   ├── Mascotte_libraire.png
│   └── Contact_Mascotte.png
├── LICENSE             # Licence du code (MIT)
└── ASSETS-LICENSE.md   # Licence des ressources visuelles & de la marque
```

## 🚀 Lancer le site en local

Le site est statique, aucune installation n'est nécessaire.

- **Le plus simple** : ouvrir `index.html` directement dans un navigateur.
- **Recommandé** (pour un rendu fidèle) : servir le dossier en local, par exemple
  avec l'extension **Live Server** de VS Code, ou en ligne de commande :

  ```bash
  # Python 3
  python3 -m http.server 8000
  # puis ouvrir http://localhost:8000
  ```

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
