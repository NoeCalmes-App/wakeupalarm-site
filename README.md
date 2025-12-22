# WakeUp Alarme - Site Web

Site vitrine pour l'application mobile WakeUp Alarme.

## 🚀 Déploiement sur GitHub Pages avec domaine OVH

Ce guide détaille toutes les étapes pour déployer ce site React/Vite sur GitHub Pages avec un nom de domaine personnalisé OVH.

---

## 📋 Prérequis

- Un compte GitHub
- Un nom de domaine acheté chez OVH
- Node.js installé localement
- Git configuré

---

## 🔧 Étape 1 : Préparation du code

### 1.1 Configuration Vite

Le fichier `vite.config.ts` doit contenir :

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',  // Important pour GitHub Pages
});
```

### 1.2 Fichier de workflow GitHub Actions

Le fichier `.github/workflows/deploy.yml` est déjà créé et configure le déploiement automatique.

### 1.3 Gitignore

Assurez-vous que `.gitignore` exclut les fichiers lourds (> 100 MB) :

```gitignore
*.dmg
*.zip
*.tar.gz
*.rar
*.7z
*.iso
```

---

## 📤 Étape 2 : Pousser le code sur GitHub

```bash
# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Setup GitHub Pages deployment"

# Pousser vers GitHub
git push origin main
```

**⚠️ Si vous avez des fichiers > 100 MB :**

```bash
# Supprimer le fichier de Git
git rm --cached chemin/vers/fichier-lourd.dmg

# Supprimer physiquement
rm chemin/vers/fichier-lourd.dmg

# Commit et push
git add .
git commit -m "Remove large files"
git push --force origin main
```

---

## ⚙️ Étape 3 : Configuration GitHub Pages

### 3.1 Activer GitHub Pages

1. Allez sur votre repo GitHub : `https://github.com/VOTRE-USERNAME/wakeupalarm-site`
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, cliquez sur **Pages**

### 3.2 Configurer la source

Dans la section **"Build and deployment"** :

- **Source** : Sélectionnez **"GitHub Actions"** (pas "Branch" !)

### 3.3 Ajouter le domaine personnalisé

Dans la section **"Custom domain"** :

1. Entrez votre nom de domaine : `wakeupalarm.app`
2. Cliquez sur **Save**

**Note** : Vous verrez l'erreur "DNS check unsuccessful" → C'est normal ! On va la corriger à l'étape suivante.

---

## 🌐 Étape 4 : Configuration DNS chez OVH

### 4.1 Accéder à la Zone DNS

1. Connectez-vous sur **ovh.com**
2. Allez dans **Noms de domaine**
3. Cliquez sur votre domaine (ex: `wakeupalarm.app`)
4. Cliquez sur l'onglet **Zone DNS**

### 4.2 Ajouter les 4 enregistrements A

Cliquez sur **"Ajouter une entrée"** et répétez 4 fois :

| Type | Sous-domaine | TTL | Cible |
|------|--------------|-----|-------|
| **A** | *(vide ou `.`)* | Par défaut | `185.199.108.153` |
| **A** | *(vide ou `.`)* | Par défaut | `185.199.109.153` |
| **A** | *(vide ou `.`)* | Par défaut | `185.199.110.153` |
| **A** | *(vide ou `.`)* | Par défaut | `185.199.111.153` |

**Important** : Laissez le champ "Sous-domaine" vide pour pointer vers le domaine racine.

### 4.3 Ajouter l'enregistrement CNAME pour www

Cliquez sur **"Ajouter une entrée"** :

| Type | Sous-domaine | TTL | Cible |
|------|--------------|-----|-------|
| **CNAME** | `www` | Par défaut | `VOTRE-USERNAME.github.io.` |

**⚠️ N'oubliez pas le point `.` à la fin de la cible !**

Exemple : `noecalmes-app.github.io.`

### 4.4 Résoudre les conflits CNAME

**Si vous voyez l'erreur** : *"Un enregistrement CNAME n'est pas autorisé à coexister avec d'autres champs"*

