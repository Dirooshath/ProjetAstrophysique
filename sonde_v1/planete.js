// classe qui décrit une planète
class Planete
{
    // Le constructor nécessite des paramètres qui serviront à initialiser 
    // les attributs de notre objet
    constructor( pCentralx, pCentraly, pOrbite, pAngle, pRayon, pPeriode, pColor, pMasse)
    {
    
        this.centralx = pCentralx;
        this.centraly = pCentraly;
        this.periode = pPeriode;
        
        this.orbite = pOrbite;
        this.angle = pAngle;
   
        this.rayon = pRayon;
        this.color = pColor;

        this.x= this.centralx + this.orbite * Math.cos(this.angle)
        this.y= this.centraly + this.orbite * Math.sin(this.angle)

        this.masse= pMasse;
    }
    


    // Fonction qui traite la logic de l'objet. On prend le deltaTime en argument au besoin
    update(dt)
    {   
        this.vang = 2* Math.PI / this.periode
        this.angle+= this.vang * dt
        this.x= this.centralx + this.orbite * Math.cos(this.angle)
        this.y= this.centraly + this.orbite * Math.sin(this.angle)
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