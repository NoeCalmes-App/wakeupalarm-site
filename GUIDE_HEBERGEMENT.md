# 🚀 Guide complet : Héberger un site React sur GitHub Pages avec domaine OVH

**Guide universel et réutilisable pour tous vos futurs projets React/Vite**

---

## 📋 Table des matières

1. [Préparation du code](#1-préparation-du-code)
2. [Commandes Git](#2-commandes-git)
3. [Configuration GitHub Pages](#3-configuration-github-pages)
4. [Configuration DNS OVH](#4-configuration-dns-ovh)
5. [Validation finale](#5-validation-finale)
6. [Problèmes courants](#6-problèmes-courants)
7. [Checklist complète](#7-checklist-complète)

---

## 🎯 Prérequis

- ✅ Projet React/Vite fonctionnel localement
- ✅ Compte GitHub
- ✅ Domaine acheté chez OVH
- ✅ Node.js et npm installés
- ✅ Git configuré

---

## 1️⃣ Préparation du code

### Étape 1.1 : Configuration Vite

**Fichier : `vite.config.ts`**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // ⚠️ IMPORTANT : Ne pas oublier cette ligne !
});
```

---

### Étape 1.2 : Créer le workflow GitHub Actions

**Créer le dossier et le fichier :**

```bash
mkdir -p .github/workflows
```

**Fichier : `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Change en 'master' si ton branch principal s'appelle 'master'

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### Étape 1.3 : Mettre à jour .gitignore

**Fichier : `.gitignore`**

Ajouter ces lignes pour éviter les fichiers trop lourds (limite GitHub : 100 MB) :

```gitignore
# Fichiers lourds interdits sur GitHub
*.dmg
*.zip
*.tar.gz
*.rar
*.7z
*.iso
*.mp4
*.mov
*.avi
```

---

### Étape 1.4 : Vérifier que le projet build localement

```bash
npm run build
npm run preview
```

✅ Si ça fonctionne, tu peux passer à l'étape suivante !

---

## 2️⃣ Commandes Git

### Étape 2.1 : Initialiser le repo (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit"
```

---

### Étape 2.2 : Créer le repo sur GitHub

1. Va sur **github.com**
2. Clique sur **"New repository"**
3. Nomme ton repo (ex: `mon-projet`)
4. **N'ajoute pas de README, .gitignore ou license** (déjà créés localement)
5. Clique sur **"Create repository"**

---

### Étape 2.3 : Pousser le code sur GitHub

```bash
# Remplace VOTRE-USERNAME et NOM-DU-REPO
git remote add origin https://github.com/VOTRE-USERNAME/NOM-DU-REPO.git

git branch -M main
git push -u origin main
```

---

### ⚠️ Erreur : Fichier trop lourd ?

**Si tu vois : "File is XXX MB; this exceeds GitHub's file size limit"**

```bash
# 1. Supprimer le fichier de Git
git rm --cached chemin/vers/fichier-lourd.dmg

# 2. Supprimer physiquement
rm chemin/vers/fichier-lourd.dmg

# 3. Commit et force push
git add .
git commit -m "Remove large files"
git push --force origin main
```

---

## 3️⃣ Configuration GitHub Pages

### Étape 3.1 : Aller dans les paramètres

**URL format :**
```
https://github.com/VOTRE-USERNAME/NOM-DU-REPO/settings/pages
```

**Exemple :**
```
https://github.com/NoeCalmes-App/wakeupalarm-site/settings/pages
```

---

### Étape 3.2 : Activer GitHub Actions

Dans la section **"Build and deployment"** :

1. **Source** : Sélectionne **"GitHub Actions"**
   - ⚠️ **PAS "Branch"**, **PAS "Jekyll"**, **PAS "Static HTML"**
   - ✅ Uniquement **"GitHub Actions"**

2. La page affichera : *"Workflow details will appear here once your site has been deployed"*

---

### Étape 3.3 : Ajouter le domaine personnalisé

Dans la section **"Custom domain"** :

1. Entre ton nom de domaine : `mondomaine.com` (ou `.app`, `.fr`, etc.)
2. Clique sur **"Save"**

**Note** : Tu verras l'erreur **"DNS check unsuccessful"** → C'est normal ! On va la corriger à l'étape suivante.

---

### Étape 3.4 : Vérifier le déploiement

1. Va dans l'onglet **"Actions"** de ton repo
2. Tu devrais voir le workflow **"Deploy to GitHub Pages"** en cours (point jaune 🟡)
3. Attends que le statut devienne vert ✅ (2-3 minutes)

**Si le workflow est rouge ❌ :** Clique dessus pour voir les logs d'erreur

---

## 4️⃣ Configuration DNS OVH

### Étape 4.1 : Accéder à la Zone DNS

1. Connecte-toi sur **ovh.com**
2. Va dans **Noms de domaine**
3. Clique sur ton domaine (ex: `mondomaine.com`)
4. Clique sur l'onglet **"Zone DNS"**

---

### Étape 4.2 : Ajouter les 4 enregistrements A

Clique sur **"Ajouter une entrée"** et répète **4 fois** :

#### Premier enregistrement A

| Champ | Valeur |
|-------|--------|
| **Type** | A |
| **Sous-domaine** | *(LAISSER VIDE ou mettre juste `.`)* |
| **TTL** | Par défaut |
| **Cible** | `185.199.108.153` |

Clique sur **"Suivant"** puis **"Valider"**

#### Deuxième enregistrement A

| Champ | Valeur |
|-------|--------|
| **Type** | A |
| **Sous-domaine** | *(LAISSER VIDE)* |
| **TTL** | Par défaut |
| **Cible** | `185.199.109.153` |

#### Troisième enregistrement A

| Champ | Valeur |
|-------|--------|
| **Type** | A |
| **Sous-domaine** | *(LAISSER VIDE)* |
| **TTL** | Par défaut |
| **Cible** | `185.199.110.153` |

#### Quatrième enregistrement A

| Champ | Valeur |
|-------|--------|
| **Type** | A |
| **Sous-domaine** | *(LAISSER VIDE)* |
| **TTL** | Par défaut |
| **Cible** | `185.199.111.153` |

---

### Étape 4.3 : Ajouter l'enregistrement CNAME pour www

Clique sur **"Ajouter une entrée"** :

| Champ | Valeur |
|-------|--------|
| **Type** | CNAME |
| **Sous-domaine** | `www` |
| **TTL** | Par défaut |
| **Cible** | `VOTRE-USERNAME.github.io.` |

**⚠️ IMPORTANT : N'oublie pas le point `.` à la fin !**

**Exemple :** `noecalmes-app.github.io.`

---

### ⚠️ Erreur : "Un enregistrement CNAME n'est pas autorisé à coexister..."

**Si tu vois cette erreur, c'est qu'il y a déjà des enregistrements pour `www` !**

#### Solution :

1. **Dans la Zone DNS**, cherche les lignes qui commencent par `www.mondomaine.com`
2. **Supprime TOUS les enregistrements `www` existants** :
   - `www.mondomaine.com` → Type **A**
   - `www.mondomaine.com` → Type **TXT**
   - `www.mondomaine.com` → Type **CNAME**

3. **Important** : Après suppression, cherche un bouton **"Appliquer les modifications"** ou **"Valider"** en haut/bas de page

4. **Attends 2-5 minutes**

5. **Rafraîchis la page OVH** (F5 ou Cmd+R)

6. **Vérifie que les lignes `www` ont bien disparu**

7. **Réessaie d'ajouter le CNAME**

---

### Étape 4.4 : Vérifier la configuration DNS finale

Dans la Zone DNS OVH, tu dois voir exactement :

```
mondomaine.com.          A       185.199.108.153
mondomaine.com.          A       185.199.109.153
mondomaine.com.          A       185.199.110.153
mondomaine.com.          A       185.199.111.153
www.mondomaine.com.      CNAME   votre-username.github.io.
```

✅ Si c'est bon, tu peux passer à l'étape suivante !

---

## 5️⃣ Validation finale

### Étape 5.1 : Attendre la propagation DNS

**Temps d'attente : 10 minutes à 48 heures** (généralement 1-2 heures)

#### Vérifier la propagation dans le terminal

```bash
# Vérifier les enregistrements A
dig mondomaine.com

# Vérifier le CNAME
dig www.mondomaine.com
```

✅ Si tu vois les IPs de GitHub (185.199.108.153, etc.), c'est propagé !

---

### Étape 5.2 : Vérifier sur GitHub

1. Retourne dans **GitHub → Settings → Pages**
2. L'erreur **"DNS check unsuccessful"** devrait avoir disparu
3. Tu devrais voir un message vert : **"Your site is live at https://mondomaine.com"**

---

### Étape 5.3 : Activer HTTPS

**Une fois le DNS propagé** (erreur disparue) :

1. Dans **GitHub → Settings → Pages**
2. Coche la case **"Enforce HTTPS"**
3. GitHub génère automatiquement un certificat SSL gratuit

⏰ **Le certificat SSL peut prendre 15-30 minutes à être généré**

---

### Étape 5.4 : Tester ton site

Ton site doit être accessible sur :

- ✅ `https://mondomaine.com`
- ✅ `https://www.mondomaine.com`
- ✅ `https://votre-username.github.io/nom-du-repo/` (redirige vers ton domaine)

---

## 6️⃣ Problèmes courants

### ❌ Problème 1 : "File is XXX MB; this exceeds GitHub's file size limit"

**Cause :** Un fichier dépasse 100 MB

**Solution :**
```bash
git rm --cached chemin/vers/fichier-lourd
rm chemin/vers/fichier-lourd
git add .
git commit -m "Remove large file"
git push --force origin main
```

---

### ❌ Problème 2 : "DNS check unsuccessful" sur GitHub

**Causes possibles :**

1. **DNS pas encore propagé** → Attendre 1-2 heures
2. **Enregistrements DNS mal configurés** :
   - Vérifier que les 4 IPs sont correctes
   - Vérifier le point `.` à la fin du CNAME
3. **Conflit CNAME** → Supprimer les anciens enregistrements `www`

---

### ❌ Problème 3 : "Un enregistrement CNAME n'est pas autorisé à coexister..."

**Solution :**

1. Supprimer TOUS les enregistrements existants pour `www` dans OVH
2. Cliquer sur **"Appliquer les modifications"**
3. Attendre 2-5 minutes
4. Rafraîchir la page OVH
5. Réessayer d'ajouter le CNAME

---

### ❌ Problème 4 : Le site ne se met pas à jour après un push

**Solution :**

1. Va dans **GitHub → Actions** → Vérifie que le workflow est vert ✅
2. Vide le cache du navigateur : **Cmd+Shift+R** (Mac) ou **Ctrl+Shift+R** (Windows)
3. Attends 5 minutes pour le déploiement complet

---

### ❌ Problème 5 : "404 - There isn't a GitHub Pages site here"

**Solution :**

1. Vérifie que **"GitHub Actions"** est bien sélectionné dans Settings → Pages
2. Va dans **Actions** → Vérifie que le workflow s'est exécuté sans erreur
3. Attends 5 minutes après le premier déploiement

---

### ❌ Problème 6 : Le workflow est rouge ❌ dans Actions

**Solution :**

1. Clique sur le workflow rouge
2. Clique sur "build" pour voir les logs
3. Identifie l'erreur (souvent un problème de build)
4. Corrige l'erreur dans ton code
5. Push à nouveau → le workflow redémarre automatiquement

---

## 7️⃣ Checklist complète

### ✅ Préparation du code

- [ ] `vite.config.ts` contient `base: '/'`
- [ ] `.github/workflows/deploy.yml` créé avec le bon contenu
- [ ] `.gitignore` exclut les fichiers lourds (*.dmg, *.zip, etc.)
- [ ] Le projet build localement sans erreur (`npm run build`)

### ✅ Git et GitHub

- [ ] Code poussé sur GitHub
- [ ] Aucune erreur de fichier trop lourd
- [ ] Repo public (ou GitHub Pro pour repo privé)

### ✅ GitHub Pages

- [ ] Settings → Pages → Source : **"GitHub Actions"** sélectionné
- [ ] Custom domain ajouté : `mondomaine.com`
- [ ] Workflow "Deploy to GitHub Pages" est vert ✅ dans Actions

### ✅ DNS OVH

- [ ] 4 enregistrements A ajoutés (sous-domaine vide, 4 IPs différentes)
- [ ] 1 enregistrement CNAME ajouté (www → votre-username.github.io.)
- [ ] Aucun conflit CNAME (anciens enregistrements www supprimés)
- [ ] Modifications DNS appliquées/validées

### ✅ Validation finale

- [ ] DNS propagé (vérifiable avec `dig`)
- [ ] Erreur "DNS check unsuccessful" disparue sur GitHub
- [ ] HTTPS activé (case cochée dans GitHub Pages)
- [ ] Site accessible sur `https://mondomaine.com`
- [ ] Site accessible sur `https://www.mondomaine.com`

---

## 🔄 Déploiement automatique (une fois configuré)

À partir de maintenant, pour mettre à jour ton site :

```bash
# Faire des modifications dans le code
git add .
git commit -m "Update: description des changements"
git push origin main

# Le site se met à jour automatiquement en 2-3 minutes ✨
```

---

## 📊 Monitoring

### Voir l'état du déploiement

1. Va dans **GitHub → Actions**
2. Clique sur le dernier workflow
3. Vérifie que les deux jobs (build + deploy) sont verts ✅

### Temps de déploiement typique

- **Build** : 1-2 minutes
- **Deploy** : 30 secondes
- **Total** : ~2-3 minutes après le push

---

## 🎯 Template pour les nouveaux projets

**Quand tu commences un nouveau projet React/Vite :**

1. ✅ Copie le fichier `.github/workflows/deploy.yml` depuis ce projet
2. ✅ Configure `vite.config.ts` avec `base: '/'`
3. ✅ Mets à jour `.gitignore`
4. ✅ Suis ce guide à partir de l'étape 2 (Commandes Git)

---

## 📝 Notes importantes

- **Limite GitHub Pages** : 1 GB de stockage, 100 GB de bande passante/mois (gratuit)
- **Limite fichier** : 100 MB max par fichier
- **Propagation DNS** : Peut prendre jusqu'à 48h (généralement 1-2h)
- **Certificat SSL** : Automatique et gratuit via Let's Encrypt
- **Déploiement** : Automatique à chaque push sur `main`

---

## 🆘 Support

En cas de problème :

1. Vérifie cette checklist complète
2. Consulte la section "Problèmes courants"
3. Vérifie les logs dans **GitHub → Actions**
4. Vérifie la configuration DNS avec `dig`

---

## 🎉 C'est terminé !

Ton site est maintenant hébergé gratuitement sur GitHub Pages avec ton domaine personnalisé OVH !

**Partage ce guide pour tes futurs projets** 🚀

---

© 2025 - Guide créé pour le déploiement de projets React/Vite sur GitHub Pages
