# 🇯🇵 Voyage au Japon - Secret Santa

Mini-jeu interactif React avec 3 énigmes progressives pour découvrir un cadeau.

## 🎮 Fonctionnalités

- **3 énigmes thématiques** : Tokyo (puzzle torii), Kyoto (haiku), Osaka (mug mystère)
- **Mobile-first** : Interface tactile optimisée
- **Progression sauvegardée** : Zustand avec persistance localStorage
- **Design japonais** : Palette torii/washi, police Noto Sans JP
- **Protection des routes** : Accès bloqué sans progression

## 🚀 Installation

```bash
cd voyage-japon-secret-santa
npm install
```

## 💻 Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
```

Les fichiers de production seront dans `dist/`

## 🌐 Déploiement Vercel

### Méthode 1 : Via CLI

```bash
npm install -g vercel
vercel
```

### Méthode 2 : Via Git

1. Push le projet sur GitHub
2. Connecte-toi sur [vercel.com](https://vercel.com)
3. Importe ton repository
4. Vercel détectera automatiquement Vite
5. Déploie !

### Méthode 3 : Depuis le dashboard

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Importe ton projet
3. Configuration (déjà définie dans `vercel.json`) :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

## 🎯 Solutions des énigmes

### Tokyo - Torii du bon ordre
Réorganiser les 4 morceaux du torii en tapant pour échanger :
- Ordre correct : ⛩️ (haut) → 🏮 → 🎋 → 🪨 (bas)

### Kyoto - Le Kitsune et le Haiku
Compléter le haiku avec le mot manquant :
- **Réponse** : "le torii" ou "torii"

### Osaka - Le Mug caché
1. Taper 3 fois sur l'image pour la déflouter
2. Trouver le chiffre dissimulé dans le motif
- **Réponse** : 7

## 🛠️ Technologies

- **React 18** + **Vite 5**
- **React Router DOM 6** (routing)
- **Zustand 4** (state management)
- **CSS3** (animations, gradients)
- **Google Fonts** (Noto Sans JP)

## 📱 Compatibilité Mobile

- Tap-to-swap au lieu de drag & drop
- Boutons larges (min 48px)
- Zones cliquables espacées
- Touch-action optimisé
- Responsive à 100%

## 📂 Structure

```
voyage-japon-secret-santa/
├── public/
│   └── torii-icon.svg
├── src/
│   ├── pages/
│   │   ├── Home.jsx/css       # Carte du Japon
│   │   ├── Tokyo.jsx/css      # Énigme 1
│   │   ├── Kyoto.jsx/css      # Énigme 2
│   │   ├── Osaka.jsx/css      # Énigme 3
│   │   └── Final.jsx/css      # Révélation
│   ├── store/
│   │   └── gameStore.js       # Zustand store
│   ├── App.jsx                # Routes
│   ├── main.jsx               # Entry point
│   └── index.css              # Styles globaux
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🎨 Palette de couleurs

- **Rouge torii** : `#c8102e`
- **Beige washi** : `#f5f1e8`
- **Noir** : `#1a1a1a`
- **Bleu indigo** : `#2d3e6e`
- **Or** : `#d4af37`

## 🔐 Sécurité des routes

Les routes sont protégées via `ProtectedRoute` :
- `/kyoto` nécessite Tokyo résolu
- `/osaka` nécessite Tokyo + Kyoto résolus
- `/final` nécessite les 3 énigmes résolues

## 🎁 Personnalisation

Pour changer le cadeau ou les énigmes :

1. **Tokyo** : Modifier l'ordre des pièces dans `Tokyo.jsx`
2. **Kyoto** : Changer `correctAnswer` dans `Kyoto.jsx`
3. **Osaka** : Modifier `correctCode` dans `Osaka.jsx`
4. **Final** : Personnaliser les éléments du cadeau dans `Final.jsx`

## 📄 Licence

MIT - Libre d'utilisation

---

**Bon voyage au Japon ! 🗾✨**
