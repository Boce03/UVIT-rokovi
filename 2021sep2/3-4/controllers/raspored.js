const casoviModel = require('../models/casovi');

// 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    res.render('pocetna.ejs');
}

// 3. zadatak 
async function prikaziRaspored(req, res, next) {
    try{
        let grupa = req.query.grupa;
        console.log(grupa);
        let casovi = await casoviModel.dohvatiCasoveZaGrupu(grupa);
        console.log(casovi);

        let blok = [
            {
                pocetak: (casovi['Ponedeljak'].length > 0)? casovi['Ponedeljak'][0].vreme : 21,
                kraj: (casovi['Ponedeljak'].length > 0)? casovi['Ponedeljak'][casovi['Ponedeljak'].length - 1].vreme + casovi['Ponedeljak'][casovi['Ponedeljak'].length - 1].brojCasova : 21            
            },

            {
                pocetak: (casovi['Utorak'].length > 0)? casovi['Utorak'][0].vreme : 21,
                kraj: (casovi['Utorak'].length > 0)? casovi['Utorak'][casovi['Utorak'].length - 1].vreme + casovi['Utorak'][casovi['Utorak'].length - 1].brojCasova : 21            
            },

            {
                pocetak: (casovi['Sreda'].length > 0)? casovi['Sreda'][0].vreme : 21,
                kraj: (casovi['Sreda'].length > 0)? casovi['Sreda'][casovi['Sreda'].length - 1].vreme + casovi['Sreda'][casovi['Sreda'].length - 1].brojCasova : 21
            },

            {
                pocetak: (casovi['Cetvrtak'].length > 0)? casovi['Cetvrtak'][0].vreme : 21,
                kraj: (casovi['Cetvrtak'].length > 0)? casovi['Cetvrtak'][casovi['Cetvrtak'].length - 1].vreme + casovi['Cetvrtak'][casovi['Cetvrtak'].length - 1].brojCasova : 21            
            },

            {
                pocetak: (casovi['Petak'].length > 0)? casovi['Petak'][0].vreme : 21,
                kraj: (casovi['Petak'].length > 0)? casovi['Petak'][casovi['Petak'].length - 1].vreme + casovi['Petak'][casovi['Petak'].length - 1].brojCasova : 21            
            }
        ];

        console.log('Blok:');
        console.log(blok);

        let nijePrazan = casovi['Ponedeljak'].length || casovi['Utorak'].length || casovi['Sreda'].length
                    || casovi['Cetvrtak'].length || casovi['Petak'].length;

        res.render('raspored.ejs', {casovi, grupa, blok, nijePrazan});
    } catch(err){
        next(err);
    }
}

// 4. zadatak
async function obrisiCas(req, res, next) {
    try{
        let data = req.body;

        let rez = await casoviModel.obrisiCas(data.id);
        console.log('obrisan:');
        console.log(rez);

        res.redirect(`/raspored?grupa=${data.grupa}`);
    } catch(err){
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziRaspored,
    obrisiCas
};
