lekovi = [{
    "nazivLeka": "Hemomicin",
    "proizvodjac": "Hemopharm",
    "simptomi":["upala grla","bakterijska infekcija"],
    "miligrami":[500,200,100]
  },{
    "nazivLeka": "Eritromicin",
    "proizvodjac": "Hemopharm",
    "simptomi":["upala grla","bakterijska infekcija"],
    "miligrami":[500,200,100, 50]
  },{
     "nazivLeka": "Fervex",
    "proizvodjac": "Impharm Co",
    "simptomi":["temperatura","glavobolja"],
    "miligrami":[10]
  
  },{
     "nazivLeka": "Marisol",
    "proizvodjac": "Farma Co",
    "simptomi":["curenje nosa"],
    "miligrami":[10]
  },{
     "nazivLeka": "Rapten K",
    "proizvodjac": "Galenika",
    "simptomi":["upala misica","glavobolja", "reuma", "zubobolja"],
    "miligrami":[100, 75, 50]
   
  }];
  
  const prikaz = document.getElementById('prikaz');

  prikaz.style.backgroundImage = 'url(m.jpeg)'
  prikaz.style.backgroundRepeat = 'repeat-y'
  prikaz.style.width = '50%';
  prikaz.style.backgroundPosition = 'right';

  const h1 = document.createElement('h1');
  h1.textContent = 'Spisak lekova';
  prikaz.appendChild(h1);

  let n = 1;
  for(let lek of lekovi){
    let div = document.createElement('div');
    prikaz.appendChild(div);
    div.style.border = '2px solid grey';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.marginRight = '20px';
    div.style.padding = '10px';

    let text1 = document.createElement('div');
    div.appendChild(text1);
    let span1 = document.createElement('span');
    text1.appendChild(span1);
    span1.textContent = 'lek: ';
    span1.style.fontWeight = 'bold';
    let span2 = document.createElement('span');
    text1.appendChild(span2);
    span2.textContent = lek.nazivLeka;

    let text2 = document.createElement('div');
    div.appendChild(text2);
    span1 = document.createElement('span');
    text2.appendChild(span1);
    span1.textContent = 'proizvodjac: ';
    span1.style.fontWeight = 'bold';
    span2 = document.createElement('span');
    text2.appendChild(span2);
    span2.textContent = lek.proizvodjac;

    let text3 = document.createElement('div');
    div.appendChild(text3);
    span1 = document.createElement('span');
    text3.appendChild(span1);
    span1.textContent = 'leci: ';
    span1.style.fontWeight = 'bold';
    span2 = document.createElement('span');
    text3.appendChild(span2);
    span2.textContent = lek.simptomi.join(', ');


    //mislim da ce trebati za sledeci zadatak
    /*let form = document.createElement('form');
    form.classList.add('lek' + n);
    form.method = '';
    form.action = '';
    div.appendChild(form);

    for(let mg of lek.miligrami){
      let bt = document.createElement('input');
      form.appendChild(bt);
      bt.type = 'submit';
      bt.style.borderRadius = '100%';
      bt.style.paddingLeft = '10px';
      bt.style.paddingRight = '10px';
      bt.style.marginRight = '5px';
      bt.name = 'kolicina';
      bt.value = mg;

      bt.addEventListener('click', function(e){
        let b = e.target;
        b.style.backgroundColor = 'red';

        let dugmici = document.querySelectorAll(`form.${b.classList[0]} input[type='submit']`);
        for(let dugme of dugmici){
          dugme.disable = true;
        }
      });
    }*/

    for(let mg of lek.miligrami){
      let bt = document.createElement('button');
      div.appendChild(bt);
      bt.classList.add('lek' + n);
      bt.style.borderRadius = '100%';
      bt.style.paddingLeft = '10px';
      bt.style.paddingRight = '10px';
      bt.style.marginRight = '5px';
      bt.textContent = mg;

      bt.addEventListener('click', function(e) {
        let b = e.target;
        b.style.backgroundColor = 'red';
        let dugmici = document.querySelectorAll(`button.${b.classList[0]}`);
        for(let dugme of dugmici){
          if(dugme !== b){
            //console.log(dugme, typeof dugme);
            dugme.disabled = true;
          }
        }
      });
    }

    n++;
  }

