const dogadjaji = [
    { naziv: "JavaScript conference 2021", datum: new Date(2021, 5, 14), prijavljen: false },
    { naziv: "A state of modern web", datum: new Date(2021, 5, 2), prijavljen: false },
    { naziv: "Node Congress", datum: new Date(2021, 3, 14), prijavljen: true },
    { naziv: "HTML + CSS conference", datum: new Date(2021, 7, 6), prijavljen: false },
    { naziv: "RxJS topics", datum: new Date(2021, 8, 24), prijavljen: false },
    { naziv: "TypeScript talks", datum: new Date(2021, 9, 20), prijavljen: true },
    { naziv: "Angular conference", datum: new Date(2021, 1, 9), prijavljen: false },
];

const svetlozelena = 'rgba(128, 255, 0, 0.5)';
const svetlocrvena = 'rgba(220, 20, 60, 0.5)';

function main() {
    let prikaz = document.getElementById('prikaz');
    prikaz.style.width = '60%';

    for(let i = 0; i < dogadjaji.length; i++){
        let div = document.createElement('div');
        div.id = i;
        div.style.height = '40px'

        prikaz.appendChild(div);
        div.textContent = dogadjaji[i].naziv + '; ' + 'datum: ' + dogadjaji[i].datum.getDate() + '.' 
                            + (dogadjaji[i].datum.getMonth() + 1) + '.' + dogadjaji[i].datum.getFullYear();
        if(dogadjaji[i].prijavljen){
            div.style.backgroundColor = 'lightgreen';
        } else {
            div.style.backgroundColor = 'pink';
        }

        div.addEventListener('click', function (e){
            let d = e.target;
            let index = parseInt(d.id);

            dogadjaji[index].prijavljen = !dogadjaji[index].prijavljen;

            if(dogadjaji[index].prijavljen){
                d.style.backgroundColor = 'lightgreen';
            } else{
                d.style.backgroundColor = 'pink';
            }
        });
    }
}

main();
