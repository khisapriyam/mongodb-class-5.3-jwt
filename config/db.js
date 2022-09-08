
const mongoose = require('mongoose');

//set mongo DB connection
const connectMongoDB = async () => {

    try{
        let connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`mongoDB connection set successfully HOST ${ connect.connection.host }`.bgCyan);

    }catch(error){
        console.log(`${error}`.red);
    }
}

//exports connection
module.exports = connectMongoDB;