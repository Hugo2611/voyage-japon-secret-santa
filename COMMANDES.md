# ⚡ Commandes essentielles

## 🚀 Développement

```powershell
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement Vercel

```powershell
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer en preview
vercel

# Déployer en production
vercel --prod
```

## 🧪 Test & Qualité

```powershell
# Linter le code
npm run lint

# Fix automatique des erreurs ESLint
npm run lint -- --fix
```

## 📱 Test sur mobile (même réseau WiFi)

```powershell
# Trouver ton IP locale
ipconfig

# Lancer le serveur
npm run dev

# Sur mobile, ouvrir : http://TON_IP:3000
# Exemple : http://192.168.1.10:3000
```

## 🔄 Reset & Clean

```powershell
# Supprimer node_modules
Remove-Item -Recurse -Force node_modules

# Supprimer le dossier de build
Remove-Item -Recurse -Force dist

# Réinstaller proprement
npm install

# Nettoyer le cache npm (si problème)
npm cache clean --force
```

## 📦 Package.json scripts disponibles

| Commande | Action |
|----------|--------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build local |

## 🎮 URLs importantes

- **Dev local** : http://localhost:3000
- **Build preview** : http://localhost:4173
- **Vercel dashboard** : https://vercel.com/dashboard

## 🔧 Dépannage rapide

### Port déjà utilisé
```powershell
# Vite choisira automatiquement le port suivant (3001, 3002...)
# Ou spécifier un port :
npm run dev -- --port 3001
```

### Erreur de build
```powershell
# Vérifier la syntaxe
npm run build

# Si erreur, vérifier les logs
```

### Problème de progression (localStorage)
```powershell
# Ouvrir la console du navigateur (F12)
# Application → Local Storage → Supprimer 'voyage-japon-progress'
```

## 📊 Informations utiles

**Dossiers importants :**
- `src/` - Code source React
- `public/` - Assets statiques
- `dist/` - Build de production (après `npm run build`)
- `node_modules/` - Dépendances (ne pas commit)

**Fichiers de config :**
- `vite.config.js` - Configuration Vite
- `vercel.json` - Configuration Vercel
- `.eslintrc.cjs` - Configuration ESLint
- `package.json` - Dépendances et scripts

**Taille du build (approximative) :**
- Total : ~500 KB (minifié + gzippé)
- React + Router + Zustand : ~150 KB
- CSS + Fonts : ~100 KB
- Application : ~250 KB
