# Site mobile vs Site responsive

1. SOM est un webzine avec un contenu très dense. Dans le cas présent, un site mobile dédié est probablement plus judicieux qu'un développement 100 % responsive si l'on veut offrir un confort d'utilisation maximal aux mobinautes. Une version responsive de SOM sur smartphone risquerait de conduire à une surabondance d'informations et de fonctionnalités inutiles.

2. Certaines fonctionnalités, notamment de type wiki ou simplement rédactionnelles, n'ont pas tellement de sens sur mobile. Qui s'amuserait à écrire des chroniques ou à soumettre des groupes sur smartphone ? Sur une version mobile, tout module inutile doit disparaître. Face à cette problématique, le site mobile paraît une nouvelle fois judicieux, afin de proposer une version légère qui ne garde que le strict minimum.

3. La refonte du site principal fera probablement intervenir des technologies plus avancées (mais aussi plus lourdes) qui risqueraient de détériorer gravement les performances sur smartphone où les ressources physiques sont moindres.

4. Facebook, Twitter et YouTube proposent tous un site mobile...

# Remarques générales

1. Le site mobile sera réservé aux terminaux mobiles dont la largeur est inférieure à 640 pixels (smartphones), conformément aux recommandations de Google.

2. Ce site sera accessible à l'adresse http://m.spirit-of-metal.com/

3. Une redirection automatique (Apache ou JavaScript) devra être mise en place pour servir les mobinautes.

4. Les tablettes afficheront par défaut la version normale de SOM.

5. L'optimisation devra être agressive afin de conserver de bonnes performances.

# Fonctionnalités de base (vitrine)

## Contenu éditorial

**Page d'accueil** (http://m.spirit-of-metal.com/) avec 6 rubriques :

- Actualités
- Chroniques
- Interviews
- Sorties
- Événements
- Forums

**1. Page d'actualités** (http://m.spirit-of-metal.com/fr/actualites)
  - Affiche les 10 dernières news<br>
  - Champ de recherche disponible

**2. Page de chroniques** (http://m.spirit-of-metal.com/fr/chroniques)
  - Affiche les 10 dernières chroniques
  - Champ de recherche disponible

**3. Page d'interviews** (http://m.spirit-of-metal.com/fr/interviews)
  - Affiche les 10 dernières interviews
  - Champ de recherche disponible

**4. Page de sorties** (http://m.spirit-of-metal.com/fr/sorties)
  - Affiche les 10 dernières sorties
  - Tri par genre disponible

**5. Page d'événements** (http://m.spirit-of-metal.com/fr/événements)
  - Affiche les 5 prochains concerts
  - Affiche les 5 derniers live-reports
  - Affiche les 5 dernières galeries photos

**6. Redirection vers les forums** (http://www.spirit-of-metal.net/forum/index-l-fr.html)

## Encyclopédie

Possibilité de rechercher et de consulter les informations suivantes :

- Genres
- Groupes
- Artistes
- Albums
- Labels
- Lieux

# Fonctionnalités avancées (espace membre)

Les fonctionnalités avancées seront accessibles via le burger menu :

- Connexion/Inscription
- Notifications
- Flux d'actualité (possibilité de publier, de liker et de commenter)
- Messages privés (possibilité de lire et d'écrire des messages)
- Voir/Éditer mon profil (avatar, âge, sexe, ville/pays, cercle/points, équipes)
- Mes articles
- Mes albums
- Mes amis
- Mes groupes favoris
- Mes soumissions
- Chercher un membre

Ne pas oublier de proposer un lien pour afficher la version normale du site.

# Technologies pertinentes

- HTML5 pour la structure (microdata à prévoir afin d'améliorer la sémantique)
- CSS3 pour la présentation (+ Stylus afin de gagner en concision)
- Vue.js et/ou Zepto pour du JavaScript moderne (ES6) et tout en légèreté
- Cordova pour une éventuelle conversion en application hybride
- Gestion stricte des dépendances front-end avec npm
- Build avec Webpack à des fins de modularisation et d'optimisation
- Conservation du back-end en PHP
