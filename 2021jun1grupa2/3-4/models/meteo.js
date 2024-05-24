const mongoose = require('mongoose');

const meteoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    grad: {
        type: String,
        require: true
    },

    drzava: {
        type: String,
        require: true
    },

    temperatura: {
        type: Number,
        require: true
    },

    datum: {
        type: Date,
        require: true
    }
}, {
    collection: 'meteopodaci'
});

const meteoModel = mongoose.model('Meteo', meteoSchema);

async function dohvatiStatistike() {
    let t = await meteoModel.find({});

    if(t.length == 0){
        return t;
    }

    let gradovi = [{
        grad: t[0].grad, 
        drzava: t[0].drzava,
        minTemp: t[0].temperatura,
        avgTemp: 0,
        brojMerenja: 0,
        maxTemp: t[0].temperatura
    }];

    for(let i = 1; i < t.length; i++){
        let postojeciGrad = gradovi.find(function(g) {
            return g.grad === t[i].grad;
        });

        if(postojeciGrad){
            postojeciGrad.avgTemp += t[i].temperatura;
            postojeciGrad.minTemp = Math.min(postojeciGrad.minTemp, t[i].temperatura);
            postojeciGrad.maxTemp = Math.max(postojeciGrad.maxTemp, t[i].temperatura);
            postojeciGrad.brojMerenja++;
        } else{
            gradovi.push(
                {
                    grad: t[i].grad, 
                    drzava: t[i].drzava,
                    minTemp: t[i].temperatura,
                    avgTemp: t[i].temperatura,
                    brojMerenja: 1,
                    maxTemp: t[i].temperatura
                }
            );
        }
    }

    for(let grad of gradovi){
        let prosek = grad.avgTemp / grad.brojMerenja;
        grad.avgTemp = prosek
    }

    return gradovi;
}

async function dohvatiPodatke(grad, sort) {
    let rez;
    let poredak = (sort == '+')? 1 : -1;

    rez = await meteoModel.find({grad: grad}).sort({datum: poredak}).exec();
    return rez;
}

module.exports = {
    dohvatiStatistike,
    dohvatiPodatke,
};
