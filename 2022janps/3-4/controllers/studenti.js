const studentModel = require('../models/studenti');
const polaganjeModel = require('../models/polaganja');

// 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    try{
        res.render('pocetna.ejs');  
    } catch(err){
        next(err);
    }
}

// 3. zadatak 
async function prikaziStudenta(req, res, next) {
    try{
        let data = req.query;

        let student = await studentModel.dohvatiStudenta(data.indeks);
        console.log(student);

        let ispiti = await polaganjeModel.dohvatiSvaPolaganjaZaStudenta(data.indeks);
        console.log(ispiti);

        let ocena = 0;
        let brOcena = 0;
        let espb = 0;
        for(let ispit of ispiti){
            if(ispit.ocena == 5){
                continue;
            }

            espb += ispit.espb;
            ocena += ispit.ocena;
            brOcena++;
        }

        let prosek = ocena / brOcena;
        prosek = Math.round(prosek*100) / 100;

        res.render('postignuca.ejs', {
            student,
            ispiti,
            espb,
            prosek,
            indeks: data.indeks
        })
    } catch(err){
        next(err);
    }
}


// 4. zadatak
async function dodajPolaganje(req, res, next) {
    try{
        let poruka;
        let data = req.body;
        let postoji = await studentModel.dohvatiStudenta(data.indeks);
        
        if(postoji.length == 0){
            poruka = 'Greska, student sa unetim indeksom ne postoji';
            res.render('dodavanje.ejs', {poruka});
            return;
        }

        let postojiPredmet = await polaganjeModel.dohvatiPolaganjePoPredmetu(data.predmet);
        if(postojiPredmet.length > 0 && postojiPredmet[0].espb != data.espb){
            poruka = 'Greska, nije tacan broj esp bodova za uneti predmet';
            res.render('dodavanje.ejs', {poruka});
            return;
        }

        if(data.ocena < 5 || data.ocena > 10){
            poruka = 'Greska, neispravan format ocene';
            res.render('dodavanje.ejs', {poruka});
            return;
        }

        let novoPolaganje = await polaganjeModel.dodajPolaganje(data.indeks, data.rok, data.predmet, data.espb, data.ocena);
        console.log('dodato novo polaganje: ');
        console.log(novoPolaganje);

        poruka = 'Uspesno je izvrseno dodavanje polaganja';
        res.render('dodavanje.ejs', {poruka});
    } catch(err){
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziStudenta,
    dodajPolaganje	
};
