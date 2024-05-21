let slika = document.getElementById('slika');
console.log(slika);

let levaMargina = 35;
let sirina = 23;
let visina = 70;

slika.addEventListener('mouseenter', function() {
    console.log('da');
    let levo = document.getElementById('levo');

    levaMargina += 5;
    sirina += 5;
    visina += 5;

    slika.style.width = sirina + '%';
    slika.style.height = visina + '%';
    levo.style.marginLeft = levaMargina + '%';
});

let obrisani = [false, false, false];
let prikaz = document.getElementById('prikaz');
let predmeti = document.querySelectorAll('.predmet');

//console.log(predmeti);
//console.log(predmeti[0].parentElement);

for(let i = 0; i  < predmeti.length; i++){
    predmeti[i].addEventListener('click', function(e) {
        console.log('da');
        let tmpPredmeti = document.querySelectorAll('.predmet');
        let broj = tmpPredmeti.length;

        console.log(broj);

        for(let j = broj-1; j >= 0; j--){
            prikaz.removeChild(tmpPredmeti[j]);
        }

        for(let j = 0; j < broj; j++){
            if(tmpPredmeti[j].id == predmeti[i].id){
                console.log('target');
                continue;
            }

            tmpPredmeti[j].style.marginTop = '0px';
            prikaz.appendChild(tmpPredmeti[j]);
        }
    }); 
}
