// Update des valeurs initiales
function updateValue()
{
    // Gestion de la valeur G
    update_G();
    
    // Gestion des paramètres du Soleil
    update_Soleil();

    // Gestion des paramètres de la Terre
    update_Terre();

    // Gestion des paramètres de Mars
    update_Mars();

    // Gestion des paramètres du satellite
    update_Satellite();
}

// Function qui retourne une form_value
function returnFormValue(form, oldValue, step)
{
    if (Number(form.value) > Number(oldValue))
    {
        form.value = Number(oldValue) + Number(step);
        if (form.value > Number(form.max))
        {
            return Number(form.max);
        }
    }
    else if (Number(form.value) < Number(oldValue))
    {
        form.value = Number(oldValue) - Number(step);
        if (form.value < Number(form.min))
        {
            return Number(form.min);
        }
    }

    return Number(form.value);
}

// Function qui retounre une valeur d'angle
function returnAngleValue(form, oldValue, step)
{
    let value;

    if (Number(form.value) > Number(oldValue))
    {
        value = Number(oldValue) + Number(step);        
    }
    else if (Number(form.value) < Number(oldValue))
    {
        value = Number(oldValue) - Number(step);        
    }
    else
    {
        value = Number(form.value);
    }

    value += 360;
    value %= 360; 
    return Number(value);
}

// Fonction qui retourne le step d'une liste radio
function returnStep(radioList)
{
    for(let i = 0; i < radioList.length; i++)
    {
        if (radioList[i].checked)
        {
            return Number(radioList[i].value);
        }
    } 
}

// Fonction qui gère la valeur de G
function update_G()
{    
    // update de la valeur de G
    let formG = document.getElementById("G");
    formG.value = returnFormValue(formG, oldG_value, stepG);
    
    oldG_value = Number(formG.value);
    G = oldG_value;

    // update des boutons radios
    let radioG = document.forms.form_radioG.radioG;
    stepG = returnStep(radioG);     
}

// Fonction qui gère les paramètres du Soleil
function update_Soleil()
{
    // update de la valeur de MSoleil
    let formMSol = document.getElementById("MSol");
    formMSol.value = returnFormValue(formMSol, oldMSol_value, stepMSol);
    
    oldMSol_value = Number(formMSol.value);
    soleil.masse = oldMSol_value;

    // update des boutons radios
    let radioMSol = document.forms.form_radioMSol.radioMSol;
    stepMSol = returnStep(radioMSol);  
}

// Fonction qui gère les paramètres de la Terre
function update_Terre()
{
    // update de la valeur de MSoleil
    let formMT = document.getElementById("MT");
    formMT.value = returnFormValue(formMT, oldMT_value, stepMT);
    
    oldMT_value = Number(formMT.value);
    terre.masse = oldMT_value;

    // update des boutons radios
    let radioMT = document.forms.form_radioMT.radioMT;
    stepMT = returnStep(radioMT);  
}

// Fonction qui gère les paramètres de Mars
function update_Mars()
{
    // update de la valeur de MasseMars
    let formMM = document.getElementById("MM");
    formMM.value = returnFormValue(formMM, oldMM_value, stepMM);    
    
    oldMM_value = Number(formMM.value);
    mars.masse = oldMM_value;

    // update des boutons radios
    let radioMM = document.forms.form_radioMM.radioMM;
    stepMM = returnStep(radioMM);  

    // update de la valeur de angleOrbite
    let formPM = document.getElementById("PM");
    formPM.value = returnAngleValue(formPM, oldPM_value, stepPM).toFixed(1);

    oldPM_value = Number(formPM.value);
    mars.angle = oldPM_value * Math.PI / 180;
    mars.PolaireCartesien();

    // update des boutons radios
    let radioPM = document.forms.form_radioPM.radioPM;
    stepPM = returnStep(radioPM); 
}

// Fonction qui gère les paramètres du satellite
function update_Satellite()
{
    // update de la valeur de la vitesse de lancement
    let vitesse;
    let angle;

    let formVSat = document.getElementById("VSat");
    formVSat.value = returnFormValue(formVSat, oldVSat_value, stepVSat).toFixed(2);    
    
    oldVSat_value = Number(formVSat.value);
    vitesse = oldVSat_value;

    // update des boutons radios
    let radioVSat = document.forms.form_radioVSat.radioVSat;
    stepVSat = returnStep(radioVSat);  

    // update de la valeur de la direction de lancement
    let formDSat = document.getElementById("DSat");
    formDSat.value = returnAngleValue(formDSat, oldDSat_value, stepDSat);
    
    oldDSat_value = Number(formDSat.value);
    angle = oldDSat_value;    

    // update des boutons radios
    let radioDSat = document.forms.form_radioDSat.radioDSat;
    stepDSat = returnStep(radioDSat); 

    // mise à jour des composantes de la position et de la vitesse
    satellite.setInitialValue(terre.x, terre.y, angle, vitesse);
}

// Gestion des boutons
function boutonStart()
{
    console.log("Lancement du satellite");
    isAnimated = true;    
}

function boutonReset()
{
    console.log("Arrêt et reset de la simulation");
    isAnimated = false;

    // on remet la Terre à sa position de départ
    terre.angle = 0;
    terre.PolaireCartesien();
}