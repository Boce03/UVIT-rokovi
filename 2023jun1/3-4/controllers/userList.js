const userModel = require('../models/user');


module.exports.prikaziKorisnike = async function(req, res, next){
    try{
        let korisnici = await userModel.vratiSveKorisnike();
        res.render('userList.ejs', {korisnici});
    } catch(err){
        next(err);
    }
};

module.exports.obrisiKorisnika = async function(req, res, next){
    try{
        let id = req.query.id;
        console.log('ID: ' + id);
        await userModel.obrisiKorisnikaPremaIdu(id);
        res.redirect('/userList');
        //next();
    } catch(err){
        next(err);
    }
}

module.exports.izdvojPoStarosti = async function(req, res, next){
    try{
        console.log(req.body.starost, typeof req.body.starost);
        let korisnici = await userModel.vratiSveKorisnikePoStarosti(req.body.starost);
        console.log(korisnici);
        res.render('userList.ejs', {korisnici});
    } catch(err){
        next(err);
    }
}