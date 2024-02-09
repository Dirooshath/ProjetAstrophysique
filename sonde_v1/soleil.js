// classe qui décrit le Soleil
class Soleil
{
    // Le constructor nécessite des paramètres qui serviront à initialiser 
    // les attributs de notre objet
    constructor(pX, pY, pRayon, pColor, pMasse)
    {
         // Positon initiale 2D de notre particule
         this.x = pX;
         this.y = pY;
         
         // Le rayon de notre particule qui sera représenté par un cercle
        this.rayon = pRayon;

        // La couleur de notre particule
        this.color = pColor;

        this.masse= pMasse;

    }

    // Fonction qui traite la logic de l'objet. On prend le deltaTime en argument au besoin
    update(dt)
    {   
    
    }
    
    // Fonction qui dessine l'objet. Le context est en argument puisque c'est
    // lui qui fournit les fonctions pour dessiner dans le canvas.
    draw(pContext)
    {
        // Notre objet sera représenté par un cercle plein
        
        // On définit la couleur
        pContext.fillStyle = this.color;

        // Procédure pour dessiner un cercle
        pContext.beginPath();
        pContext.arc(this.x, this.y, this.rayon, 0, 2 * Math.PI);
        pContext.fill();
        
    }
}