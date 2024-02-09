// Le main.js fait les choses suivante : 
// 1. Initie le lancement du programme ;
// 2. Crée la zone dans laquelle nous allons dessiner ;
// 3. Lance la fonction qui va initialiser les conditions initiales de votre système ;
// 4. Établi la boucle principal de traitement (logique + dessin).
// 5. Calcul pour nous l'intervalle de temps entre chaque itération de la boucle principale.

// Déclaration des variables nécessaire au lancement du programme
"use strict"; // force la rigueur dans le code

let canvas;     // c'est notre zone de dessin
let context;    // fournit des fonctions qu'on pourra utiliser dans notre canvas pour dessiner

let deltaTime = 0;  // intervalle de temps entre les deux dernières itérations de la boucle principale.
let oldTime = 0;    // sauvegarde le temps de la boucle précédente, sert à calculer le deltaTime.

// Lorsque la page s'ouvre dans le fureteur, on lance la fonction init... 
// qui initiera le lancement du programme à l'aide de la fonction init
window.onload = init;

// Fonction qui initie le lancement du programme
function init() 
{
    // Création du canvas, c'est la zone dans laquelle nous allons dessiner nos objets.
    // C'est comme une feuille de dessin qui va prendre la dimension vertical du fureteur.
    canvas = document.getElementById("canvas");

    // le context fournit les fonctions nécessaires pour dessiner dans le canvas.
    // Nous allons travailler dans un context en 2d.
    context = canvas.getContext("2d");          

    // On charge et initialise les éléments du jeu
    // La fonction load() se trouve dans le fichier traitement.js
    load();

    // Débute la première boucle de traitement en appelant la fonction boucleTraitement.
    // Cette fonction est définit plus bas
    window.requestAnimationFrame(bouclePrincipal);
}

// Fonction qui établi la boucle principal de notre animation
// L'argument time correspond au jour actuel
function bouclePrincipal(time)
{
    // Calcul de l'intervalle de temps entre la boucle actuel et la dernière boucle
    deltaTime = (time - oldTime) / 1000;

    // On met une limite minimal de 1/50 s au deltaTime, en cas de lag
    deltaTime = Math.min(deltaTime, 1/50);

    // On met à jour le oldTime, qui sera utiliser pour la prochaine boucle
    oldTime = time;

    // update de la logique du jeu.
    // La fonction update(deltaTime) se trouve dans le fichier traitement.js
    update(deltaTime);

    // dessin du jeu
    // On efface tout le canvas avant de redessiner dedant
    context.clearRect(0,0,canvas.width, canvas.height);

    // La fonction draw(context) se trouve dans le fichier traitement.js
    // et elle s'occupera de dessiner l'état de notre système à l'écran
    draw(context);

    // On demande une nouvelle boucle en appelant la fonction boucleTraitement.
    // Remarquez que la foncton boucleTraitement s'appelle d'elle-même
    // garantissant une certaine perpétualité tant et aussi longtemps qu'on
    // ne fermera pas la fenêtre du fureteur.
    window.requestAnimationFrame(bouclePrincipal);
}

// Fonction qu'on n'utilise pas mais qui peut être utilise pour savoir dessiner certain type de truc sur un canvas
function drawExercice(){
    // Get a random color, red or blue
    let randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';

    // Draw a rectangle
    context.fillStyle = randomColor;
    context.fillRect(0, 0, 200, 150);

    // Draw a circle
    context.beginPath();
    context.arc(250,50,50,0,Math.PI);
    context.fill();

    // Draw a line
    context.beginPath();
    context.moveTo(0,150);
    context.lineTo(200,200);
    context.stroke();

    // Draw a triangle
    context.beginPath();
    context.moveTo(250,100);
    context.lineTo(300,150);
    context.lineTo(200,150);
    context.fill();

    // Dessin d'un cercle fill et stroke
    context.fillStyle = '#ff8080'
    context.beginPath();
    context.arc(350,50,50,0,2*Math.PI);
    context.fill();
    context.strokeStyle = '#0099b0'
    context.lineWidth = 5;
    context.stroke();

    // Utlisation d'un path SVG
    let path = new Path2D("M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z");

    context.beginPath();
    context.strokeStyle = '#0099b0';
    context.fillStyle = '#ff8080';
    context.stroke(path);
    context.fill(path);

    // Draw text
    context.fillStyle = 'black';
    context.fillText("Some text", 400,200);

    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.strokeText("Some text", 400, 300);

    context.font = '48px Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillText("Some text", 200,200);
}