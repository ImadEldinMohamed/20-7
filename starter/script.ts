class vestiti {
  constructor(
    public id: number,
    public codprod: number,
    public collezione: string,
    public capo: string,
    public modello: number,
    public quantita: number,
    public colore: string,
    public prezzoivaesclusa: number,
    public prezzoivainclusa: number,
    public disponibile: string,
    public saldo: number
  ) {}

  getsaldocapo(): number {
    return this.prezzoivainclusa - this.saldo / 100;
  }
  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

let y: vestiti[] = [];
const Url:string= './Abbigliamento.json'

fetch(Url)
  .then((res: any) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      throw new Error("ERRORE");
    }
  })

  .then((data: any) => {
    data.forEach((e: any ,i:any) => {
      let x = new vestiti(
        e.id,
        e.codprod,
        e.collezione,
        e.capo,
        e.modello,
        e.quantità,
        e.colore,
        e.prezzoivaesclusa,
        e.prezzoivainclusa,
        e.disponibile,
        e.saldo
      );
      y.push(x);
      console.log(y[i].getsaldocapo())
      console.log(y[i].getacquistocapo())
   
    });
  })
  .catch((err) => {
    console.log(err);
  });
  console.log(y)
