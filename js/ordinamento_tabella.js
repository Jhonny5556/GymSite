let crescente = true;
let simboli = "\u2191\u2193";

function ordinamento(elemento, colIndex) {
    const tabellaO = elemento.closest("table");
    const spanL = tabellaO.getElementsByClassName("ordina");
    if (crescente) {
        spanL[colIndex].innerText = "\u2193 ";
        spanL[colIndex].setAttribute("style","color:red;");
    }
    else {
        spanL[colIndex].innerText = "\u2191 ";
        spanL[colIndex].setAttribute("style","color:red;");
    }
    for (let i = 0; i < spanL.length; i++) {
        if (i != colIndex) {
            spanL[i].innerText = simboli;
            spanL[i].setAttribute("style","color:black;");
        } 
    }
    const righe = tabellaO.getElementsByTagName("tr");

    let scambio = true;
    let dimensione = righe.length;
    while (scambio) {
        scambio = false;
        for (let i = 1; i < dimensione - 1; i++) {
            // ottengo riferimento alla cella di una riga in base all'indice
            const valoreTdA = righe[i].cells[colIndex];
            // ottengo il contenuto testuale di una cella td
            const valoreA = valoreTdA.innerText.toLowerCase().replace('€', '');
            // ottengo riferimento alla cella di una riga in base all'indice
            const valoreTdB = righe[i + 1].cells[colIndex];
            // ottengo il contenuto testuale di una cella td
            const valoreB = valoreTdB.innerText.toLowerCase().replace('€', '');
            if (crescente && (valoreA > valoreB) || (!crescente && (valoreA < valoreB))) {
                const nodoPadre = righe[i].parentNode;
                nodoPadre.insertBefore(righe[i + 1], righe[i]);
                scambio = true;
            }
        }
        dimensione = dimensione - 1;
    }  // fine bubbleSort
    crescente = !crescente;
}

function initialSettings() {
    const tabellaO = document.getElementById("tabella");
    const righe = tabellaO.getElementsByTagName("tr");

    const riga = righe[0];
    const el = righe[0].getElementsByTagName("th");
    const lunghezza = 100 / el.length;
    console.log(lunghezza);

    for (let i = 0; i< el.length; i++)
        el[i].setAttribute("style", "width:" + lunghezza + "%;");

    const spanL = tabellaO.getElementsByTagName("span");
    for (let i = 0; i < spanL.length; i++)
        spanL[i].innerText = simboli;
}