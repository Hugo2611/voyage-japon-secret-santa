# 🚀 Instructions de Déploiement Vercel

## Option 1 : Déploiement rapide via CLI

1. **Installer Vercel CLI** (si pas déjà fait) :
```powershell
npm install -g vercel
```

2. **Se connecter à Vercel** :
```powershell
vercel login
```

3. **Déployer depuis le dossier du projet** :
```powershell
cd c:\Bachelor\Secret_Santa\voyage-japon-secret-santa
vercel
```

4. **Suivre les instructions** :
   - Project name : `voyage-japon-secret-santa` (ou autre)
   - Setup and deploy? → `Y`
   - Which scope? → Choisir ton compte
   - Link to existing project? → `N`
   - Project name → Confirmer
   - In which directory is your code located? → `./`
   - Vercel détectera automatiquement Vite
   
5. **Production** :
```powershell
vercel --prod
```

---

## Option 2 : Déploiement via GitHub + Vercel Dashboard

### Étape 1 : Préparer Git

```powershell
cd c:\Bachelor\Secret_Santa\voyage-japon-secret-santa
git init
git add .
git commit -m "Initial commit - Voyage au Japon Secret Santa"
```

### Étape 2 : Créer un repo GitHub

1. Aller sur [github.com/new](https://github.com/new)
2. Créer un nouveau repository (public ou privé)
3. Ne pas initialiser avec README (déjà créé)

### Étape 3 : Push vers GitHub

```powershell
git remote add origin https://github.com/TON_USERNAME/voyage-japon-secret-santa.git
git branch -M main
git push -u origin main
```

### Étape 4 : Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur **"Add New..."** → **"Project"**
3. **Import Git Repository** → Sélectionner ton repo
4. Vercel détectera automatiquement :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
5. Cliquer sur **"Deploy"**
6. Attendre 1-2 minutes ⏳
7. **C'est en ligne !** 🎉

---

## Option 3 : Import manuel (sans Git)

1. Zipper le dossier `voyage-japon-secret-santa`
2. Aller sur [vercel.com/new](https://vercel.com/new)
3. Cliquer sur **"Deploy"** puis **"Upload"**
4. Glisser-déposer le fichier ZIP
5. Configurer :
   - Framework : Vite
   - Build Command : `npm run build`
   - Output Directory : `dist`
6. **Deploy**

---

## ✅ Vérification post-déploiement

Une fois déployé, teste :

1. **Page d'accueil** : Les 3 villes sont affichées
2. **Énigme Tokyo** : Le puzzle fonctionne (tap-to-swap)
3. **Énigme Kyoto** : Validation du haiku
4. **Énigme Osaka** : Image progressive + code
5. **Page finale** : Révélation du cadeau
6. **Mobile** : Teste sur téléphone (responsive)

---

## 🔧 Configuration personnalisée (optionnel)

Si tu veux personnaliser :

### Variables d'environnement

Créer un fichier `.env` :
```
VITE_APP_TITLE=Voyage au Japon
```

Dans Vercel Dashboard :
- Settings → Environment Variables
- Ajouter les variables

### Domaine personnalisé

Dans Vercel Dashboard :
- Settings → Domains
- Ajouter un domaine custom (ex : `voyage-japon.com`)

---

## 📱 Test mobile direct

URL de test une fois déployé :
```
https://voyage-japon-secret-santa.vercel.app
```

Scanne avec un QR code pour tester sur mobile !

---

## 🐛 Troubleshooting

### Erreur 404 sur les routes

✅ Le fichier `vercel.json` est déjà configuré pour gérer ça.

### Build échoue

Vérifier dans Vercel Logs :
```powershell
vercel logs
```

### Problème de dépendances

S'assurer que `package.json` contient toutes les dépendances :
```powershell
npm install
npm run build
```

Si ça fonctionne en local, ça fonctionnera sur Vercel.

---

## 🎉 C'est tout !

Ton application est maintenant déployée et accessible partout dans le monde ! 🌍

**Partage le lien** et fais découvrir le jeu ! 🎁
