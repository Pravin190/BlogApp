
const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {

    // Node.js And Db ko connect krte time ye ek promise return krta hai...
    // aur promise 2 things return krta hai -> fullfilled(.then) & reject (.catch)
    
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {

        console.log("DB connection succesfull");

    })
    .catch((error) => {

        console.log("Error while DB connection",error);
        process.exit(1);

    })

}

module.exports = dbConnect;