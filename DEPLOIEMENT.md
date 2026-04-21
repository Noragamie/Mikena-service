# Guide de Déploiement - Mikena Services

## 🚀 Options de déploiement (GRATUITES)

### Option 1 : Vercel (Recommandé - Le plus simple)

1. **Créer un compte sur Vercel**
   - Aller sur https://vercel.com
   - S'inscrire avec GitHub (gratuit)

2. **Déployer le projet**
   ```bash
   # Installer Vercel CLI
   npm install -g vercel
   
   # Se connecter
   vercel login
   
   # Déployer
   vercel
   ```

3. **Votre site sera disponible sur**
   - `https://votre-projet.vercel.app` (gratuit)
   - Vous pouvez ajouter votre propre domaine plus tard

4. **Configurer les variables d'environnement**
   - Dans le dashboard Vercel → Settings → Environment Variables
   - Ajouter : `NEXT_PUBLIC_SITE_URL` = `https://votre-projet.vercel.app`

---

### Option 2 : Netlify

1. **Créer un compte sur Netlify**
   - Aller sur https://netlify.com
   - S'inscrire (gratuit)

2. **Déployer**
   - Glisser-déposer le dossier du projet
   - Ou connecter votre repo GitHub

3. **Votre site sera sur**
   - `https://votre-projet.netlify.app`

4. **Variables d'environnement**
   - Site settings → Environment variables
   - Ajouter : `NEXT_PUBLIC_SITE_URL`

---

## 📝 Après le déploiement

### 1. Mettre à jour la configuration

Dans `lib/config.ts`, vérifier que tout est correct :
```typescript
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  // ... reste de la config
}
```

### 2. Vérifier que tout fonctionne

- ✅ Le site s'affiche correctement
- ✅ Les images se chargent
- ✅ La navigation fonctionne
- ✅ Le formulaire de contact fonctionne
- ✅ Le site est responsive (mobile)

### 3. Tester le SEO

Aller sur :
- https://search.google.com/test/rich-results
- Entrer l'URL de votre site
- Vérifier que les données structurées sont détectées

### 4. Soumettre à Google

1. **Google Search Console**
   - https://search.google.com/search-console
   - Ajouter votre propriété
   - Soumettre le sitemap : `https://votre-site.com/sitemap.xml`

2. **Google My Business** (IMPORTANT pour SEO local)
   - https://business.google.com
   - Créer votre fiche d'entreprise
   - Ajouter photos, horaires, services

---

## 🌐 Acheter un nom de domaine (optionnel)

### Où acheter ?
- **Namecheap** : ~10€/an
- **OVH** : ~8€/an
- **Google Domains** : ~12€/an

### Domaines suggérés :
- `mikenaservices.com`
- `mikenaservices.bj` (domaine béninois)
- `mikena-services.com`

### Connecter le domaine :

**Avec Vercel :**
1. Domains → Add Domain
2. Suivre les instructions
3. Mettre à jour les DNS chez votre registrar

**Avec Netlify :**
1. Domain settings → Add custom domain
2. Configurer les DNS

---

## 🔧 Configuration avancée

### Ajouter Google Analytics

1. Créer un compte sur https://analytics.google.com
2. Obtenir votre ID (G-XXXXXXXXXX)
3. Ajouter dans `.env.local` :
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Ajouter un certificat SSL

- ✅ Vercel et Netlify le font automatiquement (HTTPS)
- Rien à faire !

### Configurer les emails

Pour le formulaire de contact, vous pouvez utiliser :
- **EmailJS** (gratuit) : https://www.emailjs.com/
- **SendGrid** (gratuit jusqu'à 100 emails/jour)
- **Resend** (gratuit jusqu'à 3000 emails/mois)

---

## 📊 Monitoring

### Vérifier la santé du site

- **Uptime Robot** (gratuit) : https://uptimerobot.com/
  - Vérifie que votre site est en ligne 24/7
  - Vous alerte si le site tombe

- **Google PageSpeed Insights** : https://pagespeed.web.dev/
  - Teste la vitesse de votre site
  - Donne des recommandations

---

## ❓ FAQ

### Q : Ça coûte combien ?
**R :** Gratuit ! Vercel et Netlify offrent un plan gratuit largement suffisant.

### Q : J'ai besoin d'un domaine .com ?
**R :** Non, le sous-domaine gratuit (`.vercel.app` ou `.netlify.app`) fonctionne parfaitement. Vous pouvez acheter un domaine plus tard.

### Q : Le SEO fonctionne sans domaine personnalisé ?
**R :** Oui ! Google indexe aussi les sous-domaines Vercel/Netlify.

### Q : Comment mettre à jour le site ?
**R :** 
```bash
# Faire vos modifications
git add .
git commit -m "Mise à jour"
git push

# Vercel/Netlify redéploie automatiquement !
```

### Q : Combien de temps pour être sur Google ?
**R :** 
- Soumission du sitemap : immédiat
- Indexation : 1-7 jours
- Bon classement : 1-3 mois (avec du contenu régulier)

---

## 🆘 Besoin d'aide ?

- Documentation Vercel : https://vercel.com/docs
- Documentation Netlify : https://docs.netlify.com
- Documentation Next.js : https://nextjs.org/docs
- Google Search Console Help : https://support.google.com/webmasters

---

## ✅ Checklist de déploiement

Avant de lancer :

- [ ] Tester le site en local (`npm run dev`)
- [ ] Vérifier que toutes les images s'affichent
- [ ] Tester sur mobile
- [ ] Vérifier les liens de navigation
- [ ] Tester le formulaire de contact
- [ ] Mettre à jour les coordonnées dans `lib/config.ts`
- [ ] Build de production réussi (`npm run build`)
- [ ] Déployer sur Vercel/Netlify
- [ ] Configurer la variable `NEXT_PUBLIC_SITE_URL`
- [ ] Tester le site en production
- [ ] Soumettre à Google Search Console
- [ ] Créer Google My Business

Bon déploiement ! 🚀
