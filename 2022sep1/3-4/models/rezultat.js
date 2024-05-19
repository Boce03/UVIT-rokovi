const mongoose = require('mongoose');
const pitanje = require('./pitanje');

let rezultatSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    username: String,
    password: String,
    poeni: Number,
    pitanja: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Pitanje'
    }
}, {
    collection: 'rezultati'
});

let rezModel = mongoose.model('Rezultat', rezultatSchema);

// 3. zadatak
async function dohvatiRezultate(username, password){
    let t = await rezModel.find({
        username: username,
        password: password
    }).populate('pitanja').exec();

    t = t.sort(function(a, b) {
        let tezina1 = 0;
        let tezina2 = 0;

        for(let p of a.pitanja){
            tezina1 += p.tezina;
        }

        for(let p of b.pitanja){
            tezina2 += p.tezina;
        }

        return tezina1 - tezina2;
    });

    //console.log(t);

    return t;
}

module.exports = {
    dohvatiRezultate
};
