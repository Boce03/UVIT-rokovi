const glassanjaModel = require('../models/glasanja');

module.exports.dodajGlasove = async function(req, res, next){
    try{
        let data = req.query;
        if(data.Marija == 'on'){
            
        }
    } catch(err){
        next(err);
    }
}