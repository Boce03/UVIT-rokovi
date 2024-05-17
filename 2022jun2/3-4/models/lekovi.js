const mongoose = require('mongoose');

let lekoviSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    nazivLeka: {
        type: String,
        require: true
    },

    proizvodjac: {
        type: String,
        require: true
    },

    simptomi: {
        type: [String],
        require: true
    },

    miligrami: {
        type: [Number],
        require: true
    }
}, {
    collection: 'lekovi'
});

let lekoviModel = mongoose.model('Lekovi', lekoviSchema);

module.exports.vratiLekove = async function(simptomi){
    console.log(simptomi);
    
    let rez = [];
    let mapa = new Map();
    console.log(rez.length);
    for(let s of simptomi){
        console.log(s);
        let t = await lekoviModel.find({simptomi: s});
        if(rez.length == 0){
            for(let lek of t){
                mapa.set(lek.nazivLeka, 1);
                rez.push(lek);
            }
            //console.log(rez);
        } else {
            for(let lek of t){
                if(!mapa.has(lek.nazivLeka)){
                    mapa.set(lek.nazivLeka, 1);
                    rez.push(lek);
                } else{
                    mapa.set(lek.nazivLeka, mapa.get(lek.nazivLeka) + 1);
                }
            }
        }
    }

    console.log(mapa);

    console.log(rez);
    rez = rez.sort(function (a, b){
        return mapa.get(a.nazivLeka) - mapa.get(b.nazivLeka);
    });
    console.log('posle sortiranja: ');
    console.log(rez);

    return rez;
}
