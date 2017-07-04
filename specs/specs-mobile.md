# SITE MOBILE VS RESPONSIVE

SOM est un webzine avec un contenu très dense. Dans le cas présent, un site mobile dédié est probablement plus judicieux qu'un développement 100 % responsive si l'on veut offrir un confort d'utilisation maximal aux mobinautes. Une version responsive de SOM sur smartphone risquerait de conduire à une surabondance d'informations et de fonctionnalités inutiles.

Certaines fonctionnalités, notamment de type wiki ou simplement rédactionnelles, n'ont pas tellement de sens sur mobile. Qui s'amuserait à écrire des chroniques ou à soumettre des groupes sur smartphone ? Sur une version mobile, tout module inutile doit disparaître. Face à cette problématique, le site mobile paraît une nouvelle fois judicieux, afin de proposer une version légère qui ne garde que le strict minimum.

La refonte du site principal fera probablement intervenir des technologies plus avancées (mais aussi plus lourdes) qui risqueraient de détériorer gravement les performances sur smartphone où les ressources physiques sont moindres.

Facebook, Twitter et YouTube proposent tous un site mobile...

# REMARQUES GÉNÉRALES

Le site mobile sera réservé aux terminaux mobiles dont la largeur est inférieure à 640 pixels (smartphones), conformément aux recommandations de Google.

Ce site sera accessible à l'adresse http://m.spirit-of-metal.com/

Une redirection automatique (Apache ou JavaScript) devra être mise en place pour servir les mobinautes comme il se doit.

Les tablettes afficheront par défaut la version normale de SOM.

L'optimisation devra être agressive afin de conserver de bonnes performances.

# FONCTIONNALITÉS DE BASE (vitrine)

Page d'accueil (http://m.spirit-of-metal.com/) avec 6 rubriques :

- Actualités
- Chroniques
- Interviews
- Sorties
- Événements
- Forums

Page d'actualités (http://m.spirit-of-metal.com/fr/actualites)
--> Affiche les 10 dernières news
--> Champ de recherche disponible

Page de chroniques (http://m.spirit-of-metal.com/fr/chroniques)
--> Affiche les 10 dernières chroniques
--> Champ de recherche disponible

Page d'interviews (http://m.spirit-of-metal.com/fr/interviews)
--> Affiche les 10 dernières interviews
--> Champ de recherche disponible

Page de sorties (http://m.spirit-of-metal.com/fr/sorties)
--> Affiche les 10 dernières sorties
--> Tri par genre disponible

Page d'événements (http://m.spirit-of-metal.com/fr/événements)
--> Affiche les 5 prochains concerts
--> Affiche les 5 derniers live-reports
--> Affiche les 5 dernières galeries photos

Redirection vers les forums (http://www.spirit-of-metal.net/forum/index-l-fr.html)

# FONCTIONNALITÉS AVANCÉES (espace membre & encyclopédie)

Les fonctionnalités avancées seront accessibles via le burger menu :

## Espace membre

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

## Encyclopédie

Possibilité de rechercher et de consulter les informations suivantes :

- Genres
- Groupes
- Artistes
- Albums
- Labels
- Lieux

## Divers

Proposer un lien pour afficher la version normale du site

# TECHNOLOGIES PERTINENTES

- HTML5 pour la structure
- CSS3 + Stylus pour la présentation
- Vue.js et/ou Zepto pour la dynamisation (JavaScript)
- Cordova pour une éventuelle conversion en application hybride
- Conservation du back-end en PHP
- Gestion des dépendances front-end avec npm
- Build avec Webpack
