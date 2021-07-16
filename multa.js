function verification(){
    var number = document.getElementById("numberVerif");
    var result = document.getElementById("res");
    var numberKM = Number(number.value);
    if(numberKM <= 0){
        alert("[ERROR] Velocidade tem que ser maior que 0KM/h" )
    }else if(numberKM <= 60){
        result.innerHTML=` \u{1F60E} sua velocidade é de ${numberKM}KM/h em uma via de 60KM/h continue assim e digira com cuidado!`
    }else if(numberKM > 61){
        result.innerHTML=` \u{1F921}  seu merda do kralho, você está a ${numberKM}KM/h em uma pista de 60KM/h você é um piscopata imprudente, deveria ter batido em um poste e morrido, faria um favor para sociedade.  \u{1F449}\u{1F449}\u{1F449} Dirijase até uma unidade do DETRAN mais proxima e pessa para que imitam a sua multa seu otario do kralho...`
    }
    
}      