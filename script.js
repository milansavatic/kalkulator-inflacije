function inflationCalculator(){
    let inflationRate=document.querySelector("#inflationRate");
    let money=document.querySelector("#money");

    //pretvaranje u broj sa pokretnim zarezom
    inflationRate=parseFloat(inflationRate.value);
    money=parseFloat(money.value);

    let years=document.querySelector("#years");
    years=parseFloat(years.value);

    //racunanje inflacije za jednu godinu
    let worth=money+(money*(inflationRate/100));

    //racunanje inflacije za druge godine
    for(let i =1; i<years; i++){
        worth+=worth*(inflationRate/100);
    }

    //dodavanje elemenata za ispis rezultata
    let newElement=document.createElement('div');
    newElement.className='new-value';
    newElement.innerText=`Danasnji ${money} 
    vredi isto kao ${worth} za ${years} godina`;

    document.querySelector('.container').appendChild(newElement);
}