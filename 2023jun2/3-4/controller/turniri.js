const mongoose = require('mongoose');
const turniriModel = require('../model/turniri');


async function prikaziPocetnu(req, res, next) {
    try {
        let turniri = await turniriModel.dohvatiTurnire()
        //console.log(turniri)
        res.render('pocetna.ejs', {turniri})
    } catch(err){
        next(err);
    }
}


async function prikaziTurnir(req, res, next) {
    try {
        //console.log(req.query.turnir);
        let turnir = req.query.turnir;
        let mecevi = [];
        if(turnir === 'Australian'){
            turnir = 'Australian open';
        } else if(turnir === 'US'){
            turnir = 'US open';
        }
        
        mecevi = await turniriModel.dohvatiIgreZaTurnir(turnir);
        //console.log(mecevi);
        res.render('turnir.ejs', {
            mecevi,
            turnir
        });
    } catch(err){
        next(err);
    }
}


async function unesiMec(req, res, next) {
    try {
       let igrac1 = req.query.igrac1;
       let igrac2 = req.query.igrac2;
       let vreme = req.query.sati + ':' + req.query.minuti;
       let poeni1 = req.query.igrac1set1 + '-' + req.query.igrac1set2 + '-' + req.query.igrac1set3;
       let poeni2 = req.query.igrac2set1 + '-' + req.query.igrac2set2 + '-' + req.query.igrac2set3;
       let turnir = req.query.turnir;

       if(turnir === 'Australian'){
            turnir = 'Australian open'; 
       } else if(turnir === 'US'){
            turnir = 'US open';
       }

       let novi = await turniriModel.unesiTurnir(igrac1, igrac2, poeni1, poeni2, vreme, turnir);
       console.log(novi);
       req.query.turnir = turnir;
       next();
    } catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    prikaziTurnir,
    unesiMec
};