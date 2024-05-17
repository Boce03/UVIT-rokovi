const mongoose = require('mongoose');

const korisnikSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    ime: {
        type: String,
        require: true
    },

    prezime: String,

    starost: {
        type: Number,
        require: true
    },

    admin: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'korisnici'
});

const korisnikModel = mongoose.model('Korisnik', korisnikSchema);

module.exports.vratiSveKorisnike = async function(){
    let k = await korisnikModel.find({}).sort({starost: 1}).exec();
    //console.log(k);
    return k;
};

module.exports.obrisiKorisnikaPremaIdu = async function(id){
    await korisnikModel.deleteOne({_id: id});
}

module.exports.vratiSveKorisnikePoStarosti = async function(starost){
    let k = await korisnikModel.find({starost: starost});
    return k;
}