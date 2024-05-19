const rezModel = require('../models/rezultat');
const pitanjeModel = require('../models/pitanje');

// 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    res.render('pocetna.ejs');
}

// 3. zadatak 
async function prikaziRezultate(req, res, next) {
    try{
        let data = req.query;
        let rez = await rezModel.dohvatiRezultate(data.username, data.password);

        console.log(rez);

        res.render('rezultati.ejs', {rez, username: data.username});
    } catch(err){
        next(err);
    }
}


// 4. zadatak
async function unesiPitanje(req, res, next) {
    try{
        let data = req.body;
        console.log(data);
        await pitanjeModel.ubaciPitanje(data.pitanje, data.odgovor, data.oblast, data.tezina);
        res.redirect('/');
    } catch(err){
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziRezultate,
    unesiPitanje	
};
