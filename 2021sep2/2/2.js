const casovi = [
{
  predmet: "Uvod u organizaciju i arhitekturu racunara 2",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 8,
  brojCasova: 3
},
{
  predmet: "Uvod u organizaciju i arhitekturu racunara 2",
  tip: "vezbe",
  dan: "Sreda",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Diskretne strukture 2",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 11,
  brojCasova: 3
},
{
  predmet: "Diskretne strukture 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Programiranje 2",
  tip: "predavanje",
  dan: "Utorak",
  vreme: 12,
  brojCasova: 3
},
{
  predmet: "Programiranje 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 8,
  brojCasova: 3
},
{
  predmet: "Uvod u organizaciju i arhitekturu racunara 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Diskretne strukture 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 10,
  brojCasova: 2
},
{
  predmet: "Programiranje 2",
  tip: "vezbe",
  dan: "Petak",
  vreme: 12,
  brojCasova: 3
},
{
  predmet: "Linearna algebra",
  tip: "predavanje",
  dan: "Utorak",
  vreme: 12,
  brojCasova: 3
},
{
  predmet: "Linearna algebra",
  tip: "vezbe",
  dan: "Ponedeljak",
  vreme: 8,
  brojCasova: 3
},
{
  predmet: "Geometrija 1",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 11,
  brojCasova: 2
},
{
  predmet: "Geometrija 1",
  tip: "vezbe",
  dan: "Sreda",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "vezbe",
  dan: "Petak",
  vreme: 11,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "vezbe",
  dan: "Sreda",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 13,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "predavanje",
  dan: "Utorak",
  vreme: 10,
  brojCasova: 2
},
{
  "grupa": "1o2a",
  predmet: "Geometrija 1",
  tip: "vezbe",
  dan: "Petak",
  vreme: 13,
  brojCasova: 1
},
{
  predmet: "Analiza 1",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 9,
  brojCasova: 1
}
];

let prikaz = document.getElementById('prikaz');
let forma = document.getElementById('forma');
let lista = document.getElementById('dan');

forma.addEventListener('submit', function(e) {
  e.preventDefault();

  let lista1 = document.getElementById('lista');
  if(lista1 !== null){
    console.log('da');
    prikaz.removeChild(lista1);
  }

  let prazan = document.getElementById('prazan');
  if(prazan !== null){
    console.log('da');
    prikaz.removeChild(prazan);
  }

  let dan = lista.value;
  let rez = [];

  for(let cas of casovi){
    if(dan === cas.dan){
      rez.push(cas);
    }
  }

  if(rez.length > 0){
    let ul = document.createElement('ul');
    ul.id = 'lista';
    prikaz.appendChild(ul);

    for(let cas of rez){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${cas.tip}: ${cas.vreme}-${cas.vreme + cas.brojCasova}h, ${cas.predmet}`;

      if(cas.tip == 'predavanje'){
        li.style.color = 'cornflowerblue';
      } else{
        li.style.color = 'salmon';
      }
    }
  } else{
    let ispis = document.createElement('h1');
    ispis.id = "prazan";
    prikaz.appendChild(ispis);
    ispis.textContent = 'Nema casova za odabran dan';
  }

})