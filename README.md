### README pour ProjetAstrophysique

#### Vue d'ensemble
Le ProjetAstrophysique est un projet de simulation fascinant qui met en scène la dynamique des corps célestes au sein d'un système solaire. Il est conçu pour simuler le mouvement des planètes et d'un satellite autour d'un soleil, offrant une expérience visuelle et interactive des principes astrophysiques. Ce projet est implémenté en utilisant HTML5, JavaScript et CSS, le rendant accessible via un navigateur web.

#### Structure
Le projet est structuré autour d'un fichier HTML principal (`index.html`) et de plusieurs fichiers JavaScript qui gèrent différents aspects de la simulation :

- [`index.html`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/index.html) : Le point d'entrée de la simulation, configurant le canvas et chargeant les scripts.
- [`interface.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/interface.js) : Gère l'interface utilisateur, incluant l'initialisation et la mise à jour des paramètres pour la simulation.
- [`main.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/main.js) : Le script principal qui initialise la simulation et orchestre la boucle de rendu.
- [`particule.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/particule.js) : Définit la classe `Particule`, représentant les propriétés physiques de base et les comportements des particules.
- [`planete.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/planete.js) : Contient la définition des planètes dans la simulation, étendant la classe `Particule` avec la mécanique orbitale.
- [`satellite.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/satellite.js) : Implémente le comportement du satellite, incluant son lancement et son orbite autour d'une planète.
- [`soleil.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/soleil.js) : Décrit le soleil dans la simulation, autour duquel les planètes orbitent.
- [`traitement.js`](https://github.com/Dirooshath/ProjetAstrophysique/blob/main/sonde_v1/traitement.js) : Gère les calculs physiques et met à jour les états de toutes les entités dans la simulation.

#### Fonctionnalités
- **Simulation Interactive** : Les utilisateurs peuvent interagir avec la simulation via une interface web, ajustant des paramètres tels que la constante gravitationnelle, les masses des corps célestes, et la vitesse initiale et la direction du satellite.
- **Visualisation en Temps Réel** : La simulation fournit une représentation visuelle en temps réel du mouvement des corps célestes, offrant des aperçus sur la dynamique d'un système solaire simplifié.
- **Outil Éducatif** : Ce projet sert d'excellent outil éducatif pour comprendre les concepts de base en astrophysique et en mécanique céleste.

#### Comment Utiliser
Pour exécuter la simulation, ouvrez simplement le fichier `index.html` dans un navigateur web moderne. La simulation se chargera automatiquement, vous présentant une représentation visuelle du système solaire. Vous pouvez interagir avec la simulation via l'interface fournie, bien que dans la version actuelle, les contrôles soient commentés dans le fichier HTML.

#### Travaux Futurs
- **Améliorations de l'Interface** : Décommenter et développer davantage l'interface utilisateur pour ajuster les paramètres de la simulation en temps réel.
- **Fonctionnalités Supplémentaires** : Implémenter des fonctionnalités telles que la détection de collisions, des mécaniques orbitales plus complexes, et l'inclusion de davantage de corps célestes.
- **Optimisation des Performances** : Optimiser la simulation pour de meilleures performances, en particulier lors de la simulation de systèmes plus complexes ou sur du matériel moins performant.
