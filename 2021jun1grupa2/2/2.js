const temperature = [
    { grad: "Beograd", temperatura: 21 },
    { grad: "Novi Sad", temperatura: 18 },
    { grad: "Subotica", temperatura: 17 },
    { grad: "Nis", temperatura: 25 },
];


let prikaz = document.getElementById('prikaz');


for(let i = 0; i < temperature.length; i++){
    let div = document.createElement('div');
    prikaz.appendChild(div);

    div.style.display = 'inline-block';
    if(i != 0){
        div.style.marginLeft = '50px';
    }

    let t = document.createElement('div');
    div.appendChild(t);
    t.id = i + '';
    let temp = temperature[i].temperatura;
    t.style.width = '50px';
    t.style.height = temp*10 + 'px';

    if(temp < 10){
        t.style.backgroundColor = 'lightblue';
    } else if(temp < 20){
        t.style.backgroundColor = 'yellow';
    } else if(temp < 30){
        t.style.backgroundColor = 'orange';
    } else{
        t.style.backgroundColor = 'red';
    }

    let grad = document.createElement('p');
    div.appendChild(grad);
    grad.textContent = temperature[i].grad;
    grad.style.textAlign = 'center';

    t.addEventListener('click', function(e) {
        let t = e.target;
        let indeks = t.id;
        let rez = -2 + Math.round(Math.random()*4);
        temperature[indeks].temperatura -= rez;

        let temp = temperature[indeks].temperatura;
        t.style.width = '50px';
        t.style.height = temp*10 + 'px';
    
        if(temp < 10){
            t.style.backgroundColor = 'lightblue';
        } else if(temp < 20){
            t.style.backgroundColor = 'yellow';
        } else if(temp < 30){
            t.style.backgroundColor = 'orange';
        } else{
            t.style.backgroundColor = 'red';
        }
    });
}