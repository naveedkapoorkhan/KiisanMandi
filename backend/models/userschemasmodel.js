

const mongoose= require('mongoose');


const userschema= new mongoose.Schema(
   
    {
        name: String,
        email: String,
        password: String,
        address: String, // Assuming address is a string
        phoneNumber: String, // Assuming phoneNumber is a string
        image:String,
        boughtProducts: [String] // Array of product IDs
      }

);


const usermodel= mongoose.model('users', userschema);

module.exports=usermodel;