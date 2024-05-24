const meteoModel = require('../models/meteo');

async function dohvatiStatistike(req, res, next) {
    try{
        let gradovi = await meteoModel.dohvatiStatistike();
        
        console.log('gradovi:');
        console.log(gradovi);

        res.render('statistike.ejs', {gradovi});
    } catch(err){
        next(err);
    }
}

async function dohvatiDetalje(req, res, next) {
    try{
        let data = req.body;
        let rez = await meteoModel.dohvatiPodatke(data.grad, data.poredak);

        console.log('detalji: ');
        console.log(rez);

        res.render('detalji.ejs', {rez, grad: data.grad});
    } catch(err){
        next(err);
    }
}

module.exports = {
    dohvatiStatistike,
    dohvatiDetalje,
};
