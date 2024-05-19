/*
    zadatak nema smisla sto se tice provere odgovora jer nije nista navedeno, pa neka 
    odgovor na svako pitanje bude 'DA'
*/ 

let rez = document.getElementById('rezultat');
let poeni = 0;

let pitanje1 = document.getElementById('pitanje1');
let rb = pitanje1.querySelectorAll('input[type="radio"]');
let polje = document.querySelector('#pitanje1 .polje');

for(let i = 0; i < rb.length; i++){
    if(rb[i].value == 'da'){
        rb[i].addEventListener('change', function() {
            let roditelj = pitanje1.parentElement;
            roditelj.removeChild(pitanje1);
            poeni += 10;
            rez.value = poeni;
        });
    } else if (rb[i].value == 'ne'){
        rb[i].addEventListener('change', function() {
            polje.style.backgroundColor = 'red';
            polje.style.border = 'none';
            poeni -= 5;
            rez.value = poeni;
        })
    } else{
        rb[i].addEventListener('change', function() {
            polje.style.backgroundColor = 'green';
            polje.style.border = '2px solid black';
        });
    }
}

let pitanje2 = document.getElementById('pitanje2');
rb = pitanje2.querySelectorAll('input[type="radio"]');
let polje2 = document.querySelector('#pitanje2 .polje');

for(let i = 0; i < rb.length; i++){
    if(rb[i].value == 'da'){
        rb[i].addEventListener('change', function() {
            let roditelj = pitanje2.parentElement;
            roditelj.removeChild(pitanje2);
            poeni += 10;
            rez.value = poeni;
        });
    } else if (rb[i].value == 'ne'){
        rb[i].addEventListener('change', function() {
            polje2.style.backgroundColor = 'red';
            polje2.style.border = 'none';
            poeni -= 5;
            rez.value = poeni;
        })
    } else{
        rb[i].addEventListener('change', function() {
            polje2.style.backgroundColor = 'green';
            polje2.style.border = '2px solid black';
        });
    }
}

let pitanje3 = document.getElementById('pitanje3');
rb = pitanje3.querySelectorAll('input[type="radio"]');
let polje3 = document.querySelector('#pitanje3 .polje');

for(let i = 0; i < rb.length; i++){
    if(rb[i].value == 'da'){
        rb[i].addEventListener('change', function() {
            let roditelj = pitanje3.parentElement;
            roditelj.removeChild(pitanje3);
            poeni += 10;
            rez.value = poeni;
        });
    } else if (rb[i].value == 'ne'){
        rb[i].addEventListener('change', function() {
            polje3.style.backgroundColor = 'red';
            polje3.style.border = 'none';
            poeni -= 5;
            rez.value = poeni;
        })
    } else{
        rb[i].addEventListener('change', function() {
            polje3.style.backgroundColor = 'green';
            polje3.style.border = '2px solid black';
        });
    }
}