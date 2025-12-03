# ⚡ Démarrage Rapide

## Installation et lancement (5 minutes)

```powershell
# 1. Aller dans le dossier
cd c:\Bachelor\Secret_Santa\voyage-japon-secret-santa

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

✅ L'application s'ouvre automatiquement sur `http://localhost:3000`

---

## 🎮 Tester le jeu

### Énigme 1 - Tokyo (Torii)
1. Clique sur "Tokyo" depuis l'accueil
2. Tape sur deux morceaux pour les échanger
3. Ordre correct (de haut en bas) :
   - ⛩️ (torii haut)
   - 🏮 (lanterne)
   - 🎋 (bambou)
   - 🪨 (pierre)

### Énigme 2 - Kyoto (Haiku)
1. Clique sur "Kyoto" (débloqué après Tokyo)
2. Réponds : `le torii` ou `torii`
3. Les kanji 鳥居 apparaissent

### Énigme 3 - Osaka (Mug)
1. Clique sur "Osaka" (débloqué après Kyoto)
2. Tape 3 fois sur l'image du mug
3. Trouve le chiffre : `7`
4. Entre le code

### Page Finale
1. Clique sur "Voir la surprise"
2. Découvre le cadeau : Daruma + Mug
3. Tu peux recommencer le jeu

---

## 📦 Build de production

```powershell
npm run build
```

Les fichiers optimisés seront dans `dist/`

Pour tester le build :
```powershell
npm run preview
```

---

## 🚀 Déployer

Voir le fichier `DEPLOIEMENT.md` pour les instructions complètes.

**Rapide via Vercel CLI :**
```powershell
npm install -g vercel
vercel --prod
```

---

## 🎨 Personnalisation rapide

### Changer les réponses des énigmes

**Tokyo** (`src/pages/Tokyo.jsx`) :
```javascript
const correctOrder = [0, 1, 2, 3]; // Modifier l'ordre
```

**Kyoto** (`src/pages/Kyoto.jsx`) :
```javascript
const correctAnswer = 'le torii'; // Changer la réponse
```

**Osaka** (`src/pages/Osaka.jsx`) :
```javascript
const correctCode = '7'; // Changer le code secret
```

### Changer les couleurs

Dans `src/index.css` :
```css
:root {
  --color-torii: #c8102e;    /* Rouge principal */
  --color-washi: #f5f1e8;     /* Fond beige */
  --color-indigo: #2d3e6e;    /* Bleu foncé */
  --color-gold: #d4af37;      /* Or */
}
```

---

## 📱 Tester sur mobile

1. Trouve ton adresse IP locale :
```powershell
ipconfig
```

2. Lance le serveur :
```powershell
npm run dev
```

3. Sur ton téléphone (même WiFi), ouvre :
```
http://TON_IP:3000
```

Exemple : `http://192.168.1.10:3000`

---

## ✅ Checklist avant déploiement

- [ ] Toutes les énigmes fonctionnent
- [ ] La progression se sauvegarde (localStorage)
- [ ] Les routes sont protégées
- [ ] Le responsive fonctionne (mobile)
- [ ] Les animations sont fluides
- [ ] Le build de production réussit
- [ ] Testé sur mobile réel

---

## 🐛 Problèmes courants

### L'application ne démarre pas
```powershell
# Supprimer node_modules et réinstaller
rm -r -force node_modules
npm install
```

### Erreur de port déjà utilisé
Le port 3000 est déjà occupé. Vite choisira automatiquement un autre port (3001, 3002...).

### La progression ne se sauvegarde pas
Vérifier que localStorage est activé dans le navigateur (mode navigation privée désactive localStorage).

---

## 📚 Documentation

- **README.md** : Vue d'ensemble du projet
- **DEPLOIEMENT.md** : Instructions détaillées de déploiement
- **Ce fichier** : Démarrage rapide

---

**Bon développement ! 🎉**
