// classe qui décrit notre particule de test
class Particule   // nom de la classe
{
    // Le constructor nécessite des paramètres qui serviront à initialiser.
    // j'utilise le préfixe "p" devant chaque nom de variable pour indiquer que ça
    // correspond à un paramètre. 
    constructor(pX, pY, pVx, pVy, pRayon, pColor)
    {
        // On assigne les paramètres aux attributs de notre classe (ce sont les propriétés de la classe)

        // Positon initiale 2D de notre particule
        this.x = pX;
        this.y = pY;

        // Vitesse initiale 2D de notre particule
        this.vx = pVx;
        this.vy = pVy;

        // Le rayon de notre particule qui sera représenté par un cercle
        this.rayon = pRayon;

        // La couleur de notre particule
        this.color = pColor;

        // On peut définir d'autres attributs au besoin
        this.masse = 1;   
    }

    // Fonction qui traite la logic de l'objet. On prend le deltaTime en argument au besoin
    update(dt)
    {
        // Calcul de la nouvelle position
        this.x = this.x + this.vx * dt;
        this.y += this.vy * dt;         // équivalent à this.y = this.y + this.vy * dt
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