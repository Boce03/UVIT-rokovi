const mongoose = require('mongoose');

let kvizSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    tekst: {
        type: String,
        require: true
    },

    odgovor: {
        type: String,
        require: true
    },

    oblast: {
        type: String,
        require: true
    },

    tezina: {
        type: Number,
        require: true
    }
}, {
    collection: 'pitanja'
});

let kvizModel = mongoose.model('Pitanje', kvizSchema);

// 4. zadatak
async function ubaciPitanje(tekst, odgovor, oblast, tezina){
    console.log(tekst);
    let novoPitanje = new kvizModel();
    novoPitanje._id = new mongoose.Types.ObjectId();
    novoPitanje.tekst = tekst;
    novoPitanje.odgovor = odgovor;
    novoPitanje.oblast = oblast;
    novoPitanje.tezina = tezina;

    let pitanjeDB = await novoPitanje.save();
    console.log(pitanjeDB);
}

module.exports = {
    ubaciPitanje
};
