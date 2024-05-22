const mongoose = require('mongoose');

const casoviSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    grupa: {
        type: String,
        required: true
    },

    predmet: {
        type: String,
        required: true
    },

    tip: {
        type: String,
        required: true
    },

    dan: {
        type: String,
        required: true
    },

    vreme: {
        type: Number,
        required: true
    },

    brojCasova: {
        type: Number,
        required: true
    }
}, {
    collection: 'casovi'
});

const casoviModel = mongoose.model('Cas', casoviSchema);

// 3. zadatak
async function dohvatiCasoveZaGrupu(grupa) {
    let mapa = new Map();
    let casovi = await casoviModel.find({grupa: grupa}).sort({vreme: 1}).exec();

    mapa['Ponedeljak'] = [];
    mapa['Utorak'] = [];
    mapa['Sreda'] = [];
    mapa['Cetvrtak'] = [];
    mapa['Petak'] = [];

    for(let cas of casovi){
        mapa[`${cas.dan}`].push(cas);
    }

    return mapa;
}


// 4. zadatak
async function obrisiCas(id) {
    let rez = await casoviModel.deleteOne({_id: id});
    
    return rez;
}

module.exports = {
    dohvatiCasoveZaGrupu,
    obrisiCas,
};
