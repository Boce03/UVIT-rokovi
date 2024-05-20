const izvodjaciModel = require('../models/izvodjaci');
const glasanjaModel = require('../models/glasanja');

// 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    let izvodjaci = await izvodjaciModel.dohvatiSveIzvodjace();
    //console.log(izvodjaci);

    res.render('pocetna.ejs', {izvodjaci});
}

// 3. zadatak 
async function unesiRezultateGlasanja(req, res, next) {
    try{
        let data = req.query;

        let glasano = ((data.Marija == 'on')? 1 : 0) + ((data.Zoi)? 1 : 0) + ((data.Sara)? 1 : 0);
        let promenaProcenta = (glasano == 1)? 10 : 5;

        if(data.Marija == 'on'){
            let izvodjac = 'Marija Serifovic';
            let rez = await glasanjaModel.dodajNovoGlasanje(izvodjac, promenaProcenta, data.MarijaKostimi, data.MarijaKoreografija, data.MarijaTekstPesme, data.MarijaMelodija);
            //console.log('dodato glasanje: ');
            //console.log(rez);
            
            izvodjac = await glasanjaModel.vratiProseke(izvodjac);
            //console.log('vracen prosek: ');
            //console.log(izvodjac);

            await izvodjaciModel.azurirajProseke(izvodjac);
            //console.log('posle azuriranja');
            //console.log(rez);
        }
        
        if(data.Zoi == 'on'){
            let izvodjac = 'Zoi';
            let rez = await glasanjaModel.dodajNovoGlasanje(izvodjac, promenaProcenta, data.ZoiKostimi, data.ZoiKoreografija, data.ZoiTekstPesme, data.ZoiMelodija);
            //console.log('dodato glasanje: ');
            //console.log(rez);
            izvodjac = await glasanjaModel.vratiProseke(izvodjac);
            
            await izvodjaciModel.azurirajProseke(izvodjac);
        }
        
        if(data.Sara == 'on'){
            let izvodjac = 'Sara Jo';
            let rez = await glasanjaModel.dodajNovoGlasanje(izvodjac, promenaProcenta, data.SaraKostimi, data.SaraKoreografija, data.SaraTekstPesme, data.SaraMelodija);
            //console.log('dodato glasanje: ');
            //console.log(rez);
            izvodjac = await glasanjaModel.vratiProseke(izvodjac);
            
            await izvodjaciModel.azurirajProseke(izvodjac);
        }

        let izvodjaci = await izvodjaciModel.dohvatiSveIzvodjace();
        res.render('odaberi.ejs', {izvodjaci});
    } catch(err){
        next(err);
    }
}


// 4. zadatak
async function prikaziIzvestaj(req, res, next) {
    try{
        let izvodjac = req.body.izvodjac;
    
        izvodjac = await izvodjaciModel.dohvatiKonkretnogIzvodjaca(izvodjac);
        console.log('POST zahtev: ');
        console.log(izvodjac);


        res.render('izvestaj.ejs', {izvodjac});
    } catch(err){
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    unesiRezultateGlasanja,
    prikaziIzvestaj	
};
