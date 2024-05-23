const mongoose = require('mongoose');

const dogadjajiSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    naziv: {
        type: String,
        require: true
    },

    godina: {
        type: Number,
        require: true
    },

    mesec: {
        type: Number,
        require: true
    },

    dan: {
        type: Number,
        require: true
    },

    trajanje: {
        type: Number,
        require: true
    },

    predavaci: {
        type: [String],
        require: true
    }
}, {
    collection: 'dogadjaji'
});

const dogadjajModel = mongoose.model('Dogadjaj', dogadjajiSchema);

async function dohvatiDogadjaje(godina, mesec, dan) {
    let rez;

    if(godina == ''){
        if(mesec == ''){
            if(dan != ''){
                rez = await dogadjajModel.find({dan: parseInt(dan)}).sort({dan: 1, mesec: 1, godina: 1}).exec();
            }
        } else{
            if(dan == ''){
                rez = await dogadjajModel.find({mesec: parseInt(mesec)}).sort({dan: 1, mesec: 1, godina: 1}).exec();
            } else{
                rez = await dogadjajModel.find({dan: parseInt(dan), mesec: parseInt(mesec)}).sort({dan: 1, mesec: 1, godina: 1}).exec();

            }
        }
    } else{
        if(mesec ==''){
            if(dan == ''){
                rez = await dogadjajModel.find({
                    godina: parseInt(godina), 
                }).sort({dan: 1, mesec: 1, godina: 1}).exec();
            } else{
                rez = await dogadjajModel.find({
                        godina: parseInt(godina),
                        dan: parseInt(dan)
                    }).sort({dan: 1, mesec: 1, godina: 1}).exec();
            }
        } else{
            if(dan == ''){
                rez = await dogadjajModel.find({
                    godina: parseInt(godina),
                    mesec: parseInt(mesec), 
                }).sort({dan: 1, mesec: 1, godina: 1}).exec();
            } else{
                rez = await dogadjajModel.find({
                        godina: parseInt(godina),
                        mesec: parseInt(mesec), 
                        dan: parseInt(dan)
                    }).sort({dan: 1, mesec: 1, godina: 1}).exec();
            }
        }
    }

    return rez;
}

async function azurirajDogadjaj(id, naziv, godina, mesec, dan, trajanje) {
    let noviPodaci = {
        naziv: naziv,
        godina: godina,
        mesec: mesec,
        dan: dan,
        trajanje: trajanje
    };

    let rez = await dogadjajModel.updateOne({_id: id}, {$set: noviPodaci}).exec();
    rez = await dogadjajModel.find({_id: id}, {
        predavaci: false,
        _id: false,
    });

    return rez[0];
}

module.exports = {
    dohvatiDogadjaje,
    azurirajDogadjaj,
};
