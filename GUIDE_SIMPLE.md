# 🚀 Héberger React sur GitHub Pages + OVH (Guide rapide)

## 1. Préparer le code

### vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',  // ⚠️ Important !
});
```

### Créer .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### .gitignore
```
*.dmg
*.zip
*.tar.gz
*.rar
*.7z
```

---

## 2. Pousser sur GitHub

```bash
git add .
git commit -m "Setup GitHub Pages"
git push origin main
```

**Si erreur fichier > 100MB :**
```bash
git rm --cached chemin/vers/fichier-lourd
rm chemin/vers/fichier-lourd
git commit -m "Remove large file"
git push --force origin main
```

---

## 3. Configuration GitHub

**Aller sur :**
```
https://github.com/VOTRE-USERNAME/NOM-REPO/settings/pages
```

**Configurer :**
1. **Source** → Sélectionner **"GitHub Actions"**
2. **Custom domain** → Entrer `mondomaine.com`

---

## 4. Configuration DNS OVH

**Aller sur :** ovh.com → Noms de domaine → mondomaine.com → Zone DNS

### Ajouter 4 enregistrements A

| Type | Sous-domaine | Cible |
|------|--------------|-------|
| A | *(vide)* | `185.199.108.153` |
| A | *(vide)* | `185.199.109.153` |
| A | *(vide)* | `185.199.110.153` |
| A | *(vide)* | `185.199.111.153` |

### Ajouter 1 enregistrement CNAME

| Type | Sous-domaine | Cible |
|------|--------------|-------|
| CNAME | `www` | `votre-username.github.io.` |

**⚠️ Point `.` obligatoire à la fin !**

**Si erreur CNAME :**
1. Supprimer tous les enregistrements `www` existants (A, TXT, CNAME)
2. Cliquer sur "Appliquer les modifications"
3. Attendre 2-5 min
4. Réessayer

---

## 5. Validation

**Attendre 1-2 heures** (propagation DNS)

**Vérifier :**
```bash
dig mondomaine.com
```

**Dans GitHub → Settings → Pages :**
- Erreur "DNS check unsuccessful" doit disparaître
- Cocher **"Enforce HTTPS"**

**Tester :**
- `https://mondomaine.com` ✅
- `https://www.mondomaine.com` ✅

---

## ✅ Checklist

- [ ] `vite.config.ts` : `base: '/'`
- [ ] `.github/workflows/deploy.yml` créé
- [ ] Code pushé sur GitHub
- [ ] GitHub Pages : Source = "GitHub Actions"
- [ ] Custom domain ajouté
- [ ] OVH : 4 enregistrements A
- [ ] OVH : 1 CNAME (www)
- [ ] DNS propagé (1-2h)
- [ ] HTTPS activé

---

## 🔄 Mise à jour

```bash
git add .
git commit -m "Update"
git push origin main
# → Le site se met à jour automatiquement en 2-3 min
```

---

## 🐛 Problèmes courants

**Fichier trop lourd :**
```bash
git rm --cached fichier.dmg && rm fichier.dmg && git push --force
```

**"DNS check unsuccessful" :**
- Attendre 1-2h (propagation)
- Vérifier les 4 IPs sur OVH
- Vérifier le point `.` du CNAME

**Conflit CNAME :**
- Supprimer tous les `www` existants sur OVH
