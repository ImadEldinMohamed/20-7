"use strict";
class vestiti {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.prezzoivainclusa - this.saldo / 100;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
let y = [];
const Url = './Abbigliamento.json';
fetch(Url)
    .then((res) => {
    if (res.ok) {
        console.log(res);
        return res.json();
    }
    else {
        throw new Error("ERRORE");
    }
})
    .then((data) => {
    data.forEach((e, i) => {
        let x = new vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantità, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        y.push(x);
        console.log(y[i].getsaldocapo());
        console.log(y[i].getacquistocapo());
    });
})
    .catch((err) => {
    console.log(err);
});
console.log(y);
