// classe qui décrit le satellite
class Satellite
{
    // Le constructor nécessite des paramètres qui serviront à initialiser 
    // les attributs de notre objet
    constructor(pCentralx, pCentraly, pDistance, pAngle, pV, pColor)
    {
        this.centralx = pCentralx;
        this.centraly = pCentraly;

        this.distance= pDistance;
        this.angle= (2* Math.PI * pAngle)/ 360;
        this.color= pColor;
        this.rayon= 3;
        
        this.x= this.centralx + this.distance * Math.cos(this.angle);
        this.y= this.centraly + this.distance * Math.sin(this.angle);
        this.vx= pV* Math.cos(this.angle);
        this.vy= pV* Math.sin(this.angle);
        

    }

    // Fonction qui traite la logic de l'objet. On prend le deltaTime en argument au besoin
    update(dt)
    {


     }
    // Fonction qui dessine l'objet. Le context est en argument puisque c'est
    // lui qui fournit les fonctions pour dessiner dans le canvas.
    draw(pContext)
    {
        pContext.fillStyle = this.color;


        
        pContext.beginPath();
        pContext.arc(this.x, this.y, this.rayon, 0, 2 * Math.PI);
        pContext.fill();
        
        
    }
}