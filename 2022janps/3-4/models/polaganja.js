const mongoose = require('mongoose');

const polaganjaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    'broj indeksa': {
        type: String,
        require: true
    },

    rok: {
        type: String,
        require: true
    },

    predmet: {
        type: String,
        require: true
    },

    espb: {
        type: Number,
        require: true
    },

    ocena: {
        type: Number,
        require: true,
        default: 5
    }
}, {
    collection: 'polaganja'
});

const polaganjaModel = mongoose.model('Polaganje', polaganjaSchema);

// 3. zadatak
async function dohvatiSvaPolaganjaZaStudenta(indeks){
    let ispiti = await polaganjaModel.find({"broj indeksa" : indeks}).exec();

    return ispiti;
}


async function dohvatiPolaganjePoPredmetu(predmet){
    let predmeti = await polaganjaModel.find({predmet: predmet}).exec();

    return predmeti;
}

// 4s. zadatak
async function dodajPolaganje(indeks, rok, predmet, espb, ocena) {
    let noviIspit = new polaganjaModel();
    noviIspit._id = new mongoose.Types.ObjectId();
    noviIspit['broj indeksa'] = indeks;
    noviIspit.rok = rok;
    noviIspit.predmet = predmet;
    noviIspit.espb = espb;
    noviIspit.ocena = ocena;

    let rez = await noviIspit.save();

    return rez;
}

module.exports = {
    dohvatiSvaPolaganjaZaStudenta,
    dodajPolaganje,
    dohvatiPolaganjePoPredmetu
};
