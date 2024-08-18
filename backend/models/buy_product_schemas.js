

const mongoose= require('mongoose');


const buyproductschema= new mongoose.Schema(
   
    {
        user: Object,
        product: Object,
        status: String,

      }

);


const buyproductmodel= mongoose.model('buy_products', buyproductschema);

module.exports=buyproductmodel;