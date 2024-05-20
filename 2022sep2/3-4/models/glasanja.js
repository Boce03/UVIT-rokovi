const mongoose = require('mongoose');

let glasanjaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    izvodjac: {
        type: String,
        require: true
    },

    ocene: {
        type: [Number],
        require: true
    },

    pprocenat: {
        type: Number,
        require: true
    }
}, {
    collection: 'glasanja'
});

let glasModel = mongoose.model('Glas', glasanjaSchema);

// 3. zadatak
async function dodajNovoGlasanje(izvodjac, promena_procenta, kostim, koreografija, tekst, melodija){
    let novoGlasanje = new glasModel();
    novoGlasanje._id = new mongoose.Types.ObjectId();
    novoGlasanje.izvodjac = izvodjac;
    novoGlasanje.pprocenat = promena_procenta;
    novoGlasanje.ocene = [kostim, koreografija, tekst, melodija];

    let rez = await novoGlasanje.save();
    return rez;
}

//dodata funkcija jer mi treba, valjda je dozvoljeno (ovaj rok napinje)
async function vratiProseke(izvodjac){
    let glasovi = await glasModel.find({izvodjac: izvodjac}).exec();
    console.log('vrati_prosek: ');
    console.log(glasovi);

    let rez = {izvodjac: izvodjac};

    let pkostim = 0;
    let pkoreografija = 0;
    let ptekst = 0;
    let pmelodija = 0;

    let br = glasovi.length;
    //console.log(br);

    for(let glas of glasovi){
        pkostim += glas.ocene[0];
        pkoreografija += glas.ocene[1];
        ptekst += glas.ocene[2];
        pmelodija += glas.ocene[3];
    }

    rez.pkostim = Math.round(pkostim / br);
    rez.pkoreografija = Math.round(pkoreografija / br);
    rez.ptekst = Math.round(ptekst / br);
    rez.pmelodija = Math.round(pmelodija / br);

    console.log(rez);

    return rez;
}

module.exports = {
    dodajNovoGlasanje,
    vratiProseke
};
