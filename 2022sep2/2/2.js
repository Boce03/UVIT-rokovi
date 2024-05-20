let forma = document.getElementById('forma');

let sara = document.getElementById('sarajo');
let marija = document.getElementById('marijas');
let zoi = document.getElementById('zoi');

console.log(sara);
console.log(marija);
console.log(zoi);

let saraSpan = sara.querySelector('.procenat');
let marijaSpan = marija.querySelector('.procenat');
let zoiSpan = zoi.querySelector('.procenat');

console.log(saraSpan);
console.log(marijaSpan);
console.log(zoiSpan);

//console.log(saraSpan);
//saraSpan.textContent = '0';

let saraProcenat, marijaProcenat, zoiProcenat;

saraProcenat =  parseInt(saraSpan.textContent);
marijaProcenat = parseInt(marijaSpan.textContent);
zoiProcenat = parseInt(zoiSpan.textContent);

console.log(saraProcenat);
console.log(marijaProcenat);
console.log(zoiProcenat);

function azurirajDivove(){
    saraSpan.textContent = saraProcenat + '%';
    marijaSpan.textContent = marijaProcenat + '%';
    zoiSpan.textContent = zoiProcenat + '%';

    console.log('Posle promene spanova:')
    console.log(saraSpan);
    console.log(marijaSpan);
    console.log(zoiSpan);

    sara.style.width = saraProcenat + '%';
    marija.style.width = marijaProcenat + '%';
    zoi.style.width = zoiProcenat + '%';
}

function azurirajKrunu(){
    //console.log('da2');
    let rezultati = document.getElementById('rezultati');
    let kruna = document.getElementById('pobednik');

    if(kruna !== null){
        console.log('Nova: ' + kruna);
        let roditelj = kruna.parentElement;
        console.log(roditelj);
        roditelj.removeChild(kruna);
    }
    
    if(saraProcenat == marijaProcenat || marijaProcenat == zoiProcenat || saraProcenat == zoiProcenat){
        return;
    }

    kruna = document.createElement('img');
    kruna.alt = 'kruna';
    kruna.src = 'crown2.jpeg';
    kruna.style.width = '30px';
    kruna.style.height = '24px';
    kruna.style.display = 'inline-block';
    kruna.style.position = 'absolute';
    kruna.style.right = '-35px';
    kruna.style.bottom = '2px';
    kruna.id = 'pobednik';

    if(saraProcenat > marijaProcenat){
        if(saraProcenat > zoiProcenat){
            sara.appendChild(kruna);
        } else{
            zoi.appendChild(kruna);
        }
    } else{
        if(marijaProcenat > zoiProcenat){
            marija.appendChild(kruna);
        } else{
            zoi.appendChild(kruna);
        }
    }
}

forma.addEventListener('submit', function(e) {
    e.preventDefault();
    //console.log(zoiSpan.textContent);
    //console.log(saraProcenat);

    let rb1 = document.getElementById('rb1');
    let rb2 = document.getElementById('rb2');
    let rb3 = document.getElementById('rb3');

    let glasanoZa = ((rb1.checked)? 1 : 0) + ((rb2.checked)? 1 : 0) + ((rb3.checked)? 1 : 0);

    if(glasanoZa == 0){
        window.alert('Morate glasati za nekog izvodjaca');
        return;
    } else if(glasanoZa == 1){
        if(rb1.checked){
            saraProcenat += 10;
            marijaProcenat -= 5;
            zoiProcenat -= 5;
        } else if(rb2.checked){
            saraProcenat -= 5;
            marijaProcenat += 10;
            zoiProcenat -= 5;
        } else if(rb3.checked){
            saraProcenat -= 5;
            marijaProcenat -= 5;
            zoiProcenat += 10;
        }
    } else if(glasanoZa == 2){
        if(rb1.checked){
            if(rb2.checked){
                saraProcenat += 5;
                marijaProcenat += 5;
                zoiProcenat -= 5;
            } else{
                saraProcenat += 5;
                zoiProcenat += 5;
                marijaProcenat -= 5;
            }
        } else{
            marijaProcenat += 5;
            zoiProcenat += 5;
            saraProcenat -= 5;
        }
    } else {
        marijaProcenat += 5;
        saraProcenat += 5;
        zoiProcenat += 5;
    }

    console.log('Posle glasanja: ');
    console.log(saraProcenat);
    console.log(marijaProcenat);
    console.log(zoiProcenat);

    azurirajDivove();
    azurirajKrunu();
})