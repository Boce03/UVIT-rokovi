const dogadjajModel = require('../models/dogadjaj');

async function prikaziPocetnu(req, res, next) {
    res.render('pocetna.ejs');
}

async function prikaziDogadjaje(req, res, next) {
    try{
        let data = req.query;
        let rez = await dogadjajModel.dohvatiDogadjaje(data.godina, data.mesec, data.dan);
        console.log(rez);

        res.render('dogadjaji.ejs', {rez});
    } catch(err){
        next(err);
    }
}

async function prikaziAzuriranDogadjaj(req, res, next) {
    try{
        let data = req.body;
        let rez = await dogadjajModel.azurirajDogadjaj(data.id, data.naziv, parseInt(data.godina),
                parseInt(data.mesec), parseInt(data.dan), parseInt(data.trajanje));

        console.log(rez);

        res.render('azuriraj-dogadjaj.ejs', {rez});
    } catch(err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnu,
    prikaziDogadjaje,
    prikaziAzuriranDogadjaj,
};
