const mongoose = require('mongoose')

const turnirSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    igrac1: {
        type: String,
        require: true
    },
    
    igrac2: {
        type: String,
        require: true
    },

    poeni1: {
        type: String,
        require: true
    },

    poeni2: {
        type: String,
        require: true
    },
    vreme: String,
    turnir: String
}, {
    collection: 'turniri'
})

const turnirModel = mongoose.model('Turniri', turnirSchema)

async function dohvatiIgreZaTurnir(turnir) {
    let mecevi = await turnirModel.find({turnir: turnir}).exec();
    console.log(mecevi);

    if(mecevi.length > 0){
        return mecevi;
    } else{
        return null;
    }
} 


async function dohvatiTurnire() {
    let turniri = await turnirModel.find({}, {_id: false, turnir: true}).sort({turnir: 1}).exec();
    //console.log('dohvatiTurnire' + turniri);
    if(turniri.length > 0){
        let rez = new Set();
        for(let t of turniri){
            rez.add(t.turnir);
        }
        return rez;
    } else{
        return null;
    }
}

async function unesiTurnir(igrac1, igrac2, poeni1, poeni2, vreme, turnir) {
    let noviMec = new turnirModel();
    noviMec._id = new mongoose.Types.ObjectId();
    noviMec.igrac1 = igrac1;
    noviMec.igrac2 = igrac2;
    noviMec.poeni1 = poeni1;
    noviMec.poeni2 = poeni2;
    noviMec.vreme = vreme;
    noviMec.turnir = turnir;

    let novi = await noviMec.save();
    return novi;
} 

module.exports = {
    dohvatiTurnire,
    dohvatiIgreZaTurnir,
    unesiTurnir
};