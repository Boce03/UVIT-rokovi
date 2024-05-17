const korisnici = [
    { ime: 'Rowan', prezime: "O'Connor" },
    { ime: 'Melody', prezime: 'Norton' },
    { ime: 'Minnie', prezime: 'Terry' },
    { ime: 'Damien', prezime: 'Roach' },
    { ime: 'Ida', prezime: 'Macdonald' },
    { ime: 'Zak', prezime: 'Carlson' },
    { ime: 'Nevaeh', prezime: 'Randolph' },
    { ime: 'Dewi', prezime: 'Sanford' },
    { ime: 'Michelle', prezime: 'Rhodes' },
    { ime: 'Oscar', prezime: 'Carter' },
];

const lista = document.getElementById('lista');

let prvo = true;

for(let korisnik of korisnici){
    let li = document.createElement('li');
    lista.appendChild(li);

    let span1 = document.createElement('span');
    span1.textContent = korisnik.ime + ' ';
    li.appendChild(span1);
    //console.log(span1);

    let span2 = document.createElement('span');
    span2.textContent = korisnik.prezime;
    li.appendChild(span2);
    //console.log(span2);

    if(prvo){
        span1.style.color = 'red';
        span2.style.color = 'green';
    } else{
        span1.style.color = 'green';
        span2.style.color = 'red';
    }
    
    prvo = !prvo;
}
