// Déclaration des objets de notre système
"use strict"; // force la rigueur dans le code

// constantes
let G = 7750; // par exemple

// exemple d'objet
let particule1;
let particule2;

// Soleil
let soleil;
// Terre
let terre;
// Mars
let mars;
// Satellite
let satellite;

// Nous allons mettre nos objets dans une liste pour facilité certaines actions
let lstObjets;

// --------------- Chargement et initialisation des objets de notre système -------------- //
// fonction qui charge et initialise les objets de notre système
function load()
{       
    // En guise d'exemple définissons 2 particules
    soleil= new Soleil(312, 312, 30, '#e4c23a', 21);
    mars= new Planete(soleil.x, soleil.y, 288, 0, 10, 50, '#c26208', 7.92);
    terre= new Planete(soleil.x, soleil.y, 188, 0, 15, 23, '#138dd5', 8);
    satellite= new Satellite(terre.x, terre.y, 15, 50, 117.25, 'white');
    
    // On ajoute les objets dans la liste
    lstObjets = [];  // on crée d'abord une liste vide
    lstObjets.push(terre);
    lstObjets.push(mars);
    lstObjets.push(soleil);
    lstObjets.push(satellite);
}

// ------------------------------------- Game logic ------------------------------------------------------- //
// update de la logique de la game
function update(dt)
{

    
    
    let r1x= soleil.x - satellite.x;
    let r1y= soleil.y - satellite.y;
    let r1= Math.sqrt (r1x ** 2 + r1y ** 2 )
    let f1x = G * soleil.masse * r1x / r1 ** 3;
    let f1y = G * soleil.masse * r1y / r1 ** 3;

    let r2x= terre.x - satellite.x;
    let r2y= terre.y - satellite.y;
    let r2= Math.sqrt (r2x ** 2 + r2y ** 2 )
    let f2x = G * terre.masse * r2x / r2 ** 3;
    let f2y = G * terre.masse * r2y / r2 ** 3;

    let r3x= mars.x - satellite.x;
    let r3y= mars.y - satellite.y;
    let r3= Math.sqrt (r3x ** 2 + r3y ** 2 )
    let f3x = G * mars.masse * r3x / r3 ** 3;
    let f23y = G * mars.masse * r3y / r3 ** 3;

    

    // satelliste.a= F / m
    let ax= f1x + f2x + f3x;
    let ay= f1y + f2y + f23y;
    satellite.x= satellite.x + (satellite.vx *dt) + 1/2 * ax * dt**2;
    satellite.y= satellite.y + (satellite.vy *dt) + 1/2 * ay * dt**2;
    satellite.vx= satellite.vx + ax * dt;
    satellite.vy= satellite.vy + ay * dt;

    // À lire comme suit : pour chaque objet dans la liste d'objet lstObjets, on appel la
    // fonction update associée à l'objet en traitement.
    lstObjets.forEach(objet =>{
        objet.update(dt);

    })
}

// ------------------------------------- Drawing game ---------------------------------------------------- //
// dessin de la game
function draw()
{
    // Dessin des orbites    
    // orbite de la Terre 
    context.strokeStyle = 'blue';
    context.beginPath();
    context.arc(312, 312, 188 , 50, 0, Math.PI);
    context.stroke();   

    // orbite de Mars 
    context.strokeStyle = 'red';  
    context.beginPath();
    context.arc(312, 312, 288, 50, 0, Math.PI);
    context.stroke(); 

    // On dessine tous les éléments de la liste lstObjets
    lstObjets.forEach(objet => {
        objet.draw(context);
    });   
}