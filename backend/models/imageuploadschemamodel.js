

const mongoose= require('mongoose');


const imageuploadschema= new mongoose.Schema(
   
    {
        image:String,

    }

);


const imageuploadmodel= mongoose.model('images', imageuploadschema);

module.exports=imageuploadmodel;