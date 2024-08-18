

const mongoose= require('mongoose')


const productschema= new mongoose.Schema(
  
    {
        productname:String,
        price:String,
        stock:String,
        location:String,
        productdescription:String,
        category:String,
        userID:String,
        image:String,
        rating:String
    }

);


const productmodel= mongoose.model('products', productschema);

module.exports=productmodel;