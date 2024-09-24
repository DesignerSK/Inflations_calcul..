function inflationCalculator(){
    let inflationRate = document.getElementById("inflationRate");
    let geld = document.querySelector("#geld");

    inflationRate = parseFloat(inflationRate.value);
    geld = parseFloat(geld.value);

    let jahren = document.querySelector("#jahren").value;
    jahren = parseFloat(jahren);  


    // formula za izracunavanje inflacije.
    let wert = geld + (geld * (inflationRate / 100));


    for(let i = 1; i < jahren; i++){
            wert += wert * ((inflationRate / 100));
    }

    wert = wert.toFixed(2);

    let ergebnis = document.createElement("div");
    ergebnis.className = "ergebniss";
    ergebnis.innerHTML = `Die heutigen ${geld} EUR <br> sind genauso viel wert wie ${wert} EUR <br> in ${jahren} Jahren.`;

    document.querySelector(".container").appendChild(ergebnis);
}