1. **Supprimez** tous les enregistrements existants pour `www` :
   - `www.wakeupalarm.app` → Type **A**
   - `www.wakeupalarm.app` → Type **TXT**

2. **Réessayez** d'ajouter le CNAME

---

## ⏰ Étape 5 : Attendre la propagation DNS

**Temps d'attente : 10 minutes à 48 heures** (généralement 1-2 heures)

### Vérifier la propagation

Dans votre terminal :

```bash
# Vérifier les enregistrements A
dig wakeupalarm.app

# Vérifier le CNAME
dig www.wakeupalarm.app
```

Vous devriez voir les IPs de GitHub dans la réponse.

---

## 🔒 Étape 6 : Activer HTTPS

**Une fois le DNS propagé** (l'erreur "DNS check unsuccessful" a disparu) :

1. Retournez dans **GitHub → Settings → Pages**
2. Cochez **"Enforce HTTPS"**

GitHub va automatiquement générer un certificat SSL gratuit via Let's Encrypt.

---

## ✅ Vérification finale

Votre site doit être accessible sur :

- `https://wakeupalarm.app`
- `https://www.wakeupalarm.app`
- `https://VOTRE-USERNAME.github.io/wakeupalarm-site/` (redirige vers votre domaine)

---

## 🔄 Déploiement automatique

À partir de maintenant, **chaque fois que vous pushez sur la branche `main`**, le site se redéploie automatiquement !

```bash
# Faire des modifications
git add .
git commit -m "Update content"
git push origin main

# Le site se met à jour automatiquement en 2-3 minutes
```

---

## 📊 Monitoring

### Voir l'état du déploiement

1. Allez dans l'onglet **Actions** de votre repo GitHub
2. Cliquez sur le workflow **"Deploy to GitHub Pages"**
3. Vérifiez que le statut est vert ✅

### En cas d'erreur de build

1. Consultez les logs dans **Actions**
2. Corrigez l'erreur dans le code
3. Push à nouveau → le déploiement redémarre automatiquement

---

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production (test local)
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## 📁 Structure du projet

```
wakeupalarm-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuration GitHub Actions
├── src/
│   ├── components/             # Composants React
│   ├── pages/                  # Pages du site
│   ├── assets/                 # Images, logos, etc.
│   └── App.tsx                 # Point d'entrée React
├── public/                     # Fichiers statiques
├── vite.config.ts             # Configuration Vite
├── netlify.toml               # (Optionnel) Config Netlify
└── README.md                  # Ce fichier
```

---

## 🌍 Multi-langue

Le site détecte automatiquement la langue du navigateur :

- **Français** : France, Belgique, Suisse, Canada, etc.
- **Anglais** : Par défaut pour tous les autres pays

La langue est sauvegardée dans le localStorage et peut être changée manuellement via le sélecteur.

---

## 🐛 Problèmes courants

### Erreur "File is XXX MB; this exceeds GitHub's file size limit"

**Solution** : Supprimer les fichiers > 100 MB

```bash
git rm --cached chemin/vers/fichier-lourd
git commit -m "Remove large file"
git push --force origin main
```

### "DNS check unsuccessful" sur GitHub

**Causes possibles** :
1. DNS pas encore propagé → Attendre 1-2 heures
2. Enregistrements DNS mal configurés → Vérifier sur OVH
3. Conflit CNAME → Supprimer les anciens enregistrements

### Le site ne se met pas à jour

1. Vérifiez **Actions** sur GitHub → Le workflow doit être vert ✅
2. Videz le cache du navigateur (Cmd+Shift+R / Ctrl+Shift+R)
3. Attendez 5 minutes pour le déploiement

### "404 - There isn't a GitHub Pages site here"

1. Vérifiez que **GitHub Actions** est bien sélectionné dans Settings → Pages
2. Vérifiez que le workflow s'est exécuté sans erreur
3. Attendez quelques minutes après le premier déploiement

---

## 📞 Support

Pour toute question :
- Email : support@wakeupalarm.app
- GitHub Issues : Créez une issue sur ce repo

---

## 📄 Licence

© 2025 WakeUp Alarme. Tous droits réservés.
