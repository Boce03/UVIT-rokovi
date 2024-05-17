let lekoviModel = require('../models/lekovi');

module.exports.ucitajPocetnuStranicu = function(req, res, next) {
    res.render('pocetna.ejs');
};

module.exports.ucitajLekove = async function(req, res, next){
    try{
        let data = req.query;
        console.log(data);

        let simptomi = [];
        if(data.upalagrla === 'on'){
            simptomi.push('upala grla');
        }

        if(data.curenjenosa === 'on'){
            simptomi.push('curenje nosa');
        }

        if(data.temperatura === 'on'){
            simptomi.push('temperatura');
        }

        if(data.glavobolja === 'on'){
            simptomi.push('glavobolja');
        }

        let lekovi = await lekoviModel.vratiLekove(simptomi);
        
        res.render('lekovi.ejs', {
            lekovi,
            imeprezime: req.query.imeprezime
        })
    } catch(err) {
        next(err);
    }
}

module.exports.ucitajRecept = function(req, res, next){
    let data = req.body;
    let r = [];

    if(data.nazivLeka !== ''){
        if(typeof data.nazivLeka === 'string'){
            r.push({
                nazivLeka: data.nazivLeka,
                mg: data.mg
            });
        } else{
            for(let i = 0; i < data.nazivLeka.length; i++){
                r.push({
                    nazivLeka: data.nazivLeka[i],
                    mg: data.mg[i]
                });
            }
        }
    }
    
    console.log(r);

    res.render('recept.ejs', {
        recept: r, 
        imeprezime: data.imeprezime});
}