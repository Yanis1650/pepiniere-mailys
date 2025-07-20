# 🌱 Pépinière Mailys - Site Vitrine

Un site vitrine moderne et élégant pour la Pépinière Mailys, développé avec Next.js 14, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- **Design moderne et responsive** - S'adapte parfaitement à tous les écrans
- **Navigation intuitive** - Menu de navigation clair et accessible
- **Page d'accueil attractive** - Présentation de la pépinière avec sections services
- **Galerie de photos** - Affichage des plantes et fleurs avec filtres par catégorie
- **Page "À propos"** - Histoire, valeurs et équipe de la pépinière
- **Formulaire de contact sécurisé** - Contact facile avec validation des données
- **SEO optimisé** - Métadonnées et structure pour un bon référencement
- **Performance optimisée** - Chargement rapide et expérience utilisateur fluide

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React moderne avec App Router
- **TypeScript** - Typage statique pour la sécurité du code
- **Tailwind CSS** - Framework CSS utilitaire pour un design rapide
- **React Hooks** - Gestion d'état moderne
- **Responsive Design** - Compatible mobile, tablette et desktop

## 📦 Installation

1. **Cloner le projet** (si vous avez un repository)
```bash
git clone [url-du-repo]
cd site
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir votre navigateur**
```
http://localhost:3000
```

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie la qualité du code

## 📁 Structure du projet

```
src/
├── app/                    # Pages de l'application (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── contact/           # Page de contact
│   ├── galerie/           # Page galerie
│   └── a-propos/          # Page à propos
├── components/            # Composants réutilisables
│   ├── Navigation.tsx     # Barre de navigation
│   └── Footer.tsx         # Pied de page
└── globals.css           # Styles globaux
```

## 🎨 Personnalisation

### Couleurs
Le site utilise une palette de couleurs vertes pour correspondre à l'univers de la pépinière :
- Vert principal : `green-600`
- Vert clair : `green-100`, `green-50`
- Gris : `gray-800`, `gray-600`, `gray-400`

### Contenu
Pour personnaliser le contenu :

1. **Informations de contact** - Modifiez `src/components/Footer.tsx`
2. **Texte de présentation** - Modifiez `src/app/page.tsx`
3. **Photos de la galerie** - Remplacez les placeholders dans `src/app/galerie/page.tsx`
4. **Métadonnées SEO** - Modifiez `src/app/layout.tsx`

### Images
Pour ajouter vos propres images :
1. Placez vos images dans le dossier `public/`
2. Remplacez les placeholders dans les composants
3. Utilisez le composant `Image` de Next.js pour l'optimisation

## 🔧 Configuration avancée

### Variables d'environnement
Créez un fichier `.env.local` pour les variables d'environnement :
```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Déploiement
Le site est optimisé pour le déploiement sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le site sera déployé automatiquement à chaque push

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🔒 Sécurité

- Validation des formulaires côté client et serveur
- Protection CSRF intégrée
- Headers de sécurité configurés
- Pas de données sensibles exposées

## 📈 Performance

- Images optimisées avec Next.js Image
- Code splitting automatique
- Lazy loading des composants
- Compression des assets

## 🐛 Dépannage

### Erreurs courantes

1. **Module not found** - Vérifiez que toutes les dépendances sont installées
2. **Port déjà utilisé** - Changez le port avec `npm run dev -- -p 3001`
3. **Erreurs TypeScript** - Vérifiez les types dans vos composants

### Support
Pour toute question ou problème, consultez la documentation Next.js ou contactez l'équipe de développement.

## 📄 Licence

Ce projet est développé pour la Pépinière Mailys. Tous droits réservés.

---

**Développé avec ❤️ pour la Pépinière Mailys**
