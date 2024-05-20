const mongoose = require('mongoose');

let izvodjaciSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    izvodjac: {
        type: String,
        require: true
    },

    procenat: {
        type: Number,
        require: true
    },

    pkostim: {
        type: Number,
        require: true,
        default: 0
    },

    pkoreografija: {
        type: Number,
        require: true,
        default: 0
    },

    pmelodija: {
        type: Number,
        require: true,
        default: 0
    },

    ptekst: {
        type: Number,
        require: true,
        default: 0
    }
}, {
    collection: 'izvodjaci'
})

let izvodjaciModel = mongoose.model('Izvodjac', izvodjaciSchema);

// 3. zadatak
async function dohvatiSveIzvodjace() {
    let t = await izvodjaciModel.find({}, {izvodjac: true}).exec();
    //console.log(t);
    let rez = [];

    for(let i of t){
        rez.push(i.izvodjac);
    }

    return rez;
}

//3. zadatak
async function azurirajProseke(izvodjac){
    console.log('izvodjacModel: ');
    console.log(izvodjac);

    let rez = await izvodjaciModel.updateOne({izvodjac: izvodjac.izvodjac}, {
        $set: {
            pkostim: izvodjac.pkostim,
            pkoreografija: izvodjac.pkoreografija,
            ptekst: izvodjac.ptekst,
            pmelodija: izvodjac.pmelodija
        }
    }).exec();

    return rez;
}

// 4. zadatak
async function dohvatiKonkretnogIzvodjaca(izvodjac) {
    let rez = await izvodjaciModel.find({izvodjac: izvodjac}).exec();
    return rez[0];
}

module.exports = {
    dohvatiSveIzvodjace,
    azurirajProseke,
    dohvatiKonkretnogIzvodjaca
};
