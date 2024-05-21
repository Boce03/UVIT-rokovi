const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    'broj indeksa': {
        type: String,
        require: true
    },

    'ime i prezime': {
        type: String,
        require: true
    },

    smer: {
        type: String,
        require: true
    },

    fotografija: {
        type: String,
        require: true
    }
}, {
    collection: 'studenti'
});

const studentModel = mongoose.model('Student', studentSchema);

// 3. zadatak
async function dohvatiStudenta(indeks){
    let student = await studentModel.find({'broj indeksa' : indeks}).exec();

    return student[0];
}

module.exports = {
    dohvatiStudenta
};
