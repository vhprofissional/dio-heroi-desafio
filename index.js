//Coloquei o else para contemplar o numero mil, que não foi expecificado e esclarecido no enunciado
//(Se XP for menor do que 1.000 = Ferro) 

let heroName = 'Victor';
	let heroExperienceQuantity = 8000;
	let heroLevel = '';

    if (heroExperienceQuantity < 1000){
        heroLevel = 'Ferro';
    
    } else if (heroExperienceQuantity >=  1001  && heroExperienceQuantity <=  2000 ){    
        heroLevel = 'Bronze';
    
    } else if (heroExperienceQuantity >=  2001  && heroExperienceQuantity <=  5000 ){    
        heroLevel = 'Prata';
    
    } else if (heroExperienceQuantity >=  5001  && heroExperienceQuantity <=  7000 ){    
        heroLevel = 'Ouro';
    
    } else if (heroExperienceQuantity >=  7001  && heroExperienceQuantity <=  8000 ){    
        heroLevel = 'Platina';
    
    } else if (heroExperienceQuantity >=  8001  && heroExperienceQuantity <=  9000 ){
        heroLevel = 'Ascendente';
    
    } else if (heroExperienceQuantity >=  9001  && heroExperienceQuantity <=  10000 ){
        heroLevel = 'Imortal';
    
    } else if (heroExperienceQuantity >=  10001){
        heroLevel = 'Radiante';
    
    } else {
		heroLevel = 'Indefinido'; //Este 'else' contemplaria o número MIL (1000) 
		
	}

  console.log('O Herói de nome ' + heroName + ' está no nível de ' + heroLevel);